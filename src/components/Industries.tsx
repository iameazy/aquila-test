'use client'
import { useState, useEffect, useRef } from 'react'
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion'

export default function Industries() {
  const [isMounted, setIsMounted] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const sectionRef = useRef(null)
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.3 })

  // Mouse position for parallax
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const smoothMouseX = useSpring(mouseX, { damping: 50, stiffness: 200 })
  const smoothMouseY = useSpring(mouseY, { damping: 50, stiffness: 200 })

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Define industries with enhanced properties
  const industries = [
    {
      name: 'Technology',
      color: 'bg-blue-500',
      angle: 30,
      radius: 320,
      icon: '💻',
      description: 'Software & IT Solutions',
      gradient: 'from-blue-400 to-blue-600'
    },
    {
      name: 'Energy',
      color: 'bg-blue-400',
      angle: 100,
      radius: 320,
      icon: '⚡',
      description: 'Power & Utilities',
      gradient: 'from-blue-300 to-blue-500'
    },
    {
      name: 'Healthcare',
      color: 'bg-orange-400',
      angle: 160,
      radius: 320,
      icon: '🏥',
      description: 'Medical & Health Services',
      gradient: 'from-orange-300 to-orange-500'
    },
    {
      name: 'Finance &\nFintech',
      color: 'bg-orange-200',
      angle: 340,
      radius: 250,
      icon: '💰',
      description: 'Banking & Financial Tech',
      gradient: 'from-orange-100 to-orange-300'
    },
    {
      name: 'Government\n& Education',
      color: 'bg-blue-300',
      angle: 200,
      radius: 250,
      icon: '🏛️',
      description: 'Public Sector & Learning',
      gradient: 'from-blue-200 to-blue-400'
    },
    {
      name: 'Education',
      color: 'bg-amber-300',
      angle: 260,
      radius: 250,
      icon: '📚',
      description: 'Academic Institutions',
      gradient: 'from-amber-200 to-amber-400'
    },
  ]

  // Function to calculate position on circle
  const getPosition = (angle: number, radius: number) => {
    const centerX = 400
    const centerY = 400
    const radian = (angle * Math.PI) / 180
    const x = centerX + radius * Math.cos(radian)
    const y = centerY + radius * Math.sin(radian)
    return { x, y }
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return
    const rect = (containerRef.current as HTMLElement).getBoundingClientRect()
    const x = (e.clientX - rect.left - rect.width / 2) / rect.width
    const y = (e.clientY - rect.top - rect.height / 2) / rect.height
    mouseX.set(x * 50)
    mouseY.set(y * 50)
  }

  return (
    <section
      id="industries"
      ref={sectionRef}
      className="relative w-full bg-white py-12 sm:py-16 lg:py-20 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Animated Background Elements */}
      {isMounted && (
        <>
          {/* Gradient Orbs */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.6, 0.3],
              x: [0, 30, 0],
            }}
            transition={{ duration: 12, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"
            animate={{
              scale: [1.3, 1, 1.3],
              opacity: [0.6, 0.3, 0.6],
              x: [0, -30, 0],
            }}
            transition={{ duration: 12, repeat: Infinity }}
          />

          {/* Floating Particles */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(25)].map((_, i) => (
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

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">
              Industries We Protect
            </span>
          </motion.div>
        </motion.div>

        {/* Main circular design container */}
        <motion.div
          ref={containerRef}
          className="relative w-full max-w-4xl mx-auto aspect-square"
          style={{
            x: smoothMouseX,
            y: smoothMouseY,
          }}
        >
          {/* Enhanced rotating circles with animated glow */}
          <motion.div
            className="absolute inset-0"
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            <svg className="w-full h-full" viewBox="0 0 800 800">
              {/* Animated gradient circles */}
              <defs>
                <linearGradient id="circleGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.3" />
                </linearGradient>
                <linearGradient id="circleGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#EF4444" stopOpacity="0.3" />
                </linearGradient>
              </defs>

              {/* Outer circle with pulse */}
              <motion.circle
                cx="400"
                cy="400"
                r="320"
                fill="none"
                stroke="url(#circleGradient1)"
                strokeWidth="2"
                opacity="1"
              />

              {/* Middle circle */}
              <motion.circle
                cx="400"
                cy="400"
                r="250"
                fill="none"
                stroke="url(#circleGradient2)"
                strokeWidth="2"
                opacity="1"
              />

              {/* Inner circle */}
              <motion.circle
                cx="400"
                cy="400"
                r="180"
                fill="none"
                stroke="#E5E7EB"
                strokeWidth="1"
                strokeDasharray="5,5"
                opacity="1"
              />

              {/* Connection lines between industries */}
              {isMounted && industries.map((industry, i) => {
                const nextIndex = (i + 2) % industries.length
                const pos1 = getPosition(industry.angle, industry.radius)
                const pos2 = getPosition(industries[nextIndex].angle, industries[nextIndex].radius)

                return (
                  <motion.line
                    key={`line-${i}`}
                    x1={pos1.x}
                    y1={pos1.y}
                    x2={pos2.x}
                    y2={pos2.y}
                    stroke="#3B82F6"
                    strokeWidth="1"
                    opacity="0.2"
                    strokeDasharray="3,3"
                  />
                )
              })}

              {/* Industry bubbles with enhanced animations */}
              {industries.map((industry, index) => {
                const pos = getPosition(industry.angle, industry.radius)

                return (
                  <g key={index}>
                    {/* Glow effect under bubble */}
                    {isMounted && (
                      <motion.circle
                        cx={pos.x}
                        cy={pos.y}
                        r="35"
                        fill={industry.color.replace('bg-', '#')}
                        opacity="0.2"
                        animate={{
                          scale: hoveredIndex === index ? 1.5 : 1,
                          opacity: hoveredIndex === index ? 0.4 : 0.2,
                        }}
                        transition={{ duration: 0.3 }}
                      />
                    )}

                    {/* Counter-rotate the bubbles with enhanced effects */}
                    <foreignObject
                      x={pos.x - 50}
                      y={pos.y - 50}
                      width="100"
                      height="100"
                      style={{
                        transformOrigin: `50px 50px`,
                      }}
                    >
                      <motion.div
                        className="flex items-center justify-center h-full"
                        animate={{ rotate: -360 }}
                        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                      >
                        <motion.div
                          className={`bg-gradient-to-br ${industry.gradient} rounded-full w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 flex flex-col items-center justify-center shadow-lg cursor-pointer relative overflow-hidden group`}
                          onHoverStart={() => setHoveredIndex(index)}
                          onHoverEnd={() => setHoveredIndex(null)}
                          whileHover={{
                            scale: 1.3,
                            boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
                            zIndex: 50,
                          }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {/* Shimmer effect */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30"
                            animate={{ x: ['-100%', '100%'] }}
                            transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
                          />

                          {/* Icon */}
                          <motion.span
                            className="text-xl sm:text-2xl mb-0.5"
                            whileHover={{ scale: 1.2, rotate: 360 }}
                            transition={{ duration: 0.5 }}
                          >
                            {industry.icon}
                          </motion.span>

                          {/* Name with better visibility */}
                          <span className="text-white text-[9px] sm:text-[10px] md:text-[11px] font-bold leading-tight text-center px-1.5 whitespace-pre-line drop-shadow-md">
                            {industry.name}
                          </span>

                          {/* Pulse ring on hover */}
                          {hoveredIndex === index && (
                            <motion.div
                              className="absolute inset-0 border-2 border-white rounded-full"
                              initial={{ scale: 1, opacity: 1 }}
                              animate={{ scale: 1.5, opacity: 0 }}
                              transition={{ duration: 1, repeat: Infinity }}
                            />
                          )}

                          {/* Tooltip on hover */}
                          {hoveredIndex === index && (
                            <motion.div
                              className="absolute -bottom-16 left-1/2 -translate-x-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-xs whitespace-nowrap z-50 pointer-events-none"
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              {industry.description}
                              <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45" />
                            </motion.div>
                          )}
                        </motion.div>

                        {/* Orbiting particles around bubbles */}
                        {isMounted && hoveredIndex === index && [0, 1, 2].map((i) => (
                          <motion.div
                            key={i}
                            className="absolute w-2 h-2 bg-white rounded-full"
                            style={{
                              left: '50%',
                              top: '50%',
                            }}
                            animate={{
                              x: [
                                Math.cos((i / 3) * Math.PI * 2) * 40,
                                Math.cos((i / 3) * Math.PI * 2 + Math.PI * 2) * 40,
                              ],
                              y: [
                                Math.sin((i / 3) * Math.PI * 2) * 40,
                                Math.sin((i / 3) * Math.PI * 2 + Math.PI * 2) * 40,
                              ],
                              opacity: [1, 0.5, 1],
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
                    </foreignObject>
                  </g>
                )
              })}
            </svg>
          </motion.div>

          {/* Center content - enhanced with animations */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <motion.div
              className="text-center px-4 sm:px-6 md:px-8 max-w-sm"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 1.5 }}
            >
              {/* Industries We Serve with underline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.7 }}
              >
                <p className="text-[10px] sm:text-xs text-gray-500 mb-3 sm:mb-4 uppercase tracking-wide relative inline-block">
                  Industries We Serve
                  <motion.span
                    className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-orange-500"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: '100%' } : {}}
                    transition={{ duration: 0.8, delay: 1.9 }}
                  />
                </p>
              </motion.div>

              {/* Main headline with stagger */}
              <motion.h2
                className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-dark leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.9 }}
              >
                Our solutions are built for organizations of all sizes — from startups to enterprises — across critical industries.
              </motion.h2>
            </motion.div>
          </div>

          {/* Pulse rings from center */}
          {isMounted && [0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-blue-500/30 rounded-full pointer-events-none"
              initial={{ width: 0, height: 0, opacity: 0.6 }}
              animate={{
                width: [0, 600],
                height: [0, 600],
                opacity: [0.6, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 1.5,
                ease: "easeOut",
              }}
            />
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 2.5 }}
        >
          <motion.button
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-full relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Explore Industries</span>

            {/* Shimmer effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20"
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
            />

            {/* Expanding circle */}
            <motion.div
              className="absolute inset-0 bg-blue-700 rounded-full"
              initial={{ scale: 0 }}
              whileHover={{ scale: 2 }}
              transition={{ duration: 0.6 }}
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}