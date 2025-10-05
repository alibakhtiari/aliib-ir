"use client"

import { createContext, useState, useContext, useEffect } from "react"
import { updateBrowserUrlForLanguage } from "../utils/languageUtils"
import enTranslations from "../locales/en.json"
import faTranslations from "../locales/fa.json"
import arTranslations from "../locales/ar.json"

const translations = {
  en: enTranslations,
  fa: faTranslations,
  ar: arTranslations,
}

const LanguageContext = createContext()

export const useLanguage = () => useContext(LanguageContext)

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    // Check if URL path contains language code
    const pathLang = window.location.pathname.match(/^\/(en|fa|ar)/)
    const pathLanguage = pathLang ? pathLang[1] : null

    // Return the language from URL, or default to Persian
    return pathLanguage || "fa"
  })

  useEffect(() => {
    // Set HTML dir attribute for RTL languages
    document.documentElement.dir = language === "ar" || language === "fa" ? "rtl" : "ltr"

    // Set HTML lang attribute
    document.documentElement.lang = language

    // Apply the appropriate font family based on language
    if (language === "ar" || language === "fa") {
      document.body.classList.add("font-rtl")
      document.body.classList.remove("font-sans")
    } else {
      document.body.classList.add("font-sans")
      document.body.classList.remove("font-rtl")
    }


  }, [language])

  const changeLanguage = (lang) => {
    if (translations[lang]) {
      setLanguage(lang)
    }
  }

  const t = (key) => {
    const keys = key.split(".")
    let result = translations[language]

    for (const k of keys) {
      if (result && result[k]) {
        result = result[k]
      } else {
        console.warn(`Translation key not found: ${key} for language: ${language}`)
        return key // Fallback to key if translation not found
      }
    }

    return result
  }

  return <LanguageContext.Provider value={{ language, changeLanguage, t }}>{children}</LanguageContext.Provider>
}

export { LanguageProvider }
export default LanguageProvider
