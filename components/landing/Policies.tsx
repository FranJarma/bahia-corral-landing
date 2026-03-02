import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { AnimatedSection } from './AnimatedSection'
import { siteConfig } from '@/lib/config'

const policies = [
  {
    id: 'deposito',
    title: 'Seña obligatoria',
    content: `Para confirmar tu reserva se requiere el pago de una seña equivalente al 50% del total de la estadía. La reserva queda confirmada únicamente una vez acreditado el pago. El saldo restante deberá abonarse al momento del check-in en efectivo o transferencia bancaria.`,
  },
  {
    id: 'cancelacion',
    title: 'Política de cancelación',
    content: `• Cancelación con más de 30 días de anticipación: devolución del 100% de la seña.
• Cancelación entre 15 y 30 días: devolución del 50% de la seña.
• Cancelación con menos de 15 días: sin devolución de la seña.
• En caso de fuerza mayor (comprobable), se evaluará cada caso en forma particular.
• Las cancelaciones deben realizarse por escrito al email o WhatsApp del complejo.`,
  },
  {
    id: 'horarios',
    title: 'Check-in / Check-out',
    content: `• Check-in: a partir de las ${siteConfig.checkInTime} hs. Si tu llegada es antes de ese horario, podemos guardar tu equipaje sin cargo.
• Check-out: hasta las ${siteConfig.checkOutTime} hs. Check-out tardío sujeto a disponibilidad y puede tener cargo adicional.
• Te pedimos que respetes estos horarios para garantizar la preparación correcta de las cabañas para todos los huéspedes.
• En caso de llegada muy tardía, por favor avisanos con anticipación para coordinar el ingreso.`,
  },
  {
    id: 'menores',
    title: 'Política de menores y mascotas',
    content: `• Los menores de 12 años no pagan alojamiento (sin cargo). Deben declararse al hacer la reserva.
• Los menores de edad siempre deben estar acompañados por un adulto responsable.
• Mascotas: se permiten perros de hasta 15 kg en cabañas específicas, con cargo adicional de $3.000/noche. Consultar disponibilidad al reservar.
• Los dueños de mascotas son responsables de cualquier daño ocasionado.
• Las áreas comunes y el restaurante son libres de mascotas.`,
  },
  {
    id: 'daños',
    title: 'Daños y responsabilidades',
    content: `• El huésped es responsable de los daños causados a las instalaciones durante su estadía.
• Al check-in se realiza un inventario de la cabaña. Cualquier faltante o daño será cobrado al momento del check-out.
• Está prohibido el uso de artículos de camping, armar fogones fuera de los sectores habilitados y el ingreso de personas externas sin autorización previa.
• Bahía Corral no se responsabiliza por objetos olvidados ni por accidentes ocurridos en áreas externas a las instalaciones.`,
  },
]

export function Policies() {
  return (
    <section id="politicas" className="section-padding bg-brand-1">
      <div className="section-container">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <AnimatedSection>
            <div className="text-center mb-12">
              <span className="text-xs font-semibold tracking-[0.25em] uppercase text-brand-2 mb-4 block">
                Información importante
              </span>
              <h2 className="section-title mb-5">Políticas del complejo</h2>
              <p className="section-subtitle">
                Para que tu estadía sea perfecta, te pedimos que leas nuestras
                políticas antes de reservar.
              </p>
            </div>
          </AnimatedSection>

          {/* Accordion */}
          <AnimatedSection delay={100}>
            <div className="bg-white rounded-2xl border border-brand-4 shadow-sm overflow-hidden">
              <Accordion type="multiple" className="px-6">
                {policies.map((policy) => (
                  <AccordionItem key={policy.id} value={policy.id}>
                    <AccordionTrigger className="text-base font-semibold">
                      {policy.title}
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="whitespace-pre-line text-brand-3 leading-relaxed">
                        {policy.content}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </AnimatedSection>

          {/* Note */}
          <AnimatedSection delay={200}>
            <p className="text-center text-sm text-brand-2 mt-8">
              ¿Tenés dudas? Escribinos al{' '}
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-brand-5 underline underline-offset-2 hover:text-brand-3 transition-colors"
              >
                {siteConfig.email}
              </a>{' '}
              o por WhatsApp.
            </p>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
