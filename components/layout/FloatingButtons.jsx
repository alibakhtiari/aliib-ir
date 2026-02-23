"use client"

import { useState, useEffect } from "react"

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
    window.open("https://wa.me/989125811880", "_blank")
  }

  return (
    <div className="fixed z-40 flex flex-col space-y-4 bottom-8 right-8">
      {/* Scroll to Top Button - Now at the top of the stack */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="p-3 text-gray-700 transition-all transform bg-white rounded-full shadow-lg dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-300 hover:-translate-y-1 hover:shadow-xl"
          aria-label="Scroll to top"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}

      {/* WhatsApp Button */}
      <button
        onClick={openWhatsApp}
        className="p-3 text-white transition-colors bg-green-500 rounded-full shadow-lg hover:bg-green-600 hover:shadow-xl"
        aria-label="Contact on WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
      </button>

      {/* Contact Button */}
      <button
        onClick={scrollToContact}
        className="p-3 text-white transition-colors bg-blue-600 rounded-full shadow-lg hover:bg-blue-700 hover:shadow-xl"
        aria-label="Contact me"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      </button>
    </div>
  )
}

export default FloatingButtons
