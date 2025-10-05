"use client"

import { createContext, useState, useContext, useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"
import { useLocale } from "next-intl"

const LanguageContext = createContext()

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

const LanguageProvider = ({ children }) => {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const [language, setLanguage] = useState(locale)

  useEffect(() => {
    setLanguage(locale)

    // Set HTML dir attribute for RTL languages
    document.documentElement.dir = locale === "ar" || locale === "fa" ? "rtl" : "ltr"

    // Set HTML lang attribute
    document.documentElement.lang = locale

    // Apply the appropriate font family based on language
    if (locale === "ar" || locale === "fa") {
      document.body.classList.add("font-rtl")
      document.body.classList.remove("font-sans")
    } else {
      document.body.classList.add("font-sans")
      document.body.classList.remove("font-rtl")
    }

    // Save language preference
    localStorage.setItem("language", locale)
  }, [locale])

  const changeLanguage = (lang) => {
    if (lang && ['en', 'fa', 'ar'].includes(lang)) {
      // Get current path without locale prefix
      const currentPath = pathname.replace(/^\/(en|fa|ar)/, '')

      // Navigate to new locale with current path
      router.push(`/${lang}${currentPath}`)
    }
  }

  return <LanguageContext.Provider value={{ language, changeLanguage }}>{children}</LanguageContext.Provider>
}

export { LanguageProvider }
export default LanguageProvider
