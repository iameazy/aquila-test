'use client'
import React from 'react';
import Link from 'next/link';

const CyberFrontlineSection = () => {
    const insights = [
        {
            id: 0,
            title: 'Cyber Threats',
            image: '/images/cyber/cyber1.png',
            text: 'Cyber threats are evolving faster than ever in 2025, challenging even the most prepared organizations. From AI-driven attacks to quantum-era vulnerabilities, the digital landscape is entering a critical phase. Discover the top five emerging threats shaping cybersecurity this year and how to stay ahead of them.',
            align: 'left'
        },
        {
            id: 1,
            title: 'Red Teaming',
            image: '/images/cyber/cyber2.png',
            text: 'As cyber threats grow more advanced, traditional security measures alone are no longer enough. Red teaming puts your defenses to the test by simulating real-world attacks before criminals do. Learn why investing in a red team can reveal unseen weaknesses and build true cyber resilience.',
            align: 'right'
        },
        {
            id: 2,
            title: 'Security-Aware Workforce',
            image: '/images/cyber/cyber3.png',
            text: 'Human error remains one of the biggest cybersecurity risks facing organizations today. Building a security-aware workforce means turning every employee into a first line of defense. Discover practical strategies to create a culture where security is everyone\'s responsibility.',
            align: 'left'
        },
        {
            id: 3,
            title: 'Incident Response',
            image: '/images/cyber/cyber4.png',
            text: 'A swift, coordinated response to cyber incidents can mean the difference between minor disruption and a major crisis. Effective incident response planning is more crucial than ever as attacks grow in speed and sophistication. Learn how to prepare your organization for rapid recovery and ongoing resilience.',
            align: 'right'
        }
    ];

    return (
        <section id='insights' className="relative bg-[#0a0a0a] pt-16 md:pt-20 lg:pt-24">
            {/* Curved transition */}
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
            <div className="relative z-10 bg-white pt-32 md:pt-40 lg:pt-48 pb-16 md:pb-20 lg:pb-24 overflow-hidden">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    {/* Header */}
                    <div className="text-center mb-12 md:mb-16">
                        {/* Title */}
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 md:mb-6">
                            From the Cyber Frontline
                        </h2>

                        {/* Subtitle */}
                        <p className="text-sm md:text-base lg:text-lg text-black max-w-2xl mx-auto leading-relaxed">
                            Explore expert insights, threat analyses, and the latest trends in cybersecurity.
                        </p>
                    </div>

                    {/* Cards Container */}
                    <div className="space-y-8 md:space-y-10 lg:space-y-12">
                        {insights.map((insight, index) => (
                            <InsightCard
                                key={insight.id}
                                insight={insight}
                                index={index}
                            />
                        ))}
                    </div>

                    {/* Read All Insights Button */}
                    <div className="mt-12 md:mt-16 flex justify-center">
                        <Link href="/insights">
                            <button className="px-10 py-3 bg-blue-500 hover:bg-blue-600 text-white text-xs sm:text-sm font-bold rounded-full transition-colors duration-300">
                                <span className="uppercase tracking-wide">READ ALL INSIGHTS</span>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Simple Card Component
function InsightCard({ insight, index }: any) {
    const isLeft = insight.align === 'left';
    const isImageLeft = (index % 2 === 0);

    return (
        <div className={`relative ${isLeft ? 'mr-auto' : 'ml-auto'} max-w-3xl`}>
            <div className="bg-gradient-to-r from-blue-100 to-blue-50 rounded-[1.5rem] md:rounded-[4rem] lg:p-5 shadow-lg relative overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 lg:gap-5 items-center relative z-10">
                    {/* Image Container */}
                    <div className={`${isImageLeft ? 'order-2 md:order-1' : 'order-2'}`}>
                        <div className="backdrop-blur-sm rounded-2xl md:rounded-[1.5rem] p-2 md:p-3 flex items-center justify-center min-h-[100px] md:min-h-[120px] overflow-hidden relative">
                            <img
                                src={insight.image}
                                alt={insight.title}
                                className="w-full h-full object-contain max-h-[160px] relative z-10"
                            />
                        </div>
                    </div>

                    {/* Text Container */}
                    <div className={`${isImageLeft ? 'order-1 md:order-2' : 'order-1'} text-left`}>
                        {/* Category badge */}
                        <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 bg-blue-100 text-black">
                            {insight.title}
                        </div>

                        <p className="text-xs md:text-sm text-black leading-relaxed">
                            {insight.text}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CyberFrontlineSection;