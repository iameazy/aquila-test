import Image from 'next/image'
import Link from 'next/link'

export default function AboutIndustries() {
    const industries = [
        {
            iconSrc: '/images/about/icon.1.png',
            iconAlt: 'Financial Services Icon',
            iconBg: 'from-blue-400 to-blue-600',
            title: 'Financial Services',
            description: 'We help banks, fintechs, and investment firms safeguard financial data, prevent fraud, data, and digital transactions. Our approach strengthens compliance, prevents fraud, and ensures business continuity.',
            expertise: [
                'Core banking security, payment infrastructure protection, PCI-DSS & NDPR compliance, fraud detection, 24/7 monitoring.'
            ]
        },
        {
            iconSrc: '/images/about/icon.2.png',
            iconAlt: 'Government & Public Sector Icon',
            iconBg: 'from-orange-400 to-orange-600',
            title: 'Government & Public Sector',
            description: 'We work with government institutions to build resilient digital infrastructures and protect national data. From audits to incident response, we help agencies strengthen trust and operational readiness.',
            expertise: [
                'Security audits, infrastructure hardening, policy development, national data protection, threat intelligence.'
            ]
        },
        {
            iconSrc: '/images/about/icon.3.png',
            iconAlt: 'Education & Research Icon',
            iconBg: 'from-cyan-400 to-cyan-600',
            title: 'Education & Research',
            description: 'We secure academic institutions and research environments from data leaks, ransomware, and unauthorized access, while building cybersecurity awareness across staff and students.',
            expertise: [
                'Network protection, data privacy, training programs, compliance for education systems, research data integrity.'
            ]
        },
        {
            iconSrc: '/images/about/icon.4.png',
            iconAlt: 'Desktop Icon',
            iconBg: 'from-blue-500 to-indigo-600',
            title: 'Healthcare',
            description: 'We help hospitals and health providers protect patient data and critical systems from breaches that could disrupt care or violate compliance standards.',
            expertise: [
                'EHR security, NDPR & HIPAA compliance, threat monitoring, ransomware defense, medical device security.'
            ]
        },
        {
            iconSrc: '/images/about/icon.5.png',
            iconAlt: 'Healthcare Icon',
            iconBg: 'from-orange-400 to-orange-600',
            title: 'Technology & Startups',
            description: "For growing tech companies, speed often outweighs security — until it's too late. We help startups embed security from day one to prevent data breaches and reputational risks.",
            expertise: [
                'Application testing, API & cloud security, DevSecOps integration, architecture reviews, continuous monitoring..'
            ]
        },
        {
            iconSrc: '/images/about/icon.6.png',
            iconAlt: 'Energy Icon',
            iconBg: 'from-cyan-400 to-cyan-600',
            title: 'Energy & Critical Infrastructure',
            description: 'We protect the systems that power nations. Our solutions reduce cyber risks to industrial control systems and ensure operational continuity even under attack..',
            expertise: [
                'ICS/SCADA security, network segmentation, risk management, real-time threat detection, continuity planning.'
            ]
        },
        {
            iconSrc: '/images/about/icon.7.png',
            iconAlt: 'Network Icon',
            iconBg: 'from-blue-500 to-indigo-600',
            title: 'Telecommunications',
            description: 'Telecom networks demand uninterrupted performance and strong data integrity. We deliver solutions that keep networks secure, compliant, and resilient.',
            expertise: [
                'Network security, SOC management, data loss prevention, customer data protection, compliance support.'
            ]
        }
    ]

    return (
        <section className="py-12 xs:py-14 sm:py-16 md:py-18 lg:py-20 relative">

            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src="/images/about/about-image.png"
                    alt="Background"
                    fill
                    className="object-cover object-[center_80%]"
                    priority
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-40">

                {/* Header */}
                <div className="text-center mb-10 xs:mb-12 sm:mb-14 md:mb-16">
                    <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-white mb-3 xs:mb-4">
                        INDUSTRIES WE SERVE
                    </h2>
                    <p className="text-xs xs:text-sm sm:text-base text-gray-400 mb-4 xs:mb-5 sm:mb-6">
                        Specialized Expertise Across Critical Sectors
                    </p>
                    <p className="text-xs xs:text-sm sm:text-base text-gray-300 max-w-4xl mx-auto leading-relaxed">
                        At AlturaCyber, we understand that every industry faces unique cybersecurity challenges. Our experts combine deep technical insight with industry-specific knowledge to deliver protection that's practical, scalable, and built for your reality.
                    </p>
                </div>

                {/* Industries Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xs:gap-5 sm:gap-6 md:gap-7 lg:gap-8">
                    {industries.map((industry, index) => (
                        <div
                            key={index}
                            className="bg-[#2a2a2a]/35 rounded-xl xs:rounded-2xl p-4 xs:p-5 sm:p-6 md:p-7 lg:p-8 hover:bg-[#333333] transition-colors duration-300 border border-gray-700"
                        >
                            {/* Icon and Title */}
                            <div className="flex items-start gap-3 xs:gap-4 mb-3 xs:mb-4">
                                {/* Icon with Image */}
                                <div className={`flex-shrink-0 w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 bg-gradient-to-br ${industry.iconBg} rounded-lg xs:rounded-xl flex items-center justify-center shadow-lg p-2 xs:p-2.5`}>
                                    <Image
                                        src={industry.iconSrc}
                                        alt={industry.iconAlt}
                                        width={40}
                                        height={40}
                                        className="object-contain"
                                        sizes="(max-width: 640px) 40px, (max-width: 768px) 48px, 56px"
                                    />
                                </div>

                                {/* Title */}
                                <h3 className="text-base xs:text-lg sm:text-xl md:text-2xl font-bold text-white mt-1 xs:mt-2">
                                    {industry.title}
                                </h3>
                            </div>

                            {/* Description */}
                            <p className="text-xs xs:text-sm sm:text-base text-gray-300 mb-4 xs:mb-5 sm:mb-6 leading-relaxed">
                                {industry.description}
                            </p>

                            {/* Expertise Section */}
                            <div className="bg-black rounded-lg xs:rounded-xl p-3 xs:p-4 sm:p-6">
                                <h4 className="text-xs xs:text-sm font-bold text-white mb-2 xs:mb-3">
                                    Expertise:
                                </h4>
                                <div className="space-y-1.5 xs:space-y-2">
                                    {industry.expertise.map((item, itemIndex) => (
                                        <p key={itemIndex} className="text-xs xs:text-sm text-gray-400 leading-relaxed">
                                            {item}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer Text */}
                <div>
                    <div>
                        <p className="mt-20 xs:mt-24 sm:mt-28 md:mt-32 lg:mt-36 max-w-2xl mx-auto text-center text-xs xs:text-sm sm:text-base text-gray-200">
                            AlturaCyber partners with industries that can't afford downtime, breaches, or reputational loss. Our mission is to help every client operate with confidence in a connected, threat-driven world.
                        </p>
                    </div>

                    <div className="mt-20 xs:mt-24 sm:mt-28 md:mt-32 lg:mt-36 max-w-2xl mx-auto text-center">
                        <h3 className="text-xl xs:text-2xl sm:text-2xl font-bold text-white mb-3 xs:mb-4">
                            Ready to Strengthen Your Cyber Resilience?
                        </h3>
                        <p className="text-xs xs:text-sm sm:text-base text-gray-200">
                            Partner with AlturaCyber today and take control of your organization's digital security.
                        </p>
                    </div>

                    {/* ORIGINAL BUTTONS - NO CHANGES */}
                    <div className='mt-10 flex justify-center gap-5'>
                        <button className='bg-orange-500 text-white px-6 py-2 rounded-full'>Get Free Consultation</button>
                        <button className='border text-white px-4 py-2 rounded-full'>Learn More</button>
                    </div>

                    {/* Mobile Footer */}
                    <div className="lg:hidden mt-20 xs:mt-24 sm:mt-28 md:mt-32 bg-black/80 backdrop-blur-sm rounded-2xl p-6 xs:p-8 mx-4">
                        {/* Logo/Shield */}
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-8 h-8 xs:w-10 xs:h-10 border-2 border-white rounded-lg flex items-center justify-center">
                                <svg className="w-5 h-5 xs:w-6 xs:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <span className="text-lg xs:text-xl font-bold text-white">AlturaCyber</span>
                        </div>

                        {/* Tagline */}
                        <h3 className="text-base xs:text-lg font-bold text-white mb-4">
                            AlturaCyber — Protecting What Matters Most
                        </h3>

                        {/* Description */}
                        <p className="text-xs xs:text-sm text-gray-300 mb-8 leading-relaxed">
                            AlturaCyber is a cybersecurity agency delivering end-to-end protection and digital resilience for businesses
                        </p>

                        {/* Links Grid */}
                        <div className="grid grid-cols-2 gap-x-8 gap-y-4 mb-8">
                            {/* Column 1 */}
                            <div className="space-y-4">
                                {['Home', 'About', 'Services', 'Blog', 'Careers', 'Contact'].map((link) => (
                                    <Link key={link} href={`/${link.toLowerCase()}`}>
                                        <span className="block text-sm xs:text-base text-white hover:text-gray-300 transition-colors">
                                            {link}
                                        </span>
                                    </Link>
                                ))}
                            </div>

                            {/* Column 2 */}
                            <div className="space-y-4">
                                <span className="block text-sm xs:text-base text-white">LinkedIn</span>
                                <span className="block text-sm xs:text-base text-white">X (Twitter)</span>
                            </div>
                        </div>

                        {/* Contact & Legal Grid */}
                        <div className="grid grid-cols-2 gap-x-8 gap-y-4 mb-8">
                            {/* Column 1 */}
                            <div className="space-y-4">
                                <p className="text-sm xs:text-base font-semibold text-white">Email</p>
                                <p className="text-sm xs:text-base font-semibold text-white">Phone</p>
                                <p className="text-sm xs:text-base font-semibold text-white">Address</p>
                            </div>

                            {/* Column 2 */}
                            <div className="space-y-4">
                                <span className="block text-sm xs:text-base text-white">Privacy Policy</span>
                                <span className="block text-sm xs:text-base text-white">Terms of Service</span>
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="space-y-3">
                            <button className="w-full flex items-center justify-center gap-2 px-5 py-3 border-2 border-gray-600 hover:border-gray-500 rounded-full text-sm text-gray-200 transition-colors bg-transparent">
                                <span>🌐</span>
                                <span className="font-medium">Language</span>
                            </button>
                            <Link href="/contact" className="block">
                                <button className="w-full px-6 py-3 bg-[#ff8c42] hover:bg-orange-600 text-black text-sm font-bold rounded-full uppercase transition-colors shadow-lg tracking-wide">
                                    CONSULTATION
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* Desktop Footer - NO CHANGES */}
                    <div className="hidden lg:block mt-36">
                        {/* 4 Column Grid */}
                        <div className="grid grid-cols-4 gap-12 mb-18">

                            {/* Column 1 - Brand */}
                            <div className="text-left -ml-40">
                                <h3 className="text-4xl font-bold text-white drop-shadow-lg leading-tight inline">
                                    AlturaCyber
                                </h3>
                                <h3 className="text-4xl font-bold text-white drop-shadow-lg leading-tight inline">
                                    —
                                </h3>
                                <p className="text-2xl font-bold text-gray-200 drop-shadow leading-relaxed">
                                    Protecting What <br />Matters Most
                                </p>
                            </div>

                            {/* Column 2 - Navigation Links */}
                            <div className="text-left">
                                <div className="flex flex-col gap-14 ml-24">
                                    {['Home', 'About', 'Services', 'Blog', 'Careers', 'Contact'].map((link) => (
                                        <Link key={link} href={`/${link.toLowerCase()}`}>
                                            <span className="block text-base font-medium text-white hover:text-gray-300 transition-colors duration-200 drop-shadow">
                                                {link}
                                            </span>
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            {/* Column 3 - Social & Legal */}
                            <div className="text-left">
                                <div className="flex flex-col gap-14 ml-16">
                                    {[
                                        { name: 'LinkedIn' },
                                        { name: 'X (Twitter)' },
                                        { name: 'Privacy Policy' },
                                        { name: 'Terms of Service' }
                                    ].map((link, index) => (
                                        <span
                                            key={index}
                                            className="block text-base font-medium text-white drop-shadow"
                                        >
                                            {link.name}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Column 4 - Contact Info */}
                            <div className="text-left">
                                <div className="flex flex-col gap-14 ml-32">
                                    {['Email', 'Phone', 'Address'].map((item) => (
                                        <p key={item} className="text-base font-semibold text-white drop-shadow">
                                            {item}
                                        </p>
                                    ))}
                                </div>
                            </div>

                        </div>

                        {/* Bottom Bar - Desktop */}
                        <div className="pt-44">
                            <div className="flex flex-row justify-between items-center gap-6">
                                <p className="text-xs text-gray-300 drop-shadow">
                                    AlturaCyber is a cybersecurity agency delivering end-to-end protection and digital resilience for businesses
                                </p>

                                <div className="flex gap-3 items-center flex-shrink-0">
                                    <button className="flex items-center gap-2 px-5 py-2.5 border-2 border-gray-600 hover:border-gray-500 rounded-full text-xs text-gray-200 transition-colors duration-200 bg-black/30 backdrop-blur-sm">
                                        <span>🌐</span>
                                        <span className="font-medium">Language</span>
                                    </button>
                                    <Link href="/contact">
                                        <button className="px-6 py-2.5 bg-[#ff8c42] hover:bg-orange-600 text-black text-xs font-bold rounded-full uppercase transition-colors duration-300 shadow-lg tracking-wide">
                                            Consultation
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}