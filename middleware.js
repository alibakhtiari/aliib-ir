import { NextResponse } from 'next/server'

// Define country mappings for redirections
const PERSIAN_COUNTRIES = ['IR', 'AF', 'TJ'] // Iran, Afghanistan, Tajikistan
const ARABIC_COUNTRIES = [
  'SA', 'AE', 'EG', 'JO', 'KW', 'QA', 'OM', 'BH', // Major Arabic countries
  'LB', 'SY', 'IQ', 'YE', 'PS', 'DZ', 'TN', 'MA', // Additional Arabic countries
  'LY', 'SD', 'SO', 'MR', 'EH' // More Arabic-speaking regions
]

// Helper function to determine redirect locale based on country
function getRedirectLocale(countryCode) {
  if (!countryCode) return null

  if (PERSIAN_COUNTRIES.includes(countryCode)) {
    return '/fa'
  }

  if (ARABIC_COUNTRIES.includes(countryCode)) {
    return '/ar'
  }

  return '/' // Default to English for other countries
}

// Helper function to check if request should be processed by middleware
function shouldProcessRequest(pathname) {
  // Skip middleware for:
  // - API routes
  // - Static files (_next, favicon, etc.)
  // - Sitemap, robots.txt
  // - Already localized routes (/en/*, /fa/*, /ar/*)
  return !(
    pathname.startsWith('/api/') ||
    pathname.startsWith('/_next/') ||
    pathname.startsWith('/favicon') ||
    pathname.includes('.ico') ||
    pathname.includes('.png') ||
    pathname.includes('.jpg') ||
    pathname.includes('.svg') ||
    pathname.includes('.xml') ||
    pathname.includes('.txt') ||
    pathname.includes('/sitemap') ||
    pathname.includes('/robots') ||
    pathname.startsWith('/en/') ||
    pathname.startsWith('/fa/') ||
    pathname.startsWith('/ar/') ||
    pathname === '/en' ||
    pathname === '/fa' ||
    pathname === '/ar'
  )
}

export function middleware(request) {
  const { pathname } = request.nextUrl

  // Skip middleware processing for certain routes
  if (!shouldProcessRequest(pathname)) {
    return NextResponse.next()
  }

  // Get country from Cloudflare's CF-IPCountry header
  const countryCode = request.headers.get('CF-IPCountry')

  // Determine if we should redirect
  const redirectLocale = getRedirectLocale(countryCode)

  // If root path and we have a redirect target (not default English)
  if (pathname === '/' && redirectLocale && redirectLocale !== '/') {
    const redirectUrl = new URL(redirectLocale, request.url)
    return NextResponse.redirect(redirectUrl, { status: 302 })
  }

  // For any other case, continue normally
  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder assets
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:png|jpg|jpeg|gif|svg|ico|webp)).*)',
  ],
}
