"use client"

import { useLanguage } from "@/contexts/LanguageContext"

const Services = () => {
  const { t, language } = useLanguage()

  const services = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-12 h-12"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
      title: t("services.webDev.title"),
      description: t("services.webDev.description"),
      features: [
        t("services.webDev.features.responsive"),
        t("services.webDev.features.performance"),
        t("services.webDev.features.custom"),
        t("services.webDev.features.ecommerce")
      ],
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-12 h-12"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      ),
      title: t("services.seo.title"),
      description: t("services.seo.description"),
      features: [
        t("services.seo.features.keyword"),
        t("services.seo.features.onpage"),
        t("services.seo.features.technical"),
        t("services.seo.features.linkbuilding")
      ],
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-12 h-12"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
          />
        </svg>
      ),
      title: t("services.content.title"),
      description: t("services.content.description"),
      features: [
        t("services.content.features.blog"),
        t("services.content.features.website"),
        t("services.content.features.product"),
        t("services.content.features.email")
      ],
    },
  ]

  return (
    <section
      id="services"
      className={`section bg-gray-50 dark:bg-gray-800 ${
        language === "ar" || language === "fa" ? "text-right" : "text-left"
      }`}
    >
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="mb-2 text-lg font-medium text-blue-600 dark:text-blue-400">{t("services.title")}</h2>
          <h3 className="text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">{t("services.subtitle")}</h3>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 transition-transform duration-300 bg-white shadow-lg dark:bg-gray-900 rounded-xl hover:-translate-y-2"
            >
              <div className="mb-6 text-blue-600 dark:text-blue-400">{service.icon}</div>
              <h4 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">{service.title}</h4>
              <p className="mb-6 text-gray-600 dark:text-gray-400">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700 dark:text-gray-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
