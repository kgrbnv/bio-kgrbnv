'use client'

import { useState } from 'react'
import Image from 'next/image'

type Tab = 'personal' | 'business'
type Locale = 'ru' | 'en'

// SVG Icons
const Icons = {
  telegram: (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
    </svg>
  ),
  robot: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 14.5M14.25 3.104c.251.023.501.05.75.082M19.8 14.5l-2.047 2.047m0 0a2.25 2.25 0 01-1.591.659H7.838a2.25 2.25 0 01-1.591-.659m13.106 0L17.25 19.5m-14.5-5l2.047 2.047m0 0a2.25 2.25 0 001.591.659h8.324a2.25 2.25 0 001.591-.659m-13.106 0L6.75 19.5M12 12.75h.008v.008H12v-.008z" />
    </svg>
  ),
  user: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
    </svg>
  ),
  calendar: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
    </svg>
  ),
  whatsapp: (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  ),
  linkedin: (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  ),
}

interface LinkItem {
  icon: React.ReactNode
  title: string
  subtitle?: string
  url: string
  isLogo?: boolean
  logoSrc?: string
}

const personalLinks: LinkItem[] = [
  {
    icon: Icons.telegram,
    title: 'Телеграм-канал',
    subtitle: '14.7К подписчиков',
    url: 'https://t.me/kgrbnv',
  },
  {
    icon: Icons.telegram,
    title: 'Канал про ИИ',
    subtitle: '3.3К подписчиков',
    url: 'https://t.me/ailetter',
  },
  {
    icon: Icons.telegram,
    title: 'Написать мне',
    url: 'https://t.me/kgurbanov',
  },
  {
    icon: Icons.user,
    title: 'Обо мне',
    url: 'https://gurbanov.ru',
  },
  {
    icon: Icons.linkedin,
    title: 'LinkedIn',
    url: 'https://www.linkedin.com/in/kgurbanov',
  },
]

const businessLinks: LinkItem[] = [
  {
    icon: Icons.calendar,
    title: 'Назначить звонок',
    subtitle: 'Обсудить вашу задачу',
    url: 'https://calendly.com/gurbanov/sfer-intro',
  },
  {
    icon: Icons.whatsapp,
    title: 'Написать в WhatsApp',
    url: 'https://wa.me/79263814177',
  },
  {
    icon: Icons.telegram,
    title: 'Написать в Telegram',
    url: 'https://t.me/kgurbanov',
  },
  {
    icon: null,
    title: 'sfer.ai',
    subtitle: 'AI-трансформация через обучение и внедрение',
    url: 'https://ru.sfer.ai/teams?utm_source=pr&utm_medium=ig&utm_campaign=biolinkgrbnv',
    isLogo: true,
  },
  {
    icon: null,
    title: 'ФТЭП',
    subtitle: '10+ лет разрабатываем финтех стратегии для банков и стартапов по всему миру',
    url: 'https://ftep.ru',
    isLogo: true,
    logoSrc: '/ftep-logo.svg',
  },
]

const englishLinks: LinkItem[] = [
  {
    icon: Icons.calendar,
    title: 'Schedule a call',
    subtitle: 'Discuss your project in AI or FinTech',
    url: 'https://calendly.com/gurbanov/sfer-intro',
  },
  {
    icon: Icons.whatsapp,
    title: 'WhatsApp',
    url: 'https://wa.me/351916116466',
  },
  {
    icon: null,
    title: 'sfer.ai',
    subtitle: 'AI transformation through training and implementation',
    url: 'https://sfer.ai/teams',
    isLogo: true,
  },
  {
    icon: null,
    title: 'FT Board',
    subtitle: 'Boutique FinTech Consulting: 10+ years of FinTech strategies for banks and startups worldwide',
    url: 'https://ftboard.com',
    isLogo: true,
    logoSrc: '/ftboard-logo.svg',
  },
  {
    icon: Icons.linkedin,
    title: 'LinkedIn',
    url: 'https://www.linkedin.com/in/kgurbanov',
  },
  {
    icon: Icons.user,
    title: 'About me',
    url: 'https://kgrbnv.com',
  },
]

export default function Home() {
  const [activeTab, setActiveTab] = useState<Tab>('personal')
  const [locale, setLocale] = useState<Locale>('ru')

  const links = locale === 'en'
    ? englishLinks
    : (activeTab === 'personal' ? personalLinks : businessLinks)

  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-12 relative">
      {/* Language Switcher */}
      <button
        onClick={() => setLocale(locale === 'ru' ? 'en' : 'ru')}
        className="absolute top-4 right-4 glass-card px-3 py-1.5 rounded-full text-sm font-medium text-zinc-300 hover:text-white transition-colors"
      >
        {locale === 'ru' ? 'EN' : 'RU'}
      </button>

      <div className="w-full max-w-md">
        {/* Avatar */}
        <div className="flex justify-center mb-6">
          <div className="avatar-border p-[3px] rounded-full">
            <div className="bg-background rounded-full p-[2px]">
              <Image
                src="/avatar.png"
                alt="Кирилл Гурбанов"
                width={100}
                height={100}
                className="rounded-full object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* Name & Bio */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-semibold mb-3">
            {locale === 'en' ? 'Kirill Gurbanov' : 'Кирилл Гурбанов'}
          </h1>
          <p className="text-zinc-400 text-sm leading-relaxed px-2">
            {locale === 'en'
              ? 'CEO, Founder @ sfer.ai and FT Board, AI Enthusiast, Seasoned Executive in FinTech & Banking, PropTech. Global Talent UK.'
              : 'Основатель sfer.ai, практик с 10-летним опытом на топ-позициях в крупнейших компаниях России: со-основатель банка СМЛТ (группа «Самолет»), Chief Digital Officer МТС Банк, CPO Сбер Бизнес Мобайл и др.'}
          </p>
        </div>

        {/* Tab Selector - only for Russian version */}
        {locale === 'ru' && (
          <div className="flex justify-center mb-8">
            <div className="glass-card rounded-full p-1 flex gap-1">
              <button
                onClick={() => setActiveTab('personal')}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === 'personal' ? 'tab-active' : 'tab-inactive'
                }`}
              >
                Частным лицам
              </button>
              <button
                onClick={() => setActiveTab('business')}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === 'business' ? 'tab-active' : 'tab-inactive'
                }`}
              >
                Бизнесу
              </button>
            </div>
          </div>
        )}

        {/* Links */}
        <div className="space-y-3">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card block rounded-2xl p-4 cursor-pointer"
            >
              <div className="flex items-center gap-4">
                {link.isLogo ? (
                  <Image
                    src={link.logoSrc || '/sfer-logo.png'}
                    alt={link.title}
                    width={24}
                    height={24}
                    className="w-6 h-6 object-contain"
                  />
                ) : (
                  <span className="text-white/80">{link.icon}</span>
                )}
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-white">{link.title}</div>
                  {link.subtitle && (
                    <div className="text-sm text-zinc-400">
                      {link.subtitle}
                    </div>
                  )}
                </div>
                <svg
                  className="w-5 h-5 text-zinc-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </a>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <p className="text-zinc-600 text-xs">
            © {new Date().getFullYear()} {locale === 'en' ? 'Kirill Gurbanov' : 'Кирилл Гурбанов'}
          </p>
        </div>
      </div>
    </main>
  )
}
