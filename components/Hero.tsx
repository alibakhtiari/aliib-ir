"use client"

import { useEffect, useRef, useState } from "react"
import { useLanguage } from "@/contexts/LanguageContext"
import Image from "next/image"

interface HeroProps {
  toggleContactPopup: () => void;
}

const Hero = ({ toggleContactPopup }: HeroProps) => {
  const { t, language } = useLanguage()
  const heroRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const isRTL = language === "ar" || language === "fa"

  // Get skills list from dictionary
  const skillsList = t("hero.skills.list") as unknown as string[]

  useEffect(() => {
    setIsVisible(true)

    let rafId: number
    const handleParallax = () => {
      rafId = requestAnimationFrame(() => {
        if (!heroRef.current) return
        const scrollPosition = window.scrollY
        const parallaxElements = heroRef.current.querySelectorAll<HTMLElement>(".parallax")

        parallaxElements.forEach((el) => {
          const element = el as HTMLElement
          const speedAttr = element.getAttribute("data-speed")
          const speed = speedAttr ? parseFloat(speedAttr) : 0.5
          element.style.transform = `translateY(${scrollPosition * speed}px)`
        })
      })
    }

    window.addEventListener("scroll", handleParallax)
    return () => {
      window.removeEventListener("scroll", handleParallax)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <section
      id="home"
      ref={heroRef}
      className="hero-section relative overflow-hidden text-start"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-linear-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-blue-950">
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
          className="absolute bg-blue-200 rounded-full parallax -top-20 -right-20 w-96 h-96 dark:bg-blue-900 opacity-20 blur-3xl"
          data-speed="0.2"
        ></div>
        <div
          className="absolute w-64 h-64 bg-purple-200 rounded-full parallax top-1/3 left-1/4 dark:bg-purple-900 opacity-20 blur-3xl"
          data-speed="0.3"
        ></div>
        <div
          className="absolute bg-teal-200 rounded-full parallax bottom-1/4 right-1/3 w-80 h-80 dark:bg-teal-900 opacity-20 blur-3xl"
          data-speed="0.1"
        ></div>
      </div>

      <div className="container relative z-10 px-4 pt-32 pb-24 mx-auto md:pt-40 md:pb-32">
        <div className="grid items-center w-full grid-cols-1 gap-16 lg:grid-cols-12">
          {/* Hero Content - Left Column (7 cols on large screens) */}
          <div className={`${isVisible ? "animate-fadeIn" : "opacity-0"} transition-all duration-1000 ease-out lg:col-span-7`}>
            <div className="inline-block px-4 py-1 mb-6 text-sm font-medium text-blue-700 bg-blue-100 rounded-full dark:bg-blue-900/30 dark:text-blue-400">
              {t("hero.greeting")}
            </div>
            <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900 md:text-6xl dark:text-white">
              {t("hero.name")}
            </h1>
            <h2 className="mb-6 text-2xl font-semibold text-gray-700 md:text-3xl dark:text-gray-300">
              {t("hero.title")}
            </h2>
            <p className="max-w-2xl mb-6 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
              {t("hero.description")}
            </p>

            {/* Added: Professional Bio from About section */}
            <p className="max-w-3xl mb-8 text-base leading-relaxed text-gray-500 md:text-lg dark:text-gray-400 border-s-2 border-blue-200 dark:border-blue-800 ps-4 italic">
              {t("hero.aboutDescription")}
            </p>

            {/* Stats - Re-styled for lower footprint */}
            <div className="flex flex-wrap gap-8 mb-10">
              <div className="flex flex-col">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">12+</div>
                <div className="text-sm font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wider">{t("hero.stats.experience")}</div>
              </div>
              <div className="flex flex-col">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">150+</div>
                <div className="text-sm font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wider">{t("hero.stats.projects")}</div>
              </div>
              <div className="flex flex-col">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">60+</div>
                <div className="text-sm font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wider">{t("hero.stats.clients")}</div>
              </div>
            </div>

            {/* Skills Pills */}
            <div className="mb-10">
              <h3 className="mb-4 text-sm font-bold text-gray-800 dark:text-gray-200 uppercase tracking-widest">
                {t("hero.skills.title")}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillsList.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 text-xs font-semibold tracking-wide text-gray-700 bg-white/50 border border-gray-200 rounded-lg dark:bg-gray-800/50 dark:border-gray-700 dark:text-gray-300 backdrop-blur-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={toggleContactPopup}
                className="flex items-center px-8 py-4 font-bold text-white transition-all duration-300 transform bg-blue-600 rounded-xl shadow-lg hover:bg-blue-700 hover:shadow-xl hover:-translate-y-1 active:scale-95"
              >
                {t("cta.freeQuote")}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`w-5 h-5 ms-2 ${isRTL ? "rotate-180" : ""}`}
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
            </div>
          </div>

          {/* Hero Image - Right Column (5 cols on large screens) */}
          <div
            className={`${isVisible ? "animate-fadeInRight" : "opacity-0 translate-x-10"} transition-all duration-1000 ease-out delay-300 hidden lg:block lg:col-span-5`}
          >
            <div className="relative">
              {/* Decorative shapes behind image */}
              <div className="absolute transform bg-blue-100 -inset-4 dark:bg-blue-900/30 rounded-2xl -z-10 -rotate-3 blur-sm"></div>
              <div className="absolute transform translate-x-4 translate-y-4 bg-indigo-100 -inset-4 dark:bg-indigo-900/30 rounded-2xl -z-10 rotate-3 blur-xs"></div>

              <div className="relative w-full max-w-md mx-auto aspect-[4/5] perspective-1000">
                <div className="relative w-full h-full overflow-hidden transition-transform duration-500 shadow-2xl rounded-2xl hover:rotate-y-6">
                  <Image
                    src="/Ali Bakhtiari.webp"
                    alt={t("hero.name")}
                    fill
                    priority
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-gray-900/40 to-transparent"></div>
                </div>
              </div>

              {/* Enhanced floating badges */}
              <div className="absolute px-5 py-3 bg-white/90 rounded-2xl shadow-xl -left-10 top-1/4 dark:bg-gray-800/90 backdrop-blur-md animate-float border border-gray-100 dark:border-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center justify-center w-8 h-8 bg-green-100 rounded-lg dark:bg-green-900/30">
                    <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="font-bold text-gray-800 dark:text-gray-200">{t("hero.badges.seoExpert")}</span>
                </div>
              </div>

              <div className="absolute px-5 py-3 delay-150 bg-white/90 rounded-2xl shadow-xl -right-6 top-2/3 dark:bg-gray-800/90 backdrop-blur-md animate-float border border-gray-100 dark:border-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center justify-center w-8 h-8 bg-blue-100 rounded-lg dark:bg-blue-900/30">
                    <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <span className="font-bold text-gray-800 dark:text-gray-200">{t("hero.badges.webDeveloper")}</span>
                </div>
              </div>

              <div className="absolute px-5 py-3 delay-300 bg-white/90 rounded-2xl shadow-xl left-1/4 -bottom-6 dark:bg-gray-800/90 backdrop-blur-md animate-float border border-gray-100 dark:border-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center justify-center w-8 h-8 bg-purple-100 rounded-lg dark:bg-purple-900/30">
                    <svg className="w-5 h-5 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </div>
                  <span className="font-bold text-gray-800 dark:text-gray-200">{t("hero.badges.contentWriter")}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Elegant Wave divider */}
      <div className="absolute bottom-0 left-0 right-0 text-white dark:text-gray-900">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
          <path
            fill="currentColor"
            fillOpacity="1"
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
          ></path>
        </svg>
      </div>
    </section>
  )
}

export default Hero
