'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

const WhoWeAre = () => {
  const [isMounted, setIsMounted] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const isImageInView = useInView(imageRef, { once: true, amount: 0.3 });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Parallax effects
  const imageY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const textY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Split text into words for animation
  const heading = "Who We Are";
  const words = heading.split(" ");

  return (
    <section
      id='about'
      ref={sectionRef}
      className="relative min-h-screen bg-[#121212] pb-64 overflow-hidden md:px-8 lg:px-12"
    >
      {/* Animated Background Elements */}
      {isMounted && (
        <>
          {/* Gradient Orbs */}
          <motion.div
            className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.6, 0.3],
              x: [0, 50, 0],
            }}
            transition={{ duration: 12, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1.3, 1, 1.3],
              opacity: [0.6, 0.3, 0.6],
              x: [0, -50, 0],
            }}
            transition={{ duration: 12, repeat: Infinity }}
          />

          {/* Floating Particles */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(25)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
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

          {/* Animated Grid Lines */}
          <motion.div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(74, 111, 165, 0.5) 1px, transparent 1px),
                linear-gradient(90deg, rgba(74, 111, 165, 0.5) 1px, transparent 1px)
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

      {/* Curved bottom gradient with animation */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-32 lg:h-40 rounded-t-[50%] bg-gradient-radial from-gray-200/20 to-transparent pointer-events-none"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* About tag - Enhanced Animation */}
        <motion.div
          className="text-xs md:text-sm uppercase tracking-[2px] mb-5 lg:mb-2 relative inline-block"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 0.8, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="relative z-10"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            About AlturaCyber
          </motion.span>

          {/* Underline animation */}
          <motion.span
            className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400"
            initial={{ width: 0 }}
            animate={isInView ? { width: '100%' } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
        </motion.div>

        {/* Content wrapper */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Image - Enhanced with parallax and effects */}
          <motion.div
            ref={imageRef}
            className="order-1 lg:order-2 relative"
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            style={{ y: imageY }}
          >
            <div className="relative rounded-lg overflow-hidden shadow-2xl group">
              {/* Animated frame corners */}
              {[0, 1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  className="absolute w-6 h-6 border-2 border-blue-400 z-20"
                  style={{
                    top: i < 2 ? 0 : 'auto',
                    bottom: i >= 2 ? 0 : 'auto',
                    left: i % 2 === 0 ? 0 : 'auto',
                    right: i % 2 === 1 ? 0 : 'auto',
                    borderTop: i < 2 ? '2px solid #60A5FA' : 'none',
                    borderBottom: i >= 2 ? '2px solid #60A5FA' : 'none',
                    borderLeft: i % 2 === 0 ? '2px solid #60A5FA' : 'none',
                    borderRight: i % 2 === 1 ? '2px solid #60A5FA' : 'none',
                  }}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={isImageInView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                />
              ))}

              {/* Scan line effect */}
              {isMounted && (
                <motion.div
                  className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent z-10 pointer-events-none"
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

              {/* Image with zoom effect */}
              <motion.div
                className="relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
              >
                <img
                  src="/images/about/about1.png"
                  alt="Cybersecurity professionals working"
                  className="w-full h-auto object-cover"
                />
              </motion.div>

              {/* Animated border */}
              <motion.div
                className="absolute inset-0 border-2 border-blue-400/0 rounded-lg pointer-events-none"
                whileHover={{ borderColor: 'rgba(96, 165, 250, 0.5)' }}
                transition={{ duration: 0.3 }}
              />

              {/* Overlay on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-purple-600/0 pointer-events-none"
                whileHover={{
                  background: 'linear-gradient(to bottom right, rgba(37, 99, 235, 0.1), rgba(147, 51, 234, 0.1))'
                }}
                transition={{ duration: 0.5 }}
              />

              {/* Floating info badge */}
              <motion.div
                className="absolute top-4 left-4 px-4 py-2 bg-blue-500/90 backdrop-blur-sm rounded-full text-white text-xs font-semibold"
                initial={{ opacity: 0, y: -20 }}
                animate={isImageInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
                whileHover={{ scale: 1.1 }}
              >
                Since 2025
              </motion.div>
            </div>

            {/* Floating shapes around image */}
            {isMounted && (
              <>
                <motion.div
                  className="absolute -top-6 -right-6 w-24 h-24 border-2 border-blue-400/30 rounded-full"
                  animate={{
                    rotate: 360,
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                    scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                  }}
                />
                <motion.div
                  className="absolute -bottom-6 -left-6 w-16 h-16 bg-purple-500/20 rounded-lg"
                  animate={{
                    rotate: -360,
                    y: [0, -10, 0],
                  }}
                  transition={{
                    rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                    y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                  }}
                />
              </>
            )}
          </motion.div>

          {/* Text content - Enhanced animations */}
          <motion.div
            className="order-2 lg:order-1"
            style={{ y: textY }}
          >
            {/* Heading with word-by-word animation */}
            <div className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 lg:mb-12 leading-tight">
              {words.map((word, index) => (
                <motion.span
                  key={index}
                  className="inline-block mr-4"
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.6,
                    delay: 0.1 + index * 0.1,
                    ease: [0.6, -0.05, 0.01, 0.99]
                  }}
                >
                  <motion.span
                    className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
                    whileHover={{
                      backgroundImage: 'linear-gradient(to right, #60A5FA, #A78BFA)',
                      transition: { duration: 0.3 }
                    }}
                  >
                    {word}
                  </motion.span>
                </motion.span>
              ))}
            </div>

            {/* Description box - Enhanced */}
            <motion.div
              className="relative bg-gradient-to-r from-white/5 to-transparent border-l-4 border-[#4a6fa5] p-6 md:p-8 mb-8 lg:mb-12 rounded-r-lg overflow-hidden group"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{
                background: 'linear-gradient(to right, rgba(255,255,255,0.1), transparent)',
                borderColor: '#6b8db8'
              }}
            >
              {/* Animated background bars */}
              <motion.div
                className="absolute left-0 top-0 w-1 h-0 bg-gradient-to-b from-blue-400 to-purple-400"
                initial={{ height: 0 }}
                whileHover={{ height: '100%' }}
                transition={{ duration: 0.5 }}
              />

              {/* Corner accent */}
              <motion.div
                className="absolute top-0 left-0 w-0 h-0 border-t-2 border-l-2 border-blue-400/0"
                whileHover={{
                  width: 20,
                  height: 20,
                  borderColor: 'rgba(96, 165, 250, 0.5)'
                }}
                transition={{ duration: 0.3 }}
              />

              <motion.p
                className="text-base md:text-lg lg:text-xl text-gray-200 leading-relaxed relative z-10"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                AlturaCyber is a cybersecurity agency helping businesses strengthen their digital resilience through expert-driven, data-backed security solutions.
              </motion.p>

              {/* Shimmer effect on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0"
                animate={{ x: ['-100%', '100%'] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 3,
                  ease: "linear"
                }}
                style={{ opacity: 0.05 }}
              />
            </motion.div>

            {/* CTA Button - Enhanced */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.button
                className="w-full md:w-auto px-12 py-4 bg-[#3d5a80] text-white text-sm md:text-base font-semibold uppercase tracking-wider rounded-full border-2 border-transparent relative overflow-hidden group"
                whileHover={{
                  scale: 1.05,
                  borderColor: '#6b8db8',
                  boxShadow: '0 10px 40px rgba(74,111,165,0.4)'
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Learn More About Us</span>

                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                />

                {/* Expanding circle on hover */}
                <motion.div
                  className="absolute inset-0 bg-[#4a6fa5] rounded-full"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 2 }}
                  transition={{ duration: 0.6 }}
                />

                {/* Particles on hover */}
                {isMounted && (
                  <>
                    {[...Array(4)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-white rounded-full"
                        style={{
                          left: '50%',
                          top: '50%',
                        }}
                        whileHover={{
                          x: [0, Math.cos((i / 4) * Math.PI * 2) * 40],
                          y: [0, Math.sin((i / 4) * Math.PI * 2) * 40],
                          opacity: [1, 0],
                          scale: [0, 1],
                        }}
                        transition={{
                          duration: 0.8,
                          delay: i * 0.1,
                        }}
                      />
                    ))}
                  </>
                )}
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;