"use client"

import { useState, useEffect } from "react"
import { useLanguage } from "@/contexts/LanguageContext"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import FloatingButtons from "@/components/FloatingButtons"
import ContactPopup from "@/components/ContactPopup"

export default function HomePageWrapper({
    children,
    footerSlot
}: {
    children: React.ReactNode;
    footerSlot: React.ReactNode;
}) {
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
                {children}
            </main>
            {footerSlot}
            <FloatingButtons toggleContactPopup={toggleContactPopup} />
            {showContactPopup && <ContactPopup onClose={toggleContactPopup} />}
        </div>
    )
}
