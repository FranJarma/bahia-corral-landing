export type ReservationStatus = 'confirmed' | 'pending' | 'cancelled'

export type Reservation = {
  id: string
  dni: string
  fullName: string
  email: string
  phone: string
  checkin: string
  checkout: string
  cabinId: string
  cabinName: string
  adults: number
  children: number
  extras: string[]
  totalPrice: number
  depositPaid: number
  status: ReservationStatus
  createdAt: string
}

export const mockReservations: Reservation[] = [
  {
    id: 'BC-2024-001',
    dni: '32456789',
    fullName: 'María González',
    email: 'maria.gonzalez@email.com',
    phone: '+54 387 456-7890',
    checkin: '2025-01-10',
    checkout: '2025-01-14',
    cabinId: '1',
    cabinName: 'Cabaña del Lago',
    adults: 2,
    children: 1,
    extras: ['desayuno', 'kayak'],
    totalPrice: 294000,
    depositPaid: 147000,
    status: 'confirmed',
    createdAt: '2024-12-15',
  },
  {
    id: 'BC-2024-002',
    dni: '32456789',
    fullName: 'María González',
    email: 'maria.gonzalez@email.com',
    phone: '+54 387 456-7890',
    checkin: '2025-03-20',
    checkout: '2025-03-23',
    cabinId: '3',
    cabinName: 'Suite Panorámica',
    adults: 2,
    children: 0,
    extras: ['desayuno', 'spa'],
    totalPrice: 318000,
    depositPaid: 159000,
    status: 'pending',
    createdAt: '2025-01-20',
  },
  {
    id: 'BC-2024-003',
    dni: '28901234',
    fullName: 'Carlos Martínez',
    email: 'carlos.martinez@email.com',
    phone: '+54 11 5678-9012',
    checkin: '2025-02-05',
    checkout: '2025-02-09',
    cabinId: '2',
    cabinName: 'Cabaña del Bosque',
    adults: 4,
    children: 2,
    extras: ['asado', 'traslado'],
    totalPrice: 380000,
    depositPaid: 190000,
    status: 'confirmed',
    createdAt: '2024-12-28',
  },
  {
    id: 'BC-2024-004',
    dni: '41567890',
    fullName: 'Laura Pérez',
    email: 'laura.perez@email.com',
    phone: '+54 261 345-6789',
    checkin: '2024-12-27',
    checkout: '2024-12-30',
    cabinId: '1',
    cabinName: 'Cabaña del Lago',
    adults: 2,
    children: 0,
    extras: ['desayuno'],
    totalPrice: 206500,
    depositPaid: 103250,
    status: 'cancelled',
    createdAt: '2024-11-10',
  },
]
