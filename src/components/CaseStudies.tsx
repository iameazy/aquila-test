'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { motion, useInView, useMotionValue, useTransform } from 'framer-motion'

export default function CaseStudies() {
    const [isMounted, setIsMounted] = useState(false)
    const [hoveredCard, setHoveredCard] = useState<number | null>(null)
    const [count, setCount] = useState(0)
    const sectionRef = useRef(null)
    const headerRef = useRef(null)
    const isHeaderInView = useInView(headerRef, { once: true, amount: 0.3 })

    useEffect(() => {
        setIsMounted(true)
        
        // Animated counter
        if (isHeaderInView) {
            let start = 0
            const end = 15
            const duration = 2000
            const increment = end / (duration / 16)
            
            const timer = setInterval(() => {
                start += increment
                if (start >= end) {
                    setCount(end)
                    clearInterval(timer)
                } else {
                    setCount(Math.floor(start))
                }
            }, 16)
            
            return () => clearInterval(timer)
        }
    }, [isHeaderInView])

    const caseStudies = [
        {
            icon: '/images/case/case-icon1.png',
            title: 'Banking Sector Resilience',
            description: 'A leading financial institution sought to strengthen its cybersecurity framework. Through penetration testing and SOC integration, we reduced incident response time by 60% and safeguarded millions of customer transactions daily.',
            bgColor: 'bg-slate-700',
            stat: '60%',
            statLabel: 'Faster Response',
            color: '#3B82F6'
        },
        {
            icon: '/images/case/case-icon2.png',
            title: 'Telecom Network Protection',
            description: 'We partnered with a global telecommunications provider to identify and close vulnerabilities across its nationwide infrastructure. Our risk assessments and continuous monitoring improved system uptime and ensured compliance with international data protection standards.',
            bgColor: 'bg-slate-700',
            stat: '99.9%',
            statLabel: 'Uptime Achieved',
            color: '#10B981'
        },
        {
            icon: '/images/case/case-icon3.png',
            title: 'Government Digital Transformation',
            description: 'Supporting a national digital service rollout, we implemented advanced security controls and staff training programs. This initiative bolstered cyber readiness, secured public data, and built capacity for ongoing self-assessment and threat response.',
            bgColor: 'bg-slate-700',
            stat: '100%',
            statLabel: 'Compliance Rate',
            color: '#F59E0B'
        }
    ]

    return (
        <section ref={sectionRef} className="relative w-full bg-white overflow-hidden">
            {/* Animated Curved transition */}
            <div className="relative z-[10]">
                <svg
                    className="w-full h-32 sm:h-40 md:h-48"
                    viewBox="0 0 1440 160"
                    preserveAspectRatio="none"
                >
                    <motion.path
                        d="M0,0 C240,53.3 480,80 720,80 C960,80 1200,53.3 1440,0 L1440,160 L0,160 Z"
                        fill="#121212"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                    />
                </svg>
            </div>

            <div className="relative w-full bg-[#121212] overflow-hidden">
                {/* Animated Background Elements */}
                {isMounted && (
                    <>
                        {/* Gradient Orbs */}
                        <motion.div
                            className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
                            animate={{
                                scale: [1, 1.3, 1],
                                opacity: [0.3, 0.6, 0.3],
                                x: [0, 50, 0],
                            }}
                            transition={{ duration: 10, repeat: Infinity }}
                        />
                        <motion.div
                            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
                            animate={{
                                scale: [1.3, 1, 1.3],
                                opacity: [0.6, 0.3, 0.6],
                                x: [0, -50, 0],
                            }}
                            transition={{ duration: 10, repeat: Infinity }}
                        />

                        {/* Floating Particles */}
                        <div className="absolute inset-0 pointer-events-none">
                            {[...Array(30)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute w-1 h-1 bg-blue-500/30 rounded-full"
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

                        {/* Grid Pattern */}
                        <motion.div
                            className="absolute inset-0 opacity-[0.02]"
                            style={{
                                backgroundImage: `
                                    linear-gradient(rgba(59, 130, 246, 0.5) 1px, transparent 1px),
                                    linear-gradient(90deg, rgba(59, 130, 246, 0.5) 1px, transparent 1px)
                                `,
                                backgroundSize: '50px 50px',
                            }}
                            animate={{
                                backgroundPosition: ['0px 0px', '50px 50px']
                            }}
                            transition={{
                                duration: 20,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                        />
                    </>
                )}

                {/* Content */}
                <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-40 md:pt-48 lg:pt-56 pb-16 sm:pb-20 lg:pb-24">
                    {/* Header - Enhanced Animations */}
                    <motion.div 
                        ref={headerRef}
                        className="text-center mb-12 sm:mb-16"
                        initial={{ opacity: 0, y: 50 }}
                        animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Badge */}
                        <motion.div
                            className="inline-block mb-6"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={isHeaderInView ? { scale: 1, opacity: 1 } : {}}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <span className="px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full text-sm font-semibold border border-blue-500/20">
                                Success Stories
                            </span>
                        </motion.div>

                        {/* Title with gradient */}
                        <motion.h2 
                            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            Proven Results,
                            <br />
                            <motion.span
                                className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
                                initial={{ opacity: 0 }}
                                animate={isHeaderInView ? { opacity: 1 } : {}}
                                transition={{ duration: 0.8, delay: 0.5 }}
                            >
                                Trusted Partnerships
                            </motion.span>
                        </motion.h2>

                        {/* Animated Counter */}
                        <motion.div
                            className="text-white text-sm sm:text-base mb-6 sm:mb-8 flex items-center justify-center gap-2"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.5 }}
                        >
                            <motion.span 
                                className="text-4xl font-bold text-blue-400"
                                initial={{ scale: 0 }}
                                animate={isHeaderInView ? { scale: 1 } : {}}
                                transition={{ type: "spring", stiffness: 200, delay: 0.7 }}
                            >
                                {count}+
                            </motion.span>
                            <span>security assessments completed</span>
                        </motion.div>

                        {/* Underline */}
                        <motion.div
                            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"
                            initial={{ scaleX: 0 }}
                            animate={isHeaderInView ? { scaleX: 1 } : {}}
                            transition={{ duration: 0.8, delay: 0.7 }}
                        />

                        {/* Button */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.9 }}
                        >
                            <Link href="/case-studies">
                                <motion.button
                                    className="px-8 py-3 bg-blue-500 text-white text-sm font-semibold rounded-full relative overflow-hidden group"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <span className="relative z-10 uppercase tracking-wide">VIEW CASE STUDIES</span>
                                    
                                    {/* Shimmer effect */}
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20"
                                        animate={{ x: ['-100%', '100%'] }}
                                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                                    />

                                    {/* Expanding circle */}
                                    <motion.div
                                        className="absolute inset-0 bg-blue-600 rounded-full"
                                        initial={{ scale: 0 }}
                                        whileHover={{ scale: 2 }}
                                        transition={{ duration: 0.6 }}
                                    />
                                </motion.button>
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Case Study Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
                        {/* First two cards */}
                        {caseStudies.slice(0, 2).map((study, index) => (
                            <CaseStudyCard
                                key={index}
                                study={study}
                                index={index}
                                isHovered={hoveredCard === index}
                                setHovered={setHoveredCard}
                                isMounted={isMounted}
                            />
                        ))}

                        {/* Third card centered */}
                        <div className="md:col-span-2 flex justify-center">
                            <CaseStudyCard
                                study={caseStudies[2]}
                                index={2}
                                isHovered={hoveredCard === 2}
                                setHovered={setHoveredCard}
                                isMounted={isMounted}
                                className="w-full md:max-w-md lg:max-w-lg"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

// Card Component with 3D effects
function CaseStudyCard({ study, index, isHovered, setHovered, isMounted, className = "" }: any) {
    const cardRef = useRef(null)
    const isInView = useInView(cardRef, { once: true, amount: 0.2 })
    
    // Mouse position for 3D tilt
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)
    
    const rotateX = useTransform(mouseY, [-0.5, 0.5], [10, -10])
    const rotateY = useTransform(mouseX, [-0.5, 0.5], [-10, 10])

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return
        const rect = (cardRef.current as HTMLElement).getBoundingClientRect()
        const x = (e.clientX - rect.left - rect.width / 2) / rect.width
        const y = (e.clientY - rect.top - rect.height / 2) / rect.height
        mouseX.set(x)
        mouseY.set(y)
    }

    const handleMouseLeave = () => {
        mouseX.set(0)
        mouseY.set(0)
        setHovered(null)
    }

    return (
        <motion.div
            ref={cardRef}
            className={`relative ${className}`}
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: index * 0.2 }}
        >
            <motion.div
                className={`${study.bgColor} rounded-2xl p-6 sm:p-8 relative overflow-hidden group cursor-pointer`}
                style={{
                    rotateX: isHovered ? rotateX : 0,
                    rotateY: isHovered ? rotateY : 0,
                    transformStyle: "preserve-3d",
                }}
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={handleMouseLeave}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
            >
                {/* Corner accents */}
                {[0, 1, 2, 3].map((i) => (
                    <motion.div
                        key={i}
                        className="absolute w-4 h-4 border-2"
                        style={{
                            borderColor: study.color,
                            top: i < 2 ? 0 : 'auto',
                            bottom: i >= 2 ? 0 : 'auto',
                            left: i % 2 === 0 ? 0 : 'auto',
                            right: i % 2 === 1 ? 0 : 'auto',
                            borderTop: i < 2 ? `2px solid ${study.color}` : 'none',
                            borderBottom: i >= 2 ? `2px solid ${study.color}` : 'none',
                            borderLeft: i % 2 === 0 ? `2px solid ${study.color}` : 'none',
                            borderRight: i % 2 === 1 ? `2px solid ${study.color}` : 'none',
                        }}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={isInView ? { scale: 1, opacity: 1 } : {}}
                        transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                    />
                ))}

                {/* Content */}
                <div className="relative z-10" style={{ transform: "translateZ(50px)" }}>
                    {/* Icon */}
                    <motion.div 
                        className="w-12 h-12 sm:w-14 sm:h-14 mb-4 relative"
                        initial={{ scale: 0, rotate: -180 }}
                        animate={isInView ? { scale: 1, rotate: 0 } : {}}
                        transition={{ 
                            type: "spring",
                            stiffness: 200,
                            delay: 0.3 + index * 0.1 
                        }}
                        whileHover={{ 
                            scale: 1.2, 
                            rotate: 360,
                            transition: { duration: 0.6 }
                        }}
                    >
                        {/* Icon glow */}
                        <motion.div
                            className="absolute inset-0 rounded-full blur-lg"
                            style={{ backgroundColor: study.color }}
                            animate={{ opacity: [0.3, 0.6, 0.3] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        />
                        
                        <Image
                            src={study.icon}
                            alt={study.title}
                            fill
                            className="object-contain relative z-10"
                        />

                        {/* Orbiting particles */}
                        {isMounted && isHovered && [0, 1, 2].map((i) => (
                            <motion.div
                                key={i}
                                className="absolute w-2 h-2 rounded-full"
                                style={{ backgroundColor: study.color }}
                                animate={{
                                    x: [
                                        Math.cos((i / 3) * Math.PI * 2) * 35,
                                        Math.cos((i / 3) * Math.PI * 2 + Math.PI * 2) * 35,
                                    ],
                                    y: [
                                        Math.sin((i / 3) * Math.PI * 2) * 35,
                                        Math.sin((i / 3) * Math.PI * 2 + Math.PI * 2) * 35,
                                    ],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "linear",
                                    delay: i * 0.2,
                                }}
                            />
                        ))}
                    </motion.div>

                    {/* Stat badge */}
                    <motion.div
                        className="absolute top-6 right-6 text-right"
                        initial={{ opacity: 0, x: 20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    >
                        <motion.div 
                            className="text-3xl font-bold mb-1"
                            style={{ color: study.color }}
                            whileHover={{ scale: 1.1 }}
                        >
                            {study.stat}
                        </motion.div>
                        <div className="text-xs text-gray-400">{study.statLabel}</div>
                    </motion.div>

                    {/* Title */}
                    <motion.h3 
                        className="text-white text-lg sm:text-xl font-bold mb-3 group-hover:text-blue-300 transition-colors"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    >
                        {study.title}
                    </motion.h3>

                    {/* Description */}
                    <motion.p 
                        className="text-gray-300 text-sm sm:text-base leading-relaxed group-hover:text-white transition-colors"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    >
                        {study.description}
                    </motion.p>

                    {/* Progress bar */}
                    <motion.div
                        className="mt-4 h-1 bg-gray-600 rounded-full overflow-hidden"
                        initial={{ scaleX: 0 }}
                        animate={isInView ? { scaleX: 1 } : {}}
                        transition={{ duration: 1, delay: 0.7 + index * 0.1 }}
                    >
                        <motion.div
                            className="h-full rounded-full"
                            style={{ backgroundColor: study.color }}
                            initial={{ x: '-100%' }}
                            animate={isInView ? { x: 0 } : {}}
                            transition={{ duration: 1.5, delay: 0.9 + index * 0.1 }}
                        />
                    </motion.div>
                </div>

                {/* Shine effect */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-10"
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
                />

                {/* Glow effect */}
                <motion.div
                    className="absolute inset-0 rounded-2xl"
                    style={{
                        background: `radial-gradient(circle at 50% 50%, ${study.color}15, transparent 70%)`,
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                />
            </motion.div>
        </motion.div>
    )
}