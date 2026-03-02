'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Users, BedDouble, Bath, Check } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { formatCurrency } from '@/lib/utils'
import type { Cabin } from '@/lib/data/cabins'

interface CabinCardProps {
  cabin: Cabin
}

export function CabinCard({ cabin }: CabinCardProps) {
  const [currentImage, setCurrentImage] = useState(0)

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault()
    setCurrentImage((i) => (i === 0 ? cabin.images.length - 1 : i - 1))
  }

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault()
    setCurrentImage((i) => (i === cabin.images.length - 1 ? 0 : i + 1))
  }

  return (
    <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group flex flex-col h-full">
      {/* Image Carousel */}
      <div className="relative aspect-[4/3] overflow-hidden bg-brand-4">
        {cabin.images.map((src, idx) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-500 ${
              idx === currentImage ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={src}
              alt={`${cabin.name} - imagen ${idx + 1}`}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        ))}

        {/* Navigation Arrows */}
        {cabin.images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white shadow-md"
              aria-label="Imagen anterior"
            >
              <ChevronLeft className="w-4 h-4 text-brand-5" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white shadow-md"
              aria-label="Siguiente imagen"
            >
              <ChevronRight className="w-4 h-4 text-brand-5" />
            </button>
          </>
        )}

        {/* Dot Indicators */}
        {cabin.images.length > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {cabin.images.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => { e.preventDefault(); setCurrentImage(idx) }}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${
                  idx === currentImage ? 'bg-white w-4' : 'bg-white/60'
                }`}
                aria-label={`Ir a imagen ${idx + 1}`}
              />
            ))}
          </div>
        )}

        {/* Featured Badge */}
        {cabin.featured && (
          <div className="absolute top-3 left-3">
            <Badge className="bg-brand-5/90 backdrop-blur-sm text-white text-xs px-3 py-1">
              Destacada
            </Badge>
          </div>
        )}
      </div>

      {/* Card Content */}
      <CardContent className="p-6 flex flex-col flex-1">
        {/* Title & Price */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <h3 className="font-serif text-xl font-semibold text-brand-5">{cabin.name}</h3>
          <div className="text-right shrink-0">
            <div className="text-lg font-bold text-brand-5">{formatCurrency(cabin.pricePerNight)}</div>
            <div className="text-xs text-brand-2">por noche</div>
          </div>
        </div>

        {/* Description */}
        <p className="text-brand-3 text-sm leading-relaxed mb-4">{cabin.description}</p>

        {/* Specs */}
        <div className="flex items-center gap-4 text-sm text-brand-3 mb-4">
          <span className="flex items-center gap-1.5">
            <Users className="w-4 h-4 text-brand-2" />
            {cabin.capacity} personas
          </span>
          <span className="flex items-center gap-1.5">
            <BedDouble className="w-4 h-4 text-brand-2" />
            {cabin.bedrooms} hab.
          </span>
          <span className="flex items-center gap-1.5">
            <Bath className="w-4 h-4 text-brand-2" />
            {cabin.bathrooms} baño{cabin.bathrooms > 1 ? 's' : ''}
          </span>
        </div>

        {/* Amenities */}
        <div className="grid grid-cols-2 gap-1.5 mb-5">
          {cabin.amenities.slice(0, 6).map((amenity) => (
            <div key={amenity} className="flex items-center gap-1.5 text-xs text-brand-3">
              <Check className="w-3.5 h-3.5 text-brand-5 shrink-0" />
              {amenity}
            </div>
          ))}
          {cabin.amenities.length > 6 && (
            <div className="text-xs text-brand-2 flex items-center gap-1.5">
              <span className="text-brand-5 font-medium">+{cabin.amenities.length - 6}</span> más
            </div>
          )}
        </div>

        {/* CTA */}
        <div className="mt-auto">
          <Button
            asChild
            className="w-full bg-brand-5 text-white hover:bg-brand-5/90 rounded-xl"
          >
            <a href="#reservas">Ver disponibilidad</a>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
