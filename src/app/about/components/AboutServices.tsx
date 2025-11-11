import Image from 'next/image'

export default function AboutServices() {
    const services = [
        {
            icon: '🔒',
            title: 'Penetration Testing & Vulnerability Assessment',
            description: 'We simulate real-world cyberattacks to uncover security weaknesses before malicious actors do. Our detailed reports and remediation guidance help organizations strengthen their security posture across web, network, mobile, and cloud environments.',
            keyAreas: [
                'Web Application Penetration Testing',
                'Network and Infrastructure Testing',
                'Mobile Application Security Testing',
                'Cloud Security Assessment',
                'API Security Testing',
                ''
            ]
        },
        {
            icon: '📋',
            title: 'Security Audits & Compliance',
            description: 'Our security audit and compliance services ensure that your organization meets global cybersecurity standards and regulatory requirements. We help you stay compliant while maintaining operational efficiency.',
            keyAreas: [
                'ISO 27001',
                'GDPR',
                'NIST',
                'PCI-DSS',
                'NDPR (Nigeria Data Protection Regulation)',
                ''
            ]
        },
        {
            icon: '🛡️',
            title: 'Managed Security Services',
            description: 'Stay protected 24/7 with our proactive monitoring and managed security solutions. We handle threat detection, incident response, and continuous risk assessment—so you can focus on running your business.',
            keyAreas: [
                'Security Operations Center (SOC) Management',
                'Threat Intelligence & Monitoring',
                'Incident Response & Forensics',
                'Endpoint Detection & Response (EDR)'
            ]
        },
        {
            icon: '🎓',
            title: 'Cybersecurity Training & Awareness',
            description: 'Empowering people is as critical as protecting systems. Through AquliaCyber, our nonprofit education arm, we deliver cybersecurity training programs designed to upskill teams, students, and professionals.',
            keyAreas: [
                'Employee Cyber Awareness Programs',
                'Ethical Hacking & Penetration Testing Training',
                'Blue Team (Defensive Security) Training',
                'Executive Cyber Risk Workshops'
            ]
        },
        {
            icon: '🎓',
            title: 'Cybersecurity Training & Awareness',
            description: 'Empowering people is as critical as protecting systems. Through AquliaCyber, our nonprofit education arm, we deliver cybersecurity training programs designed to upskill teams, students, and professionals.',
            keyAreas: [
                'Employee Cyber Awareness Programs',
                'Ethical Hacking & Penetration Testing Training',
                'Blue Team (Defensive Security) Training',
                'Executive Cyber Risk Workshops'
            ]
        },
        {
            icon: '🎓',
            title: 'Cybersecurity Training & Awareness',
            description: 'Empowering people is as critical as protecting systems. Through AquliaCyber, our nonprofit education arm, we deliver cybersecurity training programs designed to upskill teams, students, and professionals.',
            keyAreas: [
                'Employee Cyber Awareness Programs',
                'Ethical Hacking & Penetration Testing Training',
                'Blue Team (Defensive Security) Training',
                'Executive Cyber Risk Workshops'
            ]
        },
        {
            icon: '🎓',
            title: 'Cybersecurity Training & Awareness',
            description: 'Empowering people is as critical as protecting systems. Through AquliaCyber, our nonprofit education arm, we deliver cybersecurity training programs designed to upskill teams, students, and professionals.',
            keyAreas: [
                'Employee Cyber Awareness Programs',
                'Ethical Hacking & Penetration Testing Training',
                'Blue Team (Defensive Security) Training',
                'Executive Cyber Risk Workshops'
            ]
        }
    ]

    return (
        <section className="bg-gray-100 py-16 sm:py-20 lg:py-22">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Curved transition */}
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
                
                {/* Services Grid */}
                <div className="space-y-6 lg:space-y-8">
                    {services.map((service, index) => (
                        <div 
                            key={index}
                            className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl"
                        >
                            <div className="flex flex-col sm:flex-row gap-6 items-start">
                                
                                {/* Icon */}
                                <div className="flex-shrink-0">
                                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl flex items-center justify-center text-3xl sm:text-4xl shadow-lg">
                                        {service.icon}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex-1">
                                    {/* Title */}
                                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4">
                                        {service.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-sm sm:text-base text-blue-50 mb-6 leading-relaxed">
                                        {service.description}
                                    </p>

                                    {/* Key Areas Box */}
                                    <div className="bg-white rounded-xl p-4 sm:p-6">
                                        <h4 className="text-sm font-bold text-gray-900 mb-4">
                                            Key Areas:
                                        </h4>
                                        
                                        {/* Two Column Grid */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                                            {service.keyAreas.map((area, areaIndex) => (
                                                area && (
                                                    <div key={areaIndex} className="flex items-start">
                                                        <span className="text-gray-700 text-sm">
                                                            {area}
                                                        </span>
                                                    </div>
                                                )
                                            ))}
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}