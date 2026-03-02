'use client'

import { useState, useMemo } from 'react'
import { CreditCard, Calendar, Users, Info } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { AnimatedSection } from './AnimatedSection'
import { cabins, extraServices } from '@/lib/data/cabins'
import { formatCurrency, calculateNights } from '@/lib/utils'
import { siteConfig } from '@/lib/config'

type FormState = {
  checkin: string
  checkout: string
  cabinId: string
  adults: string
  children: string
  fullName: string
  dni: string
  country: string
  email: string
  phone: string
  observations: string
  extras: string[]
}

const initialForm: FormState = {
  checkin: '',
  checkout: '',
  cabinId: '',
  adults: '2',
  children: '0',
  fullName: '',
  dni: '',
  country: 'Argentina',
  email: '',
  phone: '',
  observations: '',
  extras: [],
}

export function Reservation() {
  const [form, setForm] = useState<FormState>(initialForm)

  const selectedCabin = useMemo(
    () => cabins.find((c) => c.id === form.cabinId),
    [form.cabinId]
  )

  const nights = useMemo(
    () => calculateNights(form.checkin, form.checkout),
    [form.checkin, form.checkout]
  )

  const extrasTotal = useMemo(() => {
    const adults = parseInt(form.adults) || 1
    return form.extras.reduce((sum, id) => {
      const extra = extraServices.find((e) => e.id === id)
      return extra ? sum + extra.price * adults * nights : sum
    }, 0)
  }, [form.extras, form.adults, nights])

  const cabinTotal = useMemo(
    () => (selectedCabin ? selectedCabin.pricePerNight * nights : 0),
    [selectedCabin, nights]
  )

  const total = cabinTotal + extrasTotal
  const deposit = Math.ceil(total * siteConfig.depositPercentage)

  const toggleExtra = (id: string) => {
    setForm((prev) => ({
      ...prev,
      extras: prev.extras.includes(id)
        ? prev.extras.filter((e) => e !== id)
        : [...prev.extras, id],
    }))
  }

  const handleChange = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In production: call API / redirect to Mercado Pago
    alert('Redirigiendo a Mercado Pago...')
  }

  const today = new Date().toISOString().split('T')[0]

  return (
    <section id="reservas" className="section-padding bg-brand-1">
      <div className="section-container">
        {/* Header */}
        <AnimatedSection>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-brand-2 mb-4 block">
              Reservas
            </span>
            <h2 className="section-title mb-5">Reservá tu estadía</h2>
            <p className="section-subtitle">
              Completá el formulario y asegurá tu lugar. Requerimos una seña del
              50% para confirmar la reserva.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            {/* Form Fields */}
            <div className="lg:col-span-2 space-y-8">
              {/* Dates & Cabin */}
              <div className="bg-white rounded-2xl border border-brand-4 p-6 shadow-sm">
                <h3 className="font-serif text-lg font-semibold text-brand-5 mb-5 flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Fechas y alojamiento
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="checkin">Check-in</Label>
                    <Input
                      id="checkin"
                      type="date"
                      min={today}
                      value={form.checkin}
                      onChange={(e) => handleChange('checkin', e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="checkout">Check-out</Label>
                    <Input
                      id="checkout"
                      type="date"
                      min={form.checkin || today}
                      value={form.checkout}
                      onChange={(e) => handleChange('checkout', e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2 sm:col-span-2">
                    <Label>Cabaña</Label>
                    <Select
                      value={form.cabinId}
                      onValueChange={(val) => handleChange('cabinId', val)}
                      required
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Seleccioná una cabaña" />
                      </SelectTrigger>
                      <SelectContent>
                        {cabins.map((cabin) => (
                          <SelectItem key={cabin.id} value={cabin.id}>
                            {cabin.name} — {formatCurrency(cabin.pricePerNight)}/noche
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Guests */}
              <div className="bg-white rounded-2xl border border-brand-4 p-6 shadow-sm">
                <h3 className="font-serif text-lg font-semibold text-brand-5 mb-5 flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Huéspedes
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="adults">Adultos</Label>
                    <Select
                      value={form.adults}
                      onValueChange={(val) => handleChange('adults', val)}
                    >
                      <SelectTrigger id="adults">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {[1, 2, 3, 4, 5, 6].map((n) => (
                          <SelectItem key={n} value={String(n)}>
                            {n} adulto{n > 1 ? 's' : ''}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="children">Menores</Label>
                    <Select
                      value={form.children}
                      onValueChange={(val) => handleChange('children', val)}
                    >
                      <SelectTrigger id="children">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {[0, 1, 2, 3, 4].map((n) => (
                          <SelectItem key={n} value={String(n)}>
                            {n} menor{n !== 1 ? 'es' : ''} {n > 0 ? '(sin cargo)' : ''}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                {selectedCabin && parseInt(form.adults) + parseInt(form.children) > selectedCabin.capacity && (
                  <p className="mt-3 text-xs text-amber-600 flex items-center gap-1.5">
                    <Info className="w-3.5 h-3.5" />
                    La cabaña seleccionada tiene capacidad para {selectedCabin.capacity} personas.
                  </p>
                )}
              </div>

              {/* Personal Info */}
              <div className="bg-white rounded-2xl border border-brand-4 p-6 shadow-sm">
                <h3 className="font-serif text-lg font-semibold text-brand-5 mb-5">
                  Datos personales
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2 sm:col-span-2">
                    <Label htmlFor="fullName">Nombre completo</Label>
                    <Input
                      id="fullName"
                      placeholder="Juan Pérez"
                      value={form.fullName}
                      onChange={(e) => handleChange('fullName', e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="dni">DNI / CUIT</Label>
                    <Input
                      id="dni"
                      placeholder="12.345.678"
                      value={form.dni}
                      onChange={(e) => handleChange('dni', e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>País</Label>
                    <Select
                      value={form.country}
                      onValueChange={(val) => handleChange('country', val)}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {['Argentina', 'Brasil', 'Uruguay', 'Chile', 'Paraguay', 'Bolivia', 'Otro'].map((c) => (
                          <SelectItem key={c} value={c}>{c}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="juan@email.com"
                      value={form.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Teléfono / WhatsApp</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+54 9 351 000-0000"
                      value={form.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Extra Services */}
              <div className="bg-white rounded-2xl border border-brand-4 p-6 shadow-sm">
                <h3 className="font-serif text-lg font-semibold text-brand-5 mb-5">
                  Servicios adicionales
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {extraServices.map((extra) => (
                    <label
                      key={extra.id}
                      className="flex items-start gap-3 p-3 rounded-xl border border-brand-4 cursor-pointer hover:border-brand-3 hover:bg-brand-1 transition-colors"
                    >
                      <Checkbox
                        id={extra.id}
                        checked={form.extras.includes(extra.id)}
                        onCheckedChange={() => toggleExtra(extra.id)}
                        className="mt-0.5"
                      />
                      <div>
                        <p className="text-sm font-medium text-brand-5">{extra.label}</p>
                        <p className="text-xs text-brand-2">{formatCurrency(extra.price)}/persona</p>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Observations */}
              <div className="bg-white rounded-2xl border border-brand-4 p-6 shadow-sm">
                <div className="space-y-2">
                  <Label htmlFor="observations">Observaciones</Label>
                  <Textarea
                    id="observations"
                    placeholder="¿Hay algo especial que debamos saber? Alergias, necesidades especiales, motivo de la visita..."
                    value={form.observations}
                    onChange={(e) => handleChange('observations', e.target.value)}
                    className="min-h-[120px]"
                  />
                </div>
              </div>
            </div>

            {/* Price Summary Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 space-y-4">
                <div className="bg-white rounded-2xl border border-brand-4 p-6 shadow-sm">
                  <h3 className="font-serif text-lg font-semibold text-brand-5 mb-5 flex items-center gap-2">
                    <CreditCard className="w-5 h-5" />
                    Resumen de precio
                  </h3>

                  {!selectedCabin || !nights ? (
                    <p className="text-sm text-brand-2 text-center py-4">
                      Seleccioná cabaña y fechas para ver el precio.
                    </p>
                  ) : (
                    <div className="space-y-3">
                      {/* Cabin cost */}
                      <div className="flex justify-between text-sm">
                        <span className="text-brand-3">{selectedCabin.name}</span>
                        <span className="text-brand-5 font-medium">
                          {formatCurrency(selectedCabin.pricePerNight)}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-brand-3">{nights} noche{nights > 1 ? 's' : ''}</span>
                        <span className="text-brand-5 font-medium">{formatCurrency(cabinTotal)}</span>
                      </div>

                      {/* Extras */}
                      {form.extras.map((id) => {
                        const extra = extraServices.find((e) => e.id === id)
                        if (!extra) return null
                        const adults = parseInt(form.adults) || 1
                        return (
                          <div key={id} className="flex justify-between text-sm">
                            <span className="text-brand-3">{extra.label}</span>
                            <span className="text-brand-5 font-medium">
                              {formatCurrency(extra.price * adults * nights)}
                            </span>
                          </div>
                        )
                      })}

                      <div className="border-t border-brand-4 pt-3 mt-3">
                        <div className="flex justify-between text-base font-bold text-brand-5">
                          <span>Total</span>
                          <span>{formatCurrency(total)}</span>
                        </div>
                      </div>

                      {/* Deposit */}
                      <div className="bg-brand-5/5 rounded-xl p-4 border border-brand-5/20">
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="text-sm font-semibold text-brand-5">Seña requerida</p>
                            <p className="text-xs text-brand-3">{siteConfig.depositPercentage * 100}% del total</p>
                          </div>
                          <span className="text-lg font-bold text-brand-5">{formatCurrency(deposit)}</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Mercado Pago CTA */}
                <Button
                  type="submit"
                  className="w-full bg-[#009ee3] hover:bg-[#008fd5] text-white rounded-xl h-12 font-semibold text-base shadow-md hover:shadow-lg transition-all"
                  disabled={!selectedCabin || !nights || total === 0}
                >
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.868 8.842l-5.27 7.89a.75.75 0 01-1.196 0L8.132 12.4a.75.75 0 011.196-.908l2.672 3.514 4.672-7.006a.75.75 0 011.196.842z" />
                  </svg>
                  Pagar seña con Mercado Pago
                </Button>

                <p className="text-xs text-brand-2 text-center">
                  Pago seguro. Recibirás confirmación por email.
                </p>
              </div>
            </div>
          </form>
        </AnimatedSection>
      </div>
    </section>
  )
}
