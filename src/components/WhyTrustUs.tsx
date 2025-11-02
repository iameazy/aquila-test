'use client'

export default function WhyTrustUs() {
  return (
    <section className="relative w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Subtitle */}
            <p className="text-gray-500 text-sm sm:text-base">
              Why Organizations Trust AlturaCyber
            </p>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark leading-tight">
              We combine expert talent, advanced technology, and strategic insight to secure businesses against evolving cyber risks.
            </h2>

            {/* Button */}
            <div>
              <button className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold rounded-full transition">
                ABOUT US
              </button>
            </div>
          </div>

          {/* Right Content - Shield Icon */}
          <div className="flex items-center justify-center lg:justify-end">
            <div className="relative">
              {/* Shield SVG Icon */}
              <svg
                className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96"
                viewBox="0 0 200 220"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Shield Path */}
                <path
                  d="M100 10 L180 40 L180 100 C180 140 160 180 100 210 C40 180 20 140 20 100 L20 40 Z"
                  stroke="#5B8DEF"
                  strokeWidth="12"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}