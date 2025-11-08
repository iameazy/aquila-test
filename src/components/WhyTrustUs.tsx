'use client'
import { useRef } from 'react'
import { useInView } from 'framer-motion'

export default function WhoWeAre() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  return (
    <section className="relative bg-gray-50 py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={sectionRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div>
            {/* Badge */}
            <div className="mb-8">
              <span className="inline-block text-gray-400 text-sm font-normal">
                Why Organizations Trust AlturaCyber
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-10 leading-tight">
              We combine expert talent, advanced technology, and strategic insight to secure businesses against evolving cyber risks.
            </h2>

            {/* CTA Button */}
            <div>
              <button className="px-8 py-3 bg-cyan-400 hover:bg-cyan-500 text-white text-sm font-semibold rounded-full transition-colors duration-300 uppercase">
                About Us
              </button>
            </div>
          </div>

          {/* Right - Shield Icon */}
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-md">
              {/* Simple Blue Shield SVG */}
              <svg 
                viewBox="0 0 400 480" 
                className="w-full h-auto"
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Main Shield */}
                <path
                  d="M200 20 L360 80 L360 240 C360 340 280 440 200 460 C120 440 40 340 40 240 L40 80 Z"
                  fill="white"
                  stroke="#5B8DEF"
                  strokeWidth="8"
                />
                
                {/* Inner Shield */}
                <path
                  d="M200 60 L320 100 L320 240 C320 320 260 400 200 420 C140 400 80 320 80 240 L80 100 Z"
                  fill="#5B8DEF"
                  stroke="none"
                />
              </svg>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
