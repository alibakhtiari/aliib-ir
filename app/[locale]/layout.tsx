
import { Inter } from "next/font/google"
import React from "react";
import "../globals.css"
import { ThemeProvider } from "@/contexts/ThemeContext"
import { LanguageProvider } from "@/contexts/LanguageContext"
import { getTranslations, setRequestLocale } from 'next-intl/server';
import Script from 'next/script';

const inter = Inter({
    subsets: ["latin"],
    display: 'swap'
});

export async function generateMetadata({ params: { locale } }: Omit<LocaleLayoutProps, 'children'>) {
    setRequestLocale(locale);
    const t = await getTranslations({ locale, namespace: 'Metadata' });
    const baseUrl = 'https://aliib.ir';

    return {
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
            url: `${baseUrl}/${locale}`,
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
            canonical: `${baseUrl}/${locale}`,
            languages: {
                'en': `${baseUrl}/en`,
                'fa': `${baseUrl}/fa`,
                'ar': `${baseUrl}/ar`,
            },
        },
    };
}


interface LocaleLayoutProps {
    children: React.ReactNode;
    params: {
        locale: string;
    };
}

export default async function LocaleLayout({ children, params: { locale } }: LocaleLayoutProps) {
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
                "https://www.linkedin.com/in/alibakhtiarii/",
                "https://github.com/alibakhtiari/",
                "https://x.com/aliib1991",
                "https://www.instagram.com/aliibakhtiari/"
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
            <body className={`${inter.className} ${isRtl ? 'font-rtl' : 'font-sans'}`} suppressHydrationWarning>
                <ThemeProvider>
                    <LanguageProvider>
                        {children}
                    </LanguageProvider>
                </ThemeProvider>
            </body>
        </html>
    )
}
