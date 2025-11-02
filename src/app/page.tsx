import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import HeroImage from '@/components/HeroImage'
import WhyTrustUs from '@/components/WhyTrustUs'
import Services from '@/components/Services'
import Industries from '@/components/Industries'


export default function Home() {
  return (
    <main className="min-h-screen bg-dark">
      <Navbar />
      <Hero />
      <HeroImage />
      <WhyTrustUs />
      <Services />
      <Industries />

      
     
    </main>
  )
}