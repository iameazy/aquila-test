'use client'
import Link from 'next/link'
import Image from 'next/image'

export default function CTAFooter() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Downward Curved Top - Transition from white to dark */}
      <div className="absolute top-0 left-0 right-0 z-10">
        <svg
          className="w-full h-24 sm:h-32 md:h-40"
          viewBox="0 0 1440 160"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,0 L0,80 C240,133.3 480,160 720,160 C960,160 1200,133.3 1440,80 L1440,0 Z"
            fill="white"
          />
        </svg>
      </div>

      {/* Background Image Container - Your background image here */}
      <div className="relative min-h-[120vh] md:min-h-[140vh]">
        {/* Background Image - Replace with your image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/footer/bottom-image.png"
            alt="Background"
            fill
            className="object-cover"
            priority
          />
          {/* Optional: Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Content */}
        <div className="relative z-20 pt-40 sm:pt-48 md:pt-56 lg:pt-64 pb-16 md:pb-20 lg:pb-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* CTA Content */}
            <div className="text-center mb-16 md:mb-20 lg:mb-28">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 md:mb-10 lg:mb-12 leading-tight max-w-4xl mx-auto">
                Partner with AlturaCyber today and take control of your organization's digital security
              </h2>

              {/* Email Form */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-xl mx-auto mb-16 md:mb-20 lg:mb-24">
                <input
                  type="email"
                  placeholder="Email"
                  className="flex-1 px-4 sm:px-6 py-3 sm:py-4 rounded-full bg-transparent border border-gray-500 text-white placeholder-gray-400 focus:outline-none focus:border-primary text-sm sm:text-base"
                />
                <button className="px-6 sm:px-8 py-3 sm:py-4 bg-primary hover:bg-primaryHover text-white text-sm sm:text-base font-semibold rounded-full transition whitespace-nowrap">
                  Get Free Consultation
                </button>
              </div>

              {/* Dashboard Image */}
              <div className="relative max-w-4xl mx-auto">
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl">
                  {/* Replace with your dashboard image */}
                  <div className="w-full h-full bg-gradient-to-br from-blue-900 to-blue-600 flex items-center justify-center">
                    <Image
                      src="/images/footer/footer-image.png"
                      alt="Cybersecurity Dashboard"
                      width={1200}
                      height={675}
                      className="w-full h-full object-cover"
                    />
                    {/* Placeholder */}
                    {/* <div className="text-center">
                      <p className="text-white text-xs sm:text-sm">
                        [Dashboard/Analytics Preview Image]<br />
                        Replace with your image
                      </p>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <footer className="border-t border-gray-700 pt-12 md:pt-16 lg:pt-20 mt-12 md:mt-16 lg:mt-20">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 lg:gap-16 mb-12 md:mb-16 lg:mb-20">
                
                {/* Left - Brand */}
                <div className="text-center md:text-left">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                    AlturaCyber —
                  </h3>
                  <p className="text-sm sm:text-base text-gray-300">
                    Protecting What Matters Most
                  </p>
                </div>

                {/* Center - Navigation Links */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-center md:text-left">
                  <div className="space-y-3">
                    <Link href="/" className="block text-sm text-gray-300 hover:text-white transition">
                      Home
                    </Link>
                    <Link href="/about" className="block text-sm text-gray-300 hover:text-white transition">
                      About
                    </Link>
                  </div>
                  <div className="space-y-3">
                    <Link href="/services" className="block text-sm text-gray-300 hover:text-white transition">
                      Services
                    </Link>
                    <Link href="/blog" className="block text-sm text-gray-300 hover:text-white transition">
                      Blog
                    </Link>
                  </div>
                  <div className="space-y-3">
                    <Link href="/careers" className="block text-sm text-gray-300 hover:text-white transition">
                      Careers
                    </Link>
                    <Link href="/contact" className="block text-sm text-gray-300 hover:text-white transition">
                      Contact
                    </Link>
                  </div>
                </div>

                {/* Right - Social & Contact */}
                <div className="space-y-4 text-center md:text-left">
                  {/* Social Links */}
                  <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm">
                    <Link href="https://linkedin.com" className="text-gray-300 hover:text-white transition">
                      LinkedIn
                    </Link>
                    <Link href="https://twitter.com" className="text-gray-300 hover:text-white transition">
                      X (Twitter)
                    </Link>
                  </div>
                  <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm">
                    <Link href="/privacy" className="text-gray-300 hover:text-white transition">
                      Privacy Policy
                    </Link>
                    <Link href="/terms" className="text-gray-300 hover:text-white transition">
                      Terms of Service
                    </Link>
                  </div>
                  
                  {/* Contact Info */}
                  <div className="space-y-2 text-sm text-gray-300">
                    <p className="font-semibold text-white">Email</p>
                    <p className="font-semibold text-white">Phone</p>
                    <p className="font-semibold text-white">Address</p>
                  </div>
                </div>

              </div>

              {/* Bottom Bar */}
              <div className="border-t border-gray-700 pt-8 md:pt-10 lg:pt-12 pb-10 md:pb-12 lg:pb-16">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                  <p className="text-xs sm:text-sm text-gray-400 text-center sm:text-left max-w-2xl">
                    AlturaCyber is a cybersecurity agency delivering end-to-end protection and digital resilience for businesses
                  </p>
                  <div className="flex gap-3 items-center">
                    <button className="flex items-center gap-2 px-4 py-2 border border-gray-600 rounded-full text-xs text-gray-300 hover:border-gray-400 transition">
                      <span>🌐</span>
                      <span>Language</span>
                    </button>
                    <Link href="/contact">
                      <button className="px-6 py-2 bg-primary hover:bg-primaryHover text-white text-xs font-semibold rounded-full transition uppercase">
                        Consultation
                      </button>
                    </Link>
                  </div>
                </div>
              </div>

            </footer>

          </div>
        </div>
      </div>
    </section>
  )
}