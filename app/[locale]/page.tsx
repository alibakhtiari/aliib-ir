import { getTranslations, getMessages, setRequestLocale } from 'next-intl/server';
import HomePageWrapper from "@/components/providers/HomePageWrapper";
import Footer from "@/components/layout/Footer";
import Contact from "@/components/sections/Contact";

interface HomeProps {
  params: Promise<{
    locale: string;
  }>;
}

export async function generateMetadata({ params }: HomeProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata' });
  // Metadata is actually handled in Layout mostly
  return {};
}

export function generateStaticParams() {
  return [
    { locale: 'fa' },
    { locale: 'ar' }
  ];
}

export default async function Home({ params }: HomeProps) {
  const { locale } = await params;
  // Enable static rendering for this locale
  setRequestLocale(locale);

  // Fetch translations for server components
  const messages = await getMessages({ locale });
  // Cast messages to any for simplicity accessing nested keys or define type if strict
  const t = messages as any;

  return (
    <>
      <HomePageWrapper footerSlot={<Footer dict={t} locale={locale} />}>
        <Contact />
      </HomePageWrapper>
    </>
  );
}
