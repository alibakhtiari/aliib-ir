"use client"

import { useState } from "react"
import { useLanguage } from "@/contexts/LanguageContext"
import Image from "next/image"

const Portfolio = () => {
  const { language } = useLanguage()
  const [activeFilter, setActiveFilter] = useState("all")

  const filters = [
    { id: "all", label: "All" },
    { id: "web", label: "Web Development" },
    { id: "seo", label: "SEO" },
    { id: "content", label: "Content" },
  ]

  const projects = [
    {
      id: 1,
      title: "E-commerce Website",
      category: "web",
      image: "/placeholder.svg",
      description: "A fully responsive e-commerce platform with advanced filtering and payment integration.",
    },
    {
      id: 2,
      title: "SEO Optimization Campaign",
      category: "seo",
      image: "/placeholder.svg",
      description: "Increased organic traffic by 200% through comprehensive SEO strategy.",
    },
    {
      id: 3,
      title: "Corporate Blog",
      category: "content",
      image: "/placeholder.svg",
      description: "Created engaging content strategy that boosted user engagement and conversions.",
    },
    {
      id: 4,
      title: "Portfolio Website",
      category: "web",
      image: "/placeholder.svg",
      description: "Modern portfolio website with animations and responsive design.",
    },
    {
      id: 5,
      title: "Local Business SEO",
      category: "seo",
      image: "/placeholder.svg",
      description: "Improved local search rankings for a small business, increasing foot traffic.",
    },
    {
      id: 6,
      title: "Product Descriptions",
      category: "content",
      image: "/placeholder.svg",
      description: "Crafted compelling product descriptions that increased conversion rates.",
    },
  ]

  const filteredProjects =
    activeFilter === "all" ? projects : projects.filter((project) => project.category === activeFilter)

  return (
    <section
      id="portfolio"
      className={`section bg-white dark:bg-gray-900 ${
        language === "ar" || language === "fa" ? "text-right" : "text-left"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-blue-600 dark:text-blue-400 text-lg font-medium mb-2">Portfolio</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">My Recent Work</h3>

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
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-all hover:-translate-y-2 duration-300"
            >
              <div className="relative overflow-hidden h-64">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-blue-600/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="bg-white text-blue-600 px-6 py-2 rounded-full font-medium transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    View Details
                  </button>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h4>
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
