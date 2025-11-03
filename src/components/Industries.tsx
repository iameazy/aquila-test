'use client'

export default function Industries() {
  // Define industries with their position on circles - more evenly spaced angles
  const industries = [
    { name: 'Technology', color: 'bg-blue-500', angle: 30, radius: 320 },
    { name: 'Energy', color: 'bg-blue-400', angle: 100, radius: 320 },
    { name: 'Healthcare', color: 'bg-orange-400', angle: 160, radius: 320 },
    { name: 'Finance &\nFintech', color: 'bg-orange-200', angle: 340, radius: 250 },
    { name: 'Government\n& Education', color: 'bg-blue-300', angle: 200, radius: 250 },
    { name: 'Education', color: 'bg-amber-300', angle: 260, radius: 250 },
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
    <section className="relative w-full bg-white py-12 sm:py-16 lg:py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main circular design container */}
        <div className="relative w-full max-w-4xl mx-auto aspect-square">
          {/* Animated rotating circles with bubbles */}
          <div className="absolute inset-0 animate-spin-slow">
            <svg className="w-full h-full" viewBox="0 0 800 800">
              {/* Background circles */}
              <circle
                cx="400"
                cy="400"
                r="320"
                fill="none"
                stroke="#E5E7EB"
                strokeWidth="1"
              />
              <circle
                cx="400"
                cy="400"
                r="250"
                fill="none"
                stroke="#E5E7EB"
                strokeWidth="1"
              />
              <circle
                cx="400"
                cy="400"
                r="180"
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
                      x={pos.x - 40}
                      y={pos.y - 40}
                      width="80"
                      height="80"
                      style={{
                        transformOrigin: `${pos.x}px ${pos.y}px`,
                      }}
                    >
                      <div className="flex items-center justify-center h-full animate-spin-reverse-inline">
                        <div
                          className={`${industry.color} rounded-full w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center shadow-lg`}
                        >
                          <span className="text-white text-[7px] sm:text-[8px] md:text-[9px] font-semibold leading-tight text-center px-1 whitespace-pre-line">
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

          {/* Center content - not rotating - fits inside smallest circle */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="text-center px-4 sm:px-6 md:px-8 max-w-sm">
              {/* Industries We Serve - now inside */}
              <p className="text-[10px] sm:text-xs text-gray-500 mb-3 sm:mb-4 uppercase tracking-wide">
                Industries We Serve
              </p>
              
              {/* Main headline - smaller to fit */}
              <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-dark leading-tight">
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