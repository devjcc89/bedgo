'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X, User, Building2, LogIn } from 'lucide-react'
import { LOGO } from '../lib/brand'
import { CLIENT_PORTAL } from '../lib/client-portal'

const INQUILINOS_PATH = '/inquilinos'

export default function Header() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const isInquilinosPage = pathname === INQUILINOS_PATH

  const scrollTo = (id: string) => {
    setMobileOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const navLinks = !isInquilinosPage
      ? [
          { label: 'Propietarios', id: 'propietarios' },
          { label: 'Cómo funciona', id: 'como-funciona' },
          { label: 'Reseñas', id: 'resenas' },
          { label: 'Contacto', id: 'contacto' },
        ]
      : [
          { label: 'Vivienda', id: 'vivienda' },
          { label: 'Cómo funciona', id: 'como-funciona' },
          { label: 'Reseñas', id: 'resenas' },
          { label: 'Contacto', id: 'contacto' },
        ]

  return (
    <header className="fixed top-4 left-4 right-4 z-50">
      <div className="max-w-6xl mx-auto bg-white/90 backdrop-blur-md border border-gray-200 rounded-2xl shadow-soft px-4 md:px-6 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2.5 shrink-0 hover:opacity-80 transition-opacity duration-200">
          <Image
            src={LOGO.src}
            alt=""
            width={LOGO.width}
            height={LOGO.height}
            priority
            className="h-10 w-10 object-contain"
          />
          <span className="text-xl font-bold text-primary tracking-tight leading-none">
            Bed<span className="text-secondary">Go</span>
          </span>
        </Link>

        <nav className="hidden lg:flex gap-1 items-center">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="px-4 py-2 text-sm font-medium text-primary rounded-lg hover:text-secondary hover:bg-secondary/5 transition-colors duration-200 cursor-pointer"
            >
              {link.label}
            </button>
          ))}

          <a
            href={CLIENT_PORTAL.url}
            className="ml-2 inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-primary whitespace-nowrap border border-gray-200 rounded-lg hover:text-secondary hover:border-secondary/40 transition-colors duration-200"
          >
            <LogIn className="w-4 h-4" aria-hidden="true" />
            {CLIENT_PORTAL.label}
          </a>

          <Link
            href={isInquilinosPage ? '/' : INQUILINOS_PATH}
            className="ml-2 btn-primary text-sm py-2.5"
          >
            {isInquilinosPage ? (
              <>
                <User className="w-4 h-4" aria-hidden="true" />
                Inquilino
              </>
            ) : (
              <>
                <Building2 className="w-4 h-4" aria-hidden="true" />
                Propietario
              </>
            )}
          </Link>
        </nav>

        <button
          type="button"
          className="lg:hidden p-2 rounded-lg text-primary hover:bg-gray-light transition-colors duration-200 cursor-pointer"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden max-w-6xl mx-auto mt-2 bg-white border border-gray-200 rounded-2xl shadow-card p-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="w-full text-left px-4 py-3 text-primary font-medium rounded-xl hover:bg-gray-light transition-colors duration-200 cursor-pointer"
            >
              {link.label}
            </button>
          ))}
          <a
            href={CLIENT_PORTAL.url}
            onClick={() => setMobileOpen(false)}
            className="flex items-center gap-2 px-4 py-3 text-primary font-semibold rounded-xl hover:bg-gray-light transition-colors duration-200"
          >
            <LogIn className="w-4 h-4" aria-hidden="true" />
            {CLIENT_PORTAL.label}
          </a>
          <Link
            href={isInquilinosPage ? '/' : INQUILINOS_PATH}
            className="btn-primary mt-2 justify-center"
            onClick={() => setMobileOpen(false)}
          >
            {isInquilinosPage ? 'Soy Propietario' : 'Soy Inquilino'}
          </Link>
        </div>
      )}
    </header>
  )
}
