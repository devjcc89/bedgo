'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, ArrowRight, LogIn } from 'lucide-react'
import { FOOTER_LOGO } from '../lib/brand'
import { CLIENT_PORTAL } from '../lib/client-portal'

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-14 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <Image
              src={FOOTER_LOGO.src}
              alt={FOOTER_LOGO.alt}
              width={FOOTER_LOGO.width}
              height={FOOTER_LOGO.height}
              className="h-14 w-auto object-contain mb-4"
            />
            <p className="text-white/70 text-sm leading-relaxed">
              Tu piso genera ingresos. Nosotros manejamos todo.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-sm uppercase tracking-wider text-white/90">Contacto</h4>
            <div className="space-y-3">
              <a
                href="tel:+34600123456"
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors duration-200 text-sm"
              >
                <Phone className="w-4 h-4 shrink-0" aria-hidden="true" />
                +34 600-123-456
              </a>
              <a
                href="mailto:hola@bedgo.es"
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors duration-200 text-sm"
              >
                <Mail className="w-4 h-4 shrink-0" aria-hidden="true" />
                hola@bedgo.es
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-sm uppercase tracking-wider text-white/90">Acceso rápido</h4>
            <div className="space-y-3">
              <Link
                href="/"
                className="flex items-center gap-2 text-white/70 hover:text-white transition-colors duration-200 text-sm"
              >
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
                Propietarios
              </Link>
              <Link
                href="/inquilinos"
                className="flex items-center gap-2 text-white/70 hover:text-white transition-colors duration-200 text-sm"
              >
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
                Inquilinos
              </Link>
              <a
                href={CLIENT_PORTAL.url}
                className="flex items-center gap-2 text-white/70 hover:text-white transition-colors duration-200 text-sm"
              >
                <LogIn className="w-4 h-4" aria-hidden="true" />
                {CLIENT_PORTAL.label}
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/15 pt-8 text-center text-white/50 text-sm">
          <p>© 2026 Bedgo Servicios Inmobiliarios S.L. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
