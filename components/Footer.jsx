"use client"

import { useLanguage } from "@/contexts/LanguageContext"

const Footer = () => {
  const { t, language } = useLanguage()

  function getYearByLanguage(language) {
    const now = new Date();

    if (language === 'ar') {
      const formatter = new Intl.DateTimeFormat('ar-SA-u-ca-islamic', {
        year: 'numeric'
      });
      return formatter.format(now);
    }

    if (language === 'fa') {
      const formatter = new Intl.DateTimeFormat('fa-IR-u-ca-persian', {
        year: 'numeric'
      });
      return formatter.format(now);
    }

    const formatter = new Intl.DateTimeFormat(language, {
      year: 'numeric'
    });
    return formatter.format(now);
  }

  const year = getYearByLanguage(language)
  return (
    <footer className="p-4 mx-auto text-center text-white bg-gray-900" >
      <p className="text-sm text-gray-400">
        &copy; {year} {t("hero.name")}. {t("footer.rights")}
      </p>
    </footer>
  )
}

export default Footer
