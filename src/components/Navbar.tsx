'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  
  const { scrollY } = useScroll()

  const navItems = [
    { name: 'SERVICES', href: '/services', hasDropdown: true },
    { name: 'INDUSTRIES', href: 'industries', hasDropdown: true },
    { name: 'ABOUT', href: '/about', hasDropdown: true },
    { name: 'INSIGHTS', href: 'insights', hasDropdown: true },
  ]

  // Handle scroll behavior - hide on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setHidden(true) // Scrolling down
      } else {
        setHidden(false) // Scrolling up
      }

      setIsScrolled(currentScrollY > 50)
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ 
          y: hidden ? -100 : 0,
          backgroundColor: 'rgba(255, 255, 255, 0)'
        }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 w-full backdrop-blur-sm z-50"
        style={{
          backdropFilter: 'blur(8px)',
        }}
      >
        {/* Animated border bottom */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ 
            scaleX: isScrolled ? 1 : 0,
            opacity: isScrolled ? 1 : 0
          }}
          transition={{ duration: 0.5 }}
        />

        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Animated Logo */}
            <Link href="/">
              <motion.div 
                className="flex items-center space-x-3 border border-white/30 rounded-full px-4 py-2 hover:border-white/50 transition cursor-pointer group relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                {/* Glow effect on hover */}
                <motion.div
                  className="absolute inset-0 bg-white/10 rounded-full"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Animated Shield Icon */}
                <motion.div 
                  className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center relative z-10"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <motion.svg 
                    className="w-5 h-5 text-white" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </motion.svg>
                </motion.div>
                
                <span className="text-white font-semibold text-lg relative z-10">AlturaCyber</span>
                <span className="text-white/50 text-sm relative z-10 group-hover:text-white/70 transition-colors">LOGIN</span>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link href={item.href}>
                    <motion.div
                      className="text-white text-sm font-medium transition flex items-center space-x-1 cursor-pointer group relative"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="relative z-10">{item.name}</span>
                      {item.hasDropdown && (
                        <motion.svg 
                          className="w-4 h-4 relative z-10" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                          whileHover={{ rotate: 180 }}
                          transition={{ duration: 0.3 }}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </motion.svg>
                      )}
                      
                      {/* Animated underline */}
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.3 }}
                      />

                      {/* Glow effect on hover */}
                      <motion.div
                        className="absolute inset-0 bg-white/10 rounded -z-10"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileHover={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Link href="/partner">
                  <motion.div
                    className="text-white text-sm font-medium cursor-pointer relative group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="relative z-10">PARTNER WITH US</span>
                    
                    {/* Animated underline */}
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                </Link>
              </motion.div>

              {/* Animated CTA Button */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <Link href="/contact">
                <motion.button 
                  className="px-6 py-2.5 bg-slate-700 rounded-full text-white text-sm font-bold relative overflow-hidden group"
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: '#FB8B3A'
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">CONSULTATION</span>
                  
                  {/* Shimmer effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20"
                    initial={{ x: '-100%' }}
                    animate={{ x: '100%' }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 1
                    }}
                  />
                </motion.button>
                </Link>
              </motion.div>
            </div>

            {/* Animated Mobile Menu Button */}
            <motion.button
              className="lg:hidden text-white relative"
              onClick={() => setIsOpen(!isOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div className="w-6 h-6 relative">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <motion.path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    animate={isOpen ? {
                      d: "M6 18L18 6M6 6l12 12"
                    } : {
                      d: "M4 6h16M4 12h16M4 18h16"
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </svg>
              </motion.div>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Animated Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop with blur */}
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-md z-40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              className="fixed top-0 right-0 bottom-0 w-4/5 max-w-sm bg-white z-50 lg:hidden overflow-y-auto"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              {/* Close button */}
              <div className="flex justify-end p-6 relative z-10">
                <motion.button
                  className="text-black/70 hover:text-black"
                  onClick={() => setIsOpen(false)}
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </motion.button>
              </div>

              {/* Menu Items with stagger animation */}
              <div className="px-6 pb-6 space-y-2 relative z-10">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Link href={item.href}>
                      <motion.div
                        className="block text-black text-sm font-medium py-3 px-4 rounded-lg relative overflow-hidden cursor-pointer group"
                        onClick={() => setIsOpen(false)}
                        whileHover={{ x: 10, backgroundColor: 'rgba(241, 245, 249, 1)' }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {/* Left border indicator */}
                        <motion.div
                          className="absolute left-0 top-0 bottom-0 w-1 bg-slate-700"
                          initial={{ scaleY: 0 }}
                          whileHover={{ scaleY: 1 }}
                          transition={{ duration: 0.3 }}
                        />

                        <span className="relative z-10">{item.name}</span>

                        {/* Arrow icon */}
                        <motion.span
                          className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-700"
                          initial={{ opacity: 0, x: -10 }}
                          whileHover={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          →
                        </motion.span>
                      </motion.div>
                    </Link>
                  </motion.div>
                ))}

                {/* Partner link */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                >
                  <Link href="/partner">
                    <motion.div
                      className="block text-black text-sm font-medium py-3 px-4 rounded-lg relative overflow-hidden cursor-pointer"
                      onClick={() => setIsOpen(false)}
                      whileHover={{ x: 10, backgroundColor: 'rgba(241, 245, 249, 1)' }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <motion.div
                        className="absolute left-0 top-0 bottom-0 w-1 bg-slate-700"
                        initial={{ scaleY: 0 }}
                        whileHover={{ scaleY: 1 }}
                        transition={{ duration: 0.3 }}
                      />

                      <span className="relative z-10">PARTNER WITH US</span>

                      <motion.span
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-700"
                        initial={{ opacity: 0, x: -10 }}
                        whileHover={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        →
                      </motion.span>
                    </motion.div>
                  </Link>
                </motion.div>

                {/* CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                  className="pt-4"
                >
                  <motion.button 
                    className="w-full px-6 py-3 bg-slate-700 hover:bg-slate-600 rounded-full text-white text-sm font-bold relative overflow-hidden"
                    onClick={() => setIsOpen(false)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="relative z-10">CONSULTATION</span>

                    {/* Animated shine effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20"
                      animate={{ x: ['-100%', '100%'] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatDelay: 0.5
                      }}
                    />
                  </motion.button>
                </motion.div>
              </div>

              {/* Footer */}
              <motion.div
                className="absolute bottom-6 left-6 right-6 border-t border-black/10 pt-4 relative z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.6 }}
              >
                <p className="text-xs text-black/40">© 2024 AlturaCyber</p>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}