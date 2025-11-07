'use client'
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

const CyberFrontlineSection = () => {
    const [isMounted, setIsMounted] = useState(false);
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);
    const sectionRef = useRef<HTMLDivElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const isHeaderInView = useInView(headerRef, { once: true, amount: 0.3 });

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const curveY = useTransform(scrollYProgress, [0, 0.3], [50, 0]);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const insights = [
        {
            id: 0,
            title: 'Cyber Threats',
            image: '/images/cyber/cyber1.png',
            text: 'Cyber threats are evolving faster than ever in 2025, challenging even the most prepared organizations. From AI-driven attacks to quantum-era vulnerabilities, the digital landscape is entering a critical phase. Discover the top five emerging threats shaping cybersecurity this year and how to stay ahead of them.',
            color: '#3B82F6',
            align: 'left'
        },
        {
            id: 1,
            title: 'Red Teaming',
            image: '/images/cyber/cyber2.png',
            text: 'As cyber threats grow more advanced, traditional security measures alone are no longer enough. Red teaming puts your defenses to the test by simulating real-world attacks before criminals do. Learn why investing in a red team can reveal unseen weaknesses and build true cyber resilience.',
            color: '#8B5CF6',
            align: 'right'
        },
        {
            id: 2,
            title: 'Security-Aware Workforce',
            image: '/images/cyber/cyber3.png',
            text: 'Human error remains one of the biggest cybersecurity risks facing organizations today. Building a security-aware workforce means turning every employee into a first line of defense. Discover practical strategies to create a culture where security is everyone\'s responsibility.',
            color: '#06B6D4',
            align: 'left'
        },
        {
            id: 3,
            title: 'Incident Response',
            image: '/images/cyber/cyber4.png',
            text: 'A swift, coordinated response to cyber incidents can mean the difference between minor disruption and a major crisis. Effective incident response planning is more crucial than ever as attacks grow in speed and sophistication. Learn how to prepare your organization for rapid recovery and ongoing resilience.',
            color: '#10B981',
            align: 'right'
        }
    ];

    return (
        <section ref={sectionRef} id='insights' className="relative bg-[#0a0a0a] pt-16 md:pt-20 lg:pt-24">
            {/* Animated Curved transition */}
            <motion.div 
                className="relative -mt-[90px] sm:-mt-[120px] md:-mt-[150px] z-10"
                style={{ y: curveY }}
            >
                <svg
                    className="w-full h-32 sm:h-40 md:h-48"
                    viewBox="0 0 1440 160"
                    preserveAspectRatio="none"
                >
                    <motion.path
                        d="M0,80 C240,26.7 480,0 720,0 C960,0 1200,26.7 1440,80 L1440,160 L0,160 Z"
                        fill="white"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                    />
                </svg>
            </motion.div>

            {/* White background section with content */}
            <div className="relative z-10 bg-white pt-32 md:pt-40 lg:pt-48 pb-16 md:pb-20 lg:pb-24 overflow-hidden">
                {/* Animated Background Elements */}
                {isMounted && (
                    <>
                        {/* Gradient Orbs */}
                        <motion.div
                            className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
                            animate={{
                                scale: [1, 1.3, 1],
                                opacity: [0.3, 0.6, 0.3],
                                x: [0, 50, 0],
                            }}
                            transition={{ duration: 12, repeat: Infinity }}
                        />
                        <motion.div
                            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
                            animate={{
                                scale: [1.3, 1, 1.3],
                                opacity: [0.6, 0.3, 0.6],
                                x: [0, -50, 0],
                            }}
                            transition={{ duration: 12, repeat: Infinity }}
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

                        {/* Animated Grid */}
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
                                duration: 25,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                        />
                    </>
                )}

                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    {/* Header - Enhanced Animations */}
                    <motion.div 
                        ref={headerRef}
                        className="text-center mb-12 md:mb-16"
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
                            <span className="px-4 py-2 bg-blue-500/10 text-blue-600 rounded-full text-sm font-semibold border border-blue-500/20">
                                Latest Insights
                            </span>
                        </motion.div>

                        {/* Title */}
                        <motion.h2 
                            className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 md:mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            From the{' '}
                            <motion.span
                                className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                                initial={{ opacity: 0 }}
                                animate={isHeaderInView ? { opacity: 1 } : {}}
                                transition={{ duration: 0.8, delay: 0.5 }}
                            >
                                Cyber Frontline
                            </motion.span>
                        </motion.h2>

                        {/* Subtitle */}
                        <motion.p 
                            className="text-sm md:text-base lg:text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.5 }}
                        >
                            Explore expert insights, threat analyses, and the latest trends in cybersecurity.
                        </motion.p>

                        {/* Underline */}
                        <motion.div
                            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-6"
                            initial={{ scaleX: 0 }}
                            animate={isHeaderInView ? { scaleX: 1 } : {}}
                            transition={{ duration: 0.8, delay: 0.7 }}
                        />
                    </motion.div>

                    {/* Cards Container */}
                    <div className="space-y-8 md:space-y-10 lg:space-y-12">
                        {insights.map((insight, index) => (
                            <InsightCard
                                key={insight.id}
                                insight={insight}
                                index={index}
                                isHovered={hoveredCard === index}
                                setHovered={setHoveredCard}
                                isMounted={isMounted}
                            />
                        ))}
                    </div>

                    {/* Read All Insights Button */}
                    <motion.div 
                        className="mt-12 md:mt-16 flex justify-center"
                        initial={{ opacity: 0, y: 30 }}
                        animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.9 }}
                    >
                        <Link href="/insights">
                            <motion.button 
                                className="px-10 py-3 bg-blue-500 text-white text-xs sm:text-sm font-bold rounded-full relative overflow-hidden group"
                                whileHover={{ 
                                    scale: 1.05,
                                    boxShadow: '0 20px 40px rgba(59, 130, 246, 0.3)'
                                }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <span className="relative z-10 uppercase tracking-wide">READ ALL INSIGHTS</span>
                                
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
                </div>
            </div>
        </section>
    );
};

// Enhanced Card Component
function InsightCard({ insight, index, isHovered, setHovered, isMounted }: any) {
    const cardRef = useRef(null);
    const isInView = useInView(cardRef, { once: true, amount: 0.3 });

    const isLeft = insight.align === 'left';
    const isImageLeft = (index % 2 === 0);

    return (
        <motion.div
            ref={cardRef}
            className={`relative ${isLeft ? 'mr-auto' : 'ml-auto'} max-w-3xl`}
            initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: index * 0.2 }}
        >
            <motion.div
                className="bg-gradient-to-r from-blue-100 to-blue-50 rounded-[1.5rem] md:rounded-[4rem] lg:p-5 shadow-lg relative overflow-hidden group cursor-pointer"
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
            >
                {/* Corner accents */}
                {[0, 1, 2, 3].map((i) => (
                    <motion.div
                        key={i}
                        className="absolute w-6 h-6 border-2 z-20"
                        style={{
                            borderColor: insight.color,
                            top: i < 2 ? 10 : 'auto',
                            bottom: i >= 2 ? 10 : 'auto',
                            left: i % 2 === 0 ? 10 : 'auto',
                            right: i % 2 === 1 ? 10 : 'auto',
                            borderTop: i < 2 ? `2px solid ${insight.color}` : 'none',
                            borderBottom: i >= 2 ? `2px solid ${insight.color}` : 'none',
                            borderLeft: i % 2 === 0 ? `2px solid ${insight.color}` : 'none',
                            borderRight: i % 2 === 1 ? `2px solid ${insight.color}` : 'none',
                            borderRadius: '4px'
                        }}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={isInView ? { scale: 1, opacity: 0.6 } : {}}
                        transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                    />
                ))}

                {/* Number badge */}
                <motion.div
                    className="absolute top-4 left-4 w-10 h-10 rounded-full flex items-center justify-center font-bold text-white z-20"
                    style={{ backgroundColor: insight.color }}
                    initial={{ scale: 0, rotate: -180 }}
                    animate={isInView ? { scale: 1, rotate: 0 } : {}}
                    transition={{ type: "spring", stiffness: 200, delay: 0.3 + index * 0.1 }}
                    whileHover={{ scale: 1.2, rotate: 360 }}
                >
                    {index + 1}
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 lg:gap-5 items-center relative z-10">
                    {/* Image Container */}
                    <motion.div 
                        className={`${isImageLeft ? 'order-2 md:order-1' : 'order-2'}`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    >
                        <div className="backdrop-blur-sm rounded-2xl md:rounded-[1.5rem] p-2 md:p-3 flex items-center justify-center min-h-[100px] md:min-h-[120px] overflow-hidden relative">
                            {/* Glow effect */}
                            <motion.div
                                className="absolute inset-0 rounded-2xl blur-xl"
                                style={{ backgroundColor: `${insight.color}20` }}
                                animate={{ opacity: [0.3, 0.6, 0.3] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            />

                            <motion.img
                                src={insight.image}
                                alt={insight.title}
                                className="w-full h-full object-contain max-h-[160px] relative z-10"
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                transition={{ duration: 0.5 }}
                            />

                            {/* Orbiting particles on hover */}
                            {isMounted && isHovered && [0, 1, 2].map((i) => (
                                <motion.div
                                    key={i}
                                    className="absolute w-2 h-2 rounded-full z-20"
                                    style={{ backgroundColor: insight.color }}
                                    animate={{
                                        x: [
                                            Math.cos((i / 3) * Math.PI * 2) * 40,
                                            Math.cos((i / 3) * Math.PI * 2 + Math.PI * 2) * 40,
                                        ],
                                        y: [
                                            Math.sin((i / 3) * Math.PI * 2) * 40,
                                            Math.sin((i / 3) * Math.PI * 2 + Math.PI * 2) * 40,
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
                        </div>
                    </motion.div>

                    {/* Text Container */}
                    <motion.div 
                        className={`${isImageLeft ? 'order-1 md:order-2' : 'order-1'} text-left`}
                        initial={{ opacity: 0, x: isImageLeft ? 50 : -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    >
                        {/* Category badge */}
                        <motion.div
                            className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3"
                            style={{ 
                                backgroundColor: `${insight.color}20`,
                                color: insight.color
                            }}
                            initial={{ opacity: 0, y: -10 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                        >
                            {insight.title}
                        </motion.div>

                        <p className="text-xs md:text-sm text-gray-800 leading-relaxed">
                            {insight.text.split(insight.title.toLowerCase()).map((part: string, i: number, arr: string[]) => (
                                <React.Fragment key={i}>
                                    {part}
                                    {i < arr.length - 1 && (
                                        <motion.span 
                                            className="font-bold"
                                            style={{ color: insight.color }}
                                            whileHover={{ scale: 1.05 }}
                                        >
                                            {insight.title.toLowerCase()}
                                        </motion.span>
                                    )}
                                </React.Fragment>
                            ))}
                        </p>

                        {/* Progress bar */}
                        <motion.div
                            className="mt-4 h-1 bg-gray-300 rounded-full overflow-hidden"
                            initial={{ scaleX: 0 }}
                            animate={isInView ? { scaleX: 1 } : {}}
                            transition={{ duration: 1, delay: 0.7 + index * 0.1 }}
                        >
                            <motion.div
                                className="h-full rounded-full"
                                style={{ backgroundColor: insight.color }}
                                initial={{ x: '-100%' }}
                                animate={isInView ? { x: 0 } : {}}
                                transition={{ duration: 1.5, delay: 0.9 + index * 0.1 }}
                            />
                        </motion.div>
                    </motion.div>
                </div>

                {/* Shine effect on hover */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 pointer-events-none"
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 3,
                        ease: "linear"
                    }}
                    style={{ opacity: isHovered ? 0.1 : 0 }}
                />

                {/* Gradient overlay */}
                <motion.div
                    className="absolute inset-0 rounded-[1.5rem] md:rounded-[4rem] pointer-events-none"
                    style={{
                        background: `radial-gradient(circle at 50% 50%, ${insight.color}05, transparent 70%)`,
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                />
            </motion.div>
        </motion.div>
    );
}

export default CyberFrontlineSection;