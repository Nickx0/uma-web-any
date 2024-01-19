import { Inter } from 'next/font/google'
import './globals.css'
import { Locale, i18n } from '@/i18n.config'
import Footer from './BaseUI/Footer'
import Navbar from './BaseUI/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'UmaClicker',
  description: 'Clicker of Umas with cute sounds',
  icons: {
    icon: '/static/umaiconR.png',
    apple: '/static/umaiconR.png',
    other: {
      rel: 'umaicon',
      url: '/static/umaiconR.png',
    },
  },
}
export async function generateStaticParams() {
  return i18n.locales.map(locale => ({ lang: locale }))
}

export default function RootLayout({ children,params }) {
  return (
    <html lang={params.lang}>
      <body className={inter.className}>
      <script defer src="https://use.fontawesome.com/releases/v5.15.4/js/all.js" integrity="sha384-rOA1PnstxnOBLzCLMcre8ybwbTmemjzdNlILg8O7z1lUkLXozs4DHonlDtnE7fpc" crossOrigin="anonymous"></script>

        <Navbar lg={params.lang} />
        {children}
        <Footer lg={params.lang} />
        </body>
    </html>
  )
}
