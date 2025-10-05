import {getRequestConfig} from 'next-intl/server';

// Can be imported from a shared config
export const locales = ['en', 'fa', 'ar'] as const;
export type Locale = typeof locales[number];

export default getRequestConfig(async ({locale}) => {
  // Validate that the incoming `locale` parameter is valid
  // If invalid locale, default to 'en' instead of calling notFound() in root layout
  const validLocale = locale && locales.includes(locale as any) ? locale : 'en';

  return {
    locale: validLocale,
    messages: (await import(`../locales/${validLocale}.json`)).default
  };
});
