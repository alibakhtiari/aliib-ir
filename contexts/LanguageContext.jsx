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

const LanguageProvider = ({ children }) => {
  const router = useRouter()
  const pathname = usePathname()

  // Extract current language from pathname
  const currentLang = pathname.startsWith('/fa') ? 'fa' :
                     pathname.startsWith('/ar') ? 'ar' : 'en'

  const [language, setLanguage] = useState(currentLang)

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

      // Get current path without locale prefix
      const currentPath = pathname.replace(/^\/(en|fa|ar)/, '') || '/'

      // Navigate to new locale with current path
      const newPath = `/${newLocale}${currentPath}`
      router.push(newPath)
    }
  }

  // Update language when pathname changes
  useEffect(() => {
    const newLang = pathname.startsWith('/fa') ? 'fa' :
                   pathname.startsWith('/ar') ? 'ar' : 'en'
    setLanguage(newLang)
  }, [pathname])

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

export { LanguageProvider }
export default LanguageProvider
