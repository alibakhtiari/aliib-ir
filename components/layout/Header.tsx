"use client"

import { useState, useEffect } from "react"
import { useLanguage } from "@/contexts/LanguageContext"
import LanguageSwitcher from "./LanguageSwitcher"
import ThemeToggle from "./ThemeToggle"
import Link from "next/link"

interface HeaderProps {
}

const Header = ({ }: HeaderProps) => {
  const { t, language } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const isRTL = language === "ar" || language === "fa"

  // Navigation items removed per user request
  const navItems: { id: string, label: string }[] = []


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
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-5">
      <div
        className={`transition-all duration-300 rounded-full w-full max-w-7xl bg-gray-50 dark:bg-gray-900/90 backdrop-blur-md  py-4 px-8 md:px-10 ${scrolled
          ? " shadow-lg"
          : " shadow-xs"
          }`}
      >
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              href="#home"
              className="text-2xl font-bold text-blue-600 dark:text-blue-400 flex items-center"
              onClick={(e: React.MouseEvent) => {
                e.preventDefault()
                scrollToSection("home")
              }}
            >
              <span>{isRTL ? "علی" : "Ali B"}</span>
              <span className="w-2 h-2 rounded-full bg-yellow-400 dark:bg-yellow-300 ms-1 mt-2 shadow-xs" />
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
          <div className="flex items-center space-x-2 md:space-x-3">
            <LanguageSwitcher />
            <ThemeToggle />

            {/* Contact Button - Desktop: Text + Iconish style, Mobile: Icon Only */}
            <button
              onClick={() => scrollToSection("contact")}
              className="px-5 py-2 text-sm text-white transition-colors bg-blue-600 rounded-full hidden md:flex hover:bg-blue-700"
              aria-label={t("cta.contactMe")}
            >
              {t("cta.contactMe")}
            </button>

            {/* Mobile Contact Icon Button */}
            <button
              onClick={() => scrollToSection("contact")}
              className="p-2 text-blue-600 bg-blue-50 rounded-full md:hidden dark:bg-blue-900/30 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
              aria-label={t("cta.contactMe")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

    </header>
  )
}

export default Header
