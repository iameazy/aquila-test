'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

export default function CTAFooter() {
    const [headerVisible, setHeaderVisible] = useState(false)
    const [formVisible, setFormVisible] = useState(false)
    const [imageVisible, setImageVisible] = useState(false)
    const [footerVisible, setFooterVisible] = useState(false)
    
    const headerRef = useRef<HTMLDivElement>(null)
    const formRef = useRef<HTMLDivElement>(null)
    const imageRef = useRef<HTMLDivElement>(null)
    const footerRef = useRef<HTMLElement>(null)

    useEffect(() => {
        const observers = [
            { ref: headerRef, setter: setHeaderVisible },
            { ref: formRef, setter: setFormVisible },
            { ref: imageRef, setter: setImageVisible },
            { ref: footerRef, setter: setFooterVisible }
        ].map(({ ref, setter }) => {
            if (!ref.current) return null
            
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            setter(true)
                        }
                    })
                },
                { threshold: 0.1 }
            )
            
            observer.observe(ref.current)
            return observer
        })

        return () => {
            observers.forEach((observer) => observer?.disconnect())
        }
    }, [])

    return (
        <section className="relative w-full overflow-hidden">
            {/* Downward Curved Top - Transition from white to dark */}
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
                    {/* Dark overlay for better text readability */}
                    <div className="absolute inset-0 bg-black/40" />
                </div>

                {/* Content */}
                <div className="relative z-20 pt-40 sm:pt-48 md:pt-56 lg:pt-64 pb-16 md:pb-20 lg:pb-24">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                        {/* CTA Content - Animated */}
                        <div className="text-center mb-16 md:mb-20 lg:mb-28">
                            {/* Heading - Animated */}
                            <div 
                                ref={headerRef}
                                className={`transition-all duration-1000 ease-out ${
                                    headerVisible 
                                        ? 'opacity-100 translate-y-0' 
                                        : 'opacity-0 -translate-y-10'
                                }`}
                            >
                                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 md:mb-10 lg:mb-12 leading-tight max-w-4xl mx-auto">
                                    Partner with <br /> AlturaCyber today and <br /> take control of your <br /> organization's digital <br /> security
                                </h2>
                            </div>

                            {/* Email Form - Animated */}
                            <div 
                                ref={formRef}
                                className={`transition-all duration-1000 ease-out ${
                                    formVisible 
                                        ? 'opacity-100 translate-y-0' 
                                        : 'opacity-0 translate-y-10'
                                }`}
                                style={{ transitionDelay: '200ms' }}
                            >
                                <div className="flex items-center gap-2 max-w-2xl mx-auto mb-16 md:mb-20 lg:mb-24 bg-[#2a2a2a] rounded-full p-2 border border-gray-700 hover:border-gray-500 transition-all duration-300 group">
                                    <input
                                        type="email"
                                        placeholder="your email"
                                        className="flex-1 px-4 sm:px-6 py-3 sm:py-4 bg-transparent text-white placeholder-gray-400 focus:outline-none text-sm sm:text-base"
                                    />
                                    <button className="px-6 sm:px-8 py-3 sm:py-4 bg-[#ff8c42] hover:bg-[#ff7a2e] text-black text-sm sm:text-base font-semibold rounded-full transition-all duration-300 whitespace-nowrap transform hover:scale-105 active:scale-95 relative overflow-hidden">
                                        <span className="absolute inset-0 w-0 bg-white/20 transition-all duration-500 ease-out group-hover:w-full"></span>
                                        <span className="relative z-10">Get a Free Security Consultation</span>
                                    </button>
                                </div>
                            </div>

                            {/* Dashboard Image - Animated */}
                            <div 
                                ref={imageRef}
                                className={`transition-all duration-1000 ease-out ${
                                    imageVisible 
                                        ? 'opacity-100 scale-100' 
                                        : 'opacity-0 scale-95'
                                }`}
                                style={{ transitionDelay: '400ms' }}
                            >
                                <div className="relative max-w-6xl mx-auto group">
                                    <div className="relative w-full aspect-[21/5] rounded-2xl overflow-hidden shadow-2xl">
                                        <Image
                                            src="/images/footer/footer-image.png"
                                            alt="Cybersecurity Dashboard"
                                            width={1400}
                                            height={333}
                                            className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                                        />
                                        {/* Hover overlay */}
                                        <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Footer - Animated */}
                        <footer 
                            ref={footerRef}
                            className={`pt-12 md:pt-16 lg:pt-20 mt-12 md:mt-16 lg:mt-20 transition-all duration-1000 ease-out ${
                                footerVisible 
                                    ? 'opacity-100 translate-y-0' 
                                    : 'opacity-0 translate-y-10'
                            }`}
                        >
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12 mb-12 md:mb-16 lg:mb-20">

                                {/* Column 1 - Brand */}
                                <div className="text-center sm:text-left">
                                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 transition-colors duration-300 hover:text-[#ff8c42]">
                                        AlturaCyber —
                                    </h3>
                                    <p className="text-sm sm:text-base text-gray-300">
                                        Protecting What Matters Most
                                    </p>
                                </div>

                                {/* Column 2 - Navigation Links */}
                                <div className="text-center sm:text-left">
                                    <div className="space-y-3">
                                        <Link href="/" className="block text-sm text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-1">
                                            Home
                                        </Link>
                                        <Link href="/about" className="block text-sm text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-1">
                                            About
                                        </Link>
                                        <Link href="/services" className="block text-sm text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-1">
                                            Services
                                        </Link>
                                        <Link href="/blog" className="block text-sm text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-1">
                                            Blog
                                        </Link>
                                        <Link href="/careers" className="block text-sm text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-1">
                                            Careers
                                        </Link>
                                        <Link href="/contact" className="block text-sm text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-1">
                                            Contact
                                        </Link>
                                    </div>
                                </div>

                                {/* Column 3 - Social & Legal */}
                                <div className="text-center sm:text-left">
                                    <div className="space-y-3">
                                        <Link href="https://linkedin.com" className="block text-sm text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-1">
                                            LinkedIn
                                        </Link>
                                        <Link href="https://twitter.com" className="block text-sm text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-1">
                                            X (Twitter)
                                        </Link>
                                        <Link href="/privacy" className="block text-sm text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-1">
                                            Privacy Policy
                                        </Link>
                                        <Link href="/terms" className="block text-sm text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-1">
                                            Terms of Service
                                        </Link>
                                    </div>
                                </div>

                                {/* Column 4 - Contact Info */}
                                <div className="text-center sm:text-left">
                                    <div className="space-y-3 text-sm">
                                        <p className="font-semibold text-white">Email</p>
                                        <p className="font-semibold text-white">Phone</p>
                                        <p className="font-semibold text-white">Address</p>
                                    </div>
                                </div>

                            </div>

                            {/* Bottom Bar */}
                            <div className="border-t border-gray-700 pt-8 md:pt-10 lg:pt-12 pb-10 md:pb-12 lg:pb-16">
                                <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                                    <p className="text-xs sm:text-sm text-gray-400 text-center sm:text-left max-w-2xl">
                                        AlturaCyber is a cybersecurity agency delivering end-to-end protection and digital resilience for businesses
                                    </p>
                                    <div className="flex gap-3 items-center">
                                        <button className="flex items-center gap-2 px-4 py-2 border border-gray-600 rounded-full text-xs text-gray-300 hover:border-gray-400 transition-all duration-300 hover:scale-105">
                                            <span>🌐</span>
                                            <span>Language</span>
                                        </button>
                                        <Link href="/contact">
                                            <button className="px-6 py-2 bg-[#ff8c42] hover:bg-[#ff7a2e] text-black text-xs font-semibold rounded-full transition-all duration-300 uppercase transform hover:scale-105 active:scale-95 hover:shadow-lg">
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