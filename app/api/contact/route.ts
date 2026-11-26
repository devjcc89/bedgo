import { NextResponse } from 'next/server'

const FORMS: Record<string, string> = {
  'contacto-propietarios': 'Nuevo propietario',
  'contacto-inquilinos': 'Nuevo inquilino',
}

const MAX_FIELDS = 30
const MAX_VALUE_LENGTH = 5000

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.CONTACT_TO_EMAIL
  const from = process.env.CONTACT_FROM_EMAIL || 'BedGo Web <web@bedgo.es>'

  if (!apiKey || !to) {
    console.error('Contact form: RESEND_API_KEY or CONTACT_TO_EMAIL is not set')
    return NextResponse.json({ error: 'not_configured' }, { status: 500 })
  }

  let data: Record<string, unknown>
  try {
    data = await request.json()
  } catch {
    return NextResponse.json({ error: 'invalid_body' }, { status: 400 })
  }

  // Honeypot: real visitors never fill this hidden field.
  if (typeof data.empresa_web === 'string' && data.empresa_web.trim() !== '') {
    return NextResponse.json({ ok: true })
  }

  const formName = typeof data['form-name'] === 'string' ? data['form-name'] : ''
  const subjectPrefix = FORMS[formName]
  if (!subjectPrefix) {
    return NextResponse.json({ error: 'unknown_form' }, { status: 400 })
  }

  const fields = Object.entries(data)
    .filter(([key, value]) => key !== 'form-name' && key !== 'empresa_web' && typeof value === 'string')
    .slice(0, MAX_FIELDS)
    .map(([key, value]) => [key, (value as string).trim().slice(0, MAX_VALUE_LENGTH)] as const)
    .filter(([, value]) => value !== '')

  const get = (key: string) => fields.find(([k]) => k === key)?.[1] ?? ''
  const email = get('email')
  if (!get('nombre') || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'invalid_fields' }, { status: 400 })
  }

  const rows = fields
    .map(
      ([key, value]) =>
        `<tr><td style="padding:4px 12px 4px 0;font-weight:600;vertical-align:top">${escapeHtml(key.replace(/_/g, ' '))}</td><td style="padding:4px 0;white-space:pre-wrap">${escapeHtml(value)}</td></tr>`,
    )
    .join('')
  const text = fields.map(([key, value]) => `${key.replace(/_/g, ' ')}: ${value}`).join('\n')

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from,
      to: to.split(',').map((address) => address.trim()),
      reply_to: email,
      subject: `${subjectPrefix}: ${get('nombre').slice(0, 100)}`,
      html: `<table>${rows}</table>`,
      text,
    }),
  })

  if (!response.ok) {
    console.error('Contact form: Resend error', response.status, await response.text())
    return NextResponse.json({ error: 'send_failed' }, { status: 502 })
  }

  return NextResponse.json({ ok: true })
}
