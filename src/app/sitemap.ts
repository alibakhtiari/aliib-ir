import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://aliib.ir';
    const locales = ['en', 'fa', 'ar'];

    const staticRoutes = locales.flatMap(locale => [
        {
            url: `${baseUrl}/${locale}`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 1,
        }
    ]);

    return staticRoutes;
}
