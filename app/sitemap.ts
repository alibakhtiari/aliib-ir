import { MetadataRoute } from 'next';
import projects from '@/data/projects';

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

    const projectRoutes = locales.flatMap(locale =>
        projects.map(project => ({
            url: `${baseUrl}/${locale}/projects/${project.id}`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        }))
    );

    return [...staticRoutes, ...projectRoutes];
}
