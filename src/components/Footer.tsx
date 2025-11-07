'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform, useInView, useMotionValue } from 'framer-motion'

export default function CTAFooter() {
    const [isMounted, setIsMounted] = useState(false)
    const [email, setEmail] = useState('')
    const [isFocused, setIsFocused] = useState(false)
    
    const sectionRef = useRef<HTMLElement>(null)
    const headerRef = useRef<HTMLDivElement>(null)
    const formRef = useRef<HTMLDivElement>(null)
    const imageRef = useRef<HTMLDivElement>(null)
    const footerRef = useRef<HTMLDivElement>(null)

    const isHeaderInView = useInView(headerRef, { once: true, amount: 0.3 })
    const isFormInView = useInView(formRef, { once: true, amount: 0.3 })
    const isImageInView = useInView(imageRef, { once: true, amount: 0.3 })
    const isFooterInView = useInView(footerRef, { once: true, amount: 0.2 })

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    })

    const y = useTransform(scrollYProgress, [0, 1], [100, -100])
    const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

    useEffect(() => {
        setIsMounted(true)
    }, [])

    // Split heading into words for animation
    const headingText = "Partner with AlturaCyber today and take control of your organization's digital security"
    const words = headingText.split(' ')

    return (
        <section ref={sectionRef} id='partner' className="relative w-full overflow-hidden">
            {/* Animated Curved Top */}
            <div className="absolute top-0 left-0 right-0 z-10">
                <svg
                    className="w-full h-24 sm:h-32 md:h-40"
                    viewBox="0 0 1440 160"
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <motion.path
                        d="M0,0 L0,80 C240,133.3 480,160 720,160 C960,160 1200,133.3 1440,80 L1440,0 Z"
                        fill="white"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                    />
                </svg>
            </div>

            {/* Background Image Container */}
            <div className="relative min-h-[120vh] md:min-h-[140vh]">
                {/* Background Image with parallax */}
                <motion.div 
                    className="absolute inset-0 z-0"
                    style={{ y }}
                >
                    <Image
                        src="/images/footer/bottom-image.png"
                        alt="Background"
                        fill
                        className="object-cover object-top"
                        priority
                    />
                    {/* Animated dark overlay */}
                    <motion.div 
                        className="absolute inset-0 bg-black/40"
                        animate={{
                            background: [
                                'rgba(0,0,0,0.4)',
                                'rgba(0,0,0,0.5)',
                                'rgba(0,0,0,0.4)'
                            ]
                        }}
                        transition={{ duration: 5, repeat: Infinity }}
                    />

                    {/* Animated particles */}
                    {isMounted && (
                        <>
                            {/* Floating Particles */}
                            <div className="absolute inset-0 pointer-events-none">
                                {[...Array(30)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        className="absolute w-1 h-1 bg-orange-500/30 rounded-full"
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

                            {/* Gradient orbs */}
                            <motion.div
                                className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"
                                animate={{
                                    scale: [1, 1.3, 1],
                                    opacity: [0.3, 0.6, 0.3],
                                    x: [0, 50, 0],
                                }}
                                transition={{ duration: 12, repeat: Infinity }}
                            />
                            <motion.div
                                className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
                                animate={{
                                    scale: [1.3, 1, 1.3],
                                    opacity: [0.6, 0.3, 0.6],
                                    x: [0, -50, 0],
                                }}
                                transition={{ duration: 12, repeat: Infinity }}
                            />
                        </>
                    )}
                </motion.div>

                {/* Content */}
                <motion.div 
                    className="relative z-20 pt-40 sm:pt-48 md:pt-56 lg:pt-64 pb-16 md:pb-20 lg:pb-24"
                    style={{ opacity }}
                >
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                        {/* CTA Content - Enhanced Animations */}
                        <div className="text-center mb-16 md:mb-20 lg:mb-28">
                            {/* Badge */}
                            <motion.div
                                className="inline-block mb-8"
                                initial={{ scale: 0, opacity: 0 }}
                                animate={isHeaderInView ? { scale: 1, opacity: 1 } : {}}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                <span className="px-4 py-2 bg-orange-500/20 text-orange-400 rounded-full text-sm font-semibold border border-orange-500/30 backdrop-blur-sm">
                                    Get Started Today
                                </span>
                            </motion.div>

                            {/* Heading with word-by-word animation */}
                            <div ref={headerRef} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 md:mb-10 lg:mb-12 leading-tight max-w-4xl mx-auto">
                                {words.map((word, index) => (
                                    <motion.span
                                        key={index}
                                        className="inline-block mr-2 md:mr-3"
                                        initial={{ opacity: 0, y: 50 }}
                                        animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
                                        transition={{
                                            duration: 0.5,
                                            delay: 0.05 * index,
                                            ease: [0.6, -0.05, 0.01, 0.99]
                                        }}
                                    >
                                        <motion.span
                                            className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
                                            whileHover={{
                                                backgroundImage: 'linear-gradient(to right, #ff8c42, #ffa366)',
                                                scale: 1.05,
                                                transition: { duration: 0.3 }
                                            }}
                                        >
                                            {word}
                                        </motion.span>
                                    </motion.span>
                                ))}
                            </div>

                            {/* Enhanced Email Form */}
                            <motion.div 
                                ref={formRef}
                                initial={{ opacity: 0, y: 50 }}
                                animate={isFormInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.8, delay: 0.3 }}
                            >
                                <motion.div 
                                    className="relative flex items-center gap-2 max-w-2xl mx-auto mb-16 md:mb-20 lg:mb-24 bg-[#2a2a2a] rounded-full p-2 border-2 overflow-hidden"
                                    animate={{
                                        borderColor: isFocused ? '#ff8c42' : '#4a4a4a',
                                    }}
                                    whileHover={{
                                        borderColor: '#ff8c42',
                                        scale: 1.02
                                    }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {/* Animated background gradient */}
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-blue-500/5"
                                        animate={{
                                            opacity: isFocused ? 1 : 0,
                                        }}
                                        transition={{ duration: 0.3 }}
                                    />

                                    {/* Pulse ring on focus */}
                                    {isMounted && isFocused && (
                                        <motion.div
                                            className="absolute inset-0 border-2 border-orange-500 rounded-full"
                                            initial={{ scale: 1, opacity: 0.6 }}
                                            animate={{ scale: 1.1, opacity: 0 }}
                                            transition={{ duration: 1, repeat: Infinity }}
                                        />
                                    )}

                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        onFocus={() => setIsFocused(true)}
                                        onBlur={() => setIsFocused(false)}
                                        placeholder="your email"
                                        className="flex-1 px-4 sm:px-6 py-3 sm:py-4 bg-transparent text-white placeholder-gray-400 focus:outline-none text-sm sm:text-base relative z-10"
                                    />
                                    
                                    <motion.button 
                                        className="px-6 sm:px-8 py-3 sm:py-4 bg-[#ff8c42] text-black text-sm sm:text-base font-semibold rounded-full whitespace-nowrap relative overflow-hidden group z-10"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <span className="relative z-10">Get a Free Security Consultation</span>
                                        
                                        {/* Shimmer effect */}
                                        <motion.div
                                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20"
                                            animate={{ x: ['-100%', '100%'] }}
                                            transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                                        />

                                        {/* Expanding circle */}
                                        <motion.div
                                            className="absolute inset-0 bg-orange-600 rounded-full"
                                            initial={{ scale: 0 }}
                                            whileHover={{ scale: 2 }}
                                            transition={{ duration: 0.6 }}
                                        />
                                    </motion.button>
                                </motion.div>
                            </motion.div>

                            {/* Enhanced Dashboard Image with 3D effect */}
                            <motion.div 
                                ref={imageRef}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={isImageInView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ duration: 1, delay: 0.4 }}
                            >
                                <DashboardImage isMounted={isMounted} />
                            </motion.div>
                        </div>

                        {/* Enhanced Footer */}
                        <motion.footer 
                            ref={footerRef}
                            className="pt-12 md:pt-16 lg:pt-20 mt-12 md:mt-16 lg:mt-20"
                            initial={{ opacity: 0, y: 50 }}
                            animate={isFooterInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12 mb-12 md:mb-16 lg:mb-20">

                                {/* Column 1 - Brand */}
                                <motion.div 
                                    className="text-center sm:text-left"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isFooterInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.6, delay: 0.1 }}
                                >
                                    <motion.h3 
                                        className="text-lg sm:text-xl font-bold text-white mb-2"
                                        whileHover={{ 
                                            color: '#ff8c42',
                                            scale: 1.05,
                                            transition: { duration: 0.3 }
                                        }}
                                    >
                                        AlturaCyber —
                                    </motion.h3>
                                    <p className="text-sm sm:text-base text-gray-300">
                                        Protecting What Matters Most
                                    </p>
                                </motion.div>

                                {/* Column 2 - Navigation Links with stagger */}
                                <motion.div 
                                    className="text-center sm:text-left"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isFooterInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                >
                                    <div className="space-y-3">
                                        {['Home', 'About', 'Services', 'Blog', 'Careers', 'Contact'].map((link, i) => (
                                            <motion.div
                                                key={link}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={isFooterInView ? { opacity: 1, x: 0 } : {}}
                                                transition={{ duration: 0.4, delay: 0.3 + i * 0.05 }}
                                            >
                                                <Link href={`/${link.toLowerCase()}`}>
                                                    <motion.span
                                                        className="block text-sm text-gray-300"
                                                        whileHover={{ 
                                                            color: '#ffffff',
                                                            x: 5,
                                                            transition: { duration: 0.2 }
                                                        }}
                                                    >
                                                        {link}
                                                    </motion.span>
                                                </Link>
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.div>

                                {/* Column 3 - Social & Legal */}
                                <motion.div 
                                    className="text-center sm:text-left"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isFooterInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.6, delay: 0.3 }}
                                >
                                    <div className="space-y-3">
                                        {[
                                            { name: 'LinkedIn', url: 'https://linkedin.com' },
                                            { name: 'X (Twitter)', url: 'https://twitter.com' },
                                            { name: 'Privacy Policy', url: '/privacy' },
                                            { name: 'Terms of Service', url: '/terms' }
                                        ].map((link, i) => (
                                            <motion.div
                                                key={link.name}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={isFooterInView ? { opacity: 1, x: 0 } : {}}
                                                transition={{ duration: 0.4, delay: 0.4 + i * 0.05 }}
                                            >
                                                <Link href={link.url}>
                                                    <motion.span
                                                        className="block text-sm text-gray-300"
                                                        whileHover={{ 
                                                            color: '#ffffff',
                                                            x: 5,
                                                            transition: { duration: 0.2 }
                                                        }}
                                                    >
                                                        {link.name}
                                                    </motion.span>
                                                </Link>
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.div>

                                {/* Column 4 - Contact Info */}
                                <motion.div 
                                    className="text-center sm:text-left"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isFooterInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.6, delay: 0.4 }}
                                >
                                    <div className="space-y-3 text-sm">
                                        {['Email', 'Phone', 'Address'].map((item, i) => (
                                            <motion.p
                                                key={item}
                                                className="font-semibold text-white"
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={isFooterInView ? { opacity: 1, scale: 1 } : {}}
                                                transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                                                whileHover={{ 
                                                    color: '#ff8c42',
                                                    scale: 1.05,
                                                    transition: { duration: 0.2 }
                                                }}
                                            >
                                                {item}
                                            </motion.p>
                                        ))}
                                    </div>
                                </motion.div>

                            </div>

                            {/* Bottom Bar */}
                            <motion.div 
                                className="border-t border-gray-700 pt-8 md:pt-10 lg:pt-12 pb-10 md:pb-12 lg:pb-16"
                                initial={{ opacity: 0 }}
                                animate={isFooterInView ? { opacity: 1 } : {}}
                                transition={{ duration: 0.8, delay: 0.6 }}
                            >
                                <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                                    <motion.p 
                                        className="text-xs sm:text-sm text-gray-400 text-center sm:text-left max-w-2xl"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={isFooterInView ? { opacity: 1, x: 0 } : {}}
                                        transition={{ duration: 0.6, delay: 0.7 }}
                                    >
                                        AlturaCyber is a cybersecurity agency delivering end-to-end protection and digital resilience for businesses
                                    </motion.p>
                                    <motion.div 
                                        className="flex gap-3 items-center"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={isFooterInView ? { opacity: 1, x: 0 } : {}}
                                        transition={{ duration: 0.6, delay: 0.8 }}
                                    >
                                        <motion.button 
                                            className="flex items-center gap-2 px-4 py-2 border border-gray-600 rounded-full text-xs text-gray-300"
                                            whileHover={{ 
                                                borderColor: '#9ca3af',
                                                scale: 1.05
                                            }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <span>🌐</span>
                                            <span>Language</span>
                                        </motion.button>
                                        <Link href="/contact">
                                            <motion.button 
                                                className="px-6 py-2 bg-[#ff8c42] text-black text-xs font-semibold rounded-full uppercase relative overflow-hidden"
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                <span className="relative z-10">Consultation</span>
                                                <motion.div
                                                    className="absolute inset-0 bg-orange-600"
                                                    initial={{ scale: 0 }}
                                                    whileHover={{ scale: 2 }}
                                                    transition={{ duration: 0.6 }}
                                                />
                                            </motion.button>
                                        </Link>
                                    </motion.div>
                                </div>
                            </motion.div>

                        </motion.footer>

                    </div>
                </motion.div>
            </div>
        </section>
    )
}

// Enhanced Dashboard Image Component with 3D tilt
function DashboardImage({ isMounted }: { isMounted: boolean }) {
    const imageRef = useRef<HTMLDivElement>(null)
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    const rotateX = useTransform(mouseY, [-0.5, 0.5], [10, -10])
    const rotateY = useTransform(mouseX, [-0.5, 0.5], [-10, 10])

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!imageRef.current) return
        const rect = imageRef.current.getBoundingClientRect()
        const x = (e.clientX - rect.left - rect.width / 2) / rect.width
        const y = (e.clientY - rect.top - rect.height / 2) / rect.height
        mouseX.set(x)
        mouseY.set(y)
    }

    const handleMouseLeave = () => {
        mouseX.set(0)
        mouseY.set(0)
    }

    return (
        <motion.div 
            ref={imageRef}
            className="relative max-w-6xl mx-auto"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
        >
            {/* Corner accents */}
            {[0, 1, 2, 3].map((i) => (
                <motion.div
                    key={i}
                    className="absolute w-8 h-8 border-2 border-orange-500 z-20"
                    style={{
                        top: i < 2 ? 10 : 'auto',
                        bottom: i >= 2 ? 10 : 'auto',
                        left: i % 2 === 0 ? 10 : 'auto',
                        right: i % 2 === 1 ? 10 : 'auto',
                        borderTop: i < 2 ? '2px solid #ff8c42' : 'none',
                        borderBottom: i >= 2 ? '2px solid #ff8c42' : 'none',
                        borderLeft: i % 2 === 0 ? '2px solid #ff8c42' : 'none',
                        borderRight: i % 2 === 1 ? '2px solid #ff8c42' : 'none',
                        borderRadius: '4px'
                    }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.6 }}
                    transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                />
            ))}

            <div className="relative w-full aspect-[21/5] rounded-2xl overflow-hidden shadow-2xl">
                {/* Glow effect */}
                <motion.div
                    className="absolute inset-0 bg-orange-500/20 rounded-2xl blur-2xl"
                    animate={{ opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 3, repeat: Infinity }}
                />

                <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                >
                    <Image
                        src="/images/footer/footer-image.png"
                        alt="Cybersecurity Dashboard"
                        width={1400}
                        height={333}
                        className="w-full h-full object-cover relative z-10"
                    />
                </motion.div>

                {/* Hover overlay */}
                <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-orange-600/0 to-blue-600/0"
                    whileHover={{ 
                        background: 'linear-gradient(to bottom right, rgba(255, 140, 66, 0.1), rgba(59, 130, 246, 0.1))'
                    }}
                    transition={{ duration: 0.5 }}
                />

                {/* Scan line effect */}
                {isMounted && (
                    <motion.div
                        className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-orange-400 to-transparent z-20"
                        animate={{ top: ['0%', '100%'] }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "linear",
                            repeatDelay: 2
                        }}
                    />
                )}
            </div>
        </motion.div>
    )
}