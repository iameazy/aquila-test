'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function ContactPageComplete() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        company: '',
        serviceArea: '',
        message: ''
    })

    const [isServicesOpen, setIsServicesOpen] = useState(false)
    const [isIndustriesOpen, setIsIndustriesOpen] = useState(false)
    const [isAboutOpen, setIsAboutOpen] = useState(false)
    const [isInsightsOpen, setIsInsightsOpen] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    // Navbar scroll detection
    const [isNavbarVisible, setIsNavbarVisible] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY

            if (currentScrollY < lastScrollY || currentScrollY < 10) {
                setIsNavbarVisible(true)
            }
            else if (currentScrollY > lastScrollY && currentScrollY > 80) {
                setIsNavbarVisible(false)
            }

            setLastScrollY(currentScrollY)
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [lastScrollY])

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log('Form submitted:', formData)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <section>
            {/* Background Image - FIXED TO VIEWPORT */}
            <div className="fixed inset-0 z-0">
                <Image
                    src="/images/contact/image.png"
                    alt="Background"
                    fill
                    className="object-cover object-[center_75%]"
                    priority
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/60" />
            </div>

            {/* All Content Sits on Top */}
            <div className="relative z-10 min-h-screen flex flex-col">

                {/* Navbar - Auto-hide on scroll */}
                <nav
                    className={`fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-md transition-transform duration-300 ${isNavbarVisible ? 'translate-y-0' : '-translate-y-full'
                        }`}
                >
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between h-16 lg:h-20">

                            {/* Logo */}
                            <Link href="/" className="flex items-center gap-2 px-3 py-1.5 lg:px-4 lg:py-2 border-2 border-white rounded-full">
                                <div className="w-5 h-5 lg:w-6 lg:h-6 relative">
                                    <Image
                                        src="/images/contact/image2.png"  // Your logo path
                                        alt="AlturaCyber Logo"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <span className="text-white font-semibold text-xs lg:text-sm">AlturaCyber</span>
                            </Link>

                            {/* Desktop Menu */}
                            <div className="hidden lg:flex items-center gap-8">


                                {/* Industries Dropdown */}
                                <div className="relative">
                                    <button
                                        onClick={() => setIsIndustriesOpen(!isIndustriesOpen)}
                                        className="text-white text-sm font-medium flex items-center gap-1 hover:text-gray-300 transition-colors"
                                    >
                                        INDUSTRIES
                                        <span className="text-xs">▼</span>
                                    </button>
                                    {isIndustriesOpen && (
                                        <div className="absolute top-full mt-2 w-48 bg-[#2a2a2a] rounded-lg shadow-lg py-2">
                                            <Link href="/industries/banking" className="block px-4 py-2 text-sm text-gray-300 hover:bg-[#3a3a3a] hover:text-white">
                                                Banking
                                            </Link>
                                            <Link href="/industries/healthcare" className="block px-4 py-2 text-sm text-gray-300 hover:bg-[#3a3a3a] hover:text-white">
                                                Healthcare
                                            </Link>
                                            <Link href="/industries/government" className="block px-4 py-2 text-sm text-gray-300 hover:bg-[#3a3a3a] hover:text-white">
                                                Government
                                            </Link>
                                        </div>
                                    )}
                                </div>

                                {/* About Dropdown */}
                                <div className="relative">
                                    <button
                                        onClick={() => setIsAboutOpen(!isAboutOpen)}
                                        className="text-white text-sm font-medium flex items-center gap-1 hover:text-gray-300 transition-colors"
                                    >
                                        ABOUT
                                        <span className="text-xs">▼</span>
                                    </button>
                                    {isAboutOpen && (
                                        <div className="absolute top-full mt-2 w-48 bg-[#2a2a2a] rounded-lg shadow-lg py-2">
                                            <Link href="/about" className="block px-4 py-2 text-sm text-gray-300 hover:bg-[#3a3a3a] hover:text-white">
                                                About Us
                                            </Link>
                                            <Link href="/team" className="block px-4 py-2 text-sm text-gray-300 hover:bg-[#3a3a3a] hover:text-white">
                                                Team
                                            </Link>
                                            <Link href="/careers" className="block px-4 py-2 text-sm text-gray-300 hover:bg-[#3a3a3a] hover:text-white">
                                                Careers
                                            </Link>
                                        </div>
                                    )}
                                </div>

                                {/* Insights Dropdown */}
                                <div className="relative">
                                    <button
                                        onClick={() => setIsInsightsOpen(!isInsightsOpen)}
                                        className="text-white text-sm font-medium flex items-center gap-1 hover:text-gray-300 transition-colors"
                                    >
                                        INSIGHTS
                                        <span className="text-xs">▼</span>
                                    </button>
                                    {isInsightsOpen && (
                                        <div className="absolute top-full mt-2 w-48 bg-[#2a2a2a] rounded-lg shadow-lg py-2">
                                            <Link href="/insights/blog" className="block px-4 py-2 text-sm text-gray-300 hover:bg-[#3a3a3a] hover:text-white">
                                                Blog
                                            </Link>
                                            <Link href="/insights/case-studies" className="block px-4 py-2 text-sm text-gray-300 hover:bg-[#3a3a3a] hover:text-white">
                                                Case Studies
                                            </Link>
                                            <Link href="/insights/resources" className="block px-4 py-2 text-sm text-gray-300 hover:bg-[#3a3a3a] hover:text-white">
                                                Resources
                                            </Link>
                                        </div>
                                    )}
                                </div>

                                {/* Partner with us */}
                                <Link href="/partner" className="text-white text-sm font-medium hover:text-gray-300 transition-colors">
                                    PARTNER WITH US
                                </Link>

                                {/* Consultation Button */}
                                <Link href="/contact">
                                    <button className="px-6 py-2 bg-[#ff8c42] hover:bg-orange-600 text-black text-sm font-semibold rounded-full uppercase transition-colors duration-300">
                                        CONSULTATION
                                    </button>
                                </Link>
                            </div>

                            {/* Mobile Menu Button */}
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="lg:hidden text-white p-2"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    {isMobileMenuOpen ? (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    ) : (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                    )}
                                </svg>
                            </button>
                        </div>

                        {/* Mobile Menu */}
                        {isMobileMenuOpen && (
                            <div className="lg:hidden py-4 border-t border-white/10">
                                <div className="space-y-4">
                                    <Link href="/services" className="block text-white text-sm font-medium py-2">
                                        SERVICES
                                    </Link>
                                    <Link href="/industries" className="block text-white text-sm font-medium py-2">
                                        INDUSTRIES
                                    </Link>
                                    <Link href="/about" className="block text-white text-sm font-medium py-2">
                                        ABOUT
                                    </Link>
                                    <Link href="/insights" className="block text-white text-sm font-medium py-2">
                                        INSIGHTS
                                    </Link>
                                    <Link href="/partner" className="block text-white text-sm font-medium py-2">
                                        PARTNER WITH US
                                    </Link>
                                    <Link href="/contact">
                                        <button className="w-full px-6 py-2 bg-[#ff8c42] hover:bg-orange-600 text-black text-sm font-semibold rounded-full uppercase transition-colors duration-300">
                                            CONSULTATION
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        )}
                    </div>
                </nav>

                {/* Spacer for navbar */}
                <div className="h-16 lg:h-20" />

                {/* Contact Section - RESPONSIVE */}
                <section className="flex-1 min-h-screen py-8 px-4 sm:py-16 md:py-24 lg:py-40">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 mb-16 lg:mb-32">

                            {/* Left Side - Heading & Description */}
                            <div className="text-white text-center lg:text-left">
                                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 lg:mb-8 leading-tight drop-shadow-2xl">
                                    Request a
                                    <br />
                                    Consultation
                                </h1>
                                <div className="space-y-3 lg:space-y-6 text-sm sm:text-base lg:text-lg text-gray-100">
                                    <p className="font-normal lg:font-semibold drop-shadow-lg lg:text-2xl">
                                        Let's talk about your cybersecurity goals.
                                    </p>
                                    <p className="drop-shadow-lg text-xs sm:text-sm lg:text-2xl">
                                        Fill out the quick form, and our specialists will get back to you within 24 hours.
                                    </p>
                                </div>
                            </div>

                            {/* Right Side - Form */}
                            <div className="w-full">
                                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 lg:space-y-8">
                                    {/* Full Name */}
                                    <div>
                                        <label htmlFor="fullName" className="block text-xs sm:text-sm text-gray-200 mb-2 drop-shadow font-medium">
                                            Full Name
                                        </label>
                                        <input
                                            type="text"
                                            id="fullName"
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            placeholder="Enter your full name"
                                            className="w-full px-4 py-3 sm:px-6 sm:py-4 lg:py-5 bg-white/10 backdrop-blur-md text-white text-sm placeholder-gray-400 rounded-full border-2 border-white/20 focus:border-[#ff8c42] focus:outline-none transition-colors duration-300"
                                            required
                                        />
                                    </div>

                                    {/* Email Address */}
                                    <div>
                                        <label htmlFor="email" className="block text-xs sm:text-sm text-gray-200 mb-2 drop-shadow font-medium">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="your@email.com"
                                            className="w-full px-4 py-3 sm:px-6 sm:py-4 lg:py-5 bg-white/10 backdrop-blur-md text-white text-sm placeholder-gray-400 rounded-full border-2 border-white/20 focus:border-[#ff8c42] focus:outline-none transition-colors duration-300"
                                            required
                                        />
                                    </div>

                                    {/* Organization / Company */}
                                    <div>
                                        <label htmlFor="company" className="block text-xs sm:text-sm text-gray-200 mb-2 drop-shadow font-medium">
                                            Organization / Company
                                        </label>
                                        <input
                                            type="text"
                                            id="company"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleChange}
                                            placeholder="Your company name"
                                            className="w-full px-4 py-3 sm:px-6 sm:py-4 lg:py-5 bg-white/10 backdrop-blur-md text-white text-sm placeholder-gray-400 rounded-full border-2 border-white/20 focus:border-[#ff8c42] focus:outline-none transition-colors duration-300"
                                            required
                                        />
                                    </div>

                                    {/* Service Area of Interest */}
                                    <div>
                                        <label htmlFor="serviceArea" className="block text-xs sm:text-sm text-gray-200 mb-2 drop-shadow font-medium">
                                            Service Area of Interest
                                        </label>
                                        <select
                                            id="serviceArea"
                                            name="serviceArea"
                                            value={formData.serviceArea}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 sm:px-6 sm:py-4 lg:py-5 bg-white/10 backdrop-blur-md text-white text-sm rounded-full border-2 border-white/20 focus:border-[#ff8c42] focus:outline-none appearance-none cursor-pointer transition-colors duration-300"
                                            required
                                        >
                                            <option value="" className="bg-gray-900">Select an option</option>
                                            <option value="penetration-testing" className="bg-gray-900">Penetration Testing</option>
                                            <option value="risk-compliance" className="bg-gray-900">Risk & Compliance Advisory</option>
                                            <option value="incident-response" className="bg-gray-900">Incident Response & SOC</option>
                                            <option value="cybersecurity-training" className="bg-gray-900">Cybersecurity Training</option>
                                            <option value="other" className="bg-gray-900">Other</option>
                                        </select>
                                    </div>

                                    {/* Message / Inquiry */}
                                    <div>
                                        <label htmlFor="message" className="block text-xs sm:text-sm text-gray-200 mb-2 drop-shadow font-medium">
                                            Message / Inquiry
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="Tell us about your cybersecurity needs..."
                                            rows={6}
                                            className="w-full px-4 py-3 sm:px-6 sm:py-4 lg:py-5 bg-white/10 backdrop-blur-md text-white text-sm placeholder-gray-400 rounded-3xl border-2 border-white/20 focus:border-[#ff8c42] focus:outline-none resize-none transition-colors duration-300"
                                            required
                                        />
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        className="w-full px-6 py-3 sm:px-8 sm:py-4 lg:py-5 bg-[#ff8c42] hover:bg-orange-600 text-black font-bold text-sm sm:text-base lg:text-lg rounded-full transition-colors duration-300 shadow-lg hover:shadow-xl"
                                    >
                                        Request Consultation
                                    </button>
                                </form>
                            </div>

                        </div>
                    </div>
                </section>

                <footer className="mt-auto py-12 sm:py-16 md:py-24 lg:py-44 px-4 sm:px-6">
                    <div className="max-w-7xl mx-auto">

                        {/* Mobile Footer Layout (< lg) */}
                        <div className="lg:hidden">
                            {/* Brand Section */}
                            <div className="mb-8">
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="w-5 h-5 border-2 border-white rounded flex items-center justify-center">
                                        <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                                    </div>
                                    <span className="text-white font-semibold text-base">AlturaCyber</span>
                                </div>
                                <h3 className="text-lg font-bold text-white mb-3 leading-tight">
                                    AlturaCyber — Protecting What Matters Most
                                </h3>
                                <p className="text-xs text-gray-300 leading-relaxed">
                                    AlturaCyber is a cybersecurity agency delivering end-to-end protection and digital resilience for businesses
                                </p>
                            </div>

                            {/* Two Column Links */}
                            <div className="grid grid-cols-2 gap-6 mb-8">
                                {/* Left Column */}
                                <div className="space-y-5">
                                    {['Home', 'About', 'Services', 'Blog', 'Careers', 'Contact'].map((link) => (
                                        <Link key={link} href={`/${link.toLowerCase()}`}>
                                            <span className="block text-sm font-normal text-white hover:text-gray-300 transition-colors">
                                                {link}
                                            </span>
                                        </Link>
                                    ))}
                                </div>

                                {/* Right Column */}
                                <div className="space-y-5">
                                    <Link href="https://linkedin.com">
                                        <span className="block text-sm font-normal text-white hover:text-gray-300 transition-colors">
                                            LinkedIn
                                        </span>
                                    </Link>
                                    <Link href="https://twitter.com">
                                        <span className="block text-sm font-normal text-white hover:text-gray-300 transition-colors">
                                            X (Twitter)
                                        </span>
                                    </Link>
                                    {/* Empty spaces */}
                                    <div className="h-5"></div>
                                    <div className="h-5"></div>
                                    <p className="text-sm font-normal text-white">Email</p>
                                    <p className="text-sm font-normal text-white">Phone</p>
                                </div>
                            </div>

                            {/* Privacy & Terms */}
                            <div className="grid grid-cols-2 gap-6 mb-8">
                                <Link href="/privacy">
                                    <span className="block text-sm font-normal text-white hover:text-gray-300 transition-colors">
                                        Privacy Policy
                                    </span>
                                </Link>
                                <Link href="/terms">
                                    <span className="block text-sm font-normal text-white hover:text-gray-300 transition-colors">
                                        Terms of Service
                                    </span>
                                </Link>
                            </div>

                            {/* Bottom Buttons - Full Width Stack */}
                            <div className="space-y-3">
                                <button className="w-full flex items-center justify-center gap-2 px-5 py-3 border-2 border-gray-500 hover:border-gray-400 rounded-full text-sm text-white transition-colors duration-200 bg-transparent">
                                    <span>🌐</span>
                                    <span className="font-normal">Language</span>
                                </button>
                                <Link href="/contact" className="block">
                                    <button className="w-full px-6 py-3 bg-[#ff8c42] hover:bg-orange-600 text-black text-sm font-bold rounded-full uppercase transition-colors duration-300 shadow-lg tracking-wide">
                                        Consultation
                                    </button>
                                </Link>
                            </div>
                        </div>

                        {/* Desktop Footer Layout (lg+) */}
                        <div className="hidden lg:block">
                            {/* 4 Column Grid */}
                            <div className="grid grid-cols-4 gap-12 mb-18">

                                {/* Column 1 - Brand */}
                                <div className="text-left">
                                    <h3 className="text-3xl font-bold text-white mb-2 drop-shadow-lg leading-tight">
                                        AlturaCyber —
                                    </h3>
                                    <p className="text-2xl font-bold text-gray-200 drop-shadow leading-relaxed">
                                        Protecting What Matters Most
                                    </p>
                                </div>

                                {/* Column 2 - Navigation Links */}
                                <div className="text-left">
                                    <div className="flex flex-col gap-14">
                                        {['Home', 'About', 'Services', 'Blog', 'Careers', 'Contact'].map((link) => (
                                            <Link key={link} href={`/${link.toLowerCase()}`}>
                                                <span className="block text-base font-medium text-white hover:text-gray-300 transition-colors duration-200 drop-shadow">
                                                    {link}
                                                </span>
                                            </Link>
                                        ))}
                                    </div>
                                </div>

                                {/* Column 3 - Social & Legal */}
                                <div className="text-left">
                                    <div className="flex flex-col gap-14">
                                        {[
                                            { name: 'LinkedIn', url: 'https://linkedin.com' },
                                            { name: 'X (Twitter)', url: 'https://twitter.com' },
                                            { name: 'Privacy Policy', url: '/privacy' },
                                            { name: 'Terms of Service', url: '/terms' }
                                        ].map((link) => (
                                            <Link key={link.name} href={link.url}>
                                                <span className="block text-base font-medium text-white hover:text-gray-300 transition-colors duration-200 drop-shadow">
                                                    {link.name}
                                                </span>
                                            </Link>
                                        ))}
                                    </div>
                                </div>

                                {/* Column 4 - Contact Info */}
                                <div className="text-left">
                                    <div className="flex flex-col gap-14">
                                        {['Email', 'Phone', 'Address'].map((item) => (
                                            <p key={item} className="text-base font-semibold text-white drop-shadow">
                                                {item}
                                            </p>
                                        ))}
                                    </div>
                                </div>

                            </div>

                            {/* Bottom Bar - Desktop */}
                            <div className="pt-44">
                                <div className="flex flex-row justify-between items-center gap-6">
                                    <p className="text-xs text-gray-300 drop-shadow">
                                        AlturaCyber is a cybersecurity agency delivering end-to-end protection and digital resilience for businesses
                                    </p>

                                    <div className="flex gap-3 items-center flex-shrink-0">
                                        <button className="flex items-center gap-2 px-5 py-2.5 border-2 border-gray-600 hover:border-gray-500 rounded-full text-xs text-gray-200 transition-colors duration-200 bg-black/30 backdrop-blur-sm">
                                            <span>🌐</span>
                                            <span className="font-medium">Language</span>
                                        </button>
                                        <Link href="/contact">
                                            <button className="px-6 py-2.5 bg-[#ff8c42] hover:bg-orange-600 text-black text-xs font-bold rounded-full uppercase transition-colors duration-300 shadow-lg tracking-wide">
                                                Consultation
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </footer>
            </div>
        </section>
    )
}