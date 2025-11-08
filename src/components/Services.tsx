'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Services() {
    const services = [
        {
            icon: '/images/services/icon1.png',
            title: 'Penetration Testing',
            description: 'Identify and fix vulnerabilities before attackers do. Our experts simulate real-world attacks to uncover hidden security gaps.',
            image: '/images/services/image1.png',
            alt: 'Penetration Testing Code',
        },
        {
            icon: '/images/services/icon2.png',
            title: 'Risk & Compliance Advisory',
            description: 'Meet global standards like ISO 27001 and GDPR. We help you navigate complex regulations and maintain continuous compliance.',
            image: '/images/services/image2.png',
            alt: 'Risk & Compliance Dashboard',
        },
        {
            icon: '/images/services/icon3.png',
            title: 'Incident Response & SOC',
            description: 'Continuous threat monitoring and rapid recovery. Minimize downtime and protect your business with proactive defense and swift action.',
            image: '/images/services/image3.png',
            alt: 'Incident Response SOC Monitors',
        },
        {
            icon: '/images/services/icon4.png',
            title: 'Cybersecurity Training',
            description: 'Empower your teams through the AquilaCyber learning network. Build a security-first culture that strengthens your organization from within.',
            image: '/images/services/image4.png',
            alt: 'Cybersecurity Training Session',
        }
    ]

    const [imageErrors, setImageErrors] = useState<number[]>([])
    const [imageLoaded, setImageLoaded] = useState<number[]>([])

    const handleImageError = (index: number) => {
        setImageErrors((prev) => [...prev, index])
        console.error(`Failed to load image at index ${index}`)
    }

    const handleImageLoad = (index: number) => {
        setImageLoaded((prev) => [...prev, index])
    }

    return (
        <section id='services' className="relative w-full bg-gray-50 py-16 sm:py-20 lg:py-24 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-bold text-dark mb-4">
                        Our Services
                    </h2>
                </div>

                <div className="space-y-16 sm:space-y-20 lg:space-y-24">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={index}
                            service={service}
                            index={index}
                            imageErrors={imageErrors}
                            imageLoaded={imageLoaded}
                            handleImageError={handleImageError}
                            handleImageLoad={handleImageLoad}
                        />
                    ))}
                </div>

                {/* View All Services Button */}
                <div className="mt-12 sm:mt-16 flex justify-center">
                    <Link href="/services">
                        <button className="px-12 py-4 bg-blue-500 hover:bg-blue-600 text-white text-sm font-bold rounded-full uppercase tracking-wide transition-colors duration-300">
                            VIEW ALL SERVICES
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

// Service Card Component
function ServiceCard({ service, index, imageErrors, imageLoaded, handleImageError, handleImageLoad }: any) {
    return (
        <div className="relative">
            <div className="relative bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <div className="space-y-6 relative z-10">
                    {/* Header Section - Icon, Title, Description */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                        {/* Icon + Title */}
                        <div className="md:col-span-5 flex items-start space-x-4">
                            {/* Icon Container */}
                            <div className="flex-shrink-0 w-12 h-12 relative">
                                <div className="relative z-10">
                                    <Image
                                        src={service.icon}
                                        alt={`${service.title} icon`}
                                        width={48}
                                        height={48}
                                        className="object-contain"
                                        onError={() => handleImageError(index * 10)}
                                    />
                                </div>
                            </div>

                            {/* Title */}
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

                    {/* Image Section with Zoom and Shadow */}
                    <div className="w-full relative rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 group">
                        {/* Fixed aspect ratio container */}
                        <div className="relative w-full bg-gray-200" style={{ paddingBottom: '42.85%' }}>
                            {/* Loading skeleton */}
                            {!imageLoaded.includes(index) && !imageErrors.includes(index) && (
                                <div className="absolute inset-0 bg-gray-300 animate-pulse">
                                    <div className="flex items-center justify-center h-full">
                                        <div className="text-gray-500">
                                            Loading...
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Error state */}
                            {imageErrors.includes(index) && (
                                <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
                                    <div className="text-center p-4">
                                        <svg className="w-12 h-12 mx-auto text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                        <p className="text-sm text-gray-500">Image not available</p>
                                    </div>
                                </div>
                            )}

                            {/* Actual image with zoom effect on hover */}
                            <div className={`absolute inset-0 transition-transform duration-500 group-hover:scale-110 ${imageLoaded.includes(index) ? 'opacity-100' : 'opacity-0'}`}>
                                <Image
                                    src={service.image}
                                    alt={service.alt}
                                    fill
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px"
                                    className="object-cover"
                                    loading={index === 0 ? 'eager' : 'lazy'}
                                    quality={85}
                                    onLoad={() => handleImageLoad(index)}
                                    onError={() => handleImageError(index)}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}