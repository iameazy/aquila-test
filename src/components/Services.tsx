'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

export default function Services() {
    const services = [
        {
            icon: '/images/services/icon1.png',
            title: 'Penetration Testing',
            description: 'Identify and fix vulnerabilities before attackers do. Our experts simulate real-world attacks to uncover hidden security gaps.',
            image: '/images/services/image1.png',
            alt: 'Penetration Testing Code'
        },
        {
            icon: '/images/services/icon2.png',
            title: 'Risk & Compliance Advisory',
            description: 'Meet global standards like ISO 27001 and GDPR. We help you navigate complex regulations and maintain continuous compliance.',
            image: '/images/services/image2.png',
            alt: 'Risk & Compliance Dashboard'
        },
        {
            icon: '/images/services/icon3.png',
            title: 'Incident Response & SOC',
            description: 'Continuous threat monitoring and rapid recovery. Minimize downtime and protect your business with proactive defense and swift action.',
            image: '/images/services/image3.png',
            alt: 'Incident Response SOC Monitors'
        },
        {
            icon: '/images/services/icon4.png',
            title: 'Cybersecurity Training',
            description: 'Empower your teams through the AquilaCyber learning network. Build a security-first culture that strengthens your organization from within.',
            image: '/images/services/image4.png',
            alt: 'Cybersecurity Training Session'
        }
    ]

    const [visibleCards, setVisibleCards] = useState<number[]>([])
    const [imageErrors, setImageErrors] = useState<number[]>([])
    const [imageLoaded, setImageLoaded] = useState<number[]>([])
    const cardRefs = useRef<(HTMLDivElement | null)[]>([])

    useEffect(() => {
        const observers = cardRefs.current.map((ref, index) => {
            if (!ref) return null

            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            setVisibleCards((prev) => [...new Set([...prev, index])])
                        }
                    })
                },
                { threshold: 0.1 }
            )

            observer.observe(ref)
            return observer
        })

        return () => {
            observers.forEach((observer) => observer?.disconnect())
        }
    }, [])

    const handleImageError = (index: number) => {
        setImageErrors((prev) => [...prev, index])
        console.error(`Failed to load image at index ${index}`)
    }

    const handleImageLoad = (index: number) => {
        setImageLoaded((prev) => [...prev, index])
    }

    return (
        <section className="relative w-full bg-gray-50 py-16 sm:py-20 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="space-y-16 sm:space-y-20 lg:space-y-24">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            ref={(el) => {cardRefs.current[index] = el}}
                            className={`space-y-6 transition-all duration-1000 ease-out ${
                                visibleCards.includes(index)
                                    ? 'opacity-100 translate-y-0'
                                    : 'opacity-0 translate-y-10'
                            }`}
                            style={{
                                transitionDelay: `${index * 150}ms`
                            }}
                        >
                            {/* Header Section - Icon, Title, Description */}
                            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                                {/* Icon + Title */}
                                <div className="md:col-span-5 flex items-start space-x-4">
                                    <div className="flex-shrink-0 w-12 h-12 relative transform transition-transform duration-500 hover:scale-110 hover:rotate-6">
                                        <Image
                                            src={service.icon}
                                            alt={`${service.title} icon`}
                                            width={48}
                                            height={48}
                                            className="object-contain"
                                            onError={() => handleImageError(index * 10)} // Different ID for icons
                                        />
                                    </div>
                                    <h3 className="text-2xl sm:text-3xl font-bold text-dark transform transition-all duration-500 hover:text-blue-600">
                                        {service.title}
                                    </h3>
                                </div>

                                {/* Description */}
                                <div className="md:col-span-7">
                                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed transition-colors duration-300 hover:text-gray-900">
                                        {service.description}
                                    </p>
                                </div>
                            </div>

                            {/* Image Section - Optimized for Mobile */}
                            <div className="w-full relative rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group bg-gray-200 hover:-translate-y-1">
                                {/* Fixed aspect ratio container - 21:9 (wider, shorter) */}
                                <div className="relative w-full" style={{ paddingBottom: '42.85%' }}>
                                    {/* Loading skeleton */}
                                    {!imageLoaded.includes(index) && !imageErrors.includes(index) && (
                                        <div className="absolute inset-0 bg-gray-300 animate-pulse">
                                            <div className="flex items-center justify-center h-full">
                                                <div className="text-gray-500">Loading...</div>
                                            </div>
                                        </div>
                                    )}

                                    {/* Error state */}
                                    {imageErrors.includes(index) && (
                                        <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
                                            <div className="text-center p-4">
                                                <svg className="w-12 h-12 mx-auto text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                </svg>
                                                <p className="text-sm text-gray-500">Image not available</p>
                                            </div>
                                        </div>
                                    )}

                                    {/* Actual image */}
                                    <div className={`absolute inset-0 transform transition-transform duration-700 ease-out group-hover:scale-110 ${
                                        imageLoaded.includes(index) ? 'opacity-100' : 'opacity-0'
                                    }`}>
                                        <Image
                                            src={service.image}
                                            alt={service.alt}
                                            fill
                                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px"
                                            className="object-cover"
                                            loading={index === 0 ? 'eager' : 'lazy'} // Only first image eager
                                            quality={85} // Reduce quality slightly for better performance
                                            onLoad={() => handleImageLoad(index)}
                                            onError={() => handleImageError(index)}
                                        />
                                    </div>

                                    {/* Overlay on hover */}
                                    <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All Services Button */}
                <div className="mt-12 sm:mt-16 flex justify-center animate-fade-in-up">
                    <Link href="/services">
                        <button className="px-12 py-4 bg-blue-500 hover:bg-blue-600 text-white text-sm font-bold rounded-full transition-all duration-300 uppercase tracking-wide transform hover:scale-105 hover:shadow-xl active:scale-95">
                            VIEW ALL SERVICES
                        </button>
                    </Link>
                </div>
            </div>

            <style jsx>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .animate-fade-in-up {
                    animation: fadeInUp 1s ease-out 0.5s both;
                }

                @keyframes pulse {
                    0%, 100% {
                        opacity: 1;
                    }
                    50% {
                        opacity: 0.5;
                    }
                }

                .animate-pulse {
                    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
                }
            `}</style>
        </section>
    )
}