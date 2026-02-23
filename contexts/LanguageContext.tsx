"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"
import { useRouter, usePathname } from "next/navigation"

// Import translation files
import en from "@/locales/en.json"
import fa from "@/locales/fa.json"
import ar from "@/locales/ar.json"

type Translations = typeof fa
export type Locale = "en" | "fa" | "ar"

const translations: Record<Locale, Translations> = { en: en as Translations, fa, ar: ar as Translations }

interface LanguageContextType {
    t: (key: string) => string
    language: Locale
    changeLanguage: (newLocale: string) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const useLanguage = () => {
    const context = useContext(LanguageContext)
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider')
    }
    return context
}

interface LanguageProviderProps {
    children: ReactNode
    locale: Locale
}

export const LanguageProvider = ({ children, locale }: LanguageProviderProps) => {
    const router = useRouter()
    const pathname = usePathname()

    const [language, setLanguage] = useState<Locale>(locale || 'en')

    // Translation function
    const t = (key: string): string => {
        const keys = key.split('.')
        let value: any = translations[language]

        for (const k of keys) {
            value = value?.[k]
        }

        return (value as string) || key
    }

    const changeLanguage = (newLocale: string) => {
        if (newLocale && (['en', 'fa', 'ar'] as string[]).includes(newLocale)) {
            const localeCode = newLocale as Locale
            setLanguage(localeCode)

            // Get path without language prefix
            const pathWithoutLang = pathname.replace(/^\/(en|fa|ar)/, '') || '/'

            // Construct new path: prefix-less for English, prefixed for fa/ar
            const newPath = localeCode === 'en'
                ? (pathWithoutLang.startsWith('/') ? pathWithoutLang : `/${pathWithoutLang}`)
                : `/${localeCode}${pathWithoutLang.startsWith('/') ? pathWithoutLang : `/${pathWithoutLang}`}`

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
