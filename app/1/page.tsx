"use client"

import { useRef, useEffect, useState } from 'react'
import { Metadata } from 'next'
import '@/app/globals.css'


export default function Page1() {
    const audioRef = useRef<HTMLAudioElement>(null)
    const seekBarRef = useRef<HTMLInputElement>(null)
    const [isPlaying, setIsPlaying] = useState(false)
    const [currentTime, setCurrentTime] = useState(0)
    const [duration, setDuration] = useState(0)

    useEffect(() => {
        const audio = audioRef.current

        if (audio && seekBarRef.current) {
            const updateSeekBar = () => {
                const current = audio.currentTime
                const dur = audio.duration
                setCurrentTime(current)
                setDuration(dur || 0)
                if (seekBarRef.current) {
                    seekBarRef.current.value = dur ? ((current / dur) * 100).toString() : "0"
                }
            }

            const onLoadedMetadata = () => {
                setDuration(audio.duration)
            }

            audio.addEventListener('timeupdate', updateSeekBar)
            audio.addEventListener('loadedmetadata', onLoadedMetadata)
            audio.addEventListener('ended', () => setIsPlaying(false))

            return () => {
                audio.removeEventListener('timeupdate', updateSeekBar)
                audio.removeEventListener('loadedmetadata', onLoadedMetadata)
                audio.removeEventListener('ended', () => setIsPlaying(false))
            }
        }
    }, [])

    const handlePlayPause = () => {
        const audio = audioRef.current
        if (audio) {
            if (audio.paused) {
                audio.play()
                setIsPlaying(true)
            } else {
                audio.pause()
                setIsPlaying(false)
            }
        }
    }

    const handleSeek = () => {
        const audio = audioRef.current
        const seekBar = seekBarRef.current
        if (audio && seekBar) {
            audio.currentTime = (parseFloat(seekBar.value) / 100) * duration
        }
    }

    const formatTime = (time: number) => {
        if (isNaN(time)) return "0:00"
        const minutes = Math.floor(time / 60)
        const seconds = Math.floor(time % 60)
        return `${minutes}:${seconds.toString().padStart(2, '0')}`
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4 font-sans bg-gradient-to-br from-blue-50 to-indigo-100">
            <div className="w-full max-w-md p-8 bg-white shadow-2xl rounded-3xl animate-fade-in">
                <div className="relative mb-8">
                    <img
                        src="/assets/1/1.jpg"
                        alt="Beloved Person"
                        className="w-full h-auto shadow-lg rounded-2xl animate-float"
                    />
                </div>

                <div className="mb-8 text-center">
                    <h1 className="mb-4 text-3xl font-bold text-gray-800">
                        Liebe Kiana & Mohammad
                    </h1>
                    <div className="p-6 shadow-inner bg-gray-50 rounded-2xl">
                        <p className="text-sm italic leading-relaxed text-gray-600 whitespace-pre-line">
                            Während ihr dieses neue Kapitel in Deutschland beginnt, wünschen wir euch unendlichen Erfolg, neue Möglichkeiten und Tage voller Freude. Möge jeder Schritt euch euren Träumen näherbringen und möget ihr euch überall auf der Welt immer zuhause fühlen.

                            Mit viel Liebe, Ali & Bahar
                        </p>
                    </div>
                </div>

                <div className="flex flex-col space-y-4">
                    <div className="flex items-center justify-center p-4 space-x-3 shadow-inner bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl">
                        <button
                            onClick={handlePlayPause}
                            className="flex items-center justify-center w-12 h-12 text-white transition-all duration-200 transform bg-blue-500 rounded-full shadow-lg hover:bg-blue-600 hover:scale-105"
                        >
                            {isPlaying ? (
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M6 4h4v16H6zM14 4h4v16h-4z" />
                                </svg>
                            ) : (
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            )}
                        </button>
                        <div className="flex-1">
                            <input
                                type="range"
                                ref={seekBarRef}
                                defaultValue="0"
                                onInput={handleSeek}
                                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-500"
                            />
                        </div>
                    </div>

                    <div className="flex items-center justify-between px-2 text-xs text-gray-500">
                        <span>{formatTime(currentTime)}</span>
                        <span>{formatTime(duration)}</span>
                    </div>
                </div>

                <audio ref={audioRef} preload="metadata">
                    <source src="/assets/1/1.mp3" type="audio/mpeg" />
                </audio>
            </div>

            <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-fade-in {
          animation: fadeIn 1s ease-out;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
        </div>
    )
}
