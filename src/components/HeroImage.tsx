'use client'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'

export default function HeroImage() {
    const [isMounted, setIsMounted] = useState(false)
    const sectionRef = useRef<HTMLElement>(null)
    const imageRef = useRef<HTMLDivElement>(null)
    const isInView = useInView(imageRef, { once: true, amount: 0.3 })
    
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    })

    // Parallax effects
    const imageY = useTransform(scrollYProgress, [0, 1], [50, -50])
    const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95])

    useEffect(() => {
        setIsMounted(true)
    }, [])

    return (
        <section ref={sectionRef} className="relative w-full overflow-hidden">
            {/* Black background - top section with animated gradient */}
            <div className="bg-dark pt-0 pb-[90px] sm:pb-[120px] md:pb-[150px] relative">
                {/* Animated gradient orbs */}
                {isMounted && (
                    <>
                        <motion.div
                            className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
                            animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.3, 0.5, 0.3],
                                x: [-20, 20, -20],
                            }}
                            transition={{
                                duration: 8,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                        <motion.div
                            className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
                            animate={{
                                scale: [1.2, 1, 1.2],
                                opacity: [0.5, 0.3, 0.5],
                                x: [20, -20, 20],
                            }}
                            transition={{
                                duration: 8,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                    </>
                )}
            </div>

            {/* Image Container - Positioned to overlap both sections */}
            <motion.div 
                ref={imageRef}
                className="relative z-20 -mt-[90px] sm:-mt-[120px] md:-mt-[150px]"
                style={{ y: imageY }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div 
                        className="relative w-full rounded-2xl overflow-hidden shadow-2xl group"
                        initial={{ opacity: 0, scale: 0.9, y: 50 }}
                        animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                        transition={{ 
                            duration: 1,
                            ease: [0.6, -0.05, 0.01, 0.99]
                        }}
                        style={{ scale: imageScale }}
                        whileHover={{ 
                            scale: 1.02,
                            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.3)"
                        }}
                    >
                        {/* Shine effect on hover */}
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 z-10 pointer-events-none"
                            initial={{ x: '-100%' }}
                            whileHover={{ x: '100%' }}
                            transition={{ duration: 1 }}
                        />

                        <div className="relative w-full h-[180px] sm:h-[240px] md:h-[300px]">
                            {/* Image with reveal animation */}
                            <motion.div
                                className="relative w-full h-full"
                                initial={{ clipPath: 'inset(0 100% 0 0)' }}
                                animate={isInView ? { clipPath: 'inset(0 0% 0 0)' } : {}}
                                transition={{ 
                                    duration: 1.2,
                                    delay: 0.3,
                                    ease: [0.6, -0.05, 0.01, 0.99]
                                }}
                            >
                                <Image
                                    src="/images/image1.png"
                                    alt="Cybersecurity Dashboard"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </motion.div>

                            {/* Subtle overlay gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none" />

                            {/* Floating particles around image */}
                            {isMounted && [...Array(8)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute w-1 h-1 bg-white/20 rounded-full"
                                    initial={{
                                        x: `${(i % 4) * 33}%`,
                                        y: `${Math.floor(i / 4) * 100}%`,
                                        opacity: 0
                                    }}
                                    animate={{
                                        x: [`${(i % 4) * 33}%`, `${(i % 4) * 33 + (Math.random() - 0.5) * 20}%`],
                                        y: [`${Math.floor(i / 4) * 100}%`, `${Math.floor(i / 4) * 100 + (Math.random() - 0.5) * 20}%`],
                                        opacity: [0, 0.5, 0],
                                        scale: [0, 1.5, 0]
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        delay: i * 0.3,
                                        ease: "easeInOut"
                                    }}
                                />
                            ))}
                        </div>
                    </motion.div>
                </div>
            </motion.div>

            {/* Curved transition from black to white - positioned behind image */}
            <motion.div 
                className="relative -mt-[90px] sm:-mt-[120px] md:-mt-[150px] z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
            >
                <svg
                    className="w-full h-32 sm:h-40 md:h-48"
                    viewBox="0 0 1440 160"
                    preserveAspectRatio="none"
                >
                    <motion.path
                        d="M0,80 C240,26.7 480,0 720,0 C960,0 1200,26.7 1440,80 L1440,160 L0,160 Z"
                        fill="white"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ 
                            pathLength: { duration: 1.5, ease: "easeInOut" },
                            opacity: { duration: 0.5 }
                        }}
                    />
                </svg>
            </motion.div>

            {/* White background - bottom section */}
            <motion.div 
                className="bg-white pt-0 pb-20 sm:pb-24 relative overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                {/* Animated grid pattern */}
                {isMounted && (
                    <motion.div
                        className="absolute inset-0 opacity-[0.03]"
                        style={{
                            backgroundImage: `
                                linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px),
                                linear-gradient(90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px)
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
                )}
            </motion.div>
        </section>
    )
}