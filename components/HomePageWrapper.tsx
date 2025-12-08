"use client"

import { useState, useEffect } from "react"
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

export default function HomePageWrapper() {
    const [showContactPopup, setShowContactPopup] = useState(false)
    const { language } = useLanguage()

    const toggleContactPopup = () => {
        setShowContactPopup(!showContactPopup)
    }

    return (
        <div className="min-h-screen transition-colors duration-300">
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
