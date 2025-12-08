
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://aliib.ir';
    const locales = ['en', 'fa', 'ar'];

    // Generate URLs for all routes and locales
    // Currently we only have the home page derived from the structure
    // If there are other routes like /about etc, they should be added here too if they are separate pages
    // But based on analysis, it seems to be a single page scrollable app (Hero, About, Services etc all in Home).
    // If there are no sub-pages, we just list the locale roots.

    return locales.flatMap(locale => [
        {
            url: `${baseUrl}/${locale}`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        }
    ]);
}
