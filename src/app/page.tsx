'use client'

import { useState } from 'react'
import Image from 'next/image'

type Tab = 'personal' | 'business'

interface LinkItem {
  icon: string
  title: string
  subtitle?: string
  url: string
}

const personalLinks: LinkItem[] = [
  {
    icon: '🎓',
    title: 'Воркшоп "База ИИ"',
    subtitle: 'Прошло 10К+ человек',
    url: 'https://ru.sfer.ai/baza?utm_source=pr&utm_medium=ig&utm_campaign=biolinkgrbnv',
  },
  {
    icon: '📱',
    title: 'Телеграм-канал',
    subtitle: '10.3К подписчиков',
    url: 'https://t.me/kgrbnv',
  },
  {
    icon: '🤖',
    title: 'Канал про ИИ',
    subtitle: '2.5К подписчиков',
    url: 'https://t.me/ailetter',
  },
  {
    icon: '✉️',
    title: 'Написать мне',
    url: 'https://t.me/kgurbanov',
  },
  {
    icon: '👤',
    title: 'Обо мне',
    url: 'https://gurbanov.ru',
  },
]

const businessLinks: LinkItem[] = [
  {
    icon: '📅',
    title: 'Назначить звонок',
    subtitle: 'Calendly',
    url: 'https://calendly.com/gurbanov/sfer-intro',
  },
  {
    icon: '💬',
    title: 'Написать в WhatsApp',
    url: 'https://wa.me/79263814177',
  },
  {
    icon: '✈️',
    title: 'Написать в Telegram',
    url: 'https://t.me/kgurbanov',
  },
  {
    icon: '🏢',
    title: 'sfer.ai',
    subtitle: 'AI-трансформация через обучение и внедрение',
    url: 'https://ru.sfer.ai/teams?utm_source=pr&utm_medium=ig&utm_campaign=biolinkgrbnv',
  },
]

export default function Home() {
  const [activeTab, setActiveTab] = useState<Tab>('personal')

  const links = activeTab === 'personal' ? personalLinks : businessLinks

  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-12">
      <div className="w-full max-w-md">
        {/* Avatar */}
        <div className="flex justify-center mb-6">
          <div className="avatar-border p-[3px] rounded-full">
            <div className="bg-background rounded-full p-[2px]">
              <Image
                src="/avatar.jpg"
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
          <h1 className="text-2xl font-semibold mb-2">Кирилл Гурбанов</h1>
          <p className="text-zinc-400 text-sm">
            Основатель sfer.ai • 10+ лет в топ-менеджменте
          </p>
        </div>

        {/* Tab Selector */}
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
                <span className="text-2xl">{link.icon}</span>
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-white">{link.title}</div>
                  {link.subtitle && (
                    <div className="text-sm text-zinc-400 truncate">
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
            © {new Date().getFullYear()} Кирилл Гурбанов
          </p>
        </div>
      </div>
    </main>
  )
}
