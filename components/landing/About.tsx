import Image from 'next/image'
import { AnimatedSection } from './AnimatedSection'
import { Leaf, Lock, Sofa, MapPin } from 'lucide-react'

const values = [
  {
    icon: Leaf,
    title: 'Naturaleza',
    description: 'Entorno virgen rodeado de bosque nativo y lago cristalino.',
  },
  {
    icon: Lock,
    title: 'Privacidad',
    description: 'Cada cabaña es un mundo propio, aislado y seguro.',
  },
  {
    icon: Sofa,
    title: 'Confort',
    description: 'Equipamiento premium en armonía con el entorno natural.',
  },
  {
    icon: MapPin,
    title: 'Ubicación estratégica',
    description: 'A solo 45 minutos de Salta Capital, fácil acceso.',
  },
]

export function About() {
  return (
    <section id="nosotros" className="section-padding bg-white">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Side */}
          <AnimatedSection>
            <div>
              <span className="text-xs font-semibold tracking-[0.25em] uppercase text-brand-2 mb-4 block">
                Quiénes somos
              </span>
              <h2 className="section-title mb-6">
                Un complejo pensado para desconectar
              </h2>
              <p className="section-subtitle mb-8">
                Bahía Corral nació del sueño de crear un espacio donde el tiempo
                pase diferente. Donde los sonidos del lago reemplacen las
                notificaciones y el cielo estrellado sea tu techo preferido.
              </p>
              <p className="text-brand-3 leading-relaxed mb-10">
                Nuestras cabañas están diseñadas para que nada te falte y todo
                te sobre. Con materiales naturales, vistas al lago y atención
                personalizada, garantizamos que cada estadía sea memorable.
              </p>

              {/* Value Proposition Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {values.map((value) => (
                  <div
                    key={value.title}
                    className="flex items-start gap-4 p-4 rounded-2xl bg-brand-1 border border-brand-4 hover:border-brand-3 transition-colors duration-200"
                  >
                    <div className="w-10 h-10 rounded-xl bg-brand-5/10 flex items-center justify-center shrink-0">
                      <value.icon className="w-5 h-5 text-brand-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-brand-5 mb-0.5">{value.title}</h3>
                      <p className="text-sm text-brand-3 leading-snug">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Image Side */}
          <AnimatedSection delay={200}>
            <div className="relative">
              {/* Main image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5]">
                <Image
                  src="https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?auto=format&fit=crop&w=800&q=80"
                  alt="Interior acogedor de cabaña Bahía Corral"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-5/30 to-transparent" />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5 border border-brand-4">
                <div className="flex items-center gap-3">
                  <div className="text-3xl font-serif font-bold text-brand-5">100%</div>
                  <div className="text-sm text-brand-3 leading-tight">
                    Equipadas
                    <br />
                    <span className="text-brand-5 font-medium">y certificadas</span>
                  </div>
                </div>
              </div>

              {/* Decorative element */}
              <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full border-2 border-brand-4/40 pointer-events-none" />
              <div className="absolute -top-2 -right-2 w-16 h-16 rounded-full border-2 border-brand-5/20 pointer-events-none" />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
