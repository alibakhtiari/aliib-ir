import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import projects from "@/data/projects";
import ProjectDetailWrapper from "@/components/ProjectDetailWrapper";
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const locales = ['en', 'fa', 'ar'];
  const params = [];

  for (const locale of locales) {
    for (const project of projects) {
      params.push({
        locale,
        slug: project.id,
      });
    }
  }

  return params;
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { locale, slug } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata' });
  const project = projects.find((p) => p.id === slug);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  const translations = project.translations as Record<string, any>;
  const projectContent = translations[locale] || translations.en;
  const baseUrl = 'https://aliib.ir'; // Should ideally be from env or constant

  return {
    title: `${projectContent.title} | ${t('title')}`, // or just project title
    description: projectContent.description,
    openGraph: {
      title: projectContent.title,
      description: projectContent.description,
      url: `${baseUrl}/${locale}/projects/${slug}`,
      images: [
        {
          url: project.image || `${baseUrl}/og-image.jpg`,
          width: 1200,
          height: 630,
        }
      ],
      locale: locale,
      type: 'article',
    },
    alternates: {
      canonical: `${baseUrl}/${locale}/projects/${slug}`,
      languages: {
        'en': `${baseUrl}/en/projects/${slug}`,
        'fa': `${baseUrl}/fa/projects/${slug}`,
        'ar': `${baseUrl}/ar/projects/${slug}`,
      },
    },
  };
}

interface ProjectPageProps {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { locale, slug } = await params;
  // Enable static rendering for this locale
  setRequestLocale(locale);

  const project = projects.find((p) => p.id === slug);

  if (!project) {
    notFound();
  }

  const baseUrl = 'https://aliib.ir';
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": `${baseUrl}/${locale}`
      },
      {
        "@type": "ListItem",
        "position": 2,
        // Used dynamic project title
        "name": project.translations[locale]?.title || project.translations['en']?.title,
        "item": `${baseUrl}/${locale}/projects/${slug}`
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ProjectDetailWrapper project={project} />
    </>
  );
}
