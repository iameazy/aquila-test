'use client'
import Link from 'next/link'
import Image from 'next/image'

export default function CaseStudies() {
    const caseStudies = [
        {
            icon: '/images/case/case-icon1.png',
            title: 'Banking Sector Resilience',
            description: 'A leading financial institution sought to strengthen its cybersecurity framework. Through penetration testing and SOC integration, we reduced incident response time by 60% and safeguarded millions of customer transactions daily.',
            bgColor: 'bg-slate-700',
        },
        {
            icon: '/images/case/case-icon2.png',
            title: 'Telecom Network Protection',
            description: 'We partnered with a global telecommunications provider to identify and close vulnerabilities across its nationwide infrastructure. Our risk assessments and continuous monitoring improved system uptime and ensured compliance with international data protection standards.',
            bgColor: 'bg-slate-700',
        },
        {
            icon: '/images/case/case-icon3.png',
            title: 'Government Digital Transformation',
            description: 'Supporting a national digital service rollout, we implemented advanced security controls and staff training programs. This initiative bolstered cyber readiness, secured public data, and built capacity for ongoing self-assessment and threat response.',
            bgColor: 'bg-slate-700',
        }
    ]

    return (
        <section className="relative w-full bg-white overflow-hidden">
            {/* Curved transition */}
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
                    {/* Header */}
                    <div className="text-center mb-12 sm:mb-16">

                        {/* Title */}
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                            Proven Results,
                            <br />
                            Trusted Partnerships
                        </h2>

                        {/* Counter */}
                        <div className="text-white text-sm sm:text-base mb-8 flex items-center justify-center gap-2">
                            <span className="text-4xl font-bold text-white">
                                15+
                            </span>
                            <span>security assessments completed</span>
                        </div>

                        {/* Button */}
                        <div>
                            <Link href="/case-studies">
                                <button className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold rounded-full transition-colors duration-300">
                                    <span className="uppercase tracking-wide">VIEW CASE STUDIES</span>
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* Case Study Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
                        {/* First two cards */}
                        {caseStudies.slice(0, 2).map((study, index) => (
                            <CaseStudyCard
                                key={index}
                                study={study}
                            />
                        ))}

                        {/* Third card centered */}
                        <div className="md:col-span-2 flex justify-center">
                            <CaseStudyCard
                                study={caseStudies[2]}
                                className="w-full md:max-w-md lg:max-w-lg"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

// Card Component - Clean and simple
function CaseStudyCard({ study, className = "" }: any) {
    return (
        <div className={`relative ${className}`}>
            <div className={`${study.bgColor} rounded-2xl p-6 sm:p-8 relative overflow-hidden hover:shadow-2xl transition-shadow duration-300`}>
                {/* Content */}
                <div className="relative z-10">
                    {/* Icon */}
                    <div className="w-12 h-12 sm:w-14 sm:h-14 mb-4 relative">
                        <Image
                            src={study.icon}
                            alt={study.title}
                            fill
                            className="object-contain"
                        />
                    </div>

                    {/* Title */}
                    <h3 className="text-white text-lg sm:text-xl font-bold mb-3">
                        {study.title}
                    </h3>

                    {/* Description */}
                    <p className="text-white text-sm sm:text-base leading-relaxed">
                        {study.description}
                    </p>
                </div>
            </div>
        </div>
    )
}