"use client"

import { useLanguage } from "@/contexts/LanguageContext"
import projects from "@/data/projects"
import Image from "next/image"
import Link from "next/link"
import SEO from "@/components/SEO"

// Generate breadcrumbs for project pages
const generateBreadcrumbs = (project: any, language: string, t: any) => {
    const projectContent = project.translations[language] || project.translations.en

    return [
        {
            name: t("nav.home"),
            url: `https://alibakhtiari.ir/`
        },
        {
            name: t("portfolio.title"),
            url: `https://alibakhtiari.ir/#portfolio`
        },
        {
            name: projectContent.title,
            url: `https://alibakhtiari.ir/projects/${project.id}`
        }
    ]
}

interface ProjectDetailWrapperProps {
    project: any; // We can improve type later
}

export default function ProjectDetailWrapper({ project }: ProjectDetailWrapperProps) {
    // We removed hooks for params/router/loading since data is passed from server
    const { language, t } = useLanguage()
    const isRTL = language === "ar" || language === "fa"

    // Get next and previous projects for navigation
    const getAdjacentProjects = () => {
        if (!project) return { prev: null, next: null }

        const currentIndex = projects.findIndex((p) => p.id === project.id)
        const prev = currentIndex > 0 ? projects[currentIndex - 1] : null
        const next = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null

        return { prev, next }
    }

    const { prev, next } = getAdjacentProjects()

    // SEO is handled by Server Component metadata, but we might keep schema/breadcrumbs here or move them.
    // The original used a custom SEO component. User wants to migrate to metadata API.
    // We should NOT use <SEO> component here if we have Metadata API.
    // BUT the Schema JSON-LD is useful.
    // The new layout handles general Schema.
    // Project specific schema could be added via Metadata API metadata.other or simple script in Server Component?
    // Let's keep the UI parts. I will commented out SEO component usage since we migrated to Metadata API.
    // Wait, I should probably implement the Schema in the Server Page via <script> tag or metadata.

    const projectContent = project.translations[language] || project.translations.en

    return (
        <>
            {/* 
        <SEO ... /> 
        Removed client-side SEO. Metadata API handles head tags.
        Schema for Project can be added in Server Component or here via json-ld script.
        I will render JSON-LD for Project here for simplicity if not doing it in Server Component.
        Actually, let's leave it to Server Component to inject JSON-LD? 
        The Server Component can return a section with the script.
        Or this component can do it.
        Let's assume Server Component handles main SEO.
      */}
            <div className={`pt-24 pb-16 bg-white dark:bg-gray-900 ${isRTL ? "text-right" : "text-left"}`}>
                <div className="container px-4 mx-auto">
                    {/* Breadcrumb */}
                    <div className="mb-8">
                        <nav className="flex" aria-label="Breadcrumb">
                            <ol className={`inline-flex items-center space-x-1 md:space-x-3 ${isRTL ? "flex-row-reverse" : ""}`}>
                                <li className="inline-flex items-center">
                                    <Link
                                        href="/"
                                        className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
                                    >
                                        <svg
                                            className={`w-4 h-4 ${isRTL ? "ml-2" : "mr-2"}`}
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                                        </svg>
                                        {t("nav.home")}
                                    </Link>
                                </li>
                                <li>
                                    <div className="flex items-center">
                                        <svg
                                            className="w-6 h-6 text-gray-400"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d={
                                                    isRTL
                                                        ? "M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                                        : "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                                }
                                                clipRule="evenodd"
                                            ></path>
                                        </svg>
                                        <Link
                                            href="/#portfolio"
                                            className={`${isRTL ? "mr-1" : "ml-1"} text-sm font-medium text-gray-700 hover:text-blue-600 md:${isRTL ? "mr-2" : "ml-2"} dark:text-gray-400 dark:hover:text-white`}
                                        >
                                            {t("portfolio.title")}
                                        </Link>
                                    </div>
                                </li>
                                <li aria-current="page">
                                    <div className="flex items-center">
                                        <svg
                                            className="w-6 h-6 text-gray-400"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d={
                                                    isRTL
                                                        ? "M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                                        : "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                                }
                                                clipRule="evenodd"
                                            ></path>
                                        </svg>
                                        <span
                                            className={`${isRTL ? "mr-1" : "ml-1"} text-sm font-medium text-gray-500 md:${isRTL ? "mr-2" : "ml-2"} dark:text-gray-400`}
                                        >
                                            {projectContent.title}
                                        </span>
                                    </div>
                                </li>
                            </ol>
                        </nav>
                    </div>

                    {/* Project Header */}
                    <div className="mb-12">
                        <h1 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl dark:text-white">{projectContent.title}</h1>
                        <p className="max-w-3xl text-xl text-gray-600 dark:text-gray-400">{projectContent.description}</p>
                    </div>

                    {/* Project Image */}
                    <div className="relative mb-12 overflow-hidden shadow-xl rounded-xl">
                        <div className="aspect-w-16 aspect-h-9 relative h-[500px]">
                            <Image src={project.image || "/placeholder.svg"} alt={projectContent.title} fill className="object-cover" />
                        </div>
                    </div>

                    {/* Project Details */}
                    <div className="grid grid-cols-1 gap-12 mb-16 md:grid-cols-3">
                        <div className="md:col-span-2">
                            <div className="p-8 bg-white shadow-lg dark:bg-gray-800 rounded-xl">
                                <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">{t("projects.title")}</h2>

                                <div className="mb-8">
                                    <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">{t("popup.challenge")}</h3>
                                    <p className="mb-6 text-gray-600 dark:text-gray-400">{projectContent.challenge}</p>

                                    <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">{t("popup.solution")}</h3>
                                    <p className="mb-6 text-gray-600 dark:text-gray-400">{projectContent.solution}</p>

                                    <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">{t("popup.results")}</h3>
                                    <p className="text-gray-600 dark:text-gray-400">{projectContent.results}</p>
                                </div>

                                {/* Project Gallery */}
                                <div>
                                    <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">{t("portfolio.gallery")}</h3>
                                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                        {project.gallery.map((image: string, index: number) => (
                                            <div key={index} className="overflow-hidden rounded-lg shadow-md">
                                                <div className="relative h-48">
                                                    <Image
                                                        src={image || "/placeholder.svg"}
                                                        alt={`${projectContent.title} - Image ${index + 1}`}
                                                        fill
                                                        className="object-cover"
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="md:col-span-1">
                            <div className="sticky p-8 bg-white shadow-lg dark:bg-gray-800 rounded-xl top-24">
                                <h3 className="mb-6 text-xl font-semibold text-gray-900 dark:text-white">
                                    {t("portfolio.projectDetails")}
                                </h3>

                                <div className="space-y-4">
                                    <div>
                                        <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">{t("portfolio.client")}</h4>
                                        <p className="font-medium text-gray-900 dark:text-white">{project.client}</p>
                                    </div>

                                    <div>
                                        <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">{t("portfolio.year")}</h4>
                                        <p className="font-medium text-gray-900 dark:text-white">{project.year}</p>
                                    </div>

                                    <div>
                                        <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">{t("portfolio.category")}</h4>
                                        <p className="font-medium text-gray-900 dark:text-white">
                                            {t(`portfolio.categories.${project.category}`)}
                                        </p>
                                    </div>

                                    <div>
                                        <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                            {t("portfolio.technologies")}
                                        </h4>
                                        <div className="flex flex-wrap gap-2 mt-2">
                                            {project.technologies.map((tech: string, index: number) => (
                                                <span
                                                    key={index}
                                                    className="px-3 py-1 text-sm text-blue-600 bg-blue-100 rounded-full dark:bg-blue-900/30 dark:text-blue-400"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {project.link && (
                                        <div className="pt-4">
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-block w-full px-6 py-3 font-medium text-center text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700"
                                            >
                                                {t("portfolio.viewLive")}
                                            </a>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Project Navigation */}
                    <div
                        className={`flex ${isRTL ? "flex-row-reverse" : ""} justify-between items-center border-t border-gray-200 dark:border-gray-700 pt-8`}
                    >
                        {prev ? (
                            <Link
                                href={`/projects/${prev.id}`}
                                className={`flex ${isRTL ? "flex-row-reverse" : ""} items-center text-blue-600 dark:text-blue-400 hover:underline`}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className={`h-5 w-5 ${isRTL ? "ml-2" : "mr-2"}`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d={isRTL ? "M9 5l7 7-7 7" : "M15 19l-7-7 7-7"}
                                    />
                                </svg>
                                {prev.translations[language]?.title || prev.translations.en.title}
                            </Link>
                        ) : (
                            <div></div>
                        )}

                        <Link
                            href="/#portfolio"
                            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:underline"
                        >
                            {t("projects.backToAll")}
                        </Link>

                        {next ? (
                            <Link
                                href={`/projects/${next.id}`}
                                className={`flex ${isRTL ? "flex-row-reverse" : ""} items-center text-blue-600 dark:text-blue-400 hover:underline`}
                            >
                                {next.translations[language]?.title || next.translations.en.title}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className={`h-5 w-5 ${isRTL ? "mr-2" : "ml-2"}`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d={isRTL ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"}
                                    />
                                </svg>
                            </Link>
                        ) : (
                            <div></div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}
