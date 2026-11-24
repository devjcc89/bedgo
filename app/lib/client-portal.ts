/**
 * Client user portal login. NEXT_PUBLIC_CLIENT_PORTAL_URL overrides the
 * default, e.g. to point at a staging portal.
 */
const DEFAULT_URL = 'https://inmotucasa.lovable.app/acceso'

export const CLIENT_PORTAL = {
  url: process.env.NEXT_PUBLIC_CLIENT_PORTAL_URL?.trim() || DEFAULT_URL,
  label: 'Área de clientes',
} as const
