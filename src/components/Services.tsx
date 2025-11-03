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

    return (
        <section className="relative w-full bg-gray-50 py-16 sm:py-20 lg:py-24">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
                                            fill
                                            className="object-contain"
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

                            {/* Image Section */}
                            <div className="w-full h-64 sm:h-80 md:h-96 relative rounded-lg overflow-hidden shadow-lg group">
                                <div className="relative w-full h-full transform transition-transform duration-700 ease-out group-hover:scale-110">
                                    <Image
                                        src={service.image}
                                        alt={service.alt}
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </div>
                                {/* Overlay on hover */}
                                <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
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
            `}</style>
        </section>
    )
}