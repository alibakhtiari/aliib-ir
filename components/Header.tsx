"use client"

import { useState, useEffect } from "react"
import { useLanguage } from "@/contexts/LanguageContext"
import LanguageSwitcher from "./LanguageSwitcher"
import ThemeToggle from "./ThemeToggle"
import Link from "next/link"

interface HeaderProps {
  toggleContactPopup: () => void;
}

const Header = ({ toggleContactPopup }: HeaderProps) => {
  const { t, language } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const isRTL = language === "ar" || language === "fa"

  // Navigation items
  const navItems = [
    { id: "home", label: t("nav.home") },
    { id: "about", label: t("nav.about") },
    { id: "services", label: t("nav.services") },
    { id: "portfolio", label: t("nav.portfolio") },
    { id: "contact", label: t("nav.contact") },
  ]

  // Simplified logo based on language
  const logo = isRTL ? "علی." : "Ali."

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setMobileMenuOpen(false)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-5">
      <div
        className={`transition-all duration-300 rounded-full w-[94%] md:w-auto ${scrolled
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg py-2 px-6 md:px-8"
          : "bg-white/70 dark:bg-gray-900/70 backdrop-blur-xs py-3 px-8 md:px-10"
          }`}
      >
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              href="#home"
              className="text-2xl font-bold text-blue-600 dark:text-blue-400"
              onClick={(e: React.MouseEvent) => {
                e.preventDefault()
                scrollToSection("home")
              }}
            >
              {logo}
            </Link>
          </div>

          {/* Desktop Navigation - Centered */}
          <nav className="items-center justify-center hidden mx-auto md:flex">
            <div className="flex space-x-2">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  href={`#${item.id}`}
                  className="px-5 py-2 text-gray-700 transition-colors rounded-full dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                  onClick={(e: React.MouseEvent) => {
                    e.preventDefault()
                    scrollToSection(item.id)
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>

          {/* Right side controls */}
          <div className="flex items-center space-x-3">
            <LanguageSwitcher />
            <ThemeToggle />
            <button
              onClick={toggleContactPopup}
              className="hidden px-5 py-2 text-sm text-white transition-colors bg-blue-600 rounded-full md:flex hover:bg-blue-700"
              aria-label={t("cta.freeQuote")}
            >
              {t("cta.freeQuote")}
            </button>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-gray-700 rounded-full dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-hidden"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="absolute mt-2 overflow-hidden bg-white shadow-lg top-full left-4 right-4 md:hidden dark:bg-gray-900 rounded-xl">
          <div className="p-4">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  href={`#${item.id}`}
                  className="px-4 py-2 text-gray-700 transition-colors rounded-lg dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                  onClick={(e: React.MouseEvent) => {
                    e.preventDefault()
                    scrollToSection(item.id)
                  }}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-2 mt-2 border-t border-gray-200 dark:border-gray-700">
                <button
                  onClick={() => {
                    toggleContactPopup()
                    setMobileMenuOpen(false)
                  }}
                  className="w-full px-4 py-2 text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700"
                >
                  {t("cta.freeQuote")}
                </button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
