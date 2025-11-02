'use client'
import { useState } from 'react'

export default function Hero() {
  const [email, setEmail] = useState('')

  const features = [
    'Tailored solutions for every industry',
    'Certified cybersecurity professionals with global experience',
    'End-to-end protection across networks, systems, and people',
    'Proven record of measurable results',
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Email submitted:', email)
  }

  return (
    <section className="relative min-h-screen bg-dark text-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight tracking-tight">
            END-TO-END<br />
            CYBERSECURITY
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            AlturaCyber helps organizations anticipate, prevent, and respond to cyber threats with precision and confidence
          </p>

          {/* Email Signup Form */}
          <form onSubmit={handleSubmit} className="max-w-3xl mx-auto mb-12">
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your email"
                required
                className="w-full sm:flex-1 max-w-md px-6 py-4 rounded-full bg-darkGray text-white text-base placeholder:text-gray-500 border border-gray-700 focus:outline-none focus:border-primary transition"
              />
              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-4 bg-primary rounded-full text-black font-semibold hover:bg-primaryHover transition whitespace-nowrap text-base"
              >
                Get a Free Security Consultation
              </button>
            </div>
          </form>

          {/* Professional Cybersecurity Services Badge */}
          <div className="mb-20">
            <p className="text-xs text-gray-500 uppercase tracking-widest">
              PROFESSIONAL CYBERSECURITY SERVICES
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center"
              >
                <p className="text-base font-medium leading-relaxed text-white">
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}