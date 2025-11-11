import AboutHero from './components/AboutHero'
import Navbar from '@/components/Navbar'
import AboutMission from './components/AboutMission'
import AboutServices from './components/AboutServices'

export default function AboutPage() {
    return (
        <main>
            <Navbar />
            <AboutHero />
            <AboutMission />
            <AboutServices />
        </main>
    )
}