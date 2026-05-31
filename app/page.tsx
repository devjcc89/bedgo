'use client'

import { useRef } from 'react'
import {
  Building2,
  Key,
  Paintbrush,
  RefreshCw,
  Scale,
  ShieldCheck,
  TrendingUp,
  Wrench,
  CalendarCheck,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import Header from './components/Header'
import Hero from './components/Hero'
import RoleSelector from './components/RoleSelector'
import HowItWorks from './components/HowItWorks'
import TransformationSection from './components/TransformationSection'
import BenefitsGrid from './components/BenefitsGrid'
import StatsSection from './components/StatsSection'
import ValuesStrip from './components/ValuesStrip'
import OwnerRevalorizationSection from './components/OwnerRevalorizationSection'
import SocialProofSection from './components/SocialProofSection'
import ContactForm from './components/ContactForm'
import OwnerPitchSection from './components/OwnerPitchSection'
import Footer from './components/Footer'
import { stockImages } from './lib/stock-images'
import { ownerSuccessStories, ownerTestimonials } from './lib/social-proof'

interface Benefit {
  icon: LucideIcon
  title: string
  description: string
}

export default function Home() {
  const propietariosRef = useRef<HTMLDivElement>(null)

  const ownerBenefits: Benefit[] = [
    {
      icon: ShieldCheck,
      title: 'Renta garantizada',
      description: 'Ingreso fijo pactado cada mes, independiente de vacíos o impagos.',
    },
    {
      icon: Building2,
      title: 'Un solo interlocutor',
      description: 'Bedgo centraliza contrato, cobros, inquilinos e incidencias. Tú no gestionas nada.',
    },
    {
      icon: TrendingUp,
      title: 'Mayor rentabilidad',
      description: 'Modelo por habitaciones con rentabilidad superior al alquiler tradicional.',
    },
    {
      icon: Paintbrush,
      title: 'Reforma gratis',
      description: 'Hasta €18.000 en reformas. Tu piso gana valor sin coste para ti.',
    },
    {
      icon: Wrench,
      title: 'Incidencias resueltas',
      description: 'Mantenimiento, reparaciones y coordinación diaria incluidos en el servicio.',
    },
    {
      icon: CalendarCheck,
      title: 'Sin vacíos',
      description: 'Seleccionamos y sustituimos inquilinos para mantener el piso siempre activo.',
    },
    {
      icon: RefreshCw,
      title: 'Flexibilidad contractual',
      description: 'Recupera el activo según la estructura acordada, con el piso mejorado.',
    },
    {
      icon: Scale,
      title: 'Garantía legal',
      description: 'Empresa registrada, contratos profesionales y responsabilidad clara.',
    },
  ]

  const stats = [
    { number: '100%', label: 'Renta garantizada cada mes' },
    { number: '1', label: 'Único interlocutor para tu piso' },
    { number: '0', label: 'Días vacíos entre inquilinos' },
    { number: '24h', label: 'Respuesta a propietarios' },
  ]

  const ownerFormFields = [
    { name: 'nombre', label: 'Nombre', type: 'text' as const, required: true },
    { name: 'telefono', label: 'Teléfono', type: 'tel' as const, required: true },
    { name: 'email', label: 'Email', type: 'email' as const, required: true },
    { name: 'zona', label: 'Zona / Barrio', type: 'text' as const, required: true, placeholder: 'Ej: Fuencarral, Malasaña' },
    {
      name: 'tipo_vivienda',
      label: 'Tipo de vivienda',
      type: 'select' as const,
      required: true,
      options: [
        { value: 'piso', label: 'Piso' },
        { value: 'casa', label: 'Casa' },
        { value: 'estudio', label: 'Estudio' },
        { value: 'otro', label: 'Otro' },
      ],
    },
    { name: 'habitaciones', label: 'Nº de habitaciones', type: 'number' as const, placeholder: 'Ej: 3' },
    {
      name: 'alquilado',
      label: '¿Está actualmente alquilado?',
      type: 'select' as const,
      options: [
        { value: 'si', label: 'Sí' },
        { value: 'no', label: 'No' },
      ],
    },
    { name: 'renta_actual', label: 'Renta mensual actual', type: 'text' as const, placeholder: 'Ej: €900/mes' },
    {
      name: 'mensaje',
      label: 'Detalles de la propiedad',
      type: 'textarea' as const,
      placeholder: 'Habitaciones, estado, reformas pendientes...',
    },
  ]

  return (
    <main className="w-full">
      <Header />

      <Hero
        badge="Renta fija cada mes."
        title="Máxima rentabilidad y seguridad jurídica."
        subtitle="Mayor rentabilidad que el alquiler tradicional, con un único interlocutor y renta garantizada todos los meses."
        highlight="Renta garantizada · mayor ingreso"
        image={stockImages.ownerHero}
      />

      <OwnerPitchSection />

      <section className="py-14 px-6 bg-gray-light border-y border-gray-200/80">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10 max-w-xl">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-3 text-balance">
              ¿Eres propietario o buscas piso?
            </h2>
            <p className="text-gray-dark leading-relaxed">
              Elige tu perfil y te llevamos directo a la información que necesitas.
            </p>
          </div>
          <RoleSelector
            cards={[
              {
                icon: Building2,
                title: 'Soy propietario',
                description: 'Renta garantizada, mayor rentabilidad y gestión integral con un solo interlocutor',
                cta: 'Ver propuesta para mi piso',
                featured: true,
                onClick: () => propietariosRef.current?.scrollIntoView({ behavior: 'smooth' }),
              },
              {
                icon: Key,
                title: 'Busco habitación',
                description: 'Vivienda fácil y segura para estudiar o trabajar temporalmente en Madrid',
                cta: 'Ver habitaciones disponibles',
                onClick: () => {
                  window.location.href = '/inquilinos'
                },
              },
            ]}
          />
        </div>
      </section>

      <HowItWorks />

      <section ref={propietariosRef} id="propietarios" className="py-20 lg:py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14 lg:mb-16 max-w-2xl">
            <h2 className="section-title mb-4">Alquiler tradicional vs. Bedgo</h2>
            <p className="section-subtitle">
              Menos riesgo, más rentabilidad y un único interlocutor frente al modelo convencional.
            </p>
          </div>

          <TransformationSection
            rows={[
              { label: 'Ingreso mensual', value: 'Variable · vacíos e impagos' },
              { label: 'Ingreso con Bedgo', value: 'Renta fija garantizada', highlight: true },
              { label: 'Interlocutores', value: 'Inquilinos, gestoría, reparadores…' },
              { label: 'Con Bedgo', value: 'Un solo contacto: tu empresa', highlight: true },
            ]}
            summary="Mayor rentabilidad potencial, cero gestión diaria y menor riesgo de vacancia"
          />

          <div className="mt-20">
            <h3 className="text-xl md:text-2xl font-bold text-primary mb-8 max-w-lg text-balance">
              Todo lo que incluye el servicio
            </h3>
            <BenefitsGrid benefits={ownerBenefits} />
          </div>
        </div>
      </section>

      <StatsSection stats={stats} title="Tu tranquilidad, en cifras" />

      <OwnerRevalorizationSection />

      <SocialProofSection
        stories={ownerSuccessStories}
        testimonials={ownerTestimonials}
        storiesTitle="Casos de éxito · Antes y después"
        storiesSubtitle="Reformas reales en Madrid: ambientación, promoción profesional y colaboración con estudios de arquitectura para revalorizar la vivienda y maximizar el rendimiento."
        testimonialsTitle="Reseñas de propietarios"
      />

      <ValuesStrip />

      <section id="contacto" className="py-20 lg:py-28 px-6 bg-gray-light">
        <ContactForm
          title="Pide una propuesta para tu piso"
          subtitle="Cuéntanos la zona y el estado de la vivienda. Te enviamos una propuesta personalizada en 24 horas."
          formName="contacto-propietarios"
          fields={ownerFormFields}
        />
      </section>

      <Footer />
    </main>
  )
}
