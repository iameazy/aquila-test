import React from 'react';
import Link from 'next/link';

const CyberFrontlineSection = () => {
    return (
        <section className="relative bg-[#0a0a0a] pt-16 md:pt-20 lg:pt-24">
             {/* Curved transition from black to white - positioned behind image */}
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
                    
                    {/* Header */}
                    <div className="text-center mb-12 md:mb-16">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 md:mb-6">
                            From the Cyber Frontline
                        </h2>
                        <p className="text-sm md:text-base lg:text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
                            Explore expert insights, threat analyses, and the latest trends in cybersecurity.
                        </p>
                    </div>

                    {/* Cards Container */}
                    <div className="space-y-8 md:space-y-10 lg:space-y-12">
                        
                        {/* Card 1 - Cyber Threats (Image Left, Text Right) */}
                        <div className="bg-gradient-to-r from-blue-100 to-blue-50 rounded-[1.5rem] md:rounded-[2rem] p-4 md:p-6 lg:p-8 shadow-lg">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 items-center">
                                {/* Image Container - Left */}
                                <div className="order-2 md:order-1">
                                    <div className="bg-white/60 backdrop-blur-sm rounded-2xl md:rounded-[1.5rem] p-4 md:p-6 flex items-center justify-center min-h-[150px] md:min-h-[180px]">
                                        <img
                                            src="/images/cyber/cyber1.png"
                                            alt="Cyber threats illustration"
                                            className="w-full h-full object-contain max-h-[180px]"
                                        />
                                    </div>
                                </div>
                                {/* Text - Right */}
                                <div className="order-1 md:order-2 text-left">
                                    <p className="text-xs md:text-sm lg:text-base text-gray-800 leading-relaxed">
                                        <span className="font-bold">Cyber threats</span> are evolving faster than ever in 2025, challenging even the most prepared organizations. From AI-driven attacks to quantum-era vulnerabilities, the digital landscape is entering a critical phase. Discover the top five emerging threats shaping cybersecurity this year and how to stay ahead of them.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Card 2 - Red Teaming (Text Left, Image Right) */}
                        <div className="bg-gradient-to-r from-blue-100 to-blue-50 rounded-[1.5rem] md:rounded-[2rem] p-4 md:p-6 lg:p-8 shadow-lg">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 items-center">
                                {/* Text - Left */}
                                <div className="order-1 text-left">
                                    <p className="text-xs md:text-sm lg:text-base text-gray-800 leading-relaxed">
                                        As cyber threats grow more advanced, traditional security measures alone are no longer enough. <span className="font-bold">Red teaming</span> puts your defenses to the test by simulating real-world attacks before criminals do. Learn why investing in a red team can reveal unseen weaknesses and build true cyber resilience.
                                    </p>
                                </div>
                                {/* Image Container - Right */}
                                <div className="order-2">
                                    <div className="bg-white/60 backdrop-blur-sm rounded-2xl md:rounded-[1.5rem] p-4 md:p-6 flex items-center justify-center min-h-[150px] md:min-h-[180px]">
                                        <img
                                            src="/images/cyber/cyber2.png"
                                            alt="Red team vs blue team"
                                            className="w-full h-full object-contain max-h-[180px]"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Card 3 - Security-Aware Workforce (Image Left, Text Right) */}
                        <div className="bg-gradient-to-r from-blue-100 to-blue-50 rounded-[1.5rem] md:rounded-[2rem] p-4 md:p-6 lg:p-8 shadow-lg">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 items-center">
                                {/* Image Container - Left (wider/different shape) */}
                                <div className="order-2 md:order-1">
                                    <div className="bg-white/60 backdrop-blur-sm rounded-2xl md:rounded-[1.5rem] p-4 md:p-6 flex items-center justify-center min-h-[150px] md:min-h-[180px]">
                                        <img
                                            src="/images/cyber/cyber3.png"
                                            alt="Security-aware workforce"
                                            className="w-full h-full object-contain max-h-[180px]"
                                        />
                                    </div>
                                </div>
                                {/* Text - Right */}
                                <div className="order-1 md:order-2 text-left">
                                    <p className="text-xs md:text-sm lg:text-base text-gray-800 leading-relaxed">
                                        Human error remains one of the biggest cybersecurity risks facing organizations today. Building a <span className="font-bold">security-aware workforce</span> means turning every employee into a first line of defense. Discover practical strategies to create a culture where security is everyone's responsibility.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Card 4 - Incident Response (Text Left, Image Right) */}
                        <div className="bg-gradient-to-r from-blue-100 to-blue-50 rounded-[1.5rem] md:rounded-[2rem] p-4 md:p-6 lg:p-8 shadow-lg">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 items-center">
                                {/* Text - Left */}
                                <div className="order-1 text-left">
                                    <p className="text-xs md:text-sm lg:text-base text-gray-800 leading-relaxed">
                                        A swift, coordinated response to cyber incidents can mean the difference between minor disruption and a major crisis. Effective incident response planning is more crucial than ever as attacks grow in speed and sophistication. Learn how to prepare your organization for rapid recovery and ongoing resilience.
                                    </p>
                                </div>
                                {/* Image Container - Right */}
                                <div className="order-2">
                                    <div className="bg-white/60 backdrop-blur-sm rounded-2xl md:rounded-[1.5rem] p-4 md:p-6 flex items-center justify-center min-h-[150px] md:min-h-[180px]">
                                        <img
                                            src="/images/cyber/cyber4.png"
                                            alt="Cyber incident response"
                                            className="w-full h-full object-contain max-h-[180px]"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Read All Insights Button */}
                    <div className="mt-12 md:mt-16 flex justify-center">
                        <Link href="/insights">
                            <button className="px-10 py-3 bg-blue-500 hover:bg-blue-600 text-white text-xs sm:text-sm font-bold rounded-full transition uppercase tracking-wide shadow-lg hover:shadow-xl">
                                READ ALL INSIGHTS
                            </button>
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default CyberFrontlineSection;