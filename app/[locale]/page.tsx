import { setRequestLocale } from 'next-intl/server';
import { getTranslations, getMessages } from 'next-intl/server';
import HomePageWrapper from "@/components/HomePageWrapper";
import About from "@/components/About";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import projects from "@/data/projects";

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
    { locale: 'en' },
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

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": projects.map((project, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "url": `https://aliib.ir/${locale}/projects/${project.id}`
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <HomePageWrapper footerSlot={<Footer dict={t} locale={locale} />}>
        <About dict={t.about} />
        <Services dict={t.services} />
        <Portfolio />
        <Testimonials />
        <Contact />
      </HomePageWrapper>
    </>
  );
}
