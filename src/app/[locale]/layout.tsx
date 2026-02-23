
import { Inter, Vazirmatn } from "next/font/google"
import "../globals.css"
import { ThemeProvider } from "@/components/providers/theme-provider"
import { LanguageProvider, Locale } from "@/contexts/LanguageContext"
import { getTranslations, setRequestLocale, getMessages } from 'next-intl/server';
import { CONTACT_INFO } from '@/utils/constants';

const inter = Inter({
    subsets: ["latin"],
    display: 'swap'
});

const vazirmatn = Vazirmatn({
    subsets: ["arabic"],
    display: 'swap'
});

export async function generateMetadata({ params }: Omit<LocaleLayoutProps, 'children'>) {
    const { locale } = await params;
    setRequestLocale(locale);
    const t = await getTranslations({ locale, namespace: 'Metadata' });
    const baseUrl = 'https://aliib.ir';
    return {
        metadataBase: new URL(baseUrl),
        title: {
            template: t('title'),
            default: t('title'),
        },
        description: t('description'),
        keywords: t('keywords'),
        authors: [{ name: t('personName') }],
        openGraph: {
            title: t('ogTitle'),
            description: t('ogDescription'),
            url: locale === 'en' ? baseUrl : `${baseUrl}/${locale}`,
            siteName: t('siteName'),
            images: [
                {
                    url: `${baseUrl}/og-image.jpg`,
                    width: 1200,
                    height: 630,
                },
            ],
            locale: locale,
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title: t('ogTitle'),
            description: t('ogDescription'),
            images: [`${baseUrl}/og-image.jpg`],
        },
        alternates: {
            canonical: locale === 'en' ? baseUrl : `${baseUrl}/${locale}`,
            languages: {
                'en': baseUrl,
                'fa': `${baseUrl}/fa`,
                'ar': `${baseUrl}/ar`,
            },
        },
    };
}


interface LocaleLayoutProps {
    children: React.ReactNode;
    params: Promise<{
        locale: string;
    }>;
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
    const { locale } = await params;
    setRequestLocale(locale);
    const t = await getTranslations({ locale, namespace: 'Metadata' });
    const isRtl = locale === 'ar' || locale === 'fa';

    // Generate Advanced Schema.org JSON-LD
    const baseUrl = 'https://aliib.ir';
    const profileUrl = locale === 'en' ? baseUrl : `${baseUrl}/${locale}`;

    // Fetch all metadata translations
    const messages = await getMessages({ locale });
    const m = messages as any;
    const metadata = m.Metadata;

    const personSchema = {
        "@context": "https://schema.org",
        "@type": "Person",
        "@id": `${baseUrl}/#person`,
        "name": metadata.personName,
        "jobTitle": metadata.jobTitle,
        "description": metadata.description,
        "url": baseUrl,
        "image": `${baseUrl}/og-image.jpg`,
        "sameAs": [
            CONTACT_INFO.socials.linkedin,
            CONTACT_INFO.socials.github,
            CONTACT_INFO.socials.twitter,
            CONTACT_INFO.socials.instagram
        ],
        "knowsAbout": metadata.knowsAbout,
        "knowsLanguage": [
            { "@type": "Language", "name": "Persian", "alternateName": "fa" },
            { "@type": "Language", "name": "English", "alternateName": "en" },
            { "@type": "Language", "name": "Arabic", "alternateName": "ar" }
        ],
        "address": {
            "@type": "PostalAddress",
            "addressCountry": "IR"
        }
    };

    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": `${baseUrl}/#website`,
        "name": metadata.siteName,
        "url": baseUrl,
        "description": metadata.siteDescription,
        "inLanguage": locale,
        "publisher": { "@id": `${baseUrl}/#person` }
    };

    // Services
    const serviceSchemas = Object.values(metadata.services).map((service: any, index) => ({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": service.name,
        "description": service.description,
        "provider": { "@id": `${baseUrl}/#person` },
        "serviceType": service.name,
        "areaServed": { "@type": "Country", "name": "Worldwide" }
    }));

    const schemas = [personSchema, websiteSchema, ...serviceSchemas];

    return (
        <html lang={locale} dir={isRtl ? "rtl" : "ltr"} suppressHydrationWarning>
            <head>
                {schemas.map((schema, index) => (
                    <script
                        key={index}
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                    />
                ))}
            </head>
            <body className={`${isRtl ? vazirmatn.className : inter.className} ${isRtl ? 'font-rtl' : 'font-sans'} antialiased`} suppressHydrationWarning>
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                    <LanguageProvider locale={locale as Locale}>
                        {children}
                    </LanguageProvider>
                </ThemeProvider>
            </body>
        </html>
    )
}
