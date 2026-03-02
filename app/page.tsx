import { Navbar } from '@/components/landing/Navbar'
import { Hero } from '@/components/landing/Hero'
import { About } from '@/components/landing/About'
import { Cabins } from '@/components/landing/Cabins'
import { Services } from '@/components/landing/Services'
import { Reservation } from '@/components/landing/Reservation'
import { Events } from '@/components/landing/Events'
import { Policies } from '@/components/landing/Policies'
import { Location } from '@/components/landing/Location'
import { Testimonials } from '@/components/landing/Testimonials'
import { Footer } from '@/components/landing/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Cabins />
      <Services />
      <Reservation />
      <Events />
      <Policies />
      <Testimonials />
      <Location />
      <Footer />
    </main>
  )
}
