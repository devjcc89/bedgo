/**
 * Stock photography (Unsplash). Reference images — replace with real project photos.
 * Madrid-style interiors: reformas, salones y cocinas.
 */
const unsplash = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`

export const stockImages = {
  ownerHero: {
    src: unsplash('photo-1560448204-e02f11c3d0e2', 1600),
    alt: 'Salón luminoso de un piso reformado en Madrid',
    caption: 'Reforma incluida · Inquilinos verificados',
  },
  tenantHero: {
    src: unsplash('photo-1522708323590-d24dbb6b0267', 1600),
    alt: 'Habitación amueblada y luminosa en un piso compartido en Madrid',
    caption: 'WiFi · Servicios · Contrato claro',
  },
} as const

/** Fotos reales de proyectos en Madrid (antes/después) */
export const ownerRenovationPhotos = {
  malasana: {
    before: {
      src: '/casos-exito/piso2-antes.png',
      alt: 'Salón anticuado con suelo de terrazo y gotelé antes de la reforma en Madrid',
    },
    after: {
      src: '/casos-exito/piso3-despues.png',
      alt: 'Cocina y comedor reformados con diseño contemporáneo tras la intervención en Madrid',
    },
  },
  fuencarral: {
    before: {
      src: '/casos-exito/piso1-antes.png',
      alt: 'Cocina antigua con mobiliario de madera antes de la reforma en Madrid',
    },
    after: {
      src: '/casos-exito/piso1-despues.png',
      alt: 'Cocina moderna con mobiliario blanco tras la reforma en Madrid',
    },
  },
  chamberi: {
    before: {
      src: '/casos-exito/piso3-antes.png',
      alt: 'Vivienda vacía y sin ambientar antes de la reforma en Madrid',
    },
    after: {
      src: '/casos-exito/chamberi-despues.png',
      alt: 'Estudio en Chamberí reformado, ambientado y listo para alquilar en Madrid',
    },
  },
} as const
