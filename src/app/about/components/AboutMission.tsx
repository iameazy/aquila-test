import Image from 'next/image'

export default function AboutMission() {
    const stats = [
        { number: '15+', label: 'completed projects' },
        { number: '12', label: 'satisfied customers' },
        { number: '5', label: 'years of mastery' },
        { number: '3', label: 'gained honors' }
    ]

    return (
        <section className="bg-black py-16 sm:py-20 lg:py-24 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Stats Section */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-16 lg:mb-24">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center">
                            <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-2">
                                {stat.number}
                            </h3>
                            <p className="text-xs sm:text-sm text-gray-400">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Mission Blocks */}
                <div className="space-y-8 lg:space-y-12">
                    
                    {/* First Mission Block */}
                    <div className="border-2 border-dashed border-gray-600 rounded-lg p-6 sm:p-8 lg:p-10">
                        <div className="flex flex-col sm:flex-row gap-6 items-start">
                            {/* Icon */}
                            <div className="flex-shrink-0">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 border-2 border-white rounded-full flex items-center justify-center">
                                    <div className="w-3 h-3 sm:w-4 sm:h-4 bg-white rounded-full"></div>
                                </div>
                            </div>
                            
                            {/* Text Content */}
                            <div className="flex-1">
                                <p className="text-white text-sm sm:text-base lg:text-lg leading-relaxed">
                                    AlturaCyber is a forward-thinking cybersecurity company committed to protecting digital assets, empowering organizations, and building a safer cyber ecosystem across Africa and beyond. We deliver cutting-edge cybersecurity services, awareness programs, and strategic consulting designed to help businesses stay secure, compliant, and resilient in a constantly evolving threat landscape.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Second Mission Block */}
                    <div className="border-2 border-dashed border-gray-600 rounded-lg p-6 sm:p-8 lg:p-10">
                        <div className="flex flex-col sm:flex-row gap-6 items-start">
                            {/* Icon */}
                            <div className="flex-shrink-0">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 border-2 border-white rounded-full flex items-center justify-center">
                                    <div className="w-3 h-3 sm:w-4 sm:h-4 bg-white rounded-full"></div>
                                </div>
                            </div>
                            
                            {/* Text Content */}
                            <div className="flex-1">
                                <p className="text-white text-sm sm:text-base lg:text-lg leading-relaxed">
                                    Our approach combines technical expertise, innovation, and human intelligence to offer holistic protection—from proactive threat detection to advanced penetration testing and incident response. Beyond services, AlturaCyber is dedicated to cultivating cybersecurity talent and promoting digital safety through its nonprofit education arm, AquliaCyber, which focuses on training the next generation of cybersecurity professionals.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Curved transition */}
        </section>
    )
}