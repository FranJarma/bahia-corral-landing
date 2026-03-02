import { AnimatedSection } from './AnimatedSection'
import { CabinCard } from './CabinCard'
import { cabins } from '@/lib/data/cabins'

export function Cabins() {
  return (
    <section id="cabanas" className="section-padding bg-brand-1">
      <div className="section-container">
        {/* Header */}
        <AnimatedSection>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-brand-2 mb-4 block">
              Alojamiento
            </span>
            <h2 className="section-title mb-5">Nuestras cabañas</h2>
            <p className="section-subtitle">
              Cada cabaña es un refugio único. Encontrá la que mejor se adapte a
              tu grupo y estilo de viaje.
            </p>
          </div>
        </AnimatedSection>

        {/* Cabins Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cabins.map((cabin, index) => (
            <AnimatedSection key={cabin.id} delay={index * 100}>
              <CabinCard cabin={cabin} />
            </AnimatedSection>
          ))}
        </div>

        {/* Bottom Note */}
        <AnimatedSection delay={300}>
          <p className="text-center text-sm text-brand-2 mt-10">
            * Los precios son en pesos argentinos (ARS) e incluyen impuestos. Sujeto a disponibilidad.
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}
