# Ali Bakhtiari Portfolio - Next.js Version

A responsive, SEO-optimized portfolio website for Ali Bakhtiari, featuring multi-language support, dark/light mode, and a modern design built with Next.js.

## Features

- Responsive design for all devices
- Multi-language support (English, Persian, Arabic)
- Dark/light mode toggle
- SEO optimized with proper meta tags
- Smooth scrolling and animations
- Contact form with popup
- Floating action buttons

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository:
\`\`\`bash
git clone https://github.com/yourusername/ali-bakhtiari-portfolio.git
cd ali-bakhtiari-portfolio
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
# or
yarn install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
# or
yarn dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Building for Production

\`\`\`bash
npm run build
# or
yarn build
\`\`\`

Then, you can start the production server:

\`\`\`bash
npm start
# or
yarn start
\`\`\`

## Technologies Used

- Next.js
- React
- Tailwind CSS
- TypeScript (optional)

## Project Structure

- `/app` - Next.js App Router pages and layouts
- `/components` - Reusable React components
- `/contexts` - React context providers
- `/locales` - Translation files
- `/public` - Static assets
- `/utils` - Utility functions

## Deployment

### Vercel (recommended for Next.js)

This project can be easily deployed on [Vercel](https://vercel.com/), the platform from the creators of Next.js.

### Cloudflare Workers

This project supports deployment to Cloudflare Workers using the OpenNext adapter.

Prerequisites:
- Cloudflare account and Wrangler CLI installed

To deploy to Cloudflare Workers:

1. Build and preview the app locally (requires WSL on Windows):
```bash
npm run preview
```

2. Deploy to production:
```bash
npm run deploy
```

Note: On Windows, preview mode may not work due to compatibility issues. The deploy command should work from CI/CD or if you use WSL.

For more information, see the [Cloudflare Next.js documentation](https://developers.cloudflare.com/workers/framework-guides/web-apps/nextjs).

## License

This project is licensed under the MIT License - see the LICENSE file for details.
