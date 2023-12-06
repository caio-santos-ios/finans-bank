import { Footer } from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cartoes',
  description: 'Pagina de cartões das transações.',
}

export default function AccountLayout({ children }: { children: React.ReactNode }) {
  
  return (
    <html lang="pt-BR">
      <body>{children}</body>
      <Footer />
    </html>
  )
}
