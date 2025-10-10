"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
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

  const toggleContactPopup = () => {
    setShowContactPopup(!showContactPopup)
  }

  // Ensure HTML attributes are set correctly based on current locale
  useEffect(() => {
    // Force English attributes for root route (this is the English page)
    document.documentElement.lang = "en"
    document.documentElement.dir = "ltr"
    document.body.classList.add("font-sans")
    document.body.classList.remove("font-rtl")
  }, [])

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
