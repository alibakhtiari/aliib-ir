"use client"

import { useState } from "react"
import { useLanguage } from "@/contexts/LanguageContext"
import Image from "next/image"

const Portfolio = () => {
  const { t, language } = useLanguage()
  const [activeFilter, setActiveFilter] = useState("all")

  const filters = [
    { id: "all", label: t("portfolio.filters.all") },
    { id: "web", label: t("portfolio.filters.web") },
    { id: "seo", label: t("portfolio.filters.seo") },
    { id: "content", label: t("portfolio.filters.content") },
  ]

  const projects = [
    {
      id: 1,
      title: t("portfolio.projects.ecommerce.title"),
      category: "web",
      image: "/project-placeholder.png",
      description: t("portfolio.projects.ecommerce.description"),
    },
    {
      id: 2,
      title: t("portfolio.projects.seoCampaign.title"),
      category: "seo",
      image: "/project-placeholder.png",
      description: t("portfolio.projects.seoCampaign.description"),
    },
    {
      id: 3,
      title: t("portfolio.projects.corporateBlog.title"),
      category: "content",
      image: "/project-placeholder.png",
      description: t("portfolio.projects.corporateBlog.description"),
    },
    {
      id: 4,
      title: t("portfolio.projects.portfolioWebsite.title"),
      category: "web",
      image: "/project-placeholder.png",
      description: t("portfolio.projects.portfolioWebsite.description"),
    },
    {
      id: 5,
      title: t("portfolio.projects.localBusinessSEO.title"),
      category: "seo",
      image: "/project-placeholder.png",
      description: t("portfolio.projects.localBusinessSEO.description"),
    },
    {
      id: 6,
      title: t("portfolio.projects.productDescriptions.title"),
      category: "content",
      image: "/project-placeholder.png",
      description: t("portfolio.projects.productDescriptions.description"),
    },
  ]

  const filteredProjects =
    activeFilter === "all" ? projects : projects.filter((project) => project.category === activeFilter)

  return (
    <section
      id="portfolio"
      className="section bg-white dark:bg-gray-900 text-start"
    >
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="mb-2 text-lg font-medium text-blue-600 dark:text-blue-400">{t("portfolio.title")}</h2>
          <h3 className="mb-8 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">{t("portfolio.subtitle")}</h3>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-2 rounded-full transition-colors ${activeFilter === filter.id
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
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="overflow-hidden transition-all duration-300 shadow-lg group bg-gray-50 dark:bg-gray-800 rounded-xl hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image || "/project-placeholder.png"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 opacity-0 bg-blue-600/80 group-hover:opacity-100">
                  <button className="px-6 py-2 font-medium text-blue-600 transition-transform duration-300 transform -translate-y-4 bg-white rounded-full group-hover:translate-y-0">
                    {t("portfolio.viewDetails")}
                  </button>
                </div>
              </div>
              <div className="p-6">
                <h4 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">{project.title}</h4>
                <p className="text-gray-600 dark:text-gray-400">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
