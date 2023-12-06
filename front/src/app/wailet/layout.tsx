import { Footer } from '@/components/Footer'
import type { Metadata } from 'next'
import "@/style/Header.css"

export const metadata: Metadata = {
  title: 'Carteira',
  description: 'Pagina home do site.',
}

export default function AccountLayout({ children }: { children: React.ReactNode }) {
  
  return (
    <html lang="pt-BR">
      <body>{children}</body>
      <Footer />
    </html>
  )
}
