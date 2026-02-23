import { setRequestLocale } from 'next-intl/server';
import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import FloatingButtons from "@/components/layout/FloatingButtons";
import Contact from "@/components/sections/Contact";

interface HomeProps {
  params: Promise<{
    locale: string;
  }>;
}

export async function generateMetadata() {
  // Metadata is handled in layout.tsx
  return {};
}

export function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'fa' },
    { locale: 'ar' }
  ];
}

export default async function Home({ params }: HomeProps) {
  const { locale } = await params;
  // Enable static rendering for this locale
  setRequestLocale(locale);

  return (
    <div className="min-h-screen transition-colors duration-300">
      <Header />
      <main>
        <Hero />
        <Contact />
      </main>
      <FloatingButtons />
    </div>
  );
}
