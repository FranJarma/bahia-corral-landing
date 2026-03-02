import { MapPin, Phone, Mail, Instagram } from 'lucide-react'
import { AnimatedSection } from './AnimatedSection'
import { siteConfig } from '@/lib/config'

export function Location() {
  return (
    <section id="ubicacion" className="section-padding bg-white">
      <div className="section-container">
        {/* Header */}
        <AnimatedSection>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-brand-2 mb-4 block">
              Dónde estamos
            </span>
            <h2 className="section-title mb-5">Cómo llegar</h2>
            <p className="section-subtitle">
             A 40 minutos de la capital salteña, encontrás un mundo diferente.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-stretch">
          {/* Contact Info */}
          <AnimatedSection className="lg:col-span-2">
            <div className="h-full bg-brand-1 rounded-3xl border border-brand-4 p-8 flex flex-col justify-between">
              <div className="space-y-6">
                <h3 className="font-serif text-xl font-semibold text-brand-5">
                  Contacto
                </h3>

                <div className="space-y-5">
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(siteConfig.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-brand-5/10 flex items-center justify-center shrink-0 group-hover:bg-brand-5 transition-colors">
                      <MapPin className="w-5 h-5 text-brand-5 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="text-xs text-brand-2 uppercase tracking-wide mb-0.5">Dirección</p>
                      <p className="text-brand-5 font-medium text-sm leading-snug group-hover:text-brand-3 transition-colors">
                        {siteConfig.address}
                      </p>
                    </div>
                  </a>

                  <a
                    href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-brand-5/10 flex items-center justify-center shrink-0 group-hover:bg-brand-5 transition-colors">
                      <Phone className="w-5 h-5 text-brand-5 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="text-xs text-brand-2 uppercase tracking-wide mb-0.5">Teléfono</p>
                      <p className="text-brand-5 font-medium text-sm group-hover:text-brand-3 transition-colors">
                        {siteConfig.phone}
                      </p>
                    </div>
                  </a>

                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-brand-5/10 flex items-center justify-center shrink-0 group-hover:bg-brand-5 transition-colors">
                      <Mail className="w-5 h-5 text-brand-5 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="text-xs text-brand-2 uppercase tracking-wide mb-0.5">Email</p>
                      <p className="text-brand-5 font-medium text-sm group-hover:text-brand-3 transition-colors">
                        {siteConfig.email}
                      </p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-8 pt-6 border-t border-brand-4">
                <p className="text-xs text-brand-2 uppercase tracking-wide mb-4">Seguinos</p>
                <a
                  href={siteConfig.socialMedia.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-4 py-2.5 rounded-xl border border-brand-4 bg-white hover:bg-brand-5 hover:border-brand-5 hover:text-white text-brand-3 transition-all duration-200 group"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5 text-brand-3 group-hover:text-white transition-colors" />
                  <span className="text-sm font-medium text-brand-5 group-hover:text-white transition-colors">
                    @bahiacorral
                  </span>
                </a>
              </div>
            </div>
          </AnimatedSection>

          {/* Map Embed */}
          <AnimatedSection delay={150} className="lg:col-span-3">
            <div className="h-full min-h-[400px] rounded-3xl overflow-hidden border border-brand-4 shadow-md bg-brand-4">
              {/* Google Maps Placeholder — replace src with actual embed URL */}
              <iframe
                src={siteConfig.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación Bahía Corral"
                className="w-full h-full"
              />
              {/* Fallback when map URL is not configured */}
              <noscript>
                <div className="w-full h-full flex flex-col items-center justify-center text-brand-3 gap-3">
                  <MapPin className="w-12 h-12 text-brand-2" />
                  <p className="text-center font-medium">{siteConfig.address}</p>
                </div>
              </noscript>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
