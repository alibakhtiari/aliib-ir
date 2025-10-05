"use client"

import { useEffect } from "react"
import { useLanguage } from "@/contexts/LanguageContext"
import Head from "next/head"

// Define SEO content for each language
const seoContent = {
  en: {
    title: "Ali Bakhtiari - Web Developer, SEO Expert & Content Writer",
    description: "Professional web development, SEO optimization, and content writing services.",
    keywords: "web development, SEO, content writing, portfolio, responsive design",
    author: "Ali Bakhtiari",
    ogTitle: "Ali Bakhtiari - Web Developer, SEO Expert & Content Writer",
    ogDescription: "Professional web development, SEO optimization, and content writing services.",
  },
  fa: {
    title: "علی بختیاری - توسعه‌دهنده وب، متخصص سئو و نویسنده محتوا",
    description: "خدمات حرفه‌ای توسعه وب، بهینه‌سازی سئو و نوشتن محتوا.",
    keywords: "توسعه وب، سئو، نوشتن محتوا، نمونه کار، طراحی واکنش‌گرا",
    author: "علی بختیاری",
    ogTitle: "علی بختیاری - توسعه‌دهنده وب، متخصص سئو و نویسنده محتوا",
    ogDescription: "خدمات حرفه‌ای توسعه وب، بهینه‌سازی سئو و نوشتن محتوا.",
  },
  ar: {
    title: "علي بختياري - مطور ويب، خبير تحسين محركات البحث وكاتب محتوى",
    description: "خدمات احترافية في تطوير الويب، تحسين محركات البحث، وكتابة المحتوى.",
    keywords: "تطوير الويب، تحسين محركات البحث، كتابة المحتوى، معرض الأعمال، تصميم متجاوب",
    author: "علي بختياري",
    ogTitle: "علي بختياري - مطور ويب، خبير تحسين محركات البحث وكاتب محتوى",
    ogDescription: "خدمات احترافية في تطوير الويب، تحسين محركات البحث، وكتابة المحتوى.",
  },
}

const SEO = ({ path = "/", canonicalUrl }) => {
  const { language } = useLanguage()
  const content = seoContent[language] || seoContent.en

  // Base URL for the website
  const baseUrl = "https://alibakhtiari.ir"

  // Construct dynamic canonical URL
  const dynamicCanonicalUrl = canonicalUrl || `${baseUrl}${path.startsWith('/') ? path : '/' + path}`

  useEffect(() => {
    // Set document title
    document.title = content.title

    // Set HTML dir attribute for RTL languages
    document.documentElement.dir = language === "ar" || language === "fa" ? "rtl" : "ltr"

    // Set HTML lang attribute
    document.documentElement.lang = language
  }, [language, content])

  return (
    <Head>
      <title>{content.title}</title>
      <meta name="description" content={content.description} />
      <meta name="keywords" content={content.keywords} />
      <meta name="author" content={content.author} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={dynamicCanonicalUrl} />
      <meta property="og:title" content={content.ogTitle} />
      <meta property="og:description" content={content.ogDescription} />
      <meta property="og:image" content={`${baseUrl}/og-image.jpg`} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={dynamicCanonicalUrl} />
      <meta property="twitter:title" content={content.ogTitle} />
      <meta property="twitter:description" content={content.ogDescription} />
      <meta property="twitter:image" content={`${baseUrl}/og-image.jpg`} />

      {/* Canonical URL */}
      <link rel="canonical" href={dynamicCanonicalUrl} />

      {/* Alternate language versions */}
      <link rel="alternate" href={`${baseUrl}/${language === 'en' ? '' : language}${path}`} hrefLang={language} />
      {['en', 'fa', 'ar'].map((lang) => (
        <link key={lang} rel="alternate" href={`${baseUrl}/${lang === 'en' ? '' : lang}${path}`} hrefLang={lang} />
      ))}
      <link rel="alternate" href={`${baseUrl}${path}`} hrefLang="x-default" />

      {/* Structured Data (JSON-LD) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": content.title,
            "description": content.description,
            "url": dynamicCanonicalUrl,
            "inLanguage": language,
            "isPartOf": {
              "@type": "WebSite",
              "name": "Ali Bakhtiari Portfolio",
              "url": baseUrl
            }
          })
        }}
      />
    </Head>
  )
}

export default SEO
