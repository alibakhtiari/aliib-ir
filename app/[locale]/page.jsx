"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { useLanguage } from "@/contexts/LanguageContext"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Services from "@/components/Services"
import Portfolio from "@/components/Portfolio"
import Testimonials from "@/components/Testimonials"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import FloatingButtons from "@/components/FloatingButtons"
import ContactPopup from "@/components/ContactPopup"

import SEO from "@/components/SEO"

export default function Home() {
  const [showContactPopup, setShowContactPopup] = useState(false)
  const pathname = usePathname()
  const { language } = useLanguage()

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

  const toggleContactPopup = () => {
    setShowContactPopup(!showContactPopup)
  }

  return (
    <div className="min-h-screen transition-colors duration-300">
      <SEO
        path={pathname}
        schemaType="person"
      />
      <Header toggleContactPopup={toggleContactPopup} />
      <main>
        <Hero toggleContactPopup={toggleContactPopup} />
        <About />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons toggleContactPopup={toggleContactPopup} />
      {showContactPopup && <ContactPopup onClose={toggleContactPopup} />}
    </div>
  )
}
