import Link from 'next/link'
import { Instagram, Facebook, Mail, Phone } from 'lucide-react'
import { Separator } from '@/components/ui/separator'
import { siteConfig } from '@/lib/config'

const quickLinks = [
  { href: '#cabanas', label: 'Cabañas' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#reservas', label: 'Reservar' },
  { href: '#eventos', label: 'Eventos' },
  { href: '#politicas', label: 'Políticas' },
  { href: '#ubicacion', label: 'Ubicación' },
]

const legalLinks = [
  { href: '/terminos', label: 'Términos y condiciones' },
  { href: '/privacidad', label: 'Política de privacidad' },
]

export function Footer() {
  return (
    <footer className="bg-brand-5 text-white">
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <svg
                width="42"
                height="42"
                viewBox="0 0 38 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="38" height="38" rx="10" fill="white" fillOpacity="0.15" />
                <path
                  d="M7 26C11 23.5 15 21.5 19 23C23 24.5 27 23 31 21V29H7V26Z"
                  fill="white"
                  fillOpacity="0.4"
                />
                <path
                  d="M7 28C11 25.5 15 23.5 19 25C23 26.5 27 25 31 23V29H7V28Z"
                  fill="white"
                  fillOpacity="0.7"
                />
                <path d="M13 21L19 11L25 21H13Z" fill="white" />
                <rect x="17" y="17.5" width="4" height="4" fill="#516687" />
              </svg>
              <div>
                <div className="font-serif text-xl font-bold text-white">{siteConfig.name}</div>
                <div className="text-brand-4 text-xs tracking-widest uppercase">{siteConfig.tagline}</div>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs mb-6">
              {siteConfig.description} Ubicados en el corazón del dique Cabra Corral, en Salta Argentina.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href={siteConfig.socialMedia.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-5 text-sm tracking-wide uppercase">
              Navegación
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-5 text-sm tracking-wide uppercase">
              Contacto
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-2 text-white/60 hover:text-white text-sm transition-colors"
                >
                  <Phone className="w-4 h-4 shrink-0" />
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-2 text-white/60 hover:text-white text-sm transition-colors"
                >
                  <Mail className="w-4 h-4 shrink-0" />
                  {siteConfig.email}
                </a>
              </li>
            </ul>

            <div className="mt-6">
              <h4 className="text-white/40 text-xs uppercase tracking-wide mb-2">
                Horario de atención
              </h4>
              <p className="text-white/60 text-sm">Lun – Dom: 9:00 – 20:00 hs</p>
            </div>
          </div>
        </div>

        <Separator className="my-10 bg-white/10" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} {siteConfig.name}. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-5">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/40 hover:text-white/70 text-xs transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
