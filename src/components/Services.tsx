'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform, useInView, useMotionValue, useSpring } from 'framer-motion'

export default function Services() {
    const services = [
        {
            icon: '/images/services/icon1.png',
            title: 'Penetration Testing',
            description: 'Identify and fix vulnerabilities before attackers do. Our experts simulate real-world attacks to uncover hidden security gaps.',
            image: '/images/services/image1.png',
            alt: 'Penetration Testing Code',
            color: '#FF6B6B'
        },
        {
            icon: '/images/services/icon2.png',
            title: 'Risk & Compliance Advisory',
            description: 'Meet global standards like ISO 27001 and GDPR. We help you navigate complex regulations and maintain continuous compliance.',
            image: '/images/services/image2.png',
            alt: 'Risk & Compliance Dashboard',
            color: '#4ECDC4'
        },
        {
            icon: '/images/services/icon3.png',
            title: 'Incident Response & SOC',
            description: 'Continuous threat monitoring and rapid recovery. Minimize downtime and protect your business with proactive defense and swift action.',
            image: '/images/services/image3.png',
            alt: 'Incident Response SOC Monitors',
            color: '#45B7D1'
        },
        {
            icon: '/images/services/icon4.png',
            title: 'Cybersecurity Training',
            description: 'Empower your teams through the AquilaCyber learning network. Build a security-first culture that strengthens your organization from within.',
            image: '/images/services/image4.png',
            alt: 'Cybersecurity Training Session',
            color: '#F7B731'
        }
    ]

    const [isMounted, setIsMounted] = useState(false)
    const [imageErrors, setImageErrors] = useState<number[]>([])
    const [imageLoaded, setImageLoaded] = useState<number[]>([])
    const sectionRef = useRef(null)
    const buttonRef = useRef(null)
    const isButtonInView = useInView(buttonRef, { once: true })

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    })

    useEffect(() => {
        setIsMounted(true)
    }, [])

    const handleImageError = (index: number) => {
        setImageErrors((prev) => [...prev, index])
        console.error(`Failed to load image at index ${index}`)
    }

    const handleImageLoad = (index: number) => {
        setImageLoaded((prev) => [...prev, index])
    }

    return (
        <section ref={sectionRef} id='services' className="relative w-full bg-gray-50 py-16 sm:py-20 lg:py-24 overflow-hidden">
            {/* Animated Background Elements */}
            {isMounted && (
                <>
                    {/* Gradient Orbs */}
                    <motion.div
                        className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
                        animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0.3, 0.6, 0.3],
                            x: [0, 50, 0],
                        }}
                        transition={{ duration: 10, repeat: Infinity }}
                    />
                    <motion.div
                        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
                        animate={{
                            scale: [1.3, 1, 1.3],
                            opacity: [0.6, 0.3, 0.6],
                            x: [0, -50, 0],
                        }}
                        transition={{ duration: 10, repeat: Infinity }}
                    />

                    {/* Floating Grid Pattern */}
                    <motion.div
                        className="absolute inset-0 opacity-[0.02]"
                        style={{
                            backgroundImage: `
                                linear-gradient(rgba(59, 130, 246, 0.5) 1px, transparent 1px),
                                linear-gradient(90deg, rgba(59, 130, 246, 0.5) 1px, transparent 1px)
                            `,
                            backgroundSize: '60px 60px',
                        }}
                        animate={{
                            backgroundPosition: ['0px 0px', '60px 60px']
                        }}
                        transition={{
                            duration: 30,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    />

                    {/* Floating Particles */}
                    <div className="absolute inset-0 pointer-events-none">
                        {[...Array(20)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute w-1 h-1 bg-blue-500/20 rounded-full"
                                initial={{
                                    x: Math.random() * 100 + '%',
                                    y: Math.random() * 100 + '%',
                                }}
                                animate={{
                                    y: [null, `${Math.random() * 100}%`],
                                    x: [null, `${Math.random() * 100}%`],
                                    opacity: [0, 1, 0],
                                    scale: [0, 1.5, 0],
                                }}
                                transition={{
                                    duration: Math.random() * 15 + 10,
                                    repeat: Infinity,
                                    ease: "linear"
                                }}
                            />
                        ))}
                    </div>
                </>
            )}

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.h2 
                        className="text-4xl sm:text-5xl font-bold text-dark mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Our Services
                    </motion.h2>
                    <motion.div
                        className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    />
                </motion.div>

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
                            isMounted={isMounted}
                        />
                    ))}
                </div>

                {/* View All Services Button with Magnetic Effect */}
                <motion.div
                    ref={buttonRef}
                    className="mt-12 sm:mt-16 flex justify-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isButtonInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
                    <Link href="/services">
                        <MagneticButton />
                    </Link>
                </motion.div>
            </div>
        </section>
    )
}

// Service Card Component with Advanced Animations
function ServiceCard({ service, index, imageErrors, imageLoaded, handleImageError, handleImageLoad, isMounted }: any) {
    const cardRef = useRef(null)
    const isInView = useInView(cardRef, { once: true, amount: 0.2 })
    
    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ["start end", "end start"]
    })

    const y = useTransform(scrollYProgress, [0, 1], [50, -50])

    return (
        <motion.div
            ref={cardRef}
            className="relative"
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: index * 0.2 }}
        >
            {/* Animated Border Card */}
            <motion.div
                className="absolute inset-0 rounded-2xl"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 1, delay: index * 0.2 + 0.3 }}
            >
                <motion.div
                    className="absolute inset-0 rounded-2xl"
                    style={{
                        background: `linear-gradient(45deg, ${service.color}20, transparent)`,
                    }}
                    animate={{
                        opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                />
            </motion.div>

            <motion.div
                className="relative bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-shadow duration-500 group"
                whileHover={{ y: -5 }}
                style={{ y }}
            >
                {/* Hover Glow Effect */}
                <motion.div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                        background: `radial-gradient(circle at 50% 50%, ${service.color}15, transparent 70%)`,
                    }}
                />

                {/* Corner Accents */}
                {[0, 1, 2, 3].map((i) => (
                    <motion.div
                        key={i}
                        className="absolute w-4 h-4 border-2"
                        style={{
                            borderColor: service.color,
                            top: i < 2 ? 0 : 'auto',
                            bottom: i >= 2 ? 0 : 'auto',
                            left: i % 2 === 0 ? 0 : 'auto',
                            right: i % 2 === 1 ? 0 : 'auto',
                            borderTop: i < 2 ? `2px solid ${service.color}` : 'none',
                            borderBottom: i >= 2 ? `2px solid ${service.color}` : 'none',
                            borderLeft: i % 2 === 0 ? `2px solid ${service.color}` : 'none',
                            borderRight: i % 2 === 1 ? `2px solid ${service.color}` : 'none',
                        }}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={isInView ? { scale: 1, opacity: 1 } : {}}
                        transition={{ duration: 0.5, delay: index * 0.2 + 0.5 + i * 0.1 }}
                    />
                ))}

                <div className="space-y-6 relative z-10">
                    {/* Header Section - Icon, Title, Description */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                        {/* Icon + Title */}
                        <div className="md:col-span-5 flex items-start space-x-4">
                            {/* Animated Icon Container */}
                            <motion.div
                                className="flex-shrink-0 w-12 h-12 relative"
                                initial={{ scale: 0, rotate: -180 }}
                                animate={isInView ? { scale: 1, rotate: 0 } : {}}
                                transition={{ 
                                    type: "spring",
                                    stiffness: 200,
                                    delay: index * 0.2 + 0.3 
                                }}
                                whileHover={{ 
                                    scale: 1.2, 
                                    rotate: 360,
                                    transition: { duration: 0.6 }
                                }}
                            >
                                {/* Icon Glow */}
                                <motion.div
                                    className="absolute inset-0 rounded-full blur-lg"
                                    style={{ backgroundColor: service.color }}
                                    animate={{ opacity: [0.3, 0.6, 0.3] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                />
                                
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

                                {/* Orbiting Particles */}
                                {isMounted && [0, 1, 2].map((i) => (
                                    <motion.div
                                        key={i}
                                        className="absolute w-1 h-1 rounded-full"
                                        style={{ backgroundColor: service.color }}
                                        animate={{
                                            x: [
                                                Math.cos((i / 3) * Math.PI * 2) * 30,
                                                Math.cos((i / 3) * Math.PI * 2 + Math.PI * 2) * 30,
                                            ],
                                            y: [
                                                Math.sin((i / 3) * Math.PI * 2) * 30,
                                                Math.sin((i / 3) * Math.PI * 2 + Math.PI * 2) * 30,
                                            ],
                                        }}
                                        transition={{
                                            duration: 4,
                                            repeat: Infinity,
                                            ease: "linear",
                                            delay: i * 0.4,
                                        }}
                                    />
                                ))}
                            </motion.div>

                            {/* Title with gradient on hover */}
                            <motion.h3
                                className="text-2xl sm:text-3xl font-bold text-dark group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500"
                                initial={{ opacity: 0, x: -20 }}
                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                            >
                                {service.title}
                            </motion.h3>
                        </div>

                        {/* Description */}
                        <motion.div
                            className="md:col-span-7"
                            initial={{ opacity: 0, x: 20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
                        >
                            <p className="text-sm sm:text-base text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
                                {service.description}
                            </p>
                        </motion.div>
                    </div>

                    {/* Image Section with Advanced Effects */}
                    <motion.div
                        className="w-full relative rounded-xl overflow-hidden shadow-xl group/image"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.8, delay: index * 0.2 + 0.6 }}
                        whileHover={{ 
                            scale: 1.02,
                            boxShadow: `0 20px 40px ${service.color}30`
                        }}
                    >
                        {/* Animated Border Frame */}
                        <motion.div
                            className="absolute inset-0 z-20 pointer-events-none"
                            initial={{ opacity: 0 }}
                            whileHover={{ opacity: 1 }}
                        >
                            <svg className="absolute inset-0 w-full h-full" style={{ stroke: service.color }}>
                                <motion.rect
                                    x="2"
                                    y="2"
                                    width="calc(100% - 4px)"
                                    height="calc(100% - 4px)"
                                    fill="none"
                                    strokeWidth="2"
                                    rx="12"
                                    initial={{ pathLength: 0 }}
                                    whileHover={{ pathLength: 1 }}
                                    transition={{ duration: 1 }}
                                />
                            </svg>
                        </motion.div>

                        {/* Fixed aspect ratio container */}
                        <div className="relative w-full bg-gray-200" style={{ paddingBottom: '42.85%' }}>
                            {/* Loading skeleton */}
                            {!imageLoaded.includes(index) && !imageErrors.includes(index) && (
                                <div className="absolute inset-0 bg-gray-300 animate-pulse">
                                    <div className="flex items-center justify-center h-full">
                                        <motion.div
                                            className="text-gray-500"
                                            animate={{ opacity: [0.5, 1, 0.5] }}
                                            transition={{ duration: 1.5, repeat: Infinity }}
                                        >
                                            Loading...
                                        </motion.div>
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

                            {/* Actual image with zoom effect */}
                            <motion.div
                                className={`absolute inset-0 ${imageLoaded.includes(index) ? 'opacity-100' : 'opacity-0'}`}
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.6 }}
                            >
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
                            </motion.div>

                            {/* Scan line effect */}
                            {isMounted && (
                                <motion.div
                                    className="absolute inset-x-0 h-px z-10 pointer-events-none"
                                    style={{
                                        background: `linear-gradient(90deg, transparent, ${service.color}, transparent)`,
                                    }}
                                    animate={{
                                        top: ['0%', '100%']
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: "linear",
                                        repeatDelay: 2
                                    }}
                                />
                            )}

                            {/* Color overlay on hover */}
                            <motion.div
                                className="absolute inset-0 pointer-events-none z-10"
                                style={{ backgroundColor: service.color }}
                                initial={{ opacity: 0 }}
                                whileHover={{ opacity: 0.15 }}
                                transition={{ duration: 0.3 }}
                            />
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </motion.div>
    )
}

// Magnetic Button Component
function MagneticButton() {
    const buttonRef = useRef<HTMLButtonElement>(null)
    const x = useMotionValue(0)
    const y = useMotionValue(0)
    const springConfig = { damping: 25, stiffness: 150 }
    const xSpring = useSpring(x, springConfig)
    const ySpring = useSpring(y, springConfig)

    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (!buttonRef.current) return
        const rect = buttonRef.current.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2
        x.set((e.clientX - centerX) * 0.3)
        y.set((e.clientY - centerY) * 0.3)
    }

    const handleMouseLeave = () => {
        x.set(0)
        y.set(0)
    }

    return (
        <motion.button
            ref={buttonRef}
            className="px-12 py-4 bg-blue-500 text-white text-sm font-bold rounded-full uppercase tracking-wide relative overflow-hidden group"
            style={{ x: xSpring, y: ySpring }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            <span className="relative z-10">VIEW ALL SERVICES</span>

            {/* Shimmer effect */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20"
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
            />

            {/* Expanding circle on hover */}
            <motion.div
                className="absolute inset-0 bg-blue-600 rounded-full"
                initial={{ scale: 0 }}
                whileHover={{ scale: 2 }}
                transition={{ duration: 0.6 }}
            />

            {/* Particles */}
            {[...Array(6)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-white rounded-full"
                    style={{
                        left: '50%',
                        top: '50%',
                    }}
                    animate={{
                        x: [0, Math.cos((i / 6) * Math.PI * 2) * 40],
                        y: [0, Math.sin((i / 6) * Math.PI * 2) * 40],
                        opacity: [1, 0],
                        scale: [0, 1],
                    }}
                    transition={{
                        duration: 1,
                        repeat: Infinity,
                        delay: i * 0.1,
                        repeatDelay: 1,
                    }}
                />
            ))}
        </motion.button>
    )
}