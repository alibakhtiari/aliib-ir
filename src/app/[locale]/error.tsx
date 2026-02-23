"use client"

import { useEffect } from "react"

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <div className="flex flex-col items-center justify-center min-h-[50vh] text-center px-4">
            <h2 className="text-2xl font-bold mb-4 text-white">Something went wrong!</h2>
            <button
                className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all hover:scale-105 active:scale-95 shadow-lg"
                onClick={() => reset()}
            >
                Try again
            </button>
        </div>
    )
}
