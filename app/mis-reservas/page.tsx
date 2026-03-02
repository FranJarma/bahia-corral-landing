'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Search, CalendarDays, Users, Package, ArrowLeft } from 'lucide-react'
import { Navbar } from '@/components/landing/Navbar'
import { Footer } from '@/components/landing/Footer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { mockReservations, type Reservation, type ReservationStatus } from '@/lib/data/reservations'
import { extraServices } from '@/lib/data/cabins'
import { formatCurrency } from '@/lib/utils'

const STATUS_LABELS: Record<ReservationStatus, string> = {
  confirmed: 'Confirmada',
  pending: 'Pendiente',
  cancelled: 'Cancelada',
}

const STATUS_STYLES: Record<ReservationStatus, string> = {
  confirmed: 'bg-green-100 text-green-700',
  pending: 'bg-amber-100 text-amber-700',
  cancelled: 'bg-red-100 text-red-600',
}

function formatDate(dateStr: string) {
  const [year, month, day] = dateStr.split('-')
  return `${day}/${month}/${year}`
}

function getNights(checkin: string, checkout: string) {
  return Math.round(
    (new Date(checkout).getTime() - new Date(checkin).getTime()) / (1000 * 60 * 60 * 24)
  )
}

function ReservationCard({ reservation }: { reservation: Reservation }) {
  const nights = getNights(reservation.checkin, reservation.checkout)
  const extrasLabels = reservation.extras
    .map((id) => extraServices.find((e) => e.id === id)?.label)
    .filter(Boolean)

  return (
    <article className="bg-white rounded-2xl border border-brand-4 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 bg-brand-1 border-b border-brand-4">
        <div>
          <p className="text-xs text-brand-2 font-medium tracking-wide uppercase mb-0.5">
            Reserva #{reservation.id}
          </p>
          <h3 className="font-serif text-lg font-semibold text-brand-5">{reservation.cabinName}</h3>
        </div>
        <span
          className={`text-xs font-semibold px-3 py-1.5 rounded-full ${STATUS_STYLES[reservation.status]}`}
        >
          {STATUS_LABELS[reservation.status]}
        </span>
      </div>

      {/* Body */}
      <div className="px-6 py-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Fechas */}
        <div className="flex items-start gap-3">
          <CalendarDays className="w-4 h-4 text-brand-3 mt-0.5 shrink-0" />
          <div>
            <p className="text-xs text-brand-2 uppercase tracking-wide font-medium mb-0.5">Fechas</p>
            <p className="text-sm text-brand-5 font-medium">
              {formatDate(reservation.checkin)} → {formatDate(reservation.checkout)}
            </p>
            <p className="text-xs text-brand-3">
              {nights} {nights === 1 ? 'noche' : 'noches'}
            </p>
          </div>
        </div>

        {/* Huéspedes */}
        <div className="flex items-start gap-3">
          <Users className="w-4 h-4 text-brand-3 mt-0.5 shrink-0" />
          <div>
            <p className="text-xs text-brand-2 uppercase tracking-wide font-medium mb-0.5">Huéspedes</p>
            <p className="text-sm text-brand-5 font-medium">
              {reservation.adults} adulto{reservation.adults !== 1 ? 's' : ''}
              {reservation.children > 0 &&
                `, ${reservation.children} menor${reservation.children !== 1 ? 'es' : ''}`}
            </p>
          </div>
        </div>

        {/* Extras */}
        {extrasLabels.length > 0 && (
          <div className="flex items-start gap-3 sm:col-span-2">
            <Package className="w-4 h-4 text-brand-3 mt-0.5 shrink-0" />
            <div>
              <p className="text-xs text-brand-2 uppercase tracking-wide font-medium mb-1">
                Servicios adicionales
              </p>
              <div className="flex flex-wrap gap-1.5">
                {extrasLabels.map((label) => (
                  <span
                    key={label}
                    className="text-xs bg-brand-4/50 text-brand-3 px-2.5 py-1 rounded-full"
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="px-6 py-4 bg-brand-1 border-t border-brand-4 flex items-center justify-between gap-4">
        <div className="flex items-center gap-6">
          <div>
            <p className="text-xs text-brand-2 uppercase tracking-wide font-medium mb-0.5">Total</p>
            <p className="text-base font-semibold text-brand-5">{formatCurrency(reservation.totalPrice)}</p>
          </div>
          <div>
            <p className="text-xs text-brand-2 uppercase tracking-wide font-medium mb-0.5">Seña pagada</p>
            <p className="text-base font-semibold text-green-600">{formatCurrency(reservation.depositPaid)}</p>
          </div>
        </div>
        <p className="text-xs text-brand-2 hidden sm:block">
          Creada el {formatDate(reservation.createdAt)}
        </p>
      </div>
    </article>
  )
}

export default function MisReservasPage() {
  const [dni, setDni] = useState('')
  const [searched, setSearched] = useState(false)
  const [results, setResults] = useState<Reservation[]>([])

  function handleSearch(e: React.FormEvent) {
    e.preventDefault()
    const cleaned = dni.trim().replace(/\D/g, '')
    setResults(mockReservations.filter((r) => r.dni === cleaned))
    setSearched(true)
  }

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-brand-1 pt-28 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back link */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-brand-3 hover:text-brand-5 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al inicio
          </Link>

          {/* Header */}
          <div className="mb-10">
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-brand-5 mb-3">
              Mis Reservas
            </h1>
            <p className="text-brand-3 leading-relaxed">
              Ingresá tu DNI para ver el estado de tus reservas en Bahía Corral.
            </p>
          </div>

          {/* Search form */}
          <form
            onSubmit={handleSearch}
            className="bg-white rounded-2xl border border-brand-4 p-6 shadow-sm mb-8"
          >
            <label htmlFor="dni" className="block text-sm font-medium text-brand-5 mb-2">
              Número de DNI
            </label>
            <div className="flex gap-3">
              <Input
                id="dni"
                type="text"
                inputMode="numeric"
                placeholder="Ej: 32456789"
                value={dni}
                onChange={(e) => setDni(e.target.value)}
                className="flex-1 border-brand-4 focus:border-brand-5 focus:ring-brand-5"
                required
              />
              <Button
                type="submit"
                className="bg-brand-5 text-white hover:bg-brand-5/90 rounded-full px-6 gap-2 shrink-0"
              >
                <Search className="w-4 h-4" />
                Buscar
              </Button>
            </div>
          </form>

          {/* Results */}
          {!searched && (
            <div className="text-center py-16 text-brand-2">
              <Search className="w-10 h-10 mx-auto mb-3 opacity-30" />
              <p className="text-sm">Ingresá tu DNI para consultar tus reservas.</p>
            </div>
          )}

          {searched && results.length === 0 && (
            <div className="text-center py-16 text-brand-2">
              <CalendarDays className="w-10 h-10 mx-auto mb-3 opacity-30" />
              <p className="font-medium text-brand-5 mb-1">No encontramos reservas</p>
              <p className="text-sm">
                No hay reservas registradas para el DNI ingresado. Verificá el número e intentá
                nuevamente.
              </p>
            </div>
          )}

          {searched && results.length > 0 && (
            <div>
              <p className="text-sm text-brand-3 mb-4">
                {results.length} {results.length === 1 ? 'reserva encontrada' : 'reservas encontradas'} para{' '}
                <span className="font-medium text-brand-5">{results[0].fullName}</span>
              </p>
              <div className="flex flex-col gap-5">
                {results.map((reservation) => (
                  <ReservationCard key={reservation.id} reservation={reservation} />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  )
}
