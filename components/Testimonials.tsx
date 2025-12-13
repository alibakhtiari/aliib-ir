"use client"

import { useLanguage } from "@/contexts/LanguageContext"
import Image from "next/image"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  image: string;
  quote: string;
}

const Testimonials = () => {
  const { t, language } = useLanguage()
  const isRTL = language === "ar" || language === "fa"

  // We need to expect that t returns an array.
  // In TS with next-intl (or custom context), t usually returns string.
  // The original code did t("testimonials.testimonialList").map(...)
  // So t returns 'any' or 'Array'.
  // We'll cast it to any for now to avoid TS errors if types aren't perfect yet.


  interface RawTestimonial {
    name: string;
    position: string;
    company: string;
    quote: string;
    image?: string;
  }

  // The context's t function returns the value directly (string or object/array).
  const rawTestimonials = (t("testimonials.testimonialList") as unknown);

  const testimonials: Testimonial[] = Array.isArray(rawTestimonials)
    ? (rawTestimonials as RawTestimonial[]).map((item, index) => ({
      id: index + 1,
      name: item.name,
      position: item.position,
      company: item.company,
      image: item.image || "/placeholder-user.jpg",
      quote: item.quote,
    }))
    : [];

  // Duplicate testimonials for infinite scroll effect (enough to fill screen and loop)
  // We duplicate it to ensure smooth transition
  const allTestimonials = [...testimonials, ...testimonials, ...testimonials] // Tripling just to be safe for wide screens

  return (
    <section id="testimonials" className="py-16 text-white bg-gray-900 section overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="mb-2 text-lg font-medium text-blue-400">{t("testimonials.title")}</h2>
          <h3 className="text-3xl font-bold text-white md:text-4xl">{t("testimonials.subtitle")}</h3>
        </div>

        {/* Stats bar */}
        <div className="flex flex-wrap justify-center gap-8 mb-12 md:gap-16">
          <div className="flex items-center">
            <span className="me-2 text-yellow-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            </span>
            <span className="font-bold">{t("testimonials.experience")}</span>
          </div>
          <div className="flex items-center">
            <span className="me-2 text-green-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>
            <span className="font-bold">{t("testimonials.projects")}</span>
          </div>
          <div className="flex items-center">
            <span className="me-2 text-blue-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </span>
            <span className="font-bold">{t("testimonials.clients")}</span>
          </div>
        </div>

        {/* Infinite testimonial scroller */}
        <div
          className="relative w-full overflow-hidden"
          style={{ direction: 'ltr' }} // Force LTR for the container so transforms work consistently? Or handle per language.
        // If we use animate-scroll (translateX), it's strictly visual.
        // For RTL language, the actual content inside is RTL text, but the movement direction depends on "scroll-rtl".
        >
          <div
            className={cn(
              "flex gap-6 w-max",
              isRTL ? "animate-scroll-rtl" : "animate-scroll",
              "hover:[animation-play-state:paused]"
            )}
          >
            {allTestimonials.map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${index}`}
                className="flex-shrink-0 w-[85vw] md:w-[450px] p-6 bg-gray-800 shadow-lg rounded-xl"
                dir={isRTL ? "rtl" : "ltr"}
              >
                <div className="flex items-start gap-4">
                  <div className="relative w-16 h-16 min-w-[64px]">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover border-2 border-blue-400 rounded-full"
                    />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white">{testimonial.name}</h4>
                    <p className="text-gray-400">
                      {testimonial.position}, {testimonial.company}
                    </p>
                  </div>
                </div>
                <div className="mt-4">
                  <svg className="w-8 h-8 mb-3 text-blue-900" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="italic text-gray-300">{testimonial.quote}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
