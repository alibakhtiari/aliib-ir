"use client"

import { useState, useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"
import { useLanguage } from "@/contexts/LanguageContext"

const LanguageSwitcher = () => {
  const router = useRouter()
  const pathname = usePathname()
  const { language: currentLanguage, changeLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  const languages = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "fa", name: "فارسی", flag: "🇮🇷" },
    { code: "ar", name: "العربية", flag: "🇸🇦" },
  ]

  useEffect(() => {
    // Set direction and lang attribute on html element based on current language
    const isRTL = currentLanguage === "fa" || currentLanguage === "ar"
    document.documentElement.dir = isRTL ? "rtl" : "ltr"
    document.documentElement.lang = currentLanguage as string
  }, [currentLanguage])

  const currentLanguageInfo = languages.find((lang) => lang.code === currentLanguage) || languages[0] // Default to en
  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center text-gray-700 transition-colors rounded-full w-9 h-9 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label="Change language"
      >
        <span className="text-lg">{currentLanguageInfo.flag}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 z-50 w-40 mt-2 bg-white rounded-md shadow-lg dark:bg-gray-800">
          <div className="py-1">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  changeLanguage(lang.code)
                  setIsOpen(false)
                }}
                className={`w-full text-left px-4 py-2 text-sm ${currentLanguage === lang.code
                  ? "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400"
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`}
              >
                <span className="me-2">{lang.flag}</span>
                {lang.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default LanguageSwitcher
