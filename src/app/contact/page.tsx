import ContactPage from '@/app/contact/components/ContactPage'
import Navbar from '@/components/Navbar'
import { main } from 'framer-motion/client'

export const metadata = {
  title: 'Contact Us - AlturaCyber',
  description: 'Request a cybersecurity consultation with AlturaCyber',
}

export default function ContactRoute() {
  return (
    <main>
      <Navbar />
      <ContactPage />
    </main>
  )
}