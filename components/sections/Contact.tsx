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
      className="section relative overflow-hidden bg-gray-50 dark:bg-[#080b13] transition-colors duration-300"
    >
      {/* Subtle background glow matching Hero */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-40 dark:opacity-20 flex items-center justify-center">
        <div
          className="w-[800px] h-[800px] rounded-full"
          style={{
            background: 'radial-gradient(circle at center, #FFF991 0%, transparent 70%)',
            mixBlendMode: "multiply",
          }}
        />
      </div>

      <div className="container relative z-10 px-4 mx-auto">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="mb-2 text-lg font-medium text-blue-600 dark:text-blue-400">{t("contact.title")}</h2>
          <h3 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">{t("contact.subtitle")}</h3>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col gap-12 lg:flex-row">
            {/* Contact Info Sidebar */}
            <div className="lg:w-1/3">
              <div className="h-full p-8 bg-white shadow-xl dark:bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-100 dark:border-gray-800">
                <h4 className="mb-8 text-xl font-bold text-gray-900 dark:text-white">{t("contact.contactInformation")}</h4>

                <div className="space-y-8">
                  {/* Phone */}
                  <div className="flex items-start">
                    <div className="flex items-center justify-center w-10 h-10 text-blue-600 bg-blue-50 rounded-xl dark:bg-blue-900/20 dark:text-blue-400 shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div className="ms-4">
                      <h5 className="text-sm font-bold text-gray-400 uppercase tracking-wider">{t("contact.phone")}</h5>
                      <a href={`tel:${CONTACT_INFO.phone}`} className="mt-1 text-lg font-medium text-gray-900 dark:text-white dir-ltr inline-block hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        {CONTACT_INFO.phone}
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start">
                    <div className="flex items-center justify-center w-10 h-10 text-blue-600 bg-blue-50 rounded-xl dark:bg-blue-900/20 dark:text-blue-400 shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="ms-4">
                      <h5 className="text-sm font-bold text-gray-400 uppercase tracking-wider">{t("contact.email")}</h5>
                      <a href={`mailto:${CONTACT_INFO.email}`} className="mt-1 text-gray-900 dark:text-gray-100 font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors break-all">
                        {CONTACT_INFO.email}
                      </a>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div className="flex items-start">
                    <div className="flex items-center justify-center w-10 h-10 text-green-600 bg-green-50 rounded-xl dark:bg-green-900/20 dark:text-green-400 shrink-0">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div className="ms-4">
                      <h5 className="text-sm font-bold text-gray-400 uppercase tracking-wider">{t("contact.whatsapp")}</h5>
                      <a href={`https://wa.me/${CONTACT_INFO.whatsapp.replace('+', '')}`} className="mt-1 text-lg font-medium text-gray-900 dark:text-white dir-ltr inline-block hover:text-green-600 dark:hover:text-green-400 transition-colors">
                        {CONTACT_INFO.whatsapp}
                      </a>
                    </div>
                  </div>

                  {/* Follow Me Section */}
                  <div className="pt-8 border-t border-gray-100 dark:border-gray-800">
                    <h5 className="mb-4 text-sm font-bold tracking-widest text-gray-400 uppercase">
                      {t("contact.followMe")}
                    </h5>
                    <div className="flex flex-wrap gap-3">
                      <SocialLink href={CONTACT_INFO.socials.twitter} label="Twitter" icon={<Twitter className="w-5 h-5" />} />
                      <SocialLink href={CONTACT_INFO.socials.linkedin} label="LinkedIn" icon={<Linkedin className="w-5 h-5" />} />
                      <SocialLink href={CONTACT_INFO.socials.github} label="GitHub" icon={<Github className="w-5 h-5" />} />
                      <SocialLink href={CONTACT_INFO.socials.instagram} label="Instagram" icon={<Instagram className="w-5 h-5" />} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:w-2/3">
              <div className="p-8 bg-white shadow-xl dark:bg-gray-900/30 backdrop-blur-sm rounded-2xl border border-gray-100 dark:border-gray-800">
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 gap-6 mb-6 md:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="block mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                        {t("contact.name")}
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 text-gray-900 border border-gray-100 rounded-xl bg-gray-50/50 dark:bg-gray-800/50 dark:border-gray-700 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-blue-500/50 transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                        {t("contact.email")}
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 text-gray-900 border border-gray-100 rounded-xl bg-gray-50/50 dark:bg-gray-800/50 dark:border-gray-700 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-blue-500/50 transition-all"
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="subject" className="block mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                      {t("contact.subject")}
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 text-gray-900 border border-gray-100 rounded-xl bg-gray-50/50 dark:bg-gray-800/50 dark:border-gray-700 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-blue-500/50 transition-all"
                    />
                  </div>

                  <div className="mb-6">
                    <label htmlFor="message" className="block mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                      {t("contact.message")}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 text-gray-900 border border-gray-100 rounded-xl resize-none bg-gray-50/50 dark:bg-gray-800/50 dark:border-gray-700 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-blue-500/50 transition-all"
                    ></textarea>
                  </div>

                  {formStatus.submitted && (
                    <div
                      className={`mb-6 p-4 rounded-xl ${formStatus.success ? "bg-green-50 text-green-700 border border-green-100" : "bg-red-50 text-red-700 border border-red-100"}`}
                    >
                      {formStatus.message}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={formStatus.loading}
                    className="w-full px-6 py-4 font-bold text-white transition-all bg-blue-600 rounded-xl hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/30 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3 font-display"
                  >
                    {formStatus.loading ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      t("contact.submit")
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Integrated Footer content */}
        <div className="mt-20 pt-10 border-t border-gray-200/50 dark:border-gray-800/50 text-center">
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} {t("hero.name")}. {t("footer.rights")}
          </p>
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
