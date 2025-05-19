"use client"

import { useEffect, useRef, useState } from "react"
import { useLanguage } from "../contexts/LanguageContext"

const Hero = ({ toggleContactPopup }) => {
  const { t, language } = useLanguage()
  const heroRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const isRTL = language === "ar" || language === "fa"

  useEffect(() => {
    setIsVisible(true)

    const handleParallax = () => {
      if (!heroRef.current) return
      const scrollPosition = window.scrollY
      const parallaxElements = heroRef.current.querySelectorAll(".parallax")

      parallaxElements.forEach((element) => {
        const speed = element.getAttribute("data-speed") || 0.5
        element.style.transform = `translateY(${scrollPosition * speed}px)`
      })
    }

    window.addEventListener("scroll", handleParallax)
    return () => window.removeEventListener("scroll", handleParallax)
  }, [])

  return (
    <section
      id="home"
      ref={heroRef}
      className={`hero-section relative overflow-hidden ${isRTL ? "text-right" : "text-left"}`}
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-blue-950">
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="8" height="8" patternUnits="userSpaceOnUse">
                <path d="M 8 0 L 0 0 0 8" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        <div
          className="parallax absolute -top-20 -right-20 w-96 h-96 bg-blue-200 dark:bg-blue-900 rounded-full opacity-20 blur-3xl"
          data-speed="0.2"
        ></div>
        <div
          className="parallax absolute top-1/3 left-1/4 w-64 h-64 bg-purple-200 dark:bg-purple-900 rounded-full opacity-20 blur-3xl"
          data-speed="0.3"
        ></div>
        <div
          className="parallax absolute bottom-1/4 right-1/3 w-80 h-80 bg-teal-200 dark:bg-teal-900 rounded-full opacity-20 blur-3xl"
          data-speed="0.1"
        ></div>
      </div>

      <div className="container mx-auto px-4 h-full flex items-center relative z-10 py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
          {/* Hero Content */}
          <div className={`${isVisible ? "animate-fadeIn" : "opacity-0"} transition-all duration-1000 ease-out`}>
            <div className="inline-block px-4 py-1 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400 font-medium text-sm mb-6">
              {t("hero.greeting")}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
              {t("hero.name")}
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
              {t("hero.title")}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl leading-relaxed">
              {t("hero.description")}
            </p>

            {/* Stats - Icon-based design */}
            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center">
                <div className="flex items-center justify-center w-12 h-12 bg-yellow-100 dark:bg-yellow-900/30 rounded-full mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-yellow-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">7+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{t("about.experience")}</div>
                </div>
              </div>

              <div className="flex items-center">
                <div className="flex items-center justify-center w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-green-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">120+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{t("about.projects")}</div>
                </div>
              </div>

              <div className="flex items-center">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">50+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{t("about.clients")}</div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={toggleContactPopup}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full transition-colors font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-300 flex items-center"
              >
                {t("cta.freeQuote")}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <a
                href="#portfolio"
                className="bg-white dark:bg-gray-800 border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700 px-8 py-4 rounded-full transition-colors font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-300 flex items-center"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                {t("cta.learnMore")}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div
            className={`${isVisible ? "animate-fadeInRight" : "opacity-0 translate-x-10"} transition-all duration-1000 ease-out delay-300 hidden md:block`}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-100 dark:bg-blue-900/30 rounded-xl -z-10 transform -rotate-3"></div>
              <div className="absolute -inset-4 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl -z-10 transform rotate-3 translate-x-2 translate-y-2"></div>
              <img
                src="/placeholder.svg?height=600&width=500"
                alt={t("hero.name")}
                className="rounded-lg shadow-lg w-full max-w-md mx-auto object-cover"
              />

              {/* Floating badges */}
              <div className="absolute -left-6 top-1/4 bg-white dark:bg-gray-800 rounded-full py-2 px-4 shadow-lg animate-float">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="font-medium">SEO Expert</span>
                </div>
              </div>

              <div className="absolute -right-6 top-2/3 bg-white dark:bg-gray-800 rounded-full py-2 px-4 shadow-lg animate-float delay-150">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="font-medium">Web Developer</span>
                </div>
              </div>

              <div className="absolute left-1/4 -bottom-6 bg-white dark:bg-gray-800 rounded-full py-2 px-4 shadow-lg animate-float delay-300">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span className="font-medium">Content Writer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0 text-white dark:text-gray-900">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
          <path
            fill="currentColor"
            fillOpacity="1"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  )
}

export default Hero
