
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/private/', '/api/', '/1/'],
        },
        sitemap: 'https://aliib.ir/sitemap.xml',
    };
}
