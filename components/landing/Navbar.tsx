'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '#cabanas', label: 'Cabañas' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#eventos', label: 'Eventos' },
  { href: '#ubicacion', label: 'Ubicación' },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-brand-4'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <svg
              width="38"
              height="38"
              viewBox="0 0 38 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transition-transform duration-300 group-hover:scale-105"
            >
              <rect width="38" height="38" rx="10" fill="#516687" />
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
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  'text-md font-serif font-medium tracking-wide transition-colors duration-200 relative group',
                  isScrolled ? 'text-brand-3 hover:text-brand-5' : 'text-white'
                )}
              >
                {link.label}
                <span
                  className={cn(
                    'absolute -bottom-0.5 left-0 h-px w-0 group-hover:w-full transition-all duration-300',
                    isScrolled ? 'bg-brand-5' : 'bg-white'
                  )}
                />
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex">
            <Button
              asChild
              className={cn(
                'rounded-full px-6 transition-all duration-300',
                isScrolled
                  ? 'bg-brand-5 text-white hover:bg-brand-5/90'
                  : 'bg-white text-brand-5 hover:bg-white/90'
              )}
            >
              <Link href="/mis-reservas">Mis Reservas</Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={cn(
              'md:hidden p-2 rounded-lg transition-colors',
              isScrolled ? 'text-brand-5 hover:bg-brand-4/30' : 'text-white hover:bg-white/10'
            )}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Abrir menú"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={cn(
          'md:hidden overflow-hidden transition-all duration-300',
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <nav className="bg-white border-t border-brand-4 px-4 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-brand-3 font-medium py-3 px-3 rounded-lg hover:bg-brand-4/30 hover:text-brand-5 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Button
            asChild
            className="bg-brand-5 text-white hover:bg-brand-5/90 rounded-full mt-3"
          >
            <Link href="/mis-reservas" onClick={() => setIsMenuOpen(false)}>
              Mis Reservas
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  )
}
