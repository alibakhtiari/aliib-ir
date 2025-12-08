import HomePageWrapper from "@/components/HomePageWrapper";
import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params: { locale } }: HomeProps) {
  const t = await getTranslations({ locale, namespace: 'Metadata' });
  // Metadata is actually handled in Layout mostly, but if we wanted specific page metadata or overrides:
  // Layout handles common metadata.
  // We can just return empty or specific override if needed.
  // User feedback example showed generateMetadata here too.
  // Layout already has full metadata. I'll include minimal override or just rely on layout.
  // User asked to "Use generateMetadata: Implement dynamic metadata in your layout.jsx and page.jsx files."
  // I put comprehensive in Layout. I will skip duplicate here unless I need to modify title.
  // Layout has template: '%s | Ali Bakhtiari'.
  // If I want home page to have specific title, I set it here.
  // For home, usually "Ali Bakhtiari - Web Developer..." is the main title.
  // In Header/Layout, default is set.
  return {};
}

export function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'fa' },
    { locale: 'ar' }
  ];
}

interface HomeProps {
  params: {
    locale: string;
  };
}

export default function Home({ params: { locale } }: HomeProps) {
  // Enable static rendering for this locale
  setRequestLocale(locale);

  return <HomePageWrapper />;
}
