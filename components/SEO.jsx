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

const SEO = ({
  path = "/",
  canonicalUrl,
  schemaType = "website",
  schemaData = {}
}) => {
  const { language } = useLanguage()
  const content = seoContent[language] || seoContent.en

  // Base URL for the website
  const baseUrl = "https://alibakhtiari.ir"

  // Construct dynamic canonical URL
  const dynamicCanonicalUrl = canonicalUrl || `${baseUrl}${path.startsWith('/') ? path : '/' + path}`

  // Generate comprehensive schema markup
  const generateSchema = () => {
    const schemas = []

    // Localized content for schemas
    const localizedContent = {
      en: {
        siteName: "Ali Bakhtiari Portfolio",
        personName: "Ali Bakhtiari",
        jobTitle: "Web Developer, SEO Expert & Content Writer",
        siteDescription: "Professional web development, SEO optimization, and content writing services.",
        servicesDescription: "Professional web development, SEO optimization, and content writing services",
        organizationName: "Ali Bakhtiari Digital Services",
        organizationDescription: "Professional web development, SEO optimization, and content writing services",
        webDevelopmentService: "Custom website and web application development",
        seoService: "Search engine optimization and digital marketing services",
        contentService: "Professional content writing and copywriting services",
        customWebsiteDev: "Custom Website Development",
        ecommerceSolutions: "E-commerce Solutions",
        webDevelopmentServices: "Web Development Services",
        digitalServices: "Digital Services"
      },
      fa: {
        siteName: "نمونه کار علی بختیاری",
        personName: "علی بختیاری",
        jobTitle: "توسعه‌دهنده وب، متخصص سئو و نویسنده محتوا",
        siteDescription: "خدمات حرفه‌ای توسعه وب، بهینه‌سازی سئو و نوشتن محتوا.",
        servicesDescription: "خدمات حرفه‌ای توسعه وب، بهینه‌سازی سئو و نوشتن محتوا",
        organizationName: "خدمات دیجیتال علی بختیاری",
        organizationDescription: "خدمات حرفه‌ای توسعه وب، بهینه‌سازی سئو و نوشتن محتوا",
        webDevelopmentService: "توسعه وب‌سایت و برنامه‌های وب سفارشی",
        seoService: "خدمات بهینه‌سازی موتور جستجو و بازاریابی دیجیتال",
        contentService: "خدمات نوشتن محتوای حرفه‌ای و نگارش متن",
        customWebsiteDev: "توسعه وب‌سایت سفارشی",
        ecommerceSolutions: "راه‌حل‌های تجارت الکترونیک",
        webDevelopmentServices: "خدمات توسعه وب",
        digitalServices: "خدمات دیجیتال"
      },
      ar: {
        siteName: "معرض أعمال علي بختياري",
        personName: "علي بختياري",
        jobTitle: "مطور ويب، خبير تحسين محركات البحث وكاتب محتوى",
        siteDescription: "خدمات احترافية في تطوير الويب، تحسين محركات البحث، وكتابة المحتوى.",
        servicesDescription: "خدمات احترافية في تطوير الويب، تحسين محركات البحث، وكتابة المحتوى",
        organizationName: "خدمات علي بختياري الرقمية",
        organizationDescription: "خدمات احترافية في تطوير الويب، تحسين محركات البحث، وكتابة المحتوى",
        webDevelopmentService: "تطوير مواقع الويب والتطبيقات المخصصة",
        seoService: "خدمات تحسين محركات البحث والتسويق الرقمي",
        contentService: "خدمات كتابة المحتوى المهني وكتابة النصوص",
        customWebsiteDev: "تطوير مواقع الويب المخصصة",
        ecommerceSolutions: "حلول التجارة الإلكترونية",
        webDevelopmentServices: "خدمات تطوير الويب",
        digitalServices: "الخدمات الرقمية"
      }
    }

    const localized = localizedContent[language] || localizedContent.en

    // WebSite schema (always included)
    schemas.push({
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": localized.siteName,
      "url": baseUrl,
      "description": localized.siteDescription,
      "inLanguage": language,
      "author": {
        "@type": "Person",
        "name": localized.personName,
        "url": baseUrl
      }
    })

    // Person schema for homepage/about pages
    if (schemaType === "person" || path === "/") {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "Person",
        "name": localized.personName,
        "jobTitle": localized.jobTitle,
        "description": content.description,
        "url": baseUrl,
        "sameAs": [
          "https://linkedin.com/in/alibakhtiari",
          "https://github.com/alibakhtiari",
          "https://twitter.com/alibakhtiari"
        ],
        "knowsAbout": [
          "Web Development",
          "Search Engine Optimization",
          "Content Writing",
          "Digital Marketing",
          "React",
          "Next.js",
          "Node.js"
        ],
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "IR"
        }
      })
    }

    // Services schema for homepage (since services are displayed there)
    if (path === "/") {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": localized.digitalServices,
        "description": localized.servicesDescription,
        "provider": {
          "@type": "Person",
          "name": localized.personName
        },
        "serviceType": ["Web Development", "SEO Optimization", "Content Writing"],
        "areaServed": "Worldwide",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": localized.digitalServices,
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Web Development",
                "description": localized.webDevelopmentService
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "SEO Optimization",
                "description": localized.seoService
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Content Writing",
                "description": localized.contentService
              }
            }
          ]
        }
      })
    }

    // Organization schema
    if (schemaType === "organization") {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": localized.organizationName,
        "url": baseUrl,
        "description": localized.organizationDescription,
        "founder": {
          "@type": "Person",
          "name": localized.personName
        },
        "serviceType": [
          "Web Development",
          "SEO Optimization",
          "Content Writing",
          "Digital Marketing"
        ]
      })
    }

    // Project/CreativeWork schema
    if (schemaType === "project" && schemaData.project) {
      const project = schemaData.project
      const projectContent = project.translations[language] || project.translations.en

      schemas.push({
        "@context": "https://schema.org",
        "@type": project.category === "web" ? "SoftwareApplication" : "CreativeWork",
        "name": projectContent.title,
        "description": projectContent.description,
        "url": `${baseUrl}${path}`,
        "dateCreated": `${project.year}-01-01`,
        "author": {
          "@type": "Person",
          "name": localized.personName
        },
        "applicationCategory": project.category === "web" ? "WebApplication" : "DigitalMarketing",
        "operatingSystem": "Web Browser",
        "softwareVersion": "1.0",
        "screenshot": project.image,
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        }
      })
    }

    // Service schema for services pages
    if (schemaType === "services") {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": localized.webDevelopmentServices,
        "description": localized.webDevelopmentService,
        "provider": {
          "@type": "Person",
          "name": localized.personName
        },
        "serviceType": "Web Development",
        "areaServed": "Worldwide",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": localized.webDevelopmentServices,
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": localized.customWebsiteDev,
                "description": localized.webDevelopmentService
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": localized.ecommerceSolutions,
                "description": localized.webDevelopmentService
              }
            }
          ]
        }
      })
    }

    // Breadcrumb schema for navigation
    if (schemaData.breadcrumbs) {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": schemaData.breadcrumbs.map((crumb, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": crumb.name,
          "item": crumb.url
        }))
      })
    }

    return schemas
  }

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
      {generateSchema().map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema)
          }}
        />
      ))}
    </Head>
  )
}

export default SEO
