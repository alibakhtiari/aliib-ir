"use client"

import { useEffect, useRef } from "react"
import { useLanguage } from "../contexts/LanguageContext"

const Testimonials = () => {
  const { t, language } = useLanguage()
  const isRTL = language === "ar" || language === "fa"
  const scrollerRef = useRef(null)

  const testimonials = [
    {
      id: 1,
      name: isRTL ? t("testimonials.clients.sarahJohnson.name") : "Sarah Johnson",
      position: isRTL ? t("testimonials.clients.sarahJohnson.position") : "CEO",
      company: isRTL ? t("testimonials.clients.sarahJohnson.company") : "TechSolutions Inc.",
      image: "/placeholder.svg?height=200&width=200",
      quote: isRTL
        ? t("testimonials.clients.sarahJohnson.quote")
        : "Ali transformed our online presence completely. His expertise in both web development and SEO resulted in a 200% increase in organic traffic and a significant boost in conversions. Highly recommended!",
    },
    {
      id: 2,
      name: isRTL ? t("testimonials.clients.michaelChen.name") : "Michael Chen",
      position: isRTL ? t("testimonials.clients.michaelChen.position") : "Marketing Director",
      company: isRTL ? t("testimonials.clients.michaelChen.company") : "GrowthLabs",
      image: "/placeholder.svg?height=200&width=200",
      quote: isRTL
        ? t("testimonials.clients.michaelChen.quote")
        : "Working with Ali was a game-changer for our business. His attention to detail and understanding of our needs made the entire process smooth and the end result exceptional.",
    },
    {
      id: 3,
      name: isRTL ? t("testimonials.clients.emmaRodriguez.name") : "Emma Rodriguez",
      position: isRTL ? t("testimonials.clients.emmaRodriguez.position") : "E-commerce Manager",
      company: isRTL ? t("testimonials.clients.emmaRodriguez.company") : "StyleBoutique",
      image: "/placeholder.svg?height=200&width=200",
      quote: isRTL
        ? t("testimonials.clients.emmaRodriguez.quote")
        : "The content Ali created for our product pages was engaging and persuasive. We saw a significant increase in conversion rates within weeks of implementation.",
    },
    {
      id: 4,
      name: isRTL ? t("testimonials.clients.davidKim.name") : "David Kim",
      position: isRTL ? t("testimonials.clients.davidKim.position") : "Founder",
      company: isRTL ? t("testimonials.clients.davidKim.company") : "StartupVision",
      image: "/placeholder.svg?height=200&width=200",
      quote: isRTL
        ? t("testimonials.clients.davidKim.quote")
        : "Ali delivered beyond our expectations. His strategic approach to SEO and content helped us establish a strong online presence in a competitive market.",
    },
    {
      id: 5,
      name: isRTL ? t("testimonials.clients.sophiaPatel.name") : "Sophia Patel",
      position: isRTL ? t("testimonials.clients.sophiaPatel.position") : "Digital Marketing Lead",
      company: isRTL ? t("testimonials.clients.sophiaPatel.company") : "InnovateX",
      image: "/placeholder.svg?height=200&width=200",
      quote: isRTL
        ? t("testimonials.clients.sophiaPatel.quote")
        : "Professional, responsive, and incredibly talented. Ali's work on our website redesign resulted in improved user engagement and higher conversion rates.",
    },
  ]

  // Duplicate testimonials for infinite scroll effect
  const allTestimonials = [...testimonials, ...testimonials]

  // Set up the auto-scroll effect
  useEffect(() => {
    const scroller = scrollerRef.current
    if (!scroller) return

    let scrollInterval
    let isPaused = false

    const startScroll = () => {
      scrollInterval = setInterval(() => {
        if (!isPaused && scroller) {
          // Scroll in the correct direction based on language
          const scrollAmount = isRTL ? -1 : 1
          scroller.scrollLeft += scrollAmount

          // Reset scroll position when reaching the end to create infinite effect
          if (isRTL) {
            // For RTL, when we reach the beginning (scrollLeft close to 0),
            // jump to the middle to create the infinite effect
            if (scroller.scrollLeft <= 0) {
              scroller.scrollLeft = scroller.scrollWidth / 2
            }
          } else {
            // For LTR, when we reach the end, jump back to the beginning
            if (scroller.scrollLeft >= scroller.scrollWidth / 2) {
              scroller.scrollLeft = 0
            }
          }
        }
      }, 20)
    }

    // First set initial scroll position based on direction
    if (isRTL) {
      // For RTL, start from the middle of the duplicated content
      scroller.scrollLeft = scroller.scrollWidth / 2
    } else {
      // For LTR, start from the beginning
      scroller.scrollLeft = 0
    }

    // Start scrolling
    startScroll()

    // Pause scrolling when hovering
    const handleMouseEnter = () => {
      isPaused = true
    }
    const handleMouseLeave = () => {
      isPaused = false
    }

    scroller.addEventListener("mouseenter", handleMouseEnter)
    scroller.addEventListener("mouseleave", handleMouseLeave)

    // Touch events for mobile
    const handleTouchStart = () => {
      isPaused = true
    }
    const handleTouchEnd = () => {
      isPaused = false
    }

    scroller.addEventListener("touchstart", handleTouchStart)
    scroller.addEventListener("touchend", handleTouchEnd)

    return () => {
      clearInterval(scrollInterval)
      if (scroller) {
        scroller.removeEventListener("mouseenter", handleMouseEnter)
        scroller.removeEventListener("mouseleave", handleMouseLeave)
        scroller.removeEventListener("touchstart", handleTouchStart)
        scroller.removeEventListener("touchend", handleTouchEnd)
      }
    }
  }, [isRTL])

  return (
    <section id="testimonials" className="section bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-blue-400 text-lg font-medium mb-2">{t("testimonials.title")}</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white">{t("testimonials.subtitle")}</h3>
        </div>

        {/* Stats bar */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-12">
          <div className="flex items-center">
            <span className="text-yellow-400 mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            </span>
            <span className="font-bold">10+ {t("testimonials.stats.experience")}</span>
          </div>
          <div className="flex items-center">
            <span className="text-green-400 mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>
            <span className="font-bold">100+ {t("testimonials.stats.projects")}</span>
          </div>
          <div className="flex items-center">
            <span className="text-blue-400 mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </span>
            <span className="font-bold">50+ {t("testimonials.stats.clients")}</span>
          </div>
        </div>

        {/* Infinite testimonial scroller */}
        <div
          ref={scrollerRef}
          className="flex overflow-x-auto scrollbar-hide py-8 gap-6"
          style={{
            scrollBehavior: "smooth",
            direction: isRTL ? "rtl" : "ltr",
            WebkitOverflowScrolling: "touch",
            msOverflowStyle: "none",
            scrollbarWidth: "none",
          }}
        >
          {allTestimonials.map((testimonial, index) => (
            <div
              key={`${testimonial.id}-${index}`}
              className="flex-shrink-0 w-full max-w-md bg-gray-800 rounded-xl p-6 shadow-lg"
            >
              <div className="flex items-start gap-4">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-blue-400"
                />
                <div>
                  <h4 className="text-xl font-bold text-white">{testimonial.name}</h4>
                  <p className="text-gray-400">
                    {testimonial.position}, {testimonial.company}
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <svg className="h-8 w-8 text-blue-900 mb-3" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="text-gray-300 italic">{testimonial.quote}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
