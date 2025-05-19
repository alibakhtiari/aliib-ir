"use client"

import { useLanguage } from "../contexts/LanguageContext"

const Footer = () => {
  const { t, language } = useLanguage()
  const currentYear = new Date().getFullYear()
  const isRTL = language === "ar" || language === "fa"

  return (
    <footer className={`bg-gray-900 text-white py-12 ${isRTL ? "text-right" : "text-left"}`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="md:col-span-1">
            <div className="mb-4">
              <a href="#home" className="text-2xl font-bold">
                Ali<span className="text-blue-400">Bakhtiari</span>
              </a>
            </div>
            <p className="text-gray-400 mb-6">{t("footer.aboutText")}</p>
            <div className="flex space-x-4">
              {["twitter", "linkedin", "github", "instagram"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="bg-gray-800 p-2 rounded-full text-gray-400 hover:text-blue-400 transition-colors"
                  aria-label={`Follow on ${social}`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                    />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold mb-4">{t("footer.services")}</h4>
            <ul className="space-y-2">
              {[
                { key: "webDevelopment", href: "#services" },
                { key: "seoOptimization", href: "#services" },
                { key: "contentWriting", href: "#services" },
                { key: "uiUxDesign", href: "#services" },
                { key: "ecommerceSolutions", href: "#services" },
              ].map((service, index) => (
                <li key={index}>
                  <a href={service.href} className="text-gray-400 hover:text-blue-400 transition-colors">
                    {t(`footer.servicesList.${service.key}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold mb-4">{t("footer.quickLinks")}</h4>
            <ul className="space-y-2">
              {[
                { label: t("nav.home"), href: "#home" },
                { label: t("nav.about"), href: "#about" },
                { label: t("nav.services"), href: "#services" },
                { label: t("nav.portfolio"), href: "#portfolio" },
                { label: t("nav.blog"), href: "#blog" },
                { label: t("nav.contact"), href: "#contact" },
              ].map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-blue-400 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold mb-4">{t("footer.newsletter")}</h4>
            <p className="text-gray-400 mb-4">{t("footer.subscribeText")}</p>
            <form className="mb-4">
              <div className="flex">
                <input
                  type="email"
                  placeholder={t("footer.yourEmail")}
                  className="px-4 py-2 rounded-l-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                />
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-lg transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>

        <hr className="border-gray-800 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Ali Bakhtiari. {t("footer.rights")}
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
              {t("footer.privacy")}
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
              {t("footer.terms")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
