"use client"

import { useLanguage } from "@/contexts/LanguageContext"
import Image from "next/image"

const About = () => {
  const { t, language } = useLanguage()

  const stats = [
    { value: "7+", label: t("about.experience") },
    { value: "120+", label: t("about.projects") },
    { value: "50+", label: t("about.clients") },
  ]

  return (
    <section
      id="about"
      className={`section bg-white dark:bg-gray-900 ${
        language === "ar" || language === "fa" ? "text-right" : "text-left"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-100 dark:bg-blue-900/30 rounded-xl -z-10 transform -rotate-3"></div>
              <div className="relative w-full max-w-md mx-auto h-[600px]">
                <Image src="/placeholder.svg" alt="Ali Bakhtiari" fill className="rounded-lg shadow-lg object-cover" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="md:w-1/2">
            <h2 className="text-blue-600 dark:text-blue-400 text-lg font-medium mb-2">{t("about.title")}</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">{t("about.subtitle")}</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">{t("about.description")}</p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Skills */}
            <div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Skills</h4>
              <div className="flex flex-wrap gap-2">
                {["HTML5", "CSS3", "JavaScript", "React", "SEO", "Content Writing", "UI/UX", "Responsive Design"].map(
                  (skill, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full text-sm"
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
