'use client'
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const CyberFrontlineSection = () => {
    const [headerVisible, setHeaderVisible] = useState(false);
    const [cardsVisible, setCardsVisible] = useState<number[]>([]);
    const headerRef = useRef<HTMLDivElement>(null);
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        // Header observer
        const headerObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setHeaderVisible(true);
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (headerRef.current) {
            headerObserver.observe(headerRef.current);
        }

        // Cards observer
        const cardObservers = cardRefs.current.map((ref, index) => {
            if (!ref) return null;

            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            setCardsVisible((prev) => [...new Set([...prev, index])]);
                        }
                    });
                },
                { threshold: 0.1 }
            );

            observer.observe(ref);
            return observer;
        });

        return () => {
            headerObserver.disconnect();
            cardObservers.forEach((observer) => observer?.disconnect());
        };
    }, []);

    return (
        <section className="relative bg-[#0a0a0a] pt-16 md:pt-20 lg:pt-24">
            {/* Curved transition from black to white */}
            <div className="relative -mt-[90px] sm:-mt-[120px] md:-mt-[150px] z-10">
                <svg
                    className="w-full h-32 sm:h-40 md:h-48"
                    viewBox="0 0 1440 160"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M0,80 C240,26.7 480,0 720,0 C960,0 1200,26.7 1440,80 L1440,160 L0,160 Z"
                        fill="white"
                    />
                </svg>
            </div>

            {/* White background section with content */}
            <div className="relative z-10 bg-white pt-32 md:pt-40 lg:pt-48 pb-16 md:pb-20 lg:pb-24">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Header - Animated */}
                    <div 
                        ref={headerRef}
                        className={`text-center mb-12 md:mb-16 transition-all duration-1000 ease-out ${
                            headerVisible 
                                ? 'opacity-100 translate-y-0' 
                                : 'opacity-0 -translate-y-10'
                        }`}
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 md:mb-6 animate-fade-in-down">
                            From the Cyber Frontline
                        </h2>
                        <p className="text-sm md:text-base lg:text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '200ms' }}>
                            Explore expert insights, threat analyses, and the latest trends in cybersecurity.
                        </p>
                    </div>

                    {/* Cards Container */}
                    <div className="space-y-8 md:space-y-10 lg:space-y-12">

                        {/* Card 1 - Cyber Threats - Animated */}
                        <div 
                            ref={(el) => { cardRefs.current[0] = el }}
                            className={`bg-gradient-to-r from-blue-100 to-blue-50 rounded-[1.5rem] md:rounded-[4rem] lg:p-5 shadow-lg max-w-3xl mr-auto transition-all duration-1000 ease-out group ${
                                cardsVisible.includes(0)
                                    ? 'opacity-100 translate-x-0'
                                    : 'opacity-0 -translate-x-10'
                            }`}
                            style={{ transitionDelay: '0ms' }}
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 lg:gap-5 items-center">
                                {/* Image Container - Left */}
                                <div className="order-2 md:order-1">
                                    <div className="backdrop-blur-sm rounded-2xl md:rounded-[1.5rem] p-2 md:p-3 flex items-center justify-center min-h-[100px] md:min-h-[120px] overflow-hidden">
                                        <img
                                            src="/images/cyber/cyber1.png"
                                            alt="Cyber threats illustration"
                                            className="w-full h-full object-contain max-h-[160px] transform transition-transform duration-700 group-hover:scale-110"
                                        />
                                    </div>
                                </div>
                                {/* Text - Right */}
                                <div className="order-1 md:order-2 text-left">
                                    <p className="text-xs md:text-sm text-gray-800 leading-relaxed transition-colors duration-300 group-hover:text-gray-900">
                                        <span className="font-bold transition-colors duration-300 group-hover:text-blue-600">Cyber threats</span> are evolving faster than ever in 2025, challenging even the most prepared organizations. From AI-driven attacks to quantum-era vulnerabilities, the digital landscape is entering a critical phase. Discover the top five emerging threats shaping cybersecurity this year and how to stay ahead of them.
                                    </p>
                                </div>
                                {/* Hover overlay */}
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-blue-600/0 group-hover:from-blue-600/5 group-hover:to-blue-600/10 rounded-[1.5rem] md:rounded-[4rem] transition-all duration-500 pointer-events-none"></div>
                            </div>
                        </div>

                        {/* Card 2 - Red Teaming - Animated */}
                        <div 
                            ref={(el) => { cardRefs.current[1] = el }}
                            className={`bg-gradient-to-r from-blue-100 to-blue-50 rounded-[1.5rem] md:rounded-[4rem] lg:p-5 shadow-lg max-w-3xl ml-auto transition-all duration-1000 ease-out group ${
                                cardsVisible.includes(1)
                                    ? 'opacity-100 translate-x-0'
                                    : 'opacity-0 translate-x-10'
                            }`}
                            style={{ transitionDelay: '150ms' }}
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 lg:gap-5 items-center">
                                {/* Text - Left */}
                                <div className="order-1 text-left">
                                    <p className="text-xs md:text-sm text-gray-800 leading-relaxed transition-colors duration-300 group-hover:text-gray-900">
                                        As cyber threats grow more advanced, traditional security measures alone are no longer enough. <span className="font-bold transition-colors duration-300 group-hover:text-blue-600">Red teaming</span> puts your defenses to the test by simulating real-world attacks before criminals do. Learn why investing in a red team can reveal unseen weaknesses and build true cyber resilience.
                                    </p>
                                </div>
                                {/* Image Container - Right */}
                                <div className="order-2">
                                    <div className="backdrop-blur-sm rounded-2xl md:rounded-[1.5rem] p-2 md:p-3 flex items-center justify-center min-h-[100px] md:min-h-[120px] overflow-hidden">
                                        <img
                                            src="/images/cyber/cyber2.png"
                                            alt="Red team vs blue team"
                                            className="w-full h-full object-contain max-h-[160px] transform transition-transform duration-700 group-hover:scale-110"
                                        />
                                    </div>
                                </div>
                                {/* Hover overlay */}
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-blue-600/0 group-hover:from-blue-600/5 group-hover:to-blue-600/10 rounded-[1.5rem] md:rounded-[4rem] transition-all duration-500 pointer-events-none"></div>
                            </div>
                        </div>

                        {/* Card 3 - Security-Aware Workforce - Animated */}
                        <div 
                            ref={(el) => { cardRefs.current[2] = el }}
                            className={`bg-gradient-to-r from-blue-100 to-blue-50 rounded-[1.5rem] md:rounded-[4rem] lg:p-5 shadow-lg max-w-3xl mr-auto transition-all duration-1000 ease-out group ${
                                cardsVisible.includes(2)
                                    ? 'opacity-100 translate-x-0'
                                    : 'opacity-0 -translate-x-10'
                            }`}
                            style={{ transitionDelay: '300ms' }}
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 lg:gap-5 items-center">
                                {/* Image Container - Left */}
                                <div className="order-2 md:order-1">
                                    <div className="backdrop-blur-sm rounded-2xl md:rounded-[1.5rem] p-2 md:p-3 flex items-center justify-center min-h-[100px] md:min-h-[120px] overflow-hidden">
                                        <img
                                            src="/images/cyber/cyber3.png"
                                            alt="Security-aware workforce"
                                            className="w-full h-full object-contain max-h-[160px] transform transition-transform duration-700 group-hover:scale-110"
                                        />
                                    </div>
                                </div>
                                {/* Text - Right */}
                                <div className="order-1 md:order-2 text-left">
                                    <p className="text-xs md:text-sm text-gray-800 leading-relaxed transition-colors duration-300 group-hover:text-gray-900">
                                        Human error remains one of the biggest cybersecurity risks facing organizations today. Building a <span className="font-bold transition-colors duration-300 group-hover:text-blue-600">security-aware workforce</span> means turning every employee into a first line of defense. Discover practical strategies to create a culture where security is everyone's responsibility.
                                    </p>
                                </div>
                                {/* Hover overlay */}
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-blue-600/0 group-hover:from-blue-600/5 group-hover:to-blue-600/10 rounded-[1.5rem] md:rounded-[4rem] transition-all duration-500 pointer-events-none"></div>
                            </div>
                        </div>

                        {/* Card 4 - Incident Response - Animated */}
                        <div 
                            ref={(el) => { cardRefs.current[3] = el }}
                            className={`bg-gradient-to-r from-blue-100 to-blue-50 rounded-[1.5rem] md:rounded-[4rem] lg:p-5 shadow-lg max-w-3xl ml-auto transition-all duration-1000 ease-out group ${
                                cardsVisible.includes(3)
                                    ? 'opacity-100 translate-x-0'
                                    : 'opacity-0 translate-x-10'
                            }`}
                            style={{ transitionDelay: '450ms' }}
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 lg:gap-5 items-center">
                                {/* Text - Left */}
                                <div className="order-1 text-left">
                                    <p className="text-xs md:text-sm text-gray-800 leading-relaxed transition-colors duration-300 group-hover:text-gray-900">
                                        A swift, coordinated response to cyber incidents can mean the difference between minor disruption and a major crisis. Effective incident response planning is more crucial than ever as attacks grow in speed and sophistication. Learn how to prepare your organization for rapid recovery and ongoing resilience.
                                    </p>
                                </div>
                                {/* Image Container - Right */}
                                <div className="order-2">
                                    <div className="backdrop-blur-sm rounded-2xl md:rounded-[1.5rem] p-2 md:p-3 flex items-center justify-center min-h-[100px] md:min-h-[120px] overflow-hidden">
                                        <img
                                            src="/images/cyber/cyber4.png"
                                            alt="Cyber incident response"
                                            className="w-full h-full object-contain max-h-[160px] transform transition-transform duration-700 group-hover:scale-110"
                                        />
                                    </div>
                                </div>
                                {/* Hover overlay */}
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-blue-600/0 group-hover:from-blue-600/5 group-hover:to-blue-600/10 rounded-[1.5rem] md:rounded-[4rem] transition-all duration-500 pointer-events-none"></div>
                            </div>
                        </div>

                    </div>

                    {/* Read All Insights Button - Animated */}
                    <div className="mt-12 md:mt-16 flex justify-center animate-fade-in-up" style={{ animationDelay: '600ms' }}>
                        <Link href="/insights">
                            <button className="px-10 py-3 bg-blue-500 hover:bg-blue-600 text-white text-xs sm:text-sm font-bold rounded-full transition-all duration-300 uppercase tracking-wide shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 relative overflow-hidden group">
                                <span className="absolute inset-0 w-0 bg-white/20 transition-all duration-500 ease-out group-hover:w-full"></span>
                                <span className="relative z-10">READ ALL INSIGHTS</span>
                            </button>
                        </Link>
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
    );
};

export default CyberFrontlineSection;