'use client';

import React, { useEffect, useRef, useState } from 'react';

const WhoWeAre = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen bg-[#121212] pb-64 overflow-hidden md:px-8 lg:px-12"
    >
      {/* Curved bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 lg:h-40 rounded-t-[50%] bg-gradient-radial from-gray-200/20 to-transparent pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* About tag - Animated */}
        <div 
          className={`text-xs md:text-sm uppercase tracking-[2px] mb-5 opacity-80 lg:mb-2 transition-all duration-1000 ease-out ${
            isVisible 
              ? 'opacity-80 translate-y-0' 
              : 'opacity-0 -translate-y-10'
          }`}
        >
          About AlturaCyber
        </div>
        
        {/* Content wrapper */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* Image - shown first on mobile - Animated */}
          <div 
            className={`order-1 lg:order-2 transition-all duration-1000 ease-out ${
              isVisible 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 translate-x-10'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            <div className="relative rounded-lg overflow-hidden shadow-2xl group">
              <img
                src="/images/about/about1.png"
                alt="Cybersecurity professionals working"
                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
            </div>
          </div>
          
          {/* Text content */}
          <div className="order-2 lg:order-1">
            {/* Heading - Animated */}
            <h1 
              className={`text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 lg:mb-12 leading-tight transition-all duration-1000 ease-out ${
                isVisible 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 -translate-x-10'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              Who We Are
            </h1>
            
            {/* Description box - Animated */}
            <div 
              className={`relative bg-gradient-to-r from-white/5 to-transparent border-l-4 border-[#4a6fa5] p-6 md:p-8 mb-8 lg:mb-12 transition-all duration-1000 ease-out group hover:from-white/10 hover:border-[#6b8db8] ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: '300ms' }}
            >
              <p className="text-base md:text-lg lg:text-xl text-gray-200 leading-relaxed transition-colors duration-300 group-hover:text-white">
                AlturaCyber is a cybersecurity agency helping businesses strengthen their digital resilience through expert-driven, data-backed security solutions.
              </p>
              {/* Animated accent line */}
              <div className="absolute left-0 top-0 h-0 w-1 bg-[#6b8db8] transition-all duration-500 group-hover:h-full"></div>
            </div>
            
            {/* CTA Button - Animated */}
            <div
              className={`transition-all duration-1000 ease-out ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              <button className="w-full md:w-auto px-12 py-4 bg-[#3d5a80] hover:bg-[#4a6fa5] text-white text-sm md:text-base font-semibold uppercase tracking-wider rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(74,111,165,0.3)] border-2 border-transparent hover:border-[#6b8db8] transform hover:scale-105 active:scale-95 relative overflow-hidden group">
                {/* Button shine effect */}
                <span className="absolute inset-0 w-0 bg-white/20 transition-all duration-500 ease-out group-hover:w-full"></span>
                <span className="relative z-10">Learn More About Us</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Custom Animations */}
      <style jsx>{`
        @keyframes shimmer {
          0% {
            left: -100%;
          }
          100% {
            left: 100%;
          }
        }
      `}</style>
    </section>
  );
};

export default WhoWeAre;