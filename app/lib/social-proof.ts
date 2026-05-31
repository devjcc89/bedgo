export interface StoryImage {
  src: string
  alt: string
}

export interface SuccessStory {
  id: string
  title: string
  zone: string
  summary: string
  before: string
  after: string
  extra?: string
  timeline: string
  beforeImage?: StoryImage
  afterImage?: StoryImage
  intervention?: string
}

export interface Testimonial {
  id: string
  quote: string
  name: string
  role: string
  rating: number
}

import { ownerRenovationPhotos } from './stock-images'

export const ownerSuccessStories: SuccessStory[] = [
  {
    id: 'malasana-3hab',
    title: 'Piso de 3 habitaciones en Malasaña',
    zone: 'Malasaña',
    summary:
      'Llevaba cuatro meses vacío. Colaboramos con un estudio de arquitectura para redistribuir el salón, renovar la cocina, ambientar la vivienda y promocionarla con fotografía profesional. En tres semanas quedó operativo con renta garantizada.',
    before: 'Salón anticuado · 4 meses vacío',
    after: 'Renta garantizada · 0 vacíos',
    extra: 'Reforma de hasta €18.000 incluida',
    timeline: 'Operativo en 21 días',
    beforeImage: ownerRenovationPhotos.malasana.before,
    afterImage: ownerRenovationPhotos.malasana.after,
    intervention: 'Reforma integral · Ambientación · Promoción profesional',
  },
  {
    id: 'fuencarral-pago',
    title: 'Apartamento en Fuencarral',
    zone: 'Fuencarral',
    summary:
      'Cocina y baño desactualizados limitaban el precio de alquiler. Reformamos con estudio de arquitectura, revalorizamos la vivienda y ajustamos la renta al mercado de la zona para maximizar rendimiento.',
    before: 'Cocina obsoleta · renta por debajo del mercado',
    after: '12 meses cobrados por adelantado',
    extra: 'Precio ajustado al mercado de Fuencarral',
    timeline: 'Pago en cuenta en 10 días',
    beforeImage: ownerRenovationPhotos.fuencarral.before,
    afterImage: ownerRenovationPhotos.fuencarral.after,
    intervention: 'Reforma cocina y baño · Precio de mercado',
  },
  {
    id: 'chamberi-estudio',
    title: 'Estudio en Chamberí',
    zone: 'Chamberí',
    summary:
      'Estudio parado seis meses sin rentabilidad. Ambientación, mobiliario estratégico y promoción profesional lo convirtieron en un activo demandado por estudiantes y profesionales temporales.',
    before: 'Sin ingresos · 6 meses parado',
    after: 'Ingreso fijo mensual garantizado',
    extra: 'Mayor rentabilidad vs alquiler anterior',
    timeline: 'Primera renta en 18 días',
    beforeImage: ownerRenovationPhotos.chamberi.before,
    afterImage: ownerRenovationPhotos.chamberi.after,
    intervention: 'Ambientación · Promoción · Amueblado',
  },
]

export const ownerTestimonials: Testimonial[] = [
  {
    id: 'maria-g',
    quote:
      'Llevaba meses sin saber qué hacer con el piso. Acordamos una renta fija, la reforma la pagaron ellos y el primer mes ya tenía el dinero en la cuenta.',
    name: 'María G.',
    role: 'Propietaria · Malasaña',
    rating: 5,
  },
  {
    id: 'antonio-r',
    quote:
      'Lo que más me convenció fue la claridad del contrato. Nada de letra pequeña. Cobré 6 meses por adelantado y no he tenido que llamar a ningún inquilino.',
    name: 'Antonio R.',
    role: 'Propietario · Fuencarral',
    rating: 5,
  },
  {
    id: 'carmen-v',
    quote:
      'La diferencia se nota nada más entrar. Reformaron con un estudio de arquitectura, ambientaron el piso y yo cobro la renta fija sin preocuparme de nada.',
    name: 'Carmen V.',
    role: 'Propietaria · Chamberí',
    rating: 5,
  },
]

export const tenantSuccessStories: SuccessStory[] = [
  {
    id: 'estudiante-chueca',
    title: 'Habitación para estudiante en Chueca',
    zone: 'Chueca',
    summary:
      'Llegó a Madrid para el máster. En una semana tenía habitación amueblada, contrato claro y WiFi activo el mismo día de la entrada.',
    before: 'Búsqueda de 3 semanas sin éxito',
    after: '€420/mes · todo incluido',
    extra: 'Contrato de 10 meses',
    timeline: 'Entrada en 7 días',
  },
  {
    id: 'profesional-centro',
    title: 'Profesional en traslado al centro',
    zone: 'Centro',
    summary:
      'Necesitaba piso rápido por cambio de trabajo. Habitación individual con baño compartido, sin sorpresas en la fianza ni cargos ocultos.',
    before: 'Presupuesto máx. €600/mes',
    after: '€550/mes · habitación individual',
    extra: 'Servicios incluidos',
    timeline: 'Visita y reserva en 48 h',
  },
]

export const tenantTestimonials: Testimonial[] = [
  {
    id: 'laura-m',
    quote:
      'El piso estaba reformado de verdad, no solo pintado. El contrato decía exactamente qué incluía y respondieron por WhatsApp el mismo día.',
    name: 'Laura M.',
    role: 'Estudiante · Chueca',
    rating: 5,
  },
  {
    id: 'diego-p',
    quote:
      'Vine de Valencia por trabajo y no conocía Madrid. Me explicaron la zona, el precio final y pude entrar en menos de una semana.',
    name: 'Diego P.',
    role: 'Profesional · Malasaña',
    rating: 5,
  },
  {
    id: 'sofia-k',
    quote:
      'Buscaba algo temporal de 6 meses. Encontré habitación amueblada, sin depósito abusivo, y todo funcionó como acordamos por escrito.',
    name: 'Sofía K.',
    role: 'Estancia internacional · Centro',
    rating: 5,
  },
]
