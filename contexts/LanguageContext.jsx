"use client"

import { createContext, useContext } from "react"
import { useRouter, usePathname } from "next/navigation"

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

  const changeLanguage = (newLocale) => {
    if (newLocale && ['en', 'fa', 'ar'].includes(newLocale)) {
      // Get current path without locale prefix
      const currentPath = pathname.replace(/^\/(en|fa|ar)/, '') || '/'

      // Navigate to new locale with current path
      const newPath = `/${newLocale}${currentPath}`
      router.push(newPath)
    }
  }

  return (
    <LanguageContext.Provider value={{ changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export { LanguageProvider }
export default LanguageProvider
