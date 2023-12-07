import type { Metadata } from 'next'
import "@/style/Form.css"
import "../globals.css"

export const metadata: Metadata = {
  title: 'Editar Perfil',
  description: 'Pagina para editar a conta do usuário.',
}

export default function AccountLayout({ children }: { children: React.ReactNode }) {
  
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
