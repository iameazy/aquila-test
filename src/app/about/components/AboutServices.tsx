import Image from 'next/image'

// Define the service type
interface Service {
    iconSrc?: string;  // Optional
    iconAlt?: string;  // Optional
    icon?: string;     // Optional
    title: string;
    description: string;
    keyAreas: string[];
}

export default function AboutServices() {
    const services: Service[] = [  // ← Add type annotation
        {
            iconSrc: '/images/about/icon1.png',
            iconAlt: 'safe icon',
            title: 'Penetration Testing & Vulnerability Assessment',
            description: 'We simulate real-world cyberattacks to uncover security weaknesses before malicious actors do. Our detailed reports and remediation guidance help organizations strengthen their security posture across web, network, mobile, and cloud environments.',
            keyAreas: [
                'Web Application Penetration Testing',
                'Network and Infrastructure Testing',
                'Mobile Application Security Testing',
                'Cloud Security Assessment',
                'API Security Testing'
            ]
        },
        {
            iconSrc: '/images/about/icon2.png',
            iconAlt: 'audit icon',
            title: 'Security Audits & Compliance',
            description: 'Our security audit and compliance services ensure that your organization meets global cybersecurity standards and regulatory requirements. We help you stay compliant while maintaining operational efficiency.',
            keyAreas: [
                'ISO 27001',
                'GDPR',
                'NIST',
                'PCI-DSS',
                'NDPR (Nigeria Data Protection Regulation)'
            ]
        },
        {
            iconSrc: '/images/about/icon3.png',
            iconAlt: 'security icon',
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
            iconSrc: '/images/about/icon4.png',
            iconAlt: 'training icon',
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
            iconSrc: '/images/about/icon4.png',
            iconAlt: 'training icon',
            title: 'Incident Response & Digital Forensics',
            description: 'When security breaches occur, we help organizations respond quickly and effectively. Our experts investigate incidents, identify root causes, and provide strategies to prevent recurrence.',
            keyAreas: [
                'Compromise Assessment',
                'Malware Analysis',
                'Data Breach Investigation',
                'Forensic Imaging & Evience Investigation'
            ]
        },
        {
            iconSrc: '/images/about/icon4.png',
            iconAlt: 'training icon',
            title: 'Cybersecurity Consulting',
            description: 'We provide expert guidance to help organizations design and implement security strategies aligned with their goals. From policy development to architecture design, we help you build resilience at every layer.',
            keyAreas: [
                'Risk Assessment & Management',
                'Security Architecture Design',
                'Policy & Governance Framework',
                'Cloud Security Consulting'
            ]
        },
        {
            iconSrc: '/images/about/icon4.png',
            iconAlt: 'training icon',
            title: 'Cloud & Infastructure Security',
            description: 'We help businesses secure their cloud environments & critical infrastructure through configuration reviews, identity management, and continous monitoring.',
            keyAreas: [
                'Cloud Configuration Assessment',
                'Identity & Access Management (IAM)',
                'Infrastructure Hardening',
                'DevSecOps Integration'
            ]
        }
    ]

    return (
        <section className="bg-white">
            <div className="max-w-7xl mx-auto lg:px-44">

                <div className="space-y-6 lg:space-y-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl"
                        >
                            <div className="flex flex-col sm:flex-row gap-6 items-start">

                                {/* Icon */}
                                <div className="flex-shrink-0">
                                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl flex items-center justify-center shadow-lg">
                                        {service.iconSrc ? (
                                            <Image
                                                src={service.iconSrc}
                                                alt={service.iconAlt || 'Service icon'}
                                                width={48}
                                                height={48}
                                                className="object-contain"
                                            />
                                        ) : (
                                            <span className="text-3xl sm:text-4xl">
                                                {service.icon || '🔒'}
                                            </span>
                                        )}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex-1">
                                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4">
                                        {service.title}
                                    </h3>

                                    <p className="text-sm sm:text-base text-blue-50 mb-6 leading-relaxed">
                                        {service.description}
                                    </p>

                                    <div className="bg-white rounded-xl p-4 sm:p-6">
                                        <h4 className="text-sm font-bold text-gray-900 mb-4">
                                            Key Areas:
                                        </h4>

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

            {/* Curved transition */}
            <div className="relative ">
                <svg
                    className="w-full md:h-64"
                    viewBox="0 0 1440 160"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M0,0 C240,53.3 480,80 720,80 C960,80 1200,53.3 1440,0 L1440,160 L0,160 Z"
                        fill="#1a1a1a"
                    />
                </svg>
            </div>

        </section>
    )
}