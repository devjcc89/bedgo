'use client'

import { useRef } from 'react'
import { GraduationCap, Briefcase, Globe, BedDouble, DoorOpen, Home as HomeIcon } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import InquilinosPitchSection from '../components/InquilinosPitchSection'
import TenantHowItWorks from '../components/TenantHowItWorks'
import ProfileCards from '../components/ProfileCards'
import RoomGrid from '../components/RoomGrid'
import StatsSection from '../components/StatsSection'
import ValuesStrip from '../components/ValuesStrip'
import SocialProofSection from '../components/SocialProofSection'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
import { stockImages } from '../lib/stock-images'
import { tenantSuccessStories, tenantTestimonials } from '../lib/social-proof'

export default function InquilinosPage() {
  const viviendaRef = useRef<HTMLDivElement>(null)
  const contactoRef = useRef<HTMLDivElement>(null)

  const profiles: Array<{ icon: LucideIcon; title: string; price: string; features: string[] }> = [
    {
      icon: GraduationCap,
      title: 'Estudiante',
      price: '€350–450/mes',
      features: ['Ideal para máster o carrera', 'Zona bien comunicada', 'WiFi incluido', 'Contrato claro'],
    },
    {
      icon: Briefcase,
      title: 'Trabajo temporal',
      price: '€450–650/mes',
      features: ['Estancias cortas o medias', 'Centro Madrid', 'WiFi fibra', 'Entrada rápida'],
    },
    {
      icon: Globe,
      title: 'Internacional',
      price: '€500–850/mes',
      features: ['Flexible 1–12 meses', 'Proceso guiado en español', 'Amueblado', 'Todo incluido'],
    },
  ]

  const rooms: Array<{ icon: LucideIcon; title: string; price: string; description: string; features: string[] }> = [
    {
      icon: BedDouble,
      title: 'Hab. Individual — Centro',
      price: '€550/mes',
      description: '15m² · Baño privado · WiFi fibra',
      features: ['Amueblada', 'Disponible'],
    },
    {
      icon: DoorOpen,
      title: 'Hab. Doble — Malasaña',
      price: '€400/mes',
      description: '18m² · Baño compartido · WiFi',
      features: ['Amueblada', 'Disponible'],
    },
    {
      icon: HomeIcon,
      title: 'Hab. Individual — Chueca',
      price: '€480/mes',
      description: '12m² · Baño privado · WiFi',
      features: ['Amueblada', 'Disponible'],
    },
  ]

  const stats = [
    { number: '24h', label: 'Respuesta a tu solicitud' },
    { number: '100%', label: 'Contratos claros por escrito' },
    { number: '7 días', label: 'Entrada media en habitación' },
    { number: 'Fácil', label: 'Proceso guiado paso a paso' },
  ]

  const inquilinosFormFields = [
    { name: 'nombre', label: 'Nombre', type: 'text' as const, required: true },
    { name: 'telefono', label: 'Teléfono', type: 'tel' as const, required: true },
    { name: 'email', label: 'Email', type: 'email' as const, required: true },
    { name: 'edad', label: 'Edad', type: 'number' as const, placeholder: 'Mín. 18 años' },
    {
      name: 'perfil',
      label: '¿Qué buscas?',
      type: 'select' as const,
      required: true,
      options: [
        { value: 'estudiante', label: 'Soy estudiante' },
        { value: 'profesional', label: 'Soy profesional' },
        { value: 'temporal', label: 'Temporal / Internacional' },
        { value: 'otro', label: 'Otro' },
      ],
    },
    { name: 'presupuesto', label: 'Presupuesto máximo (€/mes)', type: 'number' as const, placeholder: 'Ej: 600' },
    { name: 'zona_preferida', label: 'Zona preferida en Madrid', type: 'text' as const, placeholder: 'Ej: Centro, Malasaña, Chueca' },
    {
      name: 'fecha_inicio',
      label: '¿Cuándo necesitas vivienda?',
      type: 'select' as const,
      options: [
        { value: 'inmediato', label: 'Inmediato (esta semana)' },
        { value: 'proximo_mes', label: 'Próximo mes' },
        { value: '2_meses', label: 'En 2 meses' },
        { value: 'flexible', label: 'Flexible' },
      ],
    },
    {
      name: 'mensaje',
      label: 'Cuéntanos más sobre ti',
      type: 'textarea' as const,
      placeholder: 'Estudios, trabajo, preferencias...',
    },
  ]

  return (
    <main className="w-full">
      <Header />

      <Hero
        badge="Vivienda fácil y segura · Madrid"
        title="Tu habitación en Madrid, sin complicaciones"
        subtitle="Te ayudamos a conseguir vivienda de forma fácil y segura, ya vengas a estudiar o a trabajar de forma temporal."
        highlight="Contrato claro · entrada rápida"
        image={stockImages.tenantHero}
        ctas={[
          {
            label: 'Ver habitaciones',
            onClick: () => viviendaRef.current?.scrollIntoView({ behavior: 'smooth' }),
          },
          {
            label: 'Pedir ayuda para encontrar piso',
            onClick: () => contactoRef.current?.scrollIntoView({ behavior: 'smooth' }),
          },
        ]}
      />

      <InquilinosPitchSection />

      <TenantHowItWorks />

      <section className="py-20 lg:py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14 max-w-xl">
            <h2 className="section-title mb-4">¿Vienes a estudiar o a trabajar temporalmente?</h2>
            <p className="section-subtitle">
              Opciones adaptadas a tu estancia: desde un curso universitario hasta un proyecto laboral en Madrid.
            </p>
          </div>
          <ProfileCards profiles={profiles} />
        </div>
      </section>

      <section ref={viviendaRef} id="vivienda" className="py-20 lg:py-28 px-6 bg-gray-light">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14 max-w-xl">
            <h2 className="section-title mb-4">Habitaciones disponibles</h2>
            <p className="section-subtitle">
              Habitaciones verificadas, reformadas y con todo incluido. Sin sorpresas ni letra pequeña.
            </p>
          </div>
          <RoomGrid rooms={rooms} />
        </div>
      </section>

      <StatsSection stats={stats} title="Fácil, seguro y con respuesta rápida" />

      <SocialProofSection
        stories={tenantSuccessStories}
        testimonials={tenantTestimonials}
        storiesTitle="Casos de éxito"
        storiesSubtitle="Estudiantes y profesionales que encontraron habitación en Madrid de forma fácil y segura."
        testimonialsTitle="Reseñas de inquilinos"
      />

      <ValuesStrip />

      <section ref={contactoRef} id="contacto" className="py-20 px-6 bg-gray-light">
        <ContactForm
          title="Te ayudamos a encontrar tu habitación"
          subtitle="Cuéntanos si vienes a estudiar o por trabajo temporal. Te guiamos en todo el proceso con total claridad."
          formName="contacto-inquilinos"
          fields={inquilinosFormFields}
        />
      </section>

      <Footer />
    </main>
  )
}
