'use client';

import React from 'react';

const WhoWeAre = () => {
  return (
    <section className="relative min-h-screen bg-[#121212] pb-64 overflow-hidden md:px-8 lg:px-12">
      {/* Curved bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 lg:h-40 rounded-t-[50%] bg-gradient-radial from-gray-200/20 to-transparent pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* About tag */}
        <div className="text-xs md:text-sm uppercase tracking-[2px] mb-5 opacity-80 lg:mb-8">
          About AlturaCyber
        </div>
        
        {/* Content wrapper */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* Image - shown first on mobile */}
          <div className="order-1 lg:order-2">
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <img
                src="/images/about/about1.png"
                alt="Cybersecurity professionals working"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          
          {/* Text content */}
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 lg:mb-12 leading-tight">
              Who We Are
            </h1>
            
            {/* Description box */}
            <div className="relative bg-gradient-to-r from-white/5 to-transparent border-l-4 border-[#4a6fa5] p-6 md:p-8 mb-8 lg:mb-12">
              <p className="text-base md:text-lg lg:text-xl text-gray-200 leading-relaxed">
                AlturaCyber is a cybersecurity agency helping businesses strengthen their digital resilience through expert-driven, data-backed security solutions.
              </p>
            </div>
            
            {/* CTA Button */}
            <button className="w-full md:w-auto px-12 py-4 bg-[#3d5a80] hover:bg-[#4a6fa5] text-white text-sm md:text-base font-semibold uppercase tracking-wider rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(74,111,165,0.3)] border-2 border-transparent hover:border-[#6b8db8]">
              Learn More About Us
            </button>
          </div>
        </div>
      </div>
      
      
    </section>
  );
};

export default WhoWeAre;