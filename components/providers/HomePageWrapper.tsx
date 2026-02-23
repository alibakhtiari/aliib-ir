"use client"

import { useLanguage } from "@/contexts/LanguageContext"
import Header from "@/components/layout/Header"
import Hero from "@/components/sections/Hero"
import FloatingButtons from "@/components/layout/FloatingButtons"
export default function HomePageWrapper({
    children
}: {
    children: React.ReactNode;
}) {
    const { language } = useLanguage()

    return (
        <div className="min-h-screen transition-colors duration-300">
            <Header />
            <main>
                <Hero />
                {children}
            </main>
            <FloatingButtons />
        </div>
    )
}
