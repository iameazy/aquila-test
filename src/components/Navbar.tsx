'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: 'SERVICES', href: '#services', hasDropdown: true },
    { name: 'INDUSTRIES', href: '#industries', hasDropdown: true },
    { name: 'ABOUT', href: '#about', hasDropdown: true },
    { name: 'INSIGHTS', href: '#insights', hasDropdown: true },
  ]

  return (
    <nav className="fixed top-0 w-full bg-dark/95 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 border border-white/30 rounded-full px-4 py-2 hover:border-white/50 transition">
            <div className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <span className="text-white font-semibold text-lg">AlturaCyber</span>
            <span className="text-white/50 text-sm">LOGIN</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white text-sm font-medium hover:text-gray-300 transition flex items-center space-x-1"
              >
                <span>{item.name}</span>
                {item.hasDropdown && (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </Link>
            ))}
            
            <Link 
              href="/partner" 
              className="text-white text-sm font-medium hover:text-gray-300 transition"
            >
              PARTNER WITH US
            </Link>

            <button className="px-6 py-2.5 bg-primary rounded-full text-black text-sm font-bold hover:bg-primaryHover transition">
              CONSULTATION
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden pb-6 space-y-4 border-t border-gray-800 pt-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-white text-sm font-medium hover:text-gray-300 transition"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/partner"
              className="block text-white text-sm font-medium hover:text-gray-300 transition"
              onClick={() => setIsOpen(false)}
            >
              PARTNER WITH US
            </Link>
            <button className="w-full px-6 py-2.5 bg-primary rounded-full text-black text-sm font-bold hover:bg-primaryHover transition">
              CONSULTATION
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}