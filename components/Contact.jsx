"use client"

import { useState } from "react"
import { useLanguage } from "@/contexts/LanguageContext"

const Contact = () => {
  const { t, language } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (result.success) {
        setFormStatus({
          submitted: true,
          success: true,
          message: t("contact.success"),
        })

        // Reset form after successful submission
        setTimeout(() => {
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          })
          setFormStatus({ submitted: false, success: false, message: "" })
        }, 3000)
      } else {
        throw new Error(result.message)
      }
    } catch (error) {
      setFormStatus({
        submitted: true,
        success: false,
        message: t("contact.error"),
      })
    }
  }

  return (
    <section
      id="contact"
      className={`section bg-gray-50 dark:bg-gray-800 ${language === "ar" || language === "fa" ? "text-right" : "text-left"
        }`}
    >
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="mb-2 text-lg font-medium text-blue-600 dark:text-blue-400">{t("contact.title")}</h2>
          <h3 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">{t("contact.subtitle")}</h3>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col gap-12 md:flex-row">
            {/* Contact Info */}
            <div className="md:w-2/5">
              <div className="h-full p-8 bg-white shadow-lg dark:bg-gray-900 rounded-xl">
                <h4 className="mb-6 text-xl font-bold text-gray-900 dark:text-white">{t("contact.contactInformation")}</h4>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="p-3 mr-4 bg-blue-100 rounded-full dark:bg-blue-900/30">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-blue-600 dark:text-blue-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-900 dark:text-white">{t("contact.phone")}</h5>
                      <a href="tel:+989125811880" className="text-gray-600 dark:text-gray-400">+98 (912) 581-1880</a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="p-3 mr-4 bg-blue-100 rounded-full dark:bg-blue-900/30">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-blue-600 dark:text-blue-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-900 dark:text-white">{t("contact.email")}</h5>
                      <a href="mailto:ali.bakhtiarii@gmail.com" className="text-gray-600 dark:text-gray-400">ali.bakhtiarii@gmail.com</a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="p-3 mr-4 bg-blue-100 rounded-full dark:bg-blue-900/30">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="currentColor" stroke="none" viewBox="0 0 32 32">
                        <path d="M26.576 5.363a14.82 14.82 0 0 0-10.511-4.354C7.856 1.009 1.2 7.664 1.2 15.874c0 2.732.737 5.291 2.022 7.491l-.038-.07-2.109 7.702 7.879-2.067c2.051 1.139 4.498 1.809 7.102 1.809h.006c8.209-.003 14.862-6.659 14.862-14.868a14.82 14.82 0 0 0-4.349-10.507zM16.062 28.228h-.006c-2.319 0-4.489-.64-6.342-1.753l.056.031-.451-.267-4.675 1.227 1.247-4.559-.294-.467a12.23 12.23 0 0 1-1.889-6.565c0-6.822 5.531-12.353 12.353-12.353s12.353 5.531 12.353 12.353-5.53 12.353-12.353 12.353zm6.776-9.251c-.371-.186-2.197-1.083-2.537-1.208-.341-.124-.589-.185-.837.187-.246.371-.958 1.207-1.175 1.455-.216.249-.434.279-.805.094a10.2 10.2 0 0 1-2.997-1.852l.01.009a11.2 11.2 0 0 1-2.037-2.521l-.028-.052c-.216-.371-.023-.572.162-.757.167-.166.372-.434.557-.65.146-.179.271-.384.366-.604l.006-.017a.678.678 0 0 0-.033-.653l.002.003c-.094-.186-.836-2.014-1.145-2.758-.302-.724-.609-.625-.836-.637-.216-.01-.464-.012-.712-.012-.395.01-.746.188-.988.463l-.001.002a4.15 4.15 0 0 0-1.299 3.102v-.004a7.23 7.23 0 0 0 1.527 3.857l-.012-.015a16.7 16.7 0 0 0 6.251 5.564l.094.043c.548.248 1.25.513 1.968.74l.149.041a5.103 5.103 0 0 0 2.368.143l-.031.004a3.84 3.84 0 0 0 2.497-1.749l.009-.017a3.122 3.122 0 0 0 .214-1.784l.003.019c-.092-.155-.34-.247-.712-.434z" />
                      </svg>
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-900 dark:text-white">{t("contact.whatsapp")}</h5>
                      <a href="https://wa.me/989125811880" className="text-gray-600 dark:text-gray-400">+98 (912) 581-1880</a>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h5 className="mb-4 font-medium text-gray-900 dark:text-white">{t("contact.followMe")}</h5>
                  <div className="flex space-x-4">
                    <a
                      href="https://x.com/aliib1991"
                      className="p-3 text-gray-600 transition-colors bg-gray-100 rounded-full dark:bg-gray-800 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400"
                      aria-label="Follow on Twitter"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      </svg>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/alibakhtiarii/"
                      className="p-3 text-gray-600 transition-colors bg-gray-100 rounded-full dark:bg-gray-800 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400"
                      aria-label="Follow on LinkedIn"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                    <a
                      href="https://github.com/alibakhtiari/"
                      className="p-3 text-gray-600 transition-colors bg-gray-100 rounded-full dark:bg-gray-800 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400"
                      aria-label="Follow on GitHub"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                    <a
                      href="https://www.instagram.com/aliibakhtiari/"
                      className="p-3 text-gray-600 transition-colors bg-gray-100 rounded-full dark:bg-gray-800 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400"
                      aria-label="Follow on Instagram"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.337-1.297-.889-.807-1.337-1.807-1.337-3.001 0-1.193.448-2.193 1.337-3.001.889-.807 2.04-1.297 3.337-1.297 1.297 0 2.448.49 3.337 1.297.889.808 1.337 1.808 1.337 3.001 0 1.194-.448 2.194-1.337 3.001-.889.807-2.04 1.297-3.337 1.297z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:w-3/5">
              <div className="p-8 bg-white shadow-lg dark:bg-gray-900 rounded-xl">
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 gap-6 mb-6 md:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="block mb-2 text-gray-700 dark:text-gray-300">
                        {t("contact.name")}
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 text-gray-900 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block mb-2 text-gray-700 dark:text-gray-300">
                        {t("contact.email")}
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 text-gray-900 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="subject" className="block mb-2 text-gray-700 dark:text-gray-300">
                      {t("contact.subject")}
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 text-gray-900 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div className="mb-6">
                    <label htmlFor="message" className="block mb-2 text-gray-700 dark:text-gray-300">
                      {t("contact.message")}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
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
                    {t("contact.submit")}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
