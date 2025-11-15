'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function AboutHero() {
    const [isServicesOpen, setIsServicesOpen] = useState(false)
    const [isIndustriesOpen, setIsIndustriesOpen] = useState(false)
    const [isAboutOpen, setIsAboutOpen] = useState(false)
    const [isInsightsOpen, setIsInsightsOpen] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    return (
        <section 
            id='about'
            className="min-h-screen bg-black relative overflow-hidden flex items-center"
        >
            
            {/* Hero Section */}
            <div className="relative w-full py-16 sm:py-20 md:py-24 lg:py-32 xl:py-40">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">
                        
                        {/* Left Side - Content */}
                        <div className="text-white">
                            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 lg:mb-8 leading-tight">
                                About
                                <br />
                                AlturaCyber
                            </h1>
                            <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-xl text-gray-300 leading-relaxed max-w-xl">
                                AlturaCyber is a cybersecurity agency helping businesses strengthen their digital resilience through expert-driven, data-backed security solutions.
                            </p>
                        </div>

                        {/* Right Side - Image */}
                        <div className="relative w-full h-[280px] xs:h-[320px] sm:h-[380px] md:h-[420px] lg:h-[500px] xl:h-[550px] rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="/images/about/about1.png"
                                alt="Cybersecurity Team Working"
                                fill
                                className="object-cover"
                                priority
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
                            />
                            {/* Purple/Pink overlay effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 mix-blend-overlay"></div>
                        </div>

                    </div>
                </div>
            </div>

        </section>
    )
}