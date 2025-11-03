'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

export default function CaseStudies() {
    const caseStudies = [
        {
            icon: '/images/case/case-icon1.png',
            title: 'Banking Sector Resilience',
            description: 'A leading financial institution sought to strengthen its cybersecurity framework. Through penetration testing and SOC integration, we reduced incident response time by 60% and safeguarded millions of customer transactions daily.',
            bgColor: 'bg-slate-700'
        },
        {
            icon: '/images/case/case-icon2.png',
            title: 'Telecom Network Protection',
            description: 'We partnered with a global telecommunications provider to identify and close vulnerabilities across its nationwide infrastructure. Our risk assessments and continuous monitoring improved system uptime and ensured compliance with international data protection standards.',
            bgColor: 'bg-slate-700'
        },
        {
            icon: '/images/case/case-icon3.png',
            title: 'Government Digital Transformation',
            description: 'Supporting a national digital service rollout, we implemented advanced security controls and staff training programs. This initiative bolstered cyber readiness, secured public data, and built capacity for ongoing self-assessment and threat response.',
            bgColor: 'bg-slate-700'
        }
    ]

    // Animation states
    const [headerVisible, setHeaderVisible] = useState(false)
    const [cardsVisible, setCardsVisible] = useState<number[]>([])
    const headerRef = useRef<HTMLDivElement>(null)
    const cardRefs = useRef<(HTMLDivElement | null)[]>([])

    useEffect(() => {
        // Header animation observer
        const headerObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setHeaderVisible(true)
                    }
                })
            },
            { threshold: 0.1 }
        )

        if (headerRef.current) {
            headerObserver.observe(headerRef.current)
        }

        // Cards animation observer
        const cardObservers = cardRefs.current.map((ref, index) => {
            if (!ref) return null

            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            setCardsVisible((prev) => [...new Set([...prev, index])])
                        }
                    })
                },
                { threshold: 0.1 }
            )

            observer.observe(ref)
            return observer
        })

        return () => {
            headerObserver.disconnect()
            cardObservers.forEach((observer) => observer?.disconnect())
        }
    }, [])

    return (
        <section className="relative w-full bg-white overflow-hidden">

            {/* Curved transition from black to white */}
            <div className="relative z-[10]">
                <svg
                    className="w-full h-32 sm:h-40 md:h-48"
                    viewBox="0 0 1440 160"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M0,0 C240,53.3 480,80 720,80 C960,80 1200,53.3 1440,0 L1440,160 L0,160 Z"
                        fill="#121212"
                    />
                </svg>
            </div>

            <div className="relative w-full bg-[#121212] overflow-hidden">

            {/* Content */}
            <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-40 md:pt-48 lg:pt-56 pb-16 sm:pb-20 lg:pb-24">
                
                {/* Header - Animated */}
                <div 
                    ref={headerRef}
                    className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ease-out ${
                        headerVisible 
                            ? 'opacity-100 translate-y-0' 
                            : 'opacity-0 translate-y-10'
                    }`}
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in-down">
                        Proven Results,
                        <br />
                        Trusted Partnerships
                    </h2>
                    <p className="text-white text-sm sm:text-base mb-6 sm:mb-8 animate-fade-in" style={{ animationDelay: '200ms' }}>
                        15+ security assessments completed
                    </p>
                    <div className="animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                        <Link href="/case-studies">
                            <button className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold rounded-full transition-all duration-300 uppercase tracking-wide transform hover:scale-105 hover:shadow-xl active:scale-95">
                                VIEW CASE STUDIES
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Case Study Cards - Animated */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
                    {/* First two cards side by side */}
                    {caseStudies.slice(0, 2).map((study, index) => (
                        <div
                            key={index}
                            ref={(el) => { cardRefs.current[index] = el }}
                            className={`${study.bgColor} rounded-2xl p-6 sm:p-8 transition-all duration-700 ease-out group ${
                                cardsVisible.includes(index)
                                    ? 'opacity-100 translate-y-0'
                                    : 'opacity-0 translate-y-10'
                            }`}
                            style={{
                                transitionDelay: `${index * 150}ms`
                            }}
                        >
                            {/* Icon Image - Animated */}
                            <div className="w-12 h-12 sm:w-14 sm:h-14 mb-4 relative transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                                <Image
                                    src={study.icon}
                                    alt={study.title}
                                    fill
                                    className="object-contain"
                                />
                            </div>

                            {/* Title - Animated */}
                            <h3 className="text-white text-lg sm:text-xl font-bold mb-3 transition-all duration-300 group-hover:text-blue-300">
                                {study.title}
                            </h3>

                            {/* Description - Animated */}
                            <p className="text-gray-300 text-sm sm:text-base leading-relaxed transition-colors duration-300 group-hover:text-white">
                                {study.description}
                            </p>

                            {/* Hover overlay effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-blue-600/0 group-hover:from-blue-600/5 group-hover:to-blue-600/10 rounded-2xl transition-all duration-500"></div>
                        </div>
                    ))}

                    {/* Third card centered below - Animated */}
                    <div className="md:col-span-2 flex justify-center">
                        <div
                            ref={(el) => { cardRefs.current[2] = el }}
                            className={`${caseStudies[2].bgColor} rounded-2xl p-6 sm:p-8 transition-all duration-700 ease-out w-full md:max-w-md lg:max-w-lg group ${
                                cardsVisible.includes(2)
                                    ? 'opacity-100 translate-y-0'
                                    : 'opacity-0 translate-y-10'
                            }`}
                            style={{
                                transitionDelay: '300ms'
                            }}
                        >
                            {/* Icon Image - Animated */}
                            <div className="w-12 h-12 sm:w-14 sm:h-14 mb-4 relative transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                                <Image
                                    src={caseStudies[2].icon}
                                    alt={caseStudies[2].title}
                                    fill
                                    className="object-contain"
                                />
                            </div>

                            {/* Title - Animated */}
                            <h3 className="text-white text-lg sm:text-xl font-bold mb-3 transition-all duration-300 group-hover:text-blue-300">
                                {caseStudies[2].title}
                            </h3>

                            {/* Description - Animated */}
                            <p className="text-gray-300 text-sm sm:text-base leading-relaxed transition-colors duration-300 group-hover:text-white">
                                {caseStudies[2].description}
                            </p>

                            {/* Hover overlay effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-blue-600/0 group-hover:from-blue-600/5 group-hover:to-blue-600/10 rounded-2xl transition-all duration-500"></div>
                        </div>
                    </div>
                </div>

                </div>
            </div>

            {/* Custom Animations */}
            <style jsx>{`
                @keyframes fadeInDown {
                    from {
                        opacity: 0;
                        transform: translateY(-20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes fadeIn {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }

                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .animate-fade-in-down {
                    animation: fadeInDown 0.8s ease-out both;
                }

                .animate-fade-in {
                    animation: fadeIn 0.8s ease-out both;
                }

                .animate-fade-in-up {
                    animation: fadeInUp 0.8s ease-out both;
                }
            `}</style>
        </section>
    )
}