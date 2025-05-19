"use client"
import { useLanguage } from "../contexts/LanguageContext"

const Blog = () => {
  const { language } = useLanguage()

  const posts = [
    {
      id: 1,
      title: "The Importance of Mobile-First Design",
      excerpt:
        "Learn why designing for mobile devices first can improve your overall user experience and SEO rankings.",
      date: "June 15, 2023",
      image: "/placeholder.svg?height=400&width=600",
      category: "Web Design",
    },
    {
      id: 2,
      title: "SEO Strategies for 2023",
      excerpt:
        "Discover the latest search engine optimization techniques that will help your website rank higher this year.",
      date: "May 22, 2023",
      image: "/placeholder.svg?height=400&width=600",
      category: "SEO",
    },
    {
      id: 3,
      title: "Writing Content That Converts",
      excerpt:
        "Tips and tricks for creating compelling content that not only engages readers but also drives conversions.",
      date: "April 10, 2023",
      image: "/placeholder.svg?height=400&width=600",
      category: "Content Writing",
    },
  ]

  return (
    <section
      id="blog"
      className={`section bg-gray-50 dark:bg-gray-800 ${
        language === "ar" || language === "fa" ? "text-right" : "text-left"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-blue-600 dark:text-blue-400 text-lg font-medium mb-2">Blog</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Latest Articles</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Insights, tips, and strategies to help you improve your online presence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden transition-transform hover:-translate-y-2 duration-300"
            >
              <div className="overflow-hidden">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-48 object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">{post.category}</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{post.date}</span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{post.title}</h4>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{post.excerpt}</p>
                <a
                  href="#"
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:underline"
                >
                  Read More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-2"
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

        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-block bg-transparent border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 px-8 py-3 rounded-full transition-colors font-medium"
          >
            View All Articles
          </a>
        </div>
      </div>
    </section>
  )
}

export default Blog
