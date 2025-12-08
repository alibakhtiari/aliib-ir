interface FooterProps {
  dict: {
    hero: {
      name: string;
    };
    footer: {
      rights: string;
    };
  };
  locale: string;
}

const Footer = ({ dict, locale }: FooterProps) => {
  function getYearByLanguage(lang: string) {
    const now = new Date();

    if (lang === 'ar') {
      const formatter = new Intl.DateTimeFormat('ar-SA-u-ca-islamic', {
        year: 'numeric'
      });
      return formatter.format(now);
    }

    if (lang === 'fa') {
      const formatter = new Intl.DateTimeFormat('fa-IR-u-ca-persian', {
        year: 'numeric'
      });
      return formatter.format(now);
    }

    const formatter = new Intl.DateTimeFormat(lang, {
      year: 'numeric'
    });
    return formatter.format(now);
  }

  const year = getYearByLanguage(locale)
  return (
    <footer className="p-4 mx-auto text-center text-white bg-gray-900" >
      <p className="text-sm text-gray-400">
        &copy; {year} {dict.hero.name}. {dict.footer.rights}
      </p>
    </footer>
  )
}

export default Footer
