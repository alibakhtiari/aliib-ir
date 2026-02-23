
import { Inter, Vazirmatn } from "next/font/google"
import "../globals.css"
import { ThemeProvider } from "@/components/providers/theme-provider"
import { LanguageProvider } from "@/contexts/LanguageContext"
import { getTranslations, setRequestLocale } from 'next-intl/server';
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

    // Generate Schema.org JSON-LD
    const schemas = [
        {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": t('siteName'),
            "url": "https://aliib.ir",
            "description": t('siteDescription'),
            "inLanguage": locale,
            "author": {
                "@type": "Person",
                "name": t('personName'),
                "url": "https://aliib.ir"
            }
        },
        {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": t('personName'),
            "jobTitle": t('jobTitle'),
            "description": t('description'),
            "url": "https://aliib.ir",
            "sameAs": [
                CONTACT_INFO.socials.linkedin,
                CONTACT_INFO.socials.github,
                CONTACT_INFO.socials.twitter,
                CONTACT_INFO.socials.instagram
            ],
            "knowsAbout": [
                "Web Development",
                "Search Engine Optimization",
                "Content Writing",
                "Digital Marketing",
                "React",
                "Python",
                "Django",
                "Javascript",
                "Next.js",
                "Node.js"
            ],
            "address": {
                "@type": "PostalAddress",
                "addressCountry": "IR"
            }
        }
    ];

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
                    <LanguageProvider locale={locale}>
                        {children}
                    </LanguageProvider>
                </ThemeProvider>
            </body>
        </html>
    )
}
