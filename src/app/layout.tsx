import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin', 'cyrillic'] })

export const metadata: Metadata = {
  title: 'Кирилл Гурбанов — ссылки',
  description: 'Основатель sfer.ai • 10+ лет в топ-менеджменте. Воркшопы по ИИ, телеграм-каналы и контакты.',
  openGraph: {
    title: 'Кирилл Гурбанов — ссылки',
    description: 'Основатель sfer.ai • 10+ лет в топ-менеджменте',
    url: 'https://bio.kgrbnv.com',
    siteName: 'Кирилл Гурбанов',
    locale: 'ru_RU',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Кирилл Гурбанов — ссылки',
    description: 'Основатель sfer.ai • 10+ лет в топ-менеджменте',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
