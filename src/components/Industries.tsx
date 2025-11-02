'use client'

export default function Industries() {
  // Define industries with their position on circles (angle in degrees and which circle)
  const industries = [
    { name: 'Technology', color: 'bg-blue-500', angle: 45, radius: 380 },
    { name: 'Energy', color: 'bg-blue-400', angle: 90, radius: 380 },
    { name: 'Healthcare', color: 'bg-orange-400', angle: 135, radius: 380 },
    { name: 'Education', color: 'bg-amber-300', angle: 225, radius: 300 },
    { name: 'Government\n& Education', color: 'bg-blue-300', angle: 180, radius: 300 },
    { name: 'Finance &\nFintech', color: 'bg-orange-200', angle: 20, radius: 300 },
  ]

  // Function to calculate position on circle
  const getPosition = (angle: number, radius: number) => {
    const centerX = 400 // SVG center
    const centerY = 400 // SVG center
    const radian = (angle * Math.PI) / 180
    const x = centerX + radius * Math.cos(radian)
    const y = centerY + radius * Math.sin(radian)
    return { x, y }
  }

  return (
    <section className="relative w-full bg-white py-16 sm:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Small title above */}
        <p className="text-center text-sm text-gray-600 mb-12">
          Industries We Serve
        </p>

        {/* Main circular design container */}
        <div className="relative w-full max-w-5xl mx-auto aspect-square">
          {/* Border frame */}
          <div className="absolute inset-0 border-2 border-blue-400 rounded-lg"></div>

          {/* Animated rotating circles with bubbles */}
          <div className="absolute inset-0 animate-spin-slow">
            <svg className="w-full h-full" viewBox="0 0 800 800">
              {/* Background circles */}
              <circle
                cx="400"
                cy="400"
                r="380"
                fill="none"
                stroke="#E5E7EB"
                strokeWidth="1"
              />
              <circle
                cx="400"
                cy="400"
                r="300"
                fill="none"
                stroke="#E5E7EB"
                strokeWidth="1"
              />
              <circle
                cx="400"
                cy="400"
                r="220"
                fill="none"
                stroke="#E5E7EB"
                strokeWidth="1"
              />

              {/* Industry bubbles positioned on circles */}
              {industries.map((industry, index) => {
                const pos = getPosition(industry.angle, industry.radius)
                return (
                  <g key={index}>
                    {/* Counter-rotate the bubbles to keep them upright */}
                    <foreignObject
                      x={pos.x - 60}
                      y={pos.y - 30}
                      width="120"
                      height="60"
                      style={{
                        transformOrigin: `${pos.x}px ${pos.y}px`,
                      }}
                    >
                      <div className="flex items-center justify-center h-full animate-spin-reverse-inline">
                        <div
                          className={`${industry.color} rounded-full px-4 py-3 shadow-lg whitespace-pre-line text-center`}
                        >
                          <span className="text-white text-xs sm:text-sm font-semibold leading-tight">
                            {industry.name}
                          </span>
                        </div>
                      </div>
                    </foreignObject>
                  </g>
                )
              })}
            </svg>
          </div>

          {/* Center content - not rotating */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="text-center px-8 sm:px-12 max-w-2xl">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-dark leading-tight">
                Our solutions are built for organizations of all sizes — from startups to enterprises — across critical industries.
              </h2>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes spin-reverse-inline {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(-360deg);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 30s linear infinite;
        }

        .animate-spin-reverse-inline {
          animation: spin-reverse-inline 30s linear infinite;
        }
      `}</style>
    </section>
  )
}