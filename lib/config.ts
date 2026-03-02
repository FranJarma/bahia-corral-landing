/**
 * Site-level configuration.
 * In a multi-tenant SaaS setup, this object would be fetched from the database
 * based on the current tenant/subdomain.
 */
export const siteConfig = {
  name: 'Bahía Corral',
  tagline: 'Cabañas frente al dique Cabra Corral',
  description:
    'Complejo de cabañas totalmente equipadas en un entorno natural único, frente al lago.',
  phone: '+54 9 387 533-0834',
  whatsapp: '+54 9 387 533-0834',
  email: 'info@bahiacorral.com',
  address: 'Ruta 47 Km 4,5 Coronel Moldes Dique Cabra Corral Pedanía Dique Cabra Corral, 4421 Salta',
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.554571311081!2d-65.4320942!3d-25.285565300000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94196dc63943f053%3A0x4a47e14c39dc2ab5!2sBah%C3%ADa%20Corral!5e0!3m2!1ses!2sar!4v1772469747174!5m2!1ses!2sar',
  socialMedia: {
    instagram: 'https://instagram.com/bahiacorralsalta',
  },
  /** Mercado Pago payment button link for the deposit */
  mercadoPagoLink: '#', // Replace with actual Mercado Pago link
  /** Percentage of total price required as deposit */
  depositPercentage: 0.5,
  /** Check-in / check-out times */
  checkInTime: '15:00',
  checkOutTime: '11:00',
  /** Minimum nights required */
  minNights: 2,
} as const
