"use client"

import { useState } from "react"
import { useLanguage } from "../contexts/LanguageContext"
import { useRouter, usePathname } from "next/navigation"

const LanguageSwitcher = () => {
  const { language: currentLanguage } = useLanguage()
  const router = useRouter()
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const languages = [
    { code: "en", name: "English", flag: "🇺🇸", nativeName: "English" },
    { code: "fa", name: "فارسی", flag: "🇮🇷", nativeName: "فارسی" },
    { code: "ar", name: "العربية", flag: "🇸🇦", nativeName: "العربية" },
  ]

  const currentLanguageInfo = languages.find((lang) => lang.code === currentLanguage) || languages[0]

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
                  // Use Next.js router to change URL without affecting language state
                  const currentPath = pathname
                  console.log('Current path:', currentPath)

                  // Remove language prefix and get the rest of the path
                  const pathWithoutLang = currentPath.replace(/^\/(en|fa|ar)/, '') || '/'

                  // Construct new path
                  const newPath = lang.code === "en" ? pathWithoutLang : `/${lang.code}${pathWithoutLang}`

                  console.log('New path:', newPath)
                  router.push(newPath)
                  setIsOpen(false)
                }}
                className={`w-full text-left px-4 py-2 text-sm ${
                  currentLanguage === lang.code
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
