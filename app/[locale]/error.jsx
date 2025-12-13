"use client"

import { useEffect } from "react"
import { useTranslations } from "next-intl"

export default function Error({
    error,
    reset,
}) {
    const t = useTranslations('cta') // Using generic cta or we could add 'error' namespace. Fallback to hardcoded if not waiting to edit locales again.

    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <div className="flex flex-col items-center justify-center min-h-[50vh] text-center px-4">
            <h2 className="text-2xl font-bold mb-4 text-white">Something went wrong!</h2>
            <button
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                onClick={() => reset()}
            >
                Try again
            </button>
        </div>
    )
}
