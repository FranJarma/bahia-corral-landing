export type Testimonial = {
  id: string
  name: string
  origin: string
  rating: number
  comment: string
  date: string
  avatar?: string
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Valentina M.',
    origin: 'Buenos Aires',
    rating: 5,
    comment:
      'Una experiencia absolutamente mágica. Las cabañas son hermosas, limpias y con todo lo necesario. El lago al amanecer es algo que nunca voy a olvidar. ¡Ya tenemos reserva para el año que viene!',
    date: 'Enero 2025',
  },
  {
    id: '2',
    name: 'Rodrigo & Florencia',
    origin: 'Salta Capital',
    rating: 5,
    comment:
      'Fuimos para nuestra luna de miel y superó todas las expectativas. La Suite Panorámica es increíble, el jacuzzi con vista al lago es algo de película. El servicio del personal es impecable.',
    date: 'Diciembre 2024',
  },
  {
    id: '3',
    name: 'Familia Torres',
    origin: 'Mendoza',
    rating: 5,
    comment:
      'Viajamos con tres chicos y fue perfecto. La cabaña del bosque tiene espacio de sobra, el fogón fue un éxito total, y los nenes no quisieron irse nunca. Muy recomendable para familias.',
    date: 'Febrero 2025',
  },
  {
    id: '4',
    name: 'Marcela R.',
    origin: 'Rosario',
    rating: 4,
    comment:
      'Un lugar para desconectarse de verdad. Naturaleza, silencio y mucha paz. Las actividades náuticas son muy divertidas. El restaurante tiene platos riquísimos con productos locales. Volvería sin dudas.',
    date: 'Marzo 2025',
  },
  {
    id: '5',
    name: 'Sebastián G.',
    origin: 'Santa Fe',
    rating: 5,
    comment:
      'Hace años vengo buscando un lugar así en Salta y por fin lo encontré. La atención es personalizada, las instalaciones son premium y el paisaje es único. Definitivamente el mejor complejo de cabañas de la zona.',
    date: 'Enero 2025',
  },
]
