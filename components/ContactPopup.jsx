"use client"

import { useState, useEffect } from "react"
import { useLanguage } from "@/contexts/LanguageContext"
import { useTranslations } from "next-intl"

const ContactPopup = ({ onClose }) => {
  const { language } = useLanguage()
  const t = useTranslations()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  })
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: "",
  })

  useEffect(() => {
    // Prevent scrolling when popup is open
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormStatus({ submitted: true, success: true, message: t("contact.success") })

    // Reset form after successful submission
    setTimeout(() => {
      onClose()
    }, 2000)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70">
      <div
        className="bg-white dark:bg-gray-900 rounded-xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{t("cta.freeQuote")}</h3>
            <button
              onClick={onClose}
              className="text-gray-500 transition-colors hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              aria-label="Close"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <p className="mb-6 text-gray-600 dark:text-gray-400">
            Fill out the form below to get a free quote for your project.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="popup-name" className="block mb-2 text-gray-700 dark:text-gray-300">
                {t("contact.name")}
              </label>
              <input
                type="text"
                id="popup-name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 text-gray-900 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="popup-email" className="block mb-2 text-gray-700 dark:text-gray-300">
                {t("contact.email")}
              </label>
              <input
                type="email"
                id="popup-email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 text-gray-900 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="popup-service" className="block mb-2 text-gray-700 dark:text-gray-300">
                Service Interested In
              </label>
              <select
                id="popup-service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 text-gray-900 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select a service</option>
                <option value="web-development">Web Development</option>
                <option value="seo">SEO Optimization</option>
                <option value="content">Content Writing</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="mb-6">
              <label htmlFor="popup-message" className="block mb-2 text-gray-700 dark:text-gray-300">
                {t("contact.message")}
              </label>
              <textarea
                id="popup-message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-3 text-gray-900 border border-gray-200 rounded-lg resize-none bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            {formStatus.submitted && (
              <div
                className={`mb-6 p-4 rounded-lg ${formStatus.success ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
              >
                {formStatus.message}
              </div>
            )}

            <button
              type="submit"
              className="w-full px-6 py-3 font-medium text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700"
            >
              Submit Request
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactPopup
