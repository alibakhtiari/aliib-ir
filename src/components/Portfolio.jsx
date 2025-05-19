"use client"

import { useState } from "react"
import { useLanguage } from "../contexts/LanguageContext"
import Link from "next/link"
import projects from "../data/projects"

const Portfolio = () => {
  const { t, language } = useLanguage()
  const [activeFilter, setActiveFilter] = useState("all")
  const isRTL = language === "ar" || language === "fa"

  const filters = [
    { id: "all", label: t("portfolio.categories.all") },
    { id: "web", label: t("portfolio.categories.web") },
    { id: "seo", label: t("portfolio.categories.seo") },
    { id: "content", label: t("portfolio.categories.content") },
  ]

  const filteredProjects =
    activeFilter === "all" ? projects : projects.filter((project) => project.category === activeFilter)

  return (
    <section id="portfolio" className={`section bg-white dark:bg-gray-900 ${isRTL ? "text-right" : "text-left"}`}>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-blue-600 dark:text-blue-400 text-lg font-medium mb-2">{t("portfolio.title")}</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">
            {t("portfolio.subtitle")}
          </h3>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-2 rounded-full transition-colors ${
                  activeFilter === filter.id
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            const projectContent = project.translations[language] || project.translations.en
            return (
              <div
                key={project.id}
                className="group bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-all hover:-translate-y-2 duration-300"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={projectContent.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-blue-600/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Link
                      href={`/projects/${project.id}`}
                      className="bg-white text-blue-600 px-6 py-2 rounded-full font-medium transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                    >
                      {t("portfolio.viewDetails")}
                    </Link>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{projectContent.title}</h4>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{projectContent.description}</p>
                  <Link
                    href={`/projects/${project.id}`}
                    className={`inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:underline ${
                      isRTL ? "flex-row-reverse" : ""
                    }`}
                  >
                    {t("portfolio.viewProject")}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-4 w-4 ${isRTL ? "mr-2 rotate-180" : "ml-2"}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
