"use client"
import { useLanguage } from "../contexts/LanguageContext"

const Blog = () => {
  const { language } = useLanguage()

  const posts = [
    {
      id: 1,
      title: t("blog.posts.mobileFirst.title"),
      excerpt: t("blog.posts.mobileFirst.excerpt"),
      date: t("blog.posts.mobileFirst.date"),
      image: "/placeholder.svg?height=400&width=600",
      category: t("blog.posts.mobileFirst.category"),
    },
    {
      id: 2,
      title: t("blog.posts.seoStrategies.title"),
      excerpt: t("blog.posts.seoStrategies.excerpt"),
      date: t("blog.posts.seoStrategies.date"),
      image: "/placeholder.svg?height=400&width=600",
      category: t("blog.posts.seoStrategies.category"),
    },
    {
      id: 3,
      title: t("blog.posts.contentConverts.title"),
      excerpt: t("blog.posts.contentConverts.excerpt"),
      date: t("blog.posts.contentConverts.date"),
      image: "/placeholder.svg?height=400&width=600",
      category: t("blog.posts.contentConverts.category"),
    },
  ]

  return (
    <section
      id="blog"
      className={`section bg-gray-50 dark:bg-gray-800 ${
        language === "ar" || language === "fa" ? "text-right" : "text-left"
      }`}
    >
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="mb-2 text-lg font-medium text-blue-600 dark:text-blue-400">{t("blog.title")}</h2>
          <h3 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">{t("blog.subtitle")}</h3>
          <p className="text-gray-600 dark:text-gray-400">
            {t("blog.description")}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="overflow-hidden transition-transform duration-300 bg-white shadow-lg dark:bg-gray-900 rounded-xl hover:-translate-y-2"
            >
              <div className="overflow-hidden">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="object-cover w-full h-48 transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-blue-600 dark:text-blue-400">{post.category}</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{post.date}</span>
                </div>
                <h4 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">{post.title}</h4>
                <p className="mb-4 text-gray-600 dark:text-gray-400">{post.excerpt}</p>
                <a
                  href="#"
                  className="inline-flex items-center font-medium text-blue-600 dark:text-blue-400 hover:underline"
                >
                  {t("blog.readMore")}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-block px-8 py-3 font-medium text-blue-600 transition-colors bg-transparent border-2 border-blue-600 rounded-full dark:text-blue-400 dark:border-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900"
          >
            {t("blog.viewAll")}
          </a>
        </div>
      </div>
    </section>
  )
}

export default Blog
