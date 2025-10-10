# Country-Based Language Redirection

This Next.js application features automatic country-based language redirection for Persian and Arabic speaking countries when hosted on Cloudflare.

## How It Works

The middleware (`middleware.js`) uses Cloudflare's built-in geolocation header (`CF-IPCountry`) to detect the visitor's country and automatically redirect them to the appropriate language version of the site.

## Redirection Rules

### Persian Language Countries
Visitors from these countries are automatically redirected to `/fa` (Persian):
- **IR** - Iran
- **AF** - Afghanistan
- **TJ** - Tajikistan

### Arabic Language Countries
Visitors from these countries are automatically redirected to `/ar` (Arabic):
- **SA** - Saudi Arabia
- **AE** - United Arab Emirates
- **EG** - Egypt
- **JO** - Jordan
- **KW** - Kuwait
- **QA** - Qatar
- **OM** - Oman
- **BH** - Bahrain
- **LB** - Lebanon
- **SY** - Syria
- **IQ** - Iraq
- **YE** - Yemen
- **PS** - Palestine
- **DZ** - Algeria
- **TN** - Tunisia
- **MA** - Morocco
- **LY** - Libya
- **SD** - Sudan
- **SO** - Somalia
- **MR** - Mauritania
- **EH** - Western Sahara

### Default (English)
All other countries default to `/` (English version).

## Implementation Details

### Files Modified/Created:
- `middleware.js` - Main redirection logic
- Existing i18n structure continues to work as expected

### How to Test Locally

Since Cloudflare's geolocation header (`CF-IPCountry`) is only available in production on Cloudflare, local development will default to English. To test different countries during development, you can:

1. **Use browser developer tools** to manually set the header:
   - Open Network tab
   - Set headers in request
   - Add `CF-IPCountry: IR` for testing Persian redirect
   - Add `CF-IPCountry: SA` for testing Arabic redirect

2. **Use curl for testing**:
   ```bash
   # Test Persian redirect (Iran)
   curl -H "CF-IPCountry: IR" http://localhost:3000

   # Test Arabic redirect (Saudi Arabia)
   curl -H "CF-IPCountry: SA" http://localhost:3000

   # Test default (English)
   curl -H "CF-IPCountry: US" http://localhost:3000
   ```

### Technical Notes

- **Performance**: Uses Cloudflare's built-in geolocation, no external API calls
- **SEO-friendly**: Uses 302 temporary redirects
- **Caching**: Properly configured to not interfere with Next.js caching
- **Edge compatibility**: Works with Cloudflare Workers (OpenNext setup)

### Integration with Existing i18n

The system integrates seamlessly with your existing internationalization setup:
- Language context (`contexts/LanguageContext.jsx`) works unchanged
- Translation files remain the same
- URL routing structure stays consistent
- User manual language switching still works

### Customization

To modify country mappings, edit the arrays in `middleware.js`:
```javascript
const PERSIAN_COUNTRIES = ['IR', 'AF', 'TJ']
const ARABIC_COUNTRIES = ['SA', 'AE', 'EG', ...]
```

## Troubleshooting

1. **No redirection in development**: This is expected as `CF-IPCountry` header is only set by Cloudflare in production.

2. **Infinite redirect loops**: The middleware includes safeguards to prevent processing already-localized routes.

3. **CDN/staging environments**: Make sure Cloudflare geolocation headers are enabled in your Cloudflare dashboard.

4. **Adding new countries**: Simply update the country code arrays and deploy.

## Deployment

The middleware will only work when deployed to Cloudflare Workers (production environment). Ensure your OpenNext configuration (`open-next.config.ts`) is properly set up for Cloudflare deployment.
