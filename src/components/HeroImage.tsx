'use client'
import Image from 'next/image'

export default function HeroImage() {
    return (
        <section className="relative w-full overflow-hidden">
            {/* Black background - top section */}
            <div className="bg-dark pt-0 pb-[90px] sm:pb-[120px] md:pb-[150px]">
                {/* This creates space for the top half of the image */}
            </div>

            {/* Image Container - Positioned to overlap both sections */}
            <div className="relative z-20 -mt-[90px] sm:-mt-[120px] md:-mt-[150px]">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl">
                        <div className="relative w-full h-[180px] sm:h-[240px] md:h-[300px]">
                            
                            {/* Placeholder for image - replace with your image */}
                            {<Image
                                src="/images/image1.png"
                                alt="Cybersecurity Dashboard"
                                fill
                                className="object-cover"
                                priority
                            />}

                            {/* Subtle overlay gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Curved transition from black to white - positioned behind image */}
            <div className="relative -mt-[90px] sm:-mt-[120px] md:-mt-[150px] z-10">
                <svg
                    className="w-full h-32 sm:h-40 md:h-48"
                    viewBox="0 0 1440 160"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M0,80 C240,26.7 480,0 720,0 C960,0 1200,26.7 1440,80 L1440,160 L0,160 Z"
                        fill="white"
                    />
                </svg>
            </div>

            {/* White background - bottom section */}
            <div className="bg-white pt-0 pb-20 sm:pb-24">
                {/* This creates the white space below */}
            </div>
        </section>
    )
}