import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Intercolegiales',
  description: 'Generated by create next app'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <nav>
            <img src="/head_intercolegiales.webp" />
            <span>Sesion X</span>
            {/* Admin/Director/Delegado/Profesor  dependiendo de la sesion en la que se inicie */}
          </nav>
        </header>

        {children}
        <footer>
          <img src="/subrayado.svg" />
        </footer>
      </body>
    </html>
  )
}