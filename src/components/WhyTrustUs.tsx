'use client'
import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function WhyTrustUs() {
  const [isMounted, setIsMounted] = useState(false)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const features = [
    { icon: '🔒', title: 'Advanced Protection', description: 'Enterprise-grade security solutions' },
    { icon: '⚡', title: 'Rapid Response', description: 'Real-time threat detection & mitigation' },
    { icon: '🎯', title: 'Proven Results', description: 'Track record of successful defenses' },
    { icon: '🤝', title: 'Trusted Partner', description: 'Long-term client relationships' },
  ]

  return (
    <section ref={sectionRef} className="relative w-full bg-white py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* Animated Background Elements */}
      {isMounted && (
        <>
          {/* Gradient Orbs */}
          <motion.div
            className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.5, 0.3, 0.5],
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />

          {/* Floating Particles */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(15)].map((_, i) => (
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
                }}
                transition={{
                  duration: Math.random() * 10 + 10,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            ))}
          </div>
        </>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            {/* Subtitle with animation */}
            <motion.p 
              className="text-gray-500 text-sm sm:text-base relative inline-block"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.span
                className="absolute -bottom-1 left-0 h-0.5 bg-blue-500"
                initial={{ width: 0 }}
                animate={isInView ? { width: '100%' } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
              />
              Why Organizations Trust AlturaCyber
            </motion.p>

            {/* Main Heading with word animation */}
            <motion.h2 
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              We combine expert talent, advanced technology, and strategic insight to secure businesses against evolving cyber risks.
            </motion.h2>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="p-4 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:border-blue-200 transition-colors group cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.div 
                    className="text-3xl mb-2"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className="font-semibold text-dark mb-1 text-sm">{feature.title}</h3>
                  <p className="text-xs text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Button with animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <motion.button 
                className="px-8 py-3 bg-blue-500 text-white text-sm font-semibold rounded-full relative overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">ABOUT US</span>
                
                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                />
                
                {/* Hover glow */}
                <motion.div
                  className="absolute inset-0 bg-white rounded-full"
                  initial={{ scale: 0, opacity: 0.5 }}
                  whileHover={{ scale: 1.5, opacity: 0 }}
                  transition={{ duration: 0.6 }}
                />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Content - Shield Icon with animations */}
          <motion.div 
            className="flex items-center justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              {/* Animated Shield */}
              <motion.svg
                className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96"
                viewBox="0 0 200 220"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                whileHover={{ scale: 1.05 }}
              >
                {/* Background glow */}
                <motion.circle
                  cx="100"
                  cy="110"
                  r="80"
                  fill="url(#glowGradient)"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0.2, 0.5, 0.2] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />

                {/* Shield Path with draw animation */}
                <motion.path
                  d="M100 10 L180 40 L180 100 C180 140 160 180 100 210 C40 180 20 140 20 100 L20 40 Z"
                  stroke="#5B8DEF"
                  strokeWidth="12"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
                  transition={{ duration: 2, ease: "easeInOut" }}
                />

                {/* Inner shield fill with animation */}
                <motion.path
                  d="M100 10 L180 40 L180 100 C180 140 160 180 100 210 C40 180 20 140 20 100 L20 40 Z"
                  fill="url(#shieldGradient)"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 0.1, scale: 1 } : {}}
                  transition={{ duration: 1, delay: 1 }}
                />

                {/* Checkmark with draw animation */}
                <motion.path
                  d="M60 110 L85 135 L140 80"
                  stroke="#5B8DEF"
                  strokeWidth="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={isInView ? { pathLength: 1 } : {}}
                  transition={{ duration: 0.8, delay: 2 }}
                />

                {/* Gradients */}
                <defs>
                  <radialGradient id="glowGradient">
                    <stop offset="0%" stopColor="#5B8DEF" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#5B8DEF" stopOpacity="0" />
                  </radialGradient>
                  <linearGradient id="shieldGradient" x1="100" y1="10" x2="100" y2="210">
                    <stop offset="0%" stopColor="#5B8DEF" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#5B8DEF" stopOpacity="0.05" />
                  </linearGradient>
                </defs>
              </motion.svg>

              {/* Orbiting particles around shield */}
              {isMounted && [...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-blue-500 rounded-full"
                  style={{
                    top: '50%',
                    left: '50%',
                  }}
                  animate={{
                    x: [
                      Math.cos((i / 8) * Math.PI * 2) * 120,
                      Math.cos((i / 8) * Math.PI * 2 + Math.PI * 2) * 120,
                    ],
                    y: [
                      Math.sin((i / 8) * Math.PI * 2) * 120,
                      Math.sin((i / 8) * Math.PI * 2 + Math.PI * 2) * 120,
                    ],
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                    delay: i * 0.2,
                  }}
                />
              ))}

              {/* Pulse rings */}
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-blue-500 rounded-full"
                  initial={{ width: 0, height: 0, opacity: 0.6 }}
                  animate={{
                    width: [0, 400],
                    height: [0, 400],
                    opacity: [0.6, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 1,
                    ease: "easeOut",
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}