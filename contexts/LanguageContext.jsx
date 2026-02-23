"use client"

import { createContext, useContext, useState, useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"

// Import translation files
import en from "@/locales/en.json"
import fa from "@/locales/fa.json"
import ar from "@/locales/ar.json"

const translations = { en, fa, ar }

const LanguageContext = createContext()

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

export const LanguageProvider = ({ children, locale }) => {
  const router = useRouter()
  const pathname = usePathname()

  const [language, setLanguage] = useState(locale || 'en')

  // Translation function
  const t = (key) => {
    const keys = key.split('.')
    let value = translations[language]

    for (const k of keys) {
      value = value?.[k]
    }

    return value || key
  }

  const changeLanguage = (newLocale) => {
    if (newLocale && ['en', 'fa', 'ar'].includes(newLocale)) {
      setLanguage(newLocale)

      // Get path without language prefix
      const pathWithoutLang = pathname.replace(/^\/(en|fa|ar)/, '') || '/'

      // Construct new path: prefix-less for English, prefixed for fa/ar
      const newPath = newLocale === 'en'
        ? (pathWithoutLang.startsWith('/') ? pathWithoutLang : `/${pathWithoutLang}`)
        : `/${newLocale}${pathWithoutLang.startsWith('/') ? pathWithoutLang : `/${pathWithoutLang}`}`

      // Clean up double slashes
      const finalPath = newPath.replace(/\/+/g, '/')

      router.push(finalPath)
    }
  }

  // Update language when locale prop changes (e.g. on navigation)
  useEffect(() => {
    if (locale) setLanguage(locale)
  }, [locale])

  return (
    <LanguageContext.Provider value={{
      t,
      language,
      changeLanguage
    }}>
      {children}
    </LanguageContext.Provider>
  )
}

export default LanguageProvider
