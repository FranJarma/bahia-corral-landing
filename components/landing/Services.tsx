import {
  Sparkles,
  UtensilsCrossed,
  Waves,
  Wifi,
  Car,
  TreePine,
} from 'lucide-react'
import { AnimatedSection } from './AnimatedSection'
import { services } from '@/lib/data/services'

const iconMap: Record<string, React.ElementType> = {
  Sparkles,
  UtensilsCrossed,
  Waves,
  Wifi,
  Car,
  TreePine,
}

export function Services() {
  return (
    <section id="servicios" className="section-padding bg-white">
      <div className="section-container">
        {/* Header */}
        <AnimatedSection>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-brand-2 mb-4 block">
              Lo que ofrecemos
            </span>
            <h2 className="section-title mb-5">Servicios del complejo</h2>
            <p className="section-subtitle">
              Todo lo que necesitás para que tu estadía sea perfecta, en un solo
              lugar.
            </p>
          </div>
        </AnimatedSection>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] ?? Sparkles
            return (
              <AnimatedSection key={service.id} delay={index * 80}>
                <div className="group flex flex-col gap-4 p-6 rounded-2xl border border-brand-4 bg-brand-1 hover:border-brand-3 hover:shadow-md transition-all duration-300 h-full">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-2xl bg-brand-5/10 flex items-center justify-center group-hover:bg-brand-5 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-brand-5 group-hover:text-white transition-colors duration-300" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="font-semibold text-brand-5 text-base mb-2">{service.name}</h3>
                    <p className="text-brand-3 text-sm leading-relaxed">{service.description}</p>
                  </div>

                  {/* Price */}
                  {service.price && (
                    <div className="pt-3 border-t border-brand-4">
                      <span className="text-xs font-semibold text-brand-5 bg-brand-5/10 px-3 py-1 rounded-full">
                        {service.price}
                      </span>
                    </div>
                  )}
                </div>
              </AnimatedSection>
            )
          })}
        </div>
      </div>
    </section>
  )
}
