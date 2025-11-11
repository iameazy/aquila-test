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
        className="min-h-screen bg-black relative overflow-hidden">
            
            {/* Hero Section */}
            <div className="relative pt-32 pb-20 lg:pt-40 lg:pb-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        
                        {/* Left Side - Content */}
                        <div className="text-white">
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 lg:mb-8 leading-tight">
                                About
                                <br />
                                AlturaCyber
                            </h1>
                            <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-xl">
                                AlturaCyber is a cybersecurity agency helping businesses strengthen their digital resilience through expert-driven, data-backed security solutions.
                            </p>
                        </div>

                        {/* Right Side - Image */}
                        <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="/images/about/about1.png"
                                alt="Cybersecurity Team Working"
                                fill
                                className="object-cover"
                                priority
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
