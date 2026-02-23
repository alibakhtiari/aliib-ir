# Ali Bakhtiari Portfolio

A premium, SEO-optimized portfolio website for Ali Bakhtiari, featuring multi-language support, dark/light mode, and high-performance routing built with Next.js 15 and Tailwind CSS v4.

## Features

- **Root Language Routing**: English served at the root (`aliib.ir/`) without prefix. Persian (`/fa`) and Arabic (`/ar`) on prefixes.
- **Modern Animations**: Standardized custom CSS animations (`fadeIn`, `fadeInUp`, etc.) replacing heavy library dependencies.
- **Smart i18n**: Robust internationalization using `next-intl` with geographical redirection logic.
- **Dark/Light Mode**: Seamless theme switching with high-contrast accessibility.
- **Optimized Performance**: Pre-rendered static pages with minimal runtime overhead.
- **Responsive Design**: Fluid layouts optimized for all device sizes.
- **Direct Contact**: Streamlined user journey with smooth anchor-scrolling to contact section.

## Technologies Used

- **Next.js 15**: App Router architecture with static site generation.
- **Tailwind CSS v4**: Modern styling with native CSS variables and `@theme` block.
- **TypeScript**: Type-safe development for components and routing.
- **next-intl**: Standard-compliant i18n management.
- **Lucide React**: Lightweight icon library.

## Project Structure

```text
├── app/                  # Next.js App Router pages and layouts
│   ├── [locale]/         # Localized routes (Home, Privacy, etc.)
│   ├── api/              # (Optional) API routes
│   └── globals.css       # Core Tailwind v4 configuration
├── components/           # Reusable React components
│   ├── layout/           # Shared layout elements (Header, Footer, Nav)
│   ├── sections/         # Homepage sections (Hero, Contact)
│   └── providers/        # Client-side context and state wrappers
├── contexts/             # Global React Contexts (Language, Theme)
├── i18n/                 # i18n configuration and navigation hooks
├── locales/              # JSON translation dictionaries
├── public/               # Static assets (images, webmanifest)
├── lib/                  # Shared utilities and configurations
└── middleware.ts         # Routing and geo-redirection logic
```

## Getting Started

### Prerequisites

- Node.js (v20 or later recommended)
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/alibakhtiari/aliib-ir.git
   cd aliib-ir
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) to see the result.

## Building for Production

```bash
npm run build
npm start
```

## Deployment

The project is optimized for deployment on **Cloudflare Workers** using the OpenNext adapter, but can also be deployed seamlessly on **Vercel**.

### Cloudflare Deployment
```bash
npm run deploy
```

## License

This project is licensed under the MIT License.
