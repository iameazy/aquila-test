import Image from 'next/image'

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
            iconAlt: 'Healthcare Icon',
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
            iconBg: 'from-blue-500 to-indigo-600',
            title: 'Healthcare',
            description: 'We help hospitals and health providers protect patient data and critical systems from breaches that could disrupt care or violate compliance standards.',
            expertise: [
                'EHR security, NDPR & HIPAA compliance, threat monitoring, ransomware defense, medical device security.'
            ]
        },
        {
            iconSrc: '/images/about/icon.6.png',
            iconAlt: 'Healthcare Icon',
            iconBg: 'from-blue-500 to-indigo-600',
            title: 'Healthcare',
            description: 'We help hospitals and health providers protect patient data and critical systems from breaches that could disrupt care or violate compliance standards.',
            expertise: [
                'EHR security, NDPR & HIPAA compliance, threat monitoring, ransomware defense, medical device security.'
            ]
        },
        {
            iconSrc: '/images/about/icon.7.png',
            iconAlt: 'Healthcare Icon',
            iconBg: 'from-blue-500 to-indigo-600',
            title: 'Healthcare',
            description: 'We help hospitals and health providers protect patient data and critical systems from breaches that could disrupt care or violate compliance standards.',
            expertise: [
                'EHR security, NDPR & HIPAA compliance, threat monitoring, ransomware defense, medical device security.'
            ]
        }
    ]

    return (
        <section className="bg-[#1a1a1a] py-16 sm:py-20">
            <div className="max-w-7xl mx-auto px-4  lg:px-40">

                
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
                            className="bg-[#2a2a2a] rounded-2xl p-6 sm:p-8 hover:bg-[#333333] transition-colors duration-300 border border-gray-700"
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
                            <div  className="bg-black rounded-xl p-4 sm:p-6">
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

            </div>
        </section>
    )
}
