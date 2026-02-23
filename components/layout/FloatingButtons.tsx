"use client"

import { useState, useEffect } from "react"
import { ArrowUp, MessageCircle, Mail } from "lucide-react"
import { CONTACT_INFO } from "@/utils/constants"

const FloatingButtons = () => {
    const [showScrollTop, setShowScrollTop] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowScrollTop(true)
            } else {
                setShowScrollTop(false)
            }
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }

    const scrollToContact = () => {
        const element = document.getElementById("contact")
        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
        }
    }

    const openWhatsApp = () => {
        window.open(`https://wa.me/${CONTACT_INFO.whatsapp.replace('+', '')}`, "_blank")
    }

    return (
        <div className="fixed z-40 flex flex-col space-y-4 bottom-8 right-8">
            {/* Scroll to Top Button */}
            {showScrollTop && (
                <button
                    onClick={scrollToTop}
                    className="group p-3.5 text-gray-700 transition-all duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-200/50 dark:border-gray-700/50 hover:bg-white dark:hover:bg-gray-800 dark:text-gray-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgb(0,0,0,0.2)] active:scale-90"
                    aria-label="Scroll to top"
                >
                    <ArrowUp className="w-6 h-6 transition-transform duration-300 group-hover:-translate-y-0.5" />
                </button>
            )}

            {/* WhatsApp Button */}
            <button
                onClick={openWhatsApp}
                className="group p-3.5 text-white transition-all duration-300 bg-green-500/90 backdrop-blur-md rounded-full shadow-[0_8px_30px_rgb(22,163,74,0.3)] border border-green-400/30 hover:bg-green-600 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgb(22,163,74,0.4)] active:scale-90"
                aria-label="Contact on WhatsApp"
            >
                <MessageCircle className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
            </button>

            {/* Contact Button */}
            <button
                onClick={scrollToContact}
                className="group p-3.5 text-white transition-all duration-300 bg-blue-600/90 backdrop-blur-md rounded-full shadow-[0_8px_30px_rgb(37,99,235,0.3)] border border-blue-400/30 hover:bg-blue-700 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgb(37,99,235,0.4)] active:scale-90"
                aria-label="Contact me"
            >
                <Mail className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
            </button>
        </div>
    )
}

export default FloatingButtons
