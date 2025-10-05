"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"
import { useLanguage } from "@/contexts/LanguageContext"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import FloatingButtons from "@/components/FloatingButtons"
import { useState } from "react"
import ContactPopup from "@/components/ContactPopup"
import SEO from "@/components/SEO"

export default function ProjectsLayout({ children }) {
  const { language } = useLanguage()
  const [showContactPopup, setShowContactPopup] = useState(false)
  const pathname = usePathname()

  const toggleContactPopup = () => {
    setShowContactPopup(!showContactPopup)
  }

  // Set the correct direction based on language
  useEffect(() => {
    document.documentElement.dir = language === "ar" || language === "fa" ? "rtl" : "ltr"
  }, [language])

  return (
    <div className="min-h-screen transition-colors duration-300">
      <SEO
        path={pathname}
        schemaType="organization"
      />
      <Header toggleContactPopup={toggleContactPopup} />
      <main>{children}</main>
      <Footer />
      <FloatingButtons toggleContactPopup={toggleContactPopup} />
      {showContactPopup && <ContactPopup onClose={toggleContactPopup} />}
    </div>
  )
}
