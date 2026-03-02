export type ExtraService = {
  id: string
  label: string
  price: number
}

export type Cabin = {
  id: string
  slug: string
  name: string
  description: string
  longDescription: string
  capacity: number
  bedrooms: number
  bathrooms: number
  pricePerNight: number
  images: string[]
  amenities: string[]
  featured?: boolean
}

export const extraServices: ExtraService[] = [
  { id: 'desayuno', label: 'Desayuno incluido', price: 3500 },
  { id: 'kayak', label: 'Alquiler de kayak (por día)', price: 5000 },
  { id: 'asado', label: 'Kit asado completo', price: 8000 },
  { id: 'spa', label: 'Acceso al spa (por persona/día)', price: 6000 },
  { id: 'traslado', label: 'Traslado desde aeropuerto', price: 12000 },
]

export const cabins: Cabin[] = [
  {
    id: '1',
    slug: 'cabaña-del-lago',
    name: 'Cabaña del Lago',
    description: 'Frente al agua, con vista panorámica al lago y deck privado.',
    longDescription:
      'Nuestra cabaña estrella con acceso directo al lago. Cuenta con amplio living con chimenea, cocina equipada, deck privado con reposeras y acceso directo al agua. Perfecta para una escapada romántica o en familia.',
    capacity: 4,
    bedrooms: 2,
    bathrooms: 1,
    pricePerNight: 65000,
    featured: true,
    images: [
      'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1586105251261-72a756497a11?auto=format&fit=crop&w=800&q=80',
    ],
    amenities: [
      'WiFi',
      'Chimenea',
      'Cocina equipada',
      'Smart TV',
      'Deck privado',
      'Parrilla',
      'Ropa de cama',
      'Toallas',
    ],
  },
  {
    id: '2',
    slug: 'cabaña-del-bosque',
    name: 'Cabaña del Bosque',
    description: 'Rodeada de naturaleza, tranquila y acogedora, con jardín privado.',
    longDescription:
      'Ubicada entre los árboles nativos, esta cabaña ofrece privacidad total y conexión plena con la naturaleza. Ideal para desconectarse y recargar energías. Cuenta con jardín privado con fogón y hamacas.',
    capacity: 6,
    bedrooms: 3,
    bathrooms: 2,
    pricePerNight: 85000,
    images: [
      'https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1542718610-a1d656d1884c?auto=format&fit=crop&w=800&q=80',
    ],
    amenities: [
      'WiFi',
      'Cocina equipada',
      'Smart TV',
      'Jardín privado',
      'Fogón',
      'Parrilla',
      'Hamacas',
      'Estacionamiento',
    ],
  },
  {
    id: '3',
    slug: 'suite-panorámica',
    name: 'Suite Panorámica',
    description: 'La experiencia más premium con vista 360° al lago y a la sierra.',
    longDescription:
      'Nuestra suite de mayor exclusividad. Diseñada con materiales nobles y con una vista que corta el aliento. Cuenta con jacuzzi privado, chimenea a leña, y terraza elevada con vista 360° al lago y las sierras. Para los que buscan lo mejor.',
    capacity: 2,
    bedrooms: 1,
    bathrooms: 1,
    pricePerNight: 95000,
    featured: true,
    images: [
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1615880484746-a134be9a6ecf?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=800&q=80',
    ],
    amenities: [
      'WiFi',
      'Jacuzzi privado',
      'Chimenea',
      'Smart TV 65"',
      'Terraza panorámica',
      'Minibar',
      'Ropa de cama premium',
      'Desayuno incluido',
    ],
  },
]
