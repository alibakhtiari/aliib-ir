"use client"

import { useState } from "react"
import { useLanguage } from "@/contexts/LanguageContext"
import { Phone, Mail, MessageCircle, Twitter, Linkedin, Github, Instagram, Loader2 } from "lucide-react"

const CONTACT_INFO = {
  phone: "+989125811880",
  email: "ali.bakhtiarii@gmail.com",
  whatsapp: "+989125811880",
  socials: {
    twitter: "https://x.com/aliib1991",
    linkedin: "https://www.linkedin.com/in/alibakhtiarii/",
    github: "https://github.com/alibakhtiari/",
    instagram: "https://www.instagram.com/aliibakhtiari/",
  }
}

const Contact = () => {
  const { t, language } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [formStatus, setFormStatus] = useState({
    loading: false,
    submitted: false,
    success: false,
    message: "",
  })

  // RTL check
  const isRTL = language === 'fa' || language === 'ar';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus(prev => ({ ...prev, loading: true, message: "" }))

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result: { success: boolean; message: string } = await response.json()

      if (result.success) {
        setFormStatus({
          loading: false,
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
          setFormStatus({ loading: false, submitted: false, success: false, message: "" })
        }, 3000)
      } else {
        throw new Error(result.message)
      }
    } catch (error) {
      setFormStatus({
        loading: false,
        submitted: true,
        success: false,
        message: t("contact.error"),
      })
    }
  }

  return (
    <section
      id="contact"
      className="section bg-gray-50 dark:bg-gray-800 text-start"
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
                  {/* Phone */}
                  <div className="flex items-start">
                    <div className="flex items-center justify-center w-10 h-10 mt-1 text-blue-600 bg-blue-100 rounded-full dark:bg-blue-900/30 dark:text-blue-400 shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div className="ms-4">
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white">{t("contact.phone")}</h3>
                      <p className="mt-1 text-gray-600 dark:text-gray-400">{t("contact.phone")}:</p>
                      <a href={`tel:${CONTACT_INFO.phone}`} className="text-gray-600 dark:text-gray-400 dir-ltr inline-block hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        {CONTACT_INFO.phone}
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start">
                    <div className="p-3 me-4 bg-blue-100 rounded-full dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 shrink-0">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-900 dark:text-white">{t("contact.email")}</h5>
                      <a href={`mailto:${CONTACT_INFO.email}`} className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors break-all">
                        {CONTACT_INFO.email}
                      </a>
                    </div>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="mt-6 flex items-start">
                  <div className="p-3 me-4 bg-green-100 rounded-full dark:bg-green-900/30 text-green-600 dark:text-green-400 shrink-0">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-900 dark:text-white">{t("contact.whatsapp")}</h5>
                    <a href={`https://wa.me/${CONTACT_INFO.whatsapp.replace('+', '')}`} className="text-gray-600 dark:text-gray-400 dir-ltr inline-block hover:text-green-600 dark:hover:text-green-400 transition-colors">
                      {CONTACT_INFO.whatsapp}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Socials & Form */}
            <div className="md:w-3/5 space-y-8">
              {/* Form */}
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
                        className="w-full px-4 py-3 text-gray-900 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-blue-500"
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
                        className="w-full px-4 py-3 text-gray-900 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-blue-500"
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
                      className="w-full px-4 py-3 text-gray-900 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-blue-500"
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
                      className="w-full px-4 py-3 text-gray-900 border border-gray-200 rounded-lg resize-none bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-blue-500"
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
                    disabled={formStatus.loading}
                    className="w-full px-6 py-3 font-medium text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {formStatus.loading && <Loader2 className="w-5 h-5 animate-spin" />}
                    {t("contact.submit")}
                  </button>
                </form>
              </div>

              {/* Socials Row */}
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg">
                <h5 className="font-medium text-gray-900 dark:text-white">{t("contact.followMe")}</h5>
                <div className="flex space-x-3 rtl:space-x-reverse">
                  <SocialLink href={CONTACT_INFO.socials.twitter} label="Twitter" icon={<Twitter className="w-5 h-5" />} />
                  <SocialLink href={CONTACT_INFO.socials.linkedin} label="LinkedIn" icon={<Linkedin className="w-5 h-5" />} />
                  <SocialLink href={CONTACT_INFO.socials.github} label="GitHub" icon={<Github className="w-5 h-5" />} />
                  <SocialLink href={CONTACT_INFO.socials.instagram} label="Instagram" icon={<Instagram className="w-5 h-5" />} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const SocialLink = ({ href, label, icon }: { href: string; label: string; icon: React.ReactNode }) => (
  <a
    href={href}
    className="p-3 text-gray-600 transition-colors bg-gray-100 rounded-full dark:bg-gray-800 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400"
    aria-label={`Follow on ${label}`}
    target="_blank"
    rel="noopener noreferrer"
  >
    {icon}
  </a>
)

export default Contact
