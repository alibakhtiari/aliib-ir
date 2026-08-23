import en from '../locales/en.json';
import fa from '../locales/fa.json';
import ar from '../locales/ar.json';

export const locales = ['en', 'fa', 'ar'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

const dictionaries: Record<Locale, typeof en> = {
  en,
  fa,
  ar,
};

export function getDictionary(locale: string = defaultLocale) {
  const loc = (locale in dictionaries ? locale : defaultLocale) as Locale;
  return dictionaries[loc];
}

export function isRtlLocale(locale: string) {
  return locale === 'fa' || locale === 'ar';
}
