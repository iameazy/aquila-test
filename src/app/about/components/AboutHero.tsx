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
            
            {/* Navbar */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 lg:h-20">

                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-2 px-3 py-1.5 lg:px-4 lg:py-2 border-2 border-white rounded-full">
                            <div className="w-5 h-5 lg:w-6 lg:h-6 relative flex-shrink-0">
                                <Image
                                    src="/images/about/logo.png"
                                    alt="AlturaCyber Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <span className="text-white font-semibold text-xs lg:text-sm">AlturaCyber</span>
                            <span className="text-white text-xs border-l border-white pl-2 ml-2 hidden lg:inline">LOGIN</span>
                        </Link>

                        {/* Desktop Menu */}
                        <div className="hidden lg:flex items-center gap-8">
                            
                            {/* Services Dropdown */}
                            <div className="relative">
                                <button
                                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                                    className="text-white text-sm font-medium flex items-center gap-1 hover:text-gray-300 transition-colors"
                                >
                                    SERVICES
                                    <span className="text-xs">▼</span>
                                </button>
                                {isServicesOpen && (
                                    <div className="absolute top-full mt-2 w-48 bg-[#2a2a2a] rounded-lg shadow-lg py-2">
                                        <Link href="/services/penetration-testing" className="block px-4 py-2 text-sm text-gray-300 hover:bg-[#3a3a3a] hover:text-white">
                                            Penetration Testing
                                        </Link>
                                        <Link href="/services/risk-compliance" className="block px-4 py-2 text-sm text-gray-300 hover:bg-[#3a3a3a] hover:text-white">
                                            Risk & Compliance
                                        </Link>
                                        <Link href="/services/incident-response" className="block px-4 py-2 text-sm text-gray-300 hover:bg-[#3a3a3a] hover:text-white">
                                            Incident Response
                                        </Link>
                                        <Link href="/services/training" className="block px-4 py-2 text-sm text-gray-300 hover:bg-[#3a3a3a] hover:text-white">
                                            Training
                                        </Link>
                                    </div>
                                )}
                            </div>

                            {/* Industries Dropdown */}
                            <div className="relative">
                                <button
                                    onClick={() => setIsIndustriesOpen(!isIndustriesOpen)}
                                    className="text-white text-sm font-medium flex items-center gap-1 hover:text-gray-300 transition-colors"
                                >
                                    INDUSTRIES
                                    <span className="text-xs">▼</span>
                                </button>
                                {isIndustriesOpen && (
                                    <div className="absolute top-full mt-2 w-48 bg-[#2a2a2a] rounded-lg shadow-lg py-2">
                                        <Link href="/industries/banking" className="block px-4 py-2 text-sm text-gray-300 hover:bg-[#3a3a3a] hover:text-white">
                                            Banking
                                        </Link>
                                        <Link href="/industries/healthcare" className="block px-4 py-2 text-sm text-gray-300 hover:bg-[#3a3a3a] hover:text-white">
                                            Healthcare
                                        </Link>
                                        <Link href="/industries/government" className="block px-4 py-2 text-sm text-gray-300 hover:bg-[#3a3a3a] hover:text-white">
                                            Government
                                        </Link>
                                    </div>
                                )}
                            </div>

                            {/* About Dropdown */}
                            <div className="relative">
                                <button
                                    onClick={() => setIsAboutOpen(!isAboutOpen)}
                                    className="text-white text-sm font-medium flex items-center gap-1 hover:text-gray-300 transition-colors"
                                >
                                    ABOUT
                                    <span className="text-xs">▼</span>
                                </button>
                                {isAboutOpen && (
                                    <div className="absolute top-full mt-2 w-48 bg-[#2a2a2a] rounded-lg shadow-lg py-2">
                                        <Link href="/about" className="block px-4 py-2 text-sm text-gray-300 hover:bg-[#3a3a3a] hover:text-white">
                                            About Us
                                        </Link>
                                        <Link href="/team" className="block px-4 py-2 text-sm text-gray-300 hover:bg-[#3a3a3a] hover:text-white">
                                            Team
                                        </Link>
                                        <Link href="/careers" className="block px-4 py-2 text-sm text-gray-300 hover:bg-[#3a3a3a] hover:text-white">
                                            Careers
                                        </Link>
                                    </div>
                                )}
                            </div>

                            {/* Insights Dropdown */}
                            <div className="relative">
                                <button
                                    onClick={() => setIsInsightsOpen(!isInsightsOpen)}
                                    className="text-white text-sm font-medium flex items-center gap-1 hover:text-gray-300 transition-colors"
                                >
                                    INSIGHTS
                                    <span className="text-xs">▼</span>
                                </button>
                                {isInsightsOpen && (
                                    <div className="absolute top-full mt-2 w-48 bg-[#2a2a2a] rounded-lg shadow-lg py-2">
                                        <Link href="/insights/blog" className="block px-4 py-2 text-sm text-gray-300 hover:bg-[#3a3a3a] hover:text-white">
                                            Blog
                                        </Link>
                                        <Link href="/insights/case-studies" className="block px-4 py-2 text-sm text-gray-300 hover:bg-[#3a3a3a] hover:text-white">
                                            Case Studies
                                        </Link>
                                        <Link href="/insights/resources" className="block px-4 py-2 text-sm text-gray-300 hover:bg-[#3a3a3a] hover:text-white">
                                            Resources
                                        </Link>
                                    </div>
                                )}
                            </div>

                            {/* Partner with us */}
                            <Link href="/partner" className="text-white text-sm font-medium hover:text-gray-300 transition-colors">
                                PARTNER WITH US
                            </Link>

                            {/* Consultation Button */}
                            <Link href="/contact">
                                <button className="px-6 py-2 bg-[#ff8c42] hover:bg-orange-600 text-black text-sm font-semibold rounded-full uppercase transition-colors duration-300">
                                    CONSULTATION
                                </button>
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="lg:hidden text-white p-2"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {isMobileMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    {isMobileMenuOpen && (
                        <div className="lg:hidden py-4 border-t border-gray-800">
                            <div className="space-y-4">
                                <Link href="/services" className="block text-white text-sm font-medium py-2">
                                    SERVICES
                                </Link>
                                <Link href="/industries" className="block text-white text-sm font-medium py-2">
                                    INDUSTRIES
                                </Link>
                                <Link href="/about" className="block text-white text-sm font-medium py-2">
                                    ABOUT
                                </Link>
                                <Link href="/insights" className="block text-white text-sm font-medium py-2">
                                    INSIGHTS
                                </Link>
                                <Link href="/partner" className="block text-white text-sm font-medium py-2">
                                    PARTNER WITH US
                                </Link>
                                <Link href="/contact">
                                    <button className="w-full px-6 py-2 bg-[#ff8c42] hover:bg-orange-600 text-black text-sm font-semibold rounded-full uppercase transition-colors duration-300">
                                        CONSULTATION
                                    </button>
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </nav>

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
