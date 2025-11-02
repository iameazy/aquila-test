'use client'
import Image from 'next/image'
import Link from 'next/link'

export default function Services() {
    const services = [
        {
            icon: '/images/services/icon1.png', // Replace with your icon
            title: 'Penetration Testing',
            description: 'Identify and fix vulnerabilities before attackers do. Our experts simulate real-world attacks to uncover hidden security gaps.',
            image: '/images/services/image1.png',
            alt: 'Penetration Testing Code'
        },
        {
            icon: '/images/services/icon2.png', // Replace with your icon
            title: 'Risk & Compliance Advisory',
            description: 'Meet global standards like ISO 27001 and GDPR. We help you navigate complex regulations and maintain continuous compliance.',
            image: '/images/services/image2.png',
            alt: 'Risk & Compliance Dashboard'
        },
        {
            icon: '/images/services/icon3.png', // Replace with your icon
            title: 'Incident Response & SOC',
            description: 'Continuous threat monitoring and rapid recovery. Minimize downtime and protect your business with proactive defense and swift action.',
            image: '/images/services/image3.png',
            alt: 'Incident Response SOC Monitors'
        },
        {
            icon: '/images/services/icon4.png', // Replace with your icon
            title: 'Cybersecurity Training',
            description: 'Empower your teams through the AquilaCyber learning network. Build a security-first culture that strengthens your organization from within.',
            image: '/images/services/image4.png',
            alt: 'Cybersecurity Training Session'
        }
    ]

    return (
        <section className="relative w-full bg-gray-50 py-16 sm:py-20 lg:py-24">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="space-y-16 sm:space-y-20 lg:space-y-24">
                    {services.map((service, index) => (
                        <div key={index} className="space-y-6">
                            {/* Header Section - Icon, Title, Description */}
                            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                                {/* Icon + Title */}
                                <div className="md:col-span-5 flex items-start space-x-4">
                                    <div className="flex-shrink-0 w-12 h-12 relative">
                                        {/* Placeholder icon - replace with your actual icon images */}
                                        <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                                            <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <h3 className="text-2xl sm:text-3xl font-bold text-dark">
                                        {service.title}
                                    </h3>
                                </div>

                                {/* Description */}
                                <div className="md:col-span-7">
                                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>
                            </div>

                            {/* Image Section */}
                            <div className="w-full h-64 sm:h-80 md:h-96 relative rounded-lg overflow-hidden shadow-lg">
                                <Image
                                    src={service.image}
                                    alt={service.alt}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All Services Button */}
                <div className="mt-12 sm:mt-16 flex justify-center">
                    <Link href="/services">
                        <button className="px-12 py-4 bg-blue-500 hover:bg-blue-600 text-white text-sm font-bold rounded-full transition uppercase tracking-wide">
                            VIEW ALL SERVICES
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    )
}