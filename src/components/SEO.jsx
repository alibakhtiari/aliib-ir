"use client"

import { useEffect } from "react"
import { useLanguage } from "../contexts/LanguageContext"

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

const SEO = ({ canonicalUrl = "https://alibakhtiari.ir" }) => {
  const { language } = useLanguage()
  const content = seoContent[language] || seoContent.en

  // Base URL for the website
  const baseUrl = "https://alibakhtiari.ir"

  useEffect(() => {
    // Set document title
    document.title = content.title

    // Set meta tags
    document.documentElement.lang = language

    // Update meta tags
    const metaTags = {
      description: content.description,
      keywords: content.keywords,
      author: content.author,
      "og:title": content.ogTitle,
      "og:description": content.ogDescription,
      "og:url": canonicalUrl,
      "og:type": "website",
      "og:image": `${baseUrl}/og-image.jpg`,
      "twitter:card": "summary_large_image",
      "twitter:title": content.ogTitle,
      "twitter:description": content.ogDescription,
      "twitter:url": canonicalUrl,
      "twitter:image": `${baseUrl}/og-image.jpg`,
    }

    // Update existing meta tags or create new ones
    Object.entries(metaTags).forEach(([name, content]) => {
      let meta
      if (name.startsWith("og:") || name.startsWith("twitter:")) {
        meta = document.querySelector(`meta[property="${name}"]`)
        if (!meta) {
          meta = document.createElement("meta")
          meta.setAttribute("property", name)
          document.head.appendChild(meta)
        }
      } else {
        meta = document.querySelector(`meta[name="${name}"]`)
        if (!meta) {
          meta = document.createElement("meta")
          meta.setAttribute("name", name)
          document.head.appendChild(meta)
        }
      }
      meta.setAttribute("content", content)
    })

    // Add hreflang tags for language alternatives
    const hreflangs = [
      { lang: "en", url: `${baseUrl}/en` },
      { lang: "fa", url: `${baseUrl}/fa` },
      { lang: "ar", url: `${baseUrl}/ar` },
      { lang: "x-default", url: baseUrl },
    ]

    // Remove existing hreflang tags
    document.querySelectorAll('link[rel="alternate"][hreflang]').forEach((el) => el.remove())

    // Add new hreflang tags
    hreflangs.forEach(({ lang, url }) => {
      const link = document.createElement("link")
      link.rel = "alternate"
      link.hreflang = lang
      link.href = url
      document.head.appendChild(link)
    })

    // Add canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]')
    if (!canonicalLink) {
      canonicalLink = document.createElement("link")
      canonicalLink.rel = "canonical"
      document.head.appendChild(canonicalLink)
    }
    canonicalLink.href = canonicalUrl

    // Add structured data
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      name: content.author,
      url: baseUrl,
      jobTitle: content.title.split(" - ")[1],
      worksFor: {
        "@type": "Organization",
        name: "Freelance",
      },
      sameAs: [
        "https://twitter.com/alibakhtiari",
        "https://linkedin.com/in/alibakhtiari",
        "https://github.com/alibakhtiari",
      ],
    }

    // Update structured data script
    let scriptTag = document.querySelector('script[type="application/ld+json"]')
    if (!scriptTag) {
      scriptTag = document.createElement("script")
      scriptTag.type = "application/ld+json"
      document.head.appendChild(scriptTag)
    }
    scriptTag.textContent = JSON.stringify(structuredData)
  }, [language, content, canonicalUrl])

  // This component doesn't render anything visible
  return null
}

export default SEO
