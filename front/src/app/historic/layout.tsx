import { Footer } from '@/components/Footer'
import type { Metadata } from 'next'
import "@/style/Header.css"

export const metadata: Metadata = {
  title: 'Histotico',
  description: 'Pagina de historico das transações.',
}

export default function HistoricLayout({ children }: { children: React.ReactNode }) {
  
  return (
    <html lang="pt-BR">
      <body>{children}</body>
      <Footer />
    </html>
  )
}
