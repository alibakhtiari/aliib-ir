"use client"

import { useEffect, useRef, useState } from "react"
import { useLanguage } from "@/contexts/LanguageContext"
import Image from "next/image"

interface HeroProps {
}

const Hero = ({ }: HeroProps) => {
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
      {/* Abstract Modern Background with Masked Grid */}
      <div className="absolute inset-0 bg-white dark:bg-[#080b13] flex items-center justify-center">
        {/* Radial Gradient Background */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at center, #FFF991 0%, transparent 70%)`,
            opacity: 0.6,
            mixBlendMode: "multiply",
          }}
        />
        {/* Faded edges Grid Mask */}
        <div className="absolute inset-0 pointer-events-none" style={{ maskImage: 'radial-gradient(ellipse at center, black, transparent 70%)', WebkitMaskImage: 'radial-gradient(ellipse at center, black, transparent 70%)' }}>
          <div className="absolute inset-0 opacity-[0.05] dark:opacity-[0.07]">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id="minimal-grid" width="4" height="4" patternUnits="userSpaceOnUse">
                  <path d="M 4 0 L 0 0 0 4" fill="none" stroke="currentColor" strokeWidth="0.15" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#minimal-grid)" />
            </svg>
          </div>
        </div>
      </div>

      <div className="container relative z-10 px-4 pt-24 pb-16 mx-auto md:pt-32 md:pb-24">
        <div className="grid items-center w-full grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Hero Content - Left Column (7 cols on large screens) */}
          <div className={`${isVisible ? "animate-fadeIn" : "opacity-0"} transition-all duration-1000 ease-out lg:col-span-7`}>
            <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold text-blue-700 bg-blue-100/80 rounded-full dark:bg-blue-900/40 dark:text-blue-400 capitalize tracking-wider backdrop-blur-sm">
              {t("hero.greeting")}
            </div>
            <h1 className="mb-2 text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
              {t("hero.name")}
            </h1>
            <h2 className="mb-4 text-xl font-medium tracking-tight text-gray-600 md:text-2xl dark:text-gray-300">
              {t("hero.title")}
            </h2>
            <p className="max-w-2xl mb-6 text-base leading-relaxed text-gray-600 dark:text-gray-400">
              {t("hero.description")}
            </p>

            {/* Added: Professional Bio from About section */}
            <div className="max-w-xl mb-8 border-l-2 border-slate-200 dark:border-slate-800 pl-4 rtl:border-l-0 rtl:border-r-2 rtl:pl-0 rtl:pr-4">
              <p className="text-sm italic leading-relaxed text-gray-500 dark:text-gray-400">
                "{t("hero.aboutDescription")}"
              </p>
            </div>

            {/* Stats - Re-styled for lower footprint */}
            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex flex-col group">
                <div className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">12+</div>
                <div className="text-[10px] font-semibold text-gray-500 uppercase tracking-widest mt-1">{t("hero.stats.experience")}</div>
              </div>
              <div className="flex flex-col group">
                <div className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">150+</div>
                <div className="text-[10px] font-semibold text-gray-500 uppercase tracking-widest mt-1">{t("hero.stats.projects")}</div>
              </div>
              <div className="flex flex-col group">
                <div className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">60+</div>
                <div className="text-[10px] font-semibold text-gray-500 uppercase tracking-widest mt-1">{t("hero.stats.clients")}</div>
              </div>
            </div>

            {/* Skills Pills */}
            <div className="mb-8">
              <div className="flex flex-wrap gap-2 max-w-[70%]">
                {skillsList.map((skill, index) => (
                  <span
                    key={index}
                    className="p-2 text-xs font-medium text-gray-600 transition-colors bg-white/60 border border-gray-200 rounded-full dark:bg-gray-800/40 dark:border-gray-700/50 dark:text-gray-300 backdrop-blur-md hover:bg-gray-100 dark:hover:bg-gray-700/60"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => {
                  const element = document.getElementById("contact")
                  if (element) element.scrollIntoView({ behavior: "smooth" })
                }}
                className="group flex items-center px-6 py-3 text-sm font-semibold text-white transition-all bg-gray-900 rounded-full shadow-lg dark:bg-white dark:text-gray-900 hover:scale-105 active:scale-95"
              >
                <span>{t("cta.contactMe")}</span>
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
