"use client"

import { useRef, useEffect, useState } from 'react'
import { Play, Pause, Heart } from 'lucide-react'
import Image from 'next/image'

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
            <div className="w-full max-w-md p-8 bg-white/80 backdrop-blur-sm shadow-2xl rounded-3xl animate-in fade-in slide-in-from-bottom-4 duration-1000 border border-white/50">
                <div className="relative mb-8 overflow-hidden rounded-2xl shadow-xl aspect-[3/4] group">
                    <Image
                        src="/assets/1/1.jpg"
                        alt="Kiana & Mohammad"
                        fill
                        className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                </div>

                <div className="mb-8 text-center space-y-4">
                    <h1 className="text-3xl font-bold text-gray-800 font-serif tracking-wide">
                        Liebe Kiana & Mohammad
                    </h1>
                    <div className="relative p-6 bg-white/50 rounded-2xl border border-blue-50">
                        <Heart className="w-4 h-4 text-rose-400 absolute -top-2 -right-2 animate-bounce" fill="currentColor" />
                        <p className="text-sm italic leading-relaxed text-gray-600 whitespace-pre-line font-medium">
                            Während ihr dieses neue Kapitel in Deutschland beginnt, wünschen wir euch unendlichen Erfolg, neue Möglichkeiten und Tage voller Freude. Möge jeder Schritt euch euren Träumen näherbringen und möget ihr euch überall auf der Welt immer zuhause fühlen.
                        </p>
                        <p className="mt-4 text-sm font-bold text-blue-600">
                            Mit viel Liebe, Ali & Bahar
                        </p>
                    </div>
                </div>

                <div className="flex flex-col space-y-4">
                    <div className="flex items-center justify-center p-4 space-x-4 bg-white/50 border border-blue-50 rounded-2xl shadow-sm backdrop-blur-sm">
                        <button
                            onClick={handlePlayPause}
                            className="flex items-center justify-center w-12 h-12 text-white transition-all duration-300 transform bg-blue-600 rounded-full shadow-lg hover:bg-blue-700 hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                            aria-label={isPlaying ? "Pause music" : "Play music"}
                        >
                            {isPlaying ? (
                                <Pause className="w-5 h-5 fill-current" />
                            ) : (
                                <Play className="w-5 h-5 fill-current ml-1" />
                            )}
                        </button>
                        <div className="flex-1">
                            <input
                                type="range"
                                ref={seekBarRef}
                                defaultValue="0"
                                onInput={handleSeek}
                                className="w-full h-1.5 bg-gray-200 rounded-full appearance-none cursor-pointer accent-blue-600 hover:accent-blue-700 transition-all"
                            />
                        </div>
                    </div>

                    <div className="flex items-center justify-between px-2 text-xs font-medium text-gray-500 font-mono">
                        <span>{formatTime(currentTime)}</span>
                        <span>{formatTime(duration)}</span>
                    </div>
                </div>

                <audio ref={audioRef} preload="metadata">
                    <source src="/assets/1/1.mp3" type="audio/mpeg" />
                </audio>
            </div>
        </div>
    )
}
