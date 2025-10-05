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
import LoadingSpinner from "@/components/LoadingSpinner"
import SEO from "@/components/SEO"

export default function Home() {
  const [showContactPopup, setShowContactPopup] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const pathname = usePathname()

  useEffect(() => {
    // Simulate loading critical resources
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const toggleContactPopup = () => {
    setShowContactPopup(!showContactPopup)
  }

  // Render the app content
  if (isLoading) {
    return <LoadingSpinner />
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
