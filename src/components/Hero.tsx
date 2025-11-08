'use client'
import { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform, Variants } from 'framer-motion'

export default function Hero() {
  const [email, setEmail] = useState('')
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isMounted, setIsMounted] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  })

  const features = [
    'Tailored solutions for every industry',
    'Certified cybersecurity professionals with global experience',
    'End-to-end protection across networks, systems, and people',
    'Proven record of measurable results',
  ]

  // Set mounted state after client-side hydration
  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20
      const y = (e.clientY / window.innerHeight - 0.5) * 20
      setMousePosition({ x, y })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Email submitted:', email)
  }

  // Parallax transforms
  const y = useTransform(scrollYProgress, [0, 1], [0, 300])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  // Animation variants with proper typing
  const containerVariants: Variants = {
    hidden: { 
      opacity: 0 
    },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.15
      }
    }
  }

  const itemVariants: Variants = {
    hidden: { 
      y: 50, 
      opacity: 0 
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  }

  const glitchVariants: Variants = {
    initial: { 
      x: 0 
    },
    glitch: {
      x: [-2, 2, -2, 2, 0],
      transition: {
        duration: 0.3,
        repeat: Infinity,
        repeatDelay: 3
      }
    }
  }

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen bg-dark text-white pt-32 pb-20 overflow-hidden"
    >
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" 
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 140, 66, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 140, 66, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            animation: 'grid-move 20s linear infinite'
          }}
        />
      </div>

      {/* Floating Particles */}
      {isMounted && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary rounded-full"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                opacity: Math.random() * 0.5 + 0.2
              }}
              animate={{
                y: [null, Math.random() * -500],
                opacity: [null, 0],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          ))}
        </div>
      )}

      {/* Animated Gradient Orbs */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: mousePosition.x * 2,
          y: mousePosition.y * 2,
        }}
        transition={{
          scale: {
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          },
          x: { duration: 0.3 },
          y: { duration: 0.3 }
        }}
      />
      
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          x: -mousePosition.x * 2,
          y: -mousePosition.y * 2,
        }}
        transition={{
          scale: {
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          },
          x: { duration: 0.3 },
          y: { duration: 0.3 }
        }}
      />

      {/* Content with parallax */}
      <motion.div 
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10"
        style={{ y, opacity }}
      >
        <motion.div 
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Main Heading with Glitch Effect */}
          <motion.div variants={itemVariants} className="mb-8">
            <motion.h1 
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight relative inline-block"
              variants={glitchVariants}
              initial="initial"
              animate="glitch"
            >
              {/* Main text */}
              <span className="relative z-10">
                END-TO-END<br />
                CYBERSECURITY
              </span>
              
              {/* Glitch layers */}
              <span 
                className="absolute top-0 left-0 text-primary opacity-70"
                style={{ 
                  clipPath: 'polygon(0 0, 100% 0, 100% 45%, 0 45%)',
                  animation: 'glitch-top 2s infinite'
                }}
                aria-hidden="true"
              >
                END-TO-END<br />
                CYBERSECURITY
              </span>
              <span 
                className="absolute top-0 left-0 text-blue-500 opacity-70"
                style={{ 
                  clipPath: 'polygon(0 55%, 100% 55%, 100% 100%, 0 100%)',
                  animation: 'glitch-bottom 2.5s infinite'
                }}
                aria-hidden="true"
              >
                END-TO-END<br />
                CYBERSECURITY
              </span>
            </motion.h1>
          </motion.div>

          {/* Subheading with fade and slide */}
          <motion.p 
            variants={itemVariants}
            className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            AlturaCyber helps organizations anticipate, prevent, and respond to cyber threats with precision and confidence
          </motion.p>

          {/* Email Signup Form with scale animation */}
          <motion.form 
            variants={itemVariants}
            onSubmit={handleSubmit} 
            className="max-w-3xl mx-auto mb-12"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <motion.input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your email"
                required
                className="w-full sm:flex-1 max-w-md px-6 py-4 rounded-full bg-darkGray text-white text-base placeholder:text-gray-500 border border-gray-700 focus:outline-none focus:border-primary transition"
                whileFocus={{ scale: 1.02, borderColor: '#ff8c42' }}
              />
              <motion.button
                type="submit"
                className="w-full sm:w-auto px-8 py-4 bg-primary rounded-full text-black font-semibold hover:bg-primaryHover transition whitespace-nowrap text-base relative overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Get a Free Security Consultation</span>
                <motion.div
                  className="absolute inset-0 bg-white"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ opacity: 0.1 }}
                />
              </motion.button>
            </div>
          </motion.form>

          {/* Badge with fade */}
          <motion.div variants={itemVariants} className="mb-20">
            <motion.p 
              className="text-xs text-gray-500 uppercase tracking-widest"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              PROFESSIONAL CYBERSECURITY SERVICES
            </motion.p>
          </motion.div>

          {/* Feature Cards with stagger and hover effects */}
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative text-center p-6 rounded-2xl bg-gradient-to-br from-darkGray/50 to-transparent border border-gray-800/50 backdrop-blur-sm group"
                whileHover={{ 
                  y: -10,
                  scale: 1.05,
                }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-base font-medium leading-relaxed text-white relative z-10">
                  {feature}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes grid-move {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(50px, 50px);
          }
        }

        @keyframes glitch-top {
          0%, 90%, 100% {
            transform: translate(0, 0);
          }
          91%, 93% {
            transform: translate(-2px, 0);
          }
          92%, 94% {
            transform: translate(2px, 0);
          }
        }

        @keyframes glitch-bottom {
          0%, 90%, 100% {
            transform: translate(0, 0);
          }
          91%, 93% {
            transform: translate(2px, 0);
          }
          92%, 94% {
            transform: translate(-2px, 0);
          }
        }
      `}</style>
    </section>
  )
}