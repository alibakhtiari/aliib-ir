"use client"

import { useLanguage } from "@/contexts/LanguageContext"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import FloatingButtons from "@/components/FloatingButtons"
export default function HomePageWrapper({
    children,
    footerSlot
}: {
    children: React.ReactNode;
    footerSlot: React.ReactNode;
}) {
    const { language } = useLanguage()

    return (
        <div className="min-h-screen transition-colors duration-300">
            <Header />
            <main>
                <Hero />
                {children}
            </main>
            {footerSlot}
            <FloatingButtons />
        </div>
    )
}
