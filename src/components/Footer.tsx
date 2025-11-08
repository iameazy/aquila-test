'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function CTAFooter() {
    const [email, setEmail] = useState('')
    
    const headingText = "Partner with AlturaCyber today and take control of your organization's digital security"

    return (
        <section id='partner' className="relative w-full overflow-hidden">
            {/* Curved Top */}
            <div className="absolute top-0 left-0 right-0 z-10">
                <svg
                    className="w-full h-24 sm:h-32 md:h-40"
                    viewBox="0 0 1440 160"
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M0,0 L0,80 C240,133.3 480,160 720,160 C960,160 1200,133.3 1440,80 L1440,0 Z"
                        fill="white"
                    />
                </svg>
            </div>

            {/* Background Image Container */}
            <div className="relative min-h-[120vh] md:min-h-[140vh]">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/footer/bottom-image.png"
                        alt="Background"
                        fill
                        className="object-cover object-top"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/40" />
                </div>

                {/* Content */}
                <div className="relative z-20 pt-40 sm:pt-48 md:pt-56 lg:pt-64 pb-16 md:pb-20 lg:pb-24">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                        {/* CTA Content */}
                        <div className="text-center mb-16 md:mb-20 lg:mb-28">

                            {/* Heading */}
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 md:mb-10 lg:mb-12 leading-tight max-w-4xl mx-auto">
                                {headingText}
                            </h2>

                            {/* Email Form */}
                            <div className="relative flex items-center gap-2 max-w-2xl mx-auto mb-16 md:mb-20 lg:mb-24 bg-[#2a2a2a] rounded-full p-2 border-2 border-[#4a4a4a]">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="your email"
                                    className="flex-1 px-4 sm:px-6 py-3 sm:py-4 bg-transparent text-white placeholder-gray-400 focus:outline-none text-sm sm:text-base"
                                />
                                
                                <button className="px-6 sm:px-8 py-3 sm:py-4 bg-[#ff8c42] hover:bg-orange-600 text-black text-sm sm:text-base font-semibold rounded-full whitespace-nowrap transition-colors duration-300">
                                    Get a Free Security Consultation
                                </button>
                            </div>

                            {/* Dashboard Image with zoom only */}
                            <DashboardImage />
                        </div>

                        {/* Footer */}
                        <footer className="pt-12 md:pt-16 lg:pt-20 mt-12 md:mt-16 lg:mt-20">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12 mb-12 md:mb-16 lg:mb-20">

                                {/* Column 1 - Brand */}
                                <div className="text-center sm:text-left">
                                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                                        AlturaCyber —
                                    </h3>
                                    <p className="text-sm sm:text-base text-gray-300">
                                        Protecting What Matters Most
                                    </p>
                                </div>

                                {/* Column 2 - Navigation Links */}
                                <div className="text-center sm:text-left">
                                    <div className="space-y-3">
                                        {['Home', 'About', 'Services', 'Blog', 'Careers', 'Contact'].map((link) => (
                                            <Link key={link} href={`/${link.toLowerCase()}`}>
                                                <span className="block text-sm text-gray-300 hover:text-white transition-colors duration-200">
                                                    {link}
                                                </span>
                                            </Link>
                                        ))}
                                    </div>
                                </div>

                                {/* Column 3 - Social & Legal */}
                                <div className="text-center sm:text-left">
                                    <div className="space-y-3">
                                        {[
                                            { name: 'LinkedIn', url: 'https://linkedin.com' },
                                            { name: 'X (Twitter)', url: 'https://twitter.com' },
                                            { name: 'Privacy Policy', url: '/privacy' },
                                            { name: 'Terms of Service', url: '/terms' }
                                        ].map((link) => (
                                            <Link key={link.name} href={link.url}>
                                                <span className="block text-sm text-gray-300 hover:text-white transition-colors duration-200">
                                                    {link.name}
                                                </span>
                                            </Link>
                                        ))}
                                    </div>
                                </div>

                                {/* Column 4 - Contact Info */}
                                <div className="text-center sm:text-left">
                                    <div className="space-y-3 text-sm">
                                        {['Email', 'Phone', 'Address'].map((item) => (
                                            <p key={item} className="font-semibold text-white">
                                                {item}
                                            </p>
                                        ))}
                                    </div>
                                </div>

                            </div>

                            {/* Bottom Bar - No border line */}
                            <div className="pt-8 md:pt-10 lg:pt-12 pb-10 md:pb-12 lg:pb-16">
                                <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                                    <p className="text-xs sm:text-sm text-gray-400 text-center sm:text-left max-w-2xl">
                                        AlturaCyber is a cybersecurity agency delivering end-to-end protection and digital resilience for businesses
                                    </p>
                                    <div className="flex gap-3 items-center">
                                        <button className="flex items-center gap-2 px-4 py-2 border border-gray-600 hover:border-gray-500 rounded-full text-xs text-gray-300 transition-colors duration-200">
                                            <span>🌐</span>
                                            <span>Language</span>
                                        </button>
                                        <Link href="/contact">
                                            <button className="px-6 py-2 bg-[#ff8c42] hover:bg-orange-600 text-black text-xs font-semibold rounded-full uppercase transition-colors duration-300">
                                                Consultation
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                        </footer>

                    </div>
                </div>
            </div>
        </section>
    )
}

// Dashboard Image Component - Only zoom on hover
function DashboardImage() {
    return (
        <div className="relative max-w-6xl mx-auto">
            <div className="relative w-full aspect-[21/5] rounded-2xl overflow-hidden shadow-2xl">
                <div className="transition-transform duration-500 hover:scale-105">
                    <Image
                        src="/images/footer/footer-image.png"
                        alt="Cybersecurity Dashboard"
                        width={1400}
                        height={333}
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
    )
}