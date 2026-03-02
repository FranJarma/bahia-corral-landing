'use client'

import { useState } from 'react'
import { PartyPopper, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { AnimatedSection } from './AnimatedSection'

const eventTypes = [
  'Cumpleaños',
  'Aniversario',
  'Casamiento / Civil',
  'Evento corporativo',
  'Retiro de equipo',
  'Baby shower',
  'Despedida',
  'Otro',
]

const additionalServices = [
  'Catering / Gastronomía',
  'Decoración',
  'Música en vivo / DJ',
  'Fotografía y video',
  'Actividades náuticas',
  'Transporte para invitados',
]

type EventForm = {
  eventType: string
  eventDate: string
  guestCount: string
  services: string[]
  name: string
  email: string
  phone: string
  message: string
}

export function Events() {
  const [form, setForm] = useState<EventForm>({
    eventType: '',
    eventDate: '',
    guestCount: '',
    services: [],
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const toggleService = (service: string) => {
    setForm((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In production: send to API
    setSubmitted(true)
  }

  return (
    <section id="eventos" className="section-padding bg-white">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Info */}
          <AnimatedSection>
            <div>
              <span className="text-xs font-semibold tracking-[0.25em] uppercase text-brand-2 mb-4 block">
                Eventos
              </span>
              <h2 className="section-title mb-6">
                ¿Querés realizar un evento?
              </h2>
              <p className="section-subtitle mb-8">
                Bahía Corral es el escenario perfecto para celebraciones únicas.
                El lago, la naturaleza y nuestras instalaciones crean la
                atmósfera ideal para momentos inolvidables.
              </p>

              <div className="space-y-4">
                {[
                  { title: 'Capacidad flexible', desc: 'Hasta 80 personas entre todas nuestras instalaciones.' },
                  { title: 'Servicio integral', desc: 'Gastronomía, decoración y logística coordinados por nuestro equipo.' },
                  { title: 'Escenario natural único', desc: 'El lago y el bosque como telón de fondo para tus fotos y recuerdos.' },
                  { title: 'Coordinación personalizada', desc: 'Un anfitrión dedicado a tu evento desde el primer contacto.' },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-brand-5/10 flex items-center justify-center shrink-0 mt-0.5">
                      <PartyPopper className="w-3.5 h-3.5 text-brand-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-brand-5 text-sm">{item.title}</p>
                      <p className="text-sm text-brand-3">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Right: Form */}
          <AnimatedSection delay={150}>
            <div className="bg-brand-1 rounded-3xl border border-brand-4 p-8 shadow-sm">
              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-brand-5/10 flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-brand-5" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-brand-5 mb-2">
                    ¡Consulta enviada!
                  </h3>
                  <p className="text-brand-3">
                    Nos comunicaremos con vos a la brevedad para planificar tu evento juntos.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="font-serif text-xl font-semibold text-brand-5 mb-1">
                    Enviá tu consulta
                  </h3>
                  <p className="text-sm text-brand-3 mb-5">
                    Te respondemos en menos de 24 horas.
                  </p>

                  {/* Event Type */}
                  <div className="space-y-2">
                    <Label>Tipo de evento</Label>
                    <Select
                      value={form.eventType}
                      onValueChange={(val) => setForm((p) => ({ ...p, eventType: val }))}
                      required
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Seleccioná el tipo" />
                      </SelectTrigger>
                      <SelectContent>
                        {eventTypes.map((t) => (
                          <SelectItem key={t} value={t}>{t}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Date & Guests */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="eventDate">Fecha estimada</Label>
                      <Input
                        id="eventDate"
                        type="date"
                        value={form.eventDate}
                        onChange={(e) => setForm((p) => ({ ...p, eventDate: e.target.value }))}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="guestCount">Nº de invitados</Label>
                      <Input
                        id="guestCount"
                        type="number"
                        min="1"
                        max="200"
                        placeholder="50"
                        value={form.guestCount}
                        onChange={(e) => setForm((p) => ({ ...p, guestCount: e.target.value }))}
                        required
                      />
                    </div>
                  </div>

                  {/* Additional Services */}
                  <div className="space-y-2">
                    <Label>Servicios de interés</Label>
                    <div className="grid grid-cols-2 gap-2">
                      {additionalServices.map((service) => (
                        <label
                          key={service}
                          className={`flex items-center gap-2 px-3 py-2 rounded-lg border text-sm cursor-pointer transition-colors ${
                            form.services.includes(service)
                              ? 'bg-brand-5 border-brand-5 text-white'
                              : 'bg-white border-brand-4 text-brand-3 hover:border-brand-3'
                          }`}
                        >
                          <input
                            type="checkbox"
                            className="sr-only"
                            checked={form.services.includes(service)}
                            onChange={() => toggleService(service)}
                          />
                          {service}
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Contact */}
                  <div className="space-y-2">
                    <Label htmlFor="eventName">Tu nombre</Label>
                    <Input
                      id="eventName"
                      placeholder="María García"
                      value={form.name}
                      onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                      required
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="eventEmail">Email</Label>
                      <Input
                        id="eventEmail"
                        type="email"
                        placeholder="maria@email.com"
                        value={form.email}
                        onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="eventPhone">Teléfono</Label>
                      <Input
                        id="eventPhone"
                        type="tel"
                        placeholder="+54 9 351..."
                        value={form.phone}
                        onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Mensaje adicional</Label>
                    <Textarea
                      id="message"
                      placeholder="Contanos más sobre tu evento, necesidades especiales..."
                      value={form.message}
                      onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-brand-5 text-white hover:bg-brand-5/90 rounded-xl h-12 font-semibold"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Enviar consulta
                  </Button>
                </form>
              )}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
