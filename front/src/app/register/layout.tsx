import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Registrar',
  description: 'Pagina para se cadastrar.',
}

export default function RegisterLayout({ children }: { children: React.ReactNode }) {
  
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
