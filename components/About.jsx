"use client"

import { useLanguage } from "@/contexts/LanguageContext"
import Image from "next/image"

const About = () => {
  const { t, language } = useLanguage()

  const stats = [
    { value: "12+", label: t("about.experience") },
    { value: "150+", label: t("about.projects") },
    { value: "60+", label: t("about.clients") },
  ]

  return (
    <section
      id="about"
      className={`section bg-white dark:bg-gray-900 ${
        language === "ar" || language === "fa" ? "text-right" : "text-left"
      }`}
    >
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center gap-12 md:flex-row">
          {/* Image */}
          <div className="mb-8 md:w-1/2 md:mb-0">
            <div className="relative">
              <div className="absolute transform bg-blue-100 -inset-4 dark:bg-blue-900/30 rounded-xl -z-10 -rotate-3"></div>
              <div className="relative w-full max-w-md mx-auto h-[600px]">
                <Image src="/Ali Bakhtiari.webp" alt="Ali Bakhtiari" fill className="object-cover rounded-lg shadow-lg" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="md:w-1/2">
            <h2 className="mb-2 text-lg font-medium text-blue-600 dark:text-blue-400">{t("about.title")}</h2>
            <h3 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">{t("about.subtitle")}</h3>
            <p className="mb-8 leading-relaxed text-gray-600 dark:text-gray-400">{t("about.description")}</p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="p-4 text-center rounded-lg bg-gray-50 dark:bg-gray-800">
                  <div className="mb-2 text-3xl font-bold text-blue-600 dark:text-blue-400">{stat.value}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Skills */}
            <div>
              <h4 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">{t("about.skills")}</h4>
              <div className="flex flex-wrap gap-2">
                {t("about.skillsList").map(
                  (skill, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 text-sm text-gray-800 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-gray-200"
                    >
                      {skill}
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
