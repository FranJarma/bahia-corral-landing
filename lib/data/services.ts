export type Service = {
  id: string
  name: string
  description: string
  icon: string // lucide icon name
  price?: string
  available: boolean
}

export const services: Service[] = [
  {
    id: 'spa',
    name: 'Spa & Bienestar',
    description:
      'Masajes, tratamientos faciales y corporales con productos naturales en un entorno de paz absoluta.',
    icon: 'Sparkles',
    price: 'Desde $6.000/persona',
    available: true,
  },
  {
    id: 'restaurant',
    name: 'Restaurante',
    description:
      'Cocina regional con ingredientes frescos y locales. Desayunos, almuerzos y cenas con vista al lago.',
    icon: 'UtensilsCrossed',
    price: 'Menú desde $4.500',
    available: true,
  },
  {
    id: 'nautico',
    name: 'Actividades Náuticas',
    description:
      'Kayak, SUP, paseos en lancha y pesca deportiva. El lago es tuyo para explorar.',
    icon: 'Waves',
    price: 'Desde $5.000/día',
    available: true,
  },
  {
    id: 'wifi',
    name: 'WiFi de Alta Velocidad',
    description:
      'Conectividad fiber óptica disponible en todas las cabañas y espacios comunes. Sin costo adicional.',
    icon: 'Wifi',
    price: 'Incluido',
    available: true,
  },
  {
    id: 'parking',
    name: 'Estacionamiento',
    description:
      'Amplio estacionamiento cubierto y al aire libre dentro del complejo. Seguro y sin cargo adicional.',
    icon: 'Car',
    price: 'Gratuito',
    available: true,
  },
  {
    id: 'trekking',
    name: 'Trekking & Naturaleza',
    description:
      'Guías especializados para recorridos por senderos naturales, avistamiento de flora y fauna autóctona.',
    icon: 'TreePine',
    price: 'Desde $3.500/persona',
    available: true,
  },
]
