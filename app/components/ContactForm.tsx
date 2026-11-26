'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Loader2, CheckCircle2, AlertCircle } from 'lucide-react'

interface FormField {
  name: string
  label: string
  type: 'text' | 'email' | 'tel' | 'number' | 'select' | 'textarea'
  required?: boolean
  placeholder?: string
  options?: Array<{ value: string; label: string }>
}

interface ContactFormProps {
  title: string
  subtitle: string
  formName: string
  fields: FormField[]
}

export default function ContactForm({ title, subtitle, formName, fields }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setMessage(null)

    // Keep a reference: e.currentTarget is null once the handler awaits.
    const form = e.currentTarget
    const payload = Object.fromEntries(new FormData(form).entries())
    payload['form-name'] = formName

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (response.ok) {
        setMessage({
          type: 'success',
          text: 'Solicitud enviada. Te contactaremos en las próximas 24 horas.',
        })
        form.reset()
        setTimeout(() => setMessage(null), 6000)
      } else {
        throw new Error('Error al enviar')
      }
    } catch {
      setMessage({
        type: 'error',
        text: 'Error al enviar. Por favor, inténtalo de nuevo.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="bg-white rounded-2xl p-8 md:p-12 max-w-2xl mx-auto border border-gray-200 shadow-soft"
    >
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3 text-balance">{title}</h2>
        <p className="text-gray-dark leading-relaxed">{subtitle}</p>
      </div>

      {message && (
        <div
          role="alert"
          className={`flex items-start gap-3 p-4 rounded-xl mb-6 text-sm font-medium ${
            message.type === 'success'
              ? 'bg-green-50 text-green-800 border border-green-200'
              : 'bg-red-50 text-red-800 border border-red-200'
          }`}
        >
          {message.type === 'success' ? (
            <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" aria-hidden="true" />
          ) : (
            <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" aria-hidden="true" />
          )}
          {message.text}
        </div>
      )}

      <form name={formName} method="POST" onSubmit={handleSubmit} className="space-y-5">
        {/* Honeypot for bots; hidden from people and screen readers. */}
        <div aria-hidden="true" className="absolute -left-[9999px] w-px h-px overflow-hidden">
          <label htmlFor={`${formName}-empresa_web`}>No rellenar</label>
          <input id={`${formName}-empresa_web`} type="text" name="empresa_web" tabIndex={-1} autoComplete="off" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {fields.map((field) => {
            const inputId = `field-${field.name}`
            return (
              <div key={field.name} className={field.type === 'textarea' ? 'md:col-span-2' : ''}>
                <label htmlFor={inputId} className="form-label">
                  {field.label}
                  {field.required && <span className="form-required"> *</span>}
                </label>

                {field.type === 'select' ? (
                  <select id={inputId} name={field.name} required={field.required} className="form-select">
                    <option value="">Selecciona...</option>
                    {field.options?.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                ) : field.type === 'textarea' ? (
                  <textarea
                    id={inputId}
                    name={field.name}
                    required={field.required}
                    placeholder={field.placeholder}
                    className="form-textarea"
                  />
                ) : (
                  <input
                    id={inputId}
                    type={field.type}
                    name={field.name}
                    required={field.required}
                    placeholder={field.placeholder}
                    className="form-input"
                  />
                )}
              </div>
            )
          })}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full btn-primary py-4 text-lg disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" />
              Enviando...
            </>
          ) : (
            'Enviar Solicitud'
          )}
        </button>
      </form>
    </motion.div>
  )
}
