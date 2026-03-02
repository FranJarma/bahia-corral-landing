'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { AnimatedSection } from './AnimatedSection'
import { testimonials } from '@/lib/data/testimonials'

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-4 h-4 ${
            star <= rating
              ? 'fill-amber-400 text-amber-400'
              : 'fill-brand-4 text-brand-4'
          }`}
        />
      ))}
    </div>
  )
}

export function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(() => {
      setCurrent((i) => (i + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const prev = () => {
    setIsAutoPlaying(false)
    setCurrent((i) => (i === 0 ? testimonials.length - 1 : i - 1))
  }

  const next = () => {
    setIsAutoPlaying(false)
    setCurrent((i) => (i + 1) % testimonials.length)
  }

  return (
    <section id="testimonios" className="section-padding bg-brand-5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="section-container relative z-10">
        {/* Header */}
        <AnimatedSection>
          <div className="text-center mb-12">
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-brand-4/80 mb-4 block">
              Experiencias reales
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
              Lo que dicen nuestros huéspedes
            </h2>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <div className="max-w-3xl mx-auto">
            {/* Main Testimonial */}
            <div className="relative">
              {testimonials.map((testimonial, idx) => (
                <div
                  key={testimonial.id}
                  className={`transition-all duration-500 ${
                    idx === current
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 absolute inset-0 translate-y-4 pointer-events-none'
                  }`}
                >
                  <div className="bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20 p-8 md:p-10 text-center">
                    {/* Quote icon */}
                    <svg
                      className="w-10 h-10 text-white/20 mx-auto mb-6"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                    >
                      <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z" />
                    </svg>

                    <StarRating rating={testimonial.rating} />

                    <p className="text-white/90 text-lg md:text-xl leading-relaxed mt-6 mb-8 font-light italic">
                      &ldquo;{testimonial.comment}&rdquo;
                    </p>

                    <div>
                      <p className="font-semibold text-white">{testimonial.name}</p>
                      <p className="text-brand-4/80 text-sm mt-1">
                        {testimonial.origin} · {testimonial.date}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-6 mt-8">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Anterior"
              >
                <ChevronLeft className="w-5 h-5 text-white" />
              </button>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => { setIsAutoPlaying(false); setCurrent(idx) }}
                    className={`rounded-full transition-all duration-300 ${
                      idx === current ? 'w-6 h-2 bg-white' : 'w-2 h-2 bg-white/40'
                    }`}
                    aria-label={`Ir al testimonio ${idx + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Siguiente"
              >
                <ChevronRight className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
