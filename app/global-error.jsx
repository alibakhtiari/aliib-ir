"use client"

import { useEffect } from "react"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export default function GlobalError({
    error,
    reset,
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
    }, [error])

    return (
        <html lang="en">
            <body className={inter.className}>
                <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
                    <h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
                    <button
                        className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 transition"
                        onClick={() => reset()}
                    >
                        Try again
                    </button>
                </div>
            </body>
        </html>
    )
}
