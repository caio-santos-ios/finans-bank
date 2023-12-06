import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Login',
  description: 'Pagina para se logar.',
}

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
