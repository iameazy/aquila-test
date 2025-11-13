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
        <section className="py-16 sm:py-20 relative">

            {/* Background Image - Fixed */}
            <div className="absolute inset-0">
                <Image
                    src="/images/about/about-image.png"
                    alt="Background"
                    fill
                    className="object-cover object-[center_80%]"
                    priority
                />
                {/* Add this line below */}
               
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4  lg:px-40">

                {/* Header */}
                <div className="text-center mb-12 lg:mb-16">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                        INDUSTRIES WE SERVE
                    </h2>
                    <p className="text-sm sm:text-base text-gray-400 mb-6">
                        Specialized Expertise Across Critical Sectors
                    </p>
                    <p className="text-sm sm:text-base text-gray-300 max-w-4xl mx-auto leading-relaxed">
                        At AlturaCyber, we understand that every industry faces unique cybersecurity challenges. Our experts combine deep technical insight with industry-specific knowledge to deliver protection that's practical, scalable, and built for your reality.
                    </p>
                </div>

                {/* Industries Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {industries.map((industry, index) => (
                        <div
                            key={index}
                            className="bg-[#2a2a2a]/35  rounded-2xl p-6 sm:p-8 hover:bg-[#333333] transition-colors duration-300 border border-gray-700"
                        >
                            {/* Icon and Title */}
                            <div className="flex items-start gap-4 mb-4">
                                {/* Icon with Image */}
                                <div className={`flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br ${industry.iconBg} rounded-xl flex items-center justify-center shadow-lg p-2.5`}>
                                    <Image
                                        src={industry.iconSrc}
                                        alt={industry.iconAlt}
                                        width={40}
                                        height={40}
                                        className="object-contain"
                                    />
                                </div>

                                {/* Title */}
                                <h3 className="text-xl sm:text-2xl font-bold text-white mt-2">
                                    {industry.title}
                                </h3>
                            </div>

                            {/* Description */}
                            <p className="text-sm sm:text-base text-gray-300 mb-6 leading-relaxed">
                                {industry.description}
                            </p>

                            {/* Expertise Section */}
                            <div className="bg-black rounded-xl p-4 sm:p-6">
                                <h4 className="text-sm font-bold text-white mb-3">
                                    Expertise:
                                </h4>
                                <div className="space-y-2">
                                    {industry.expertise.map((item, itemIndex) => (
                                        <p key={itemIndex} className="text-sm text-gray-400 leading-relaxed">
                                            {item}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer */}
                <div>
                    <div>
                        <p className="mt-36 max-w-2xl mx-auto text-center">
                            AlturaCyber partners with industries that can't afford downtime, breaches, or reputational loss. Our mission is to help every client operate with confidence in a connected, threat-driven world.
                        </p>
                    </div>

                    <div className="mt-36 max-w-2xl mx-auto text-center">
                        <h3 className=''>
                            Ready to Strengthen Your Cyber Resilience?
                        </h3>
                        <p>Partner with AlturaCyber today and take control of your organization's digital security.</p>
                    </div>
                    <div className='mt-10 flex justify-center gap-5'>
                        <button className='bg-orange-500 text-white px-6 py-2 rounded-full'>Get Free Consultation</button>
                        <button className='border text-white px-4 py-2 rounded-full'>Learn More</button>
                    </div>

                    {/* Footer - Desktop */}
                    <div className="hidden lg:block mt-36">
                        {/* 4 Column Grid */}
                        <div className="grid grid-cols-4 gap-12 mb-18">

                            {/* Column 1 - Brand */}
                            <div className="text-left">
                                <h3 className="text-4xl font-bold text-white drop-shadow-lg leading-tight inline">
                                    AlturaCyber 
                                </h3>
                                <h3 className="text-4xl font-bold text-white drop-shadow-lg leading-tight inline">
                                     —
                                </h3>
                                <p className="text-2xl font-bold text-gray-200 drop-shadow leading-relaxed">
                                    Protecting What Matters Most
                                </p>
                            </div>

                            {/* Column 2 - Navigation Links */}

                            <div className="text-left">
                                <div className="flex flex-col gap-14 ml-44">
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
                                <div className="flex flex-col gap-14 ml-44">
                                    {[
                                        { name: 'LinkedIn', url: 'https://linkedin.com' },
                                        { name: 'X (Twitter)', url: 'https://twitter.com' },
                                        { name: 'Privacy Policy', url: '/privacy' },
                                        { name: 'Terms of Service', url: '/terms' }
                                    ].map((link) => (
                                        <Link key={link.name} href={link.url}>
                                            <span className="block text-base font-medium text-white hover:text-gray-300 transition-colors duration-200 drop-shadow">
                                                {link.name}
                                            </span>
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            {/* Column 4 - Contact Info */}
                            <div className="text-left">
                                <div className="flex flex-col gap-14 ml-44">
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
