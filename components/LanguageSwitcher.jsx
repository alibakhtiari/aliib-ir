"use client"

import { useState } from "react"
import { useLanguage } from "@/contexts/LanguageContext"
import { useTranslations } from "next-intl"

const LanguageSwitcher = () => {
  const { language, changeLanguage } = useLanguage()
  const t = useTranslations()
  const [isOpen, setIsOpen] = useState(false)

  const languages = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "fa", name: "فارسی", flag: "🇮🇷" },
    { code: "ar", name: "العربية", flag: "🇸🇦" },
  ]

  const currentLanguage = languages.find((lang) => lang.code === language) || languages[0]

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center text-gray-700 transition-colors rounded-full w-9 h-9 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label="Change language"
      >
        <span className="text-lg">{currentLanguage.flag}</span>
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
                className={`w-full text-left px-4 py-2 text-sm ${
                  language === lang.code
                    ? "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
              >
                <span className="mr-2">{lang.flag}</span>
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
