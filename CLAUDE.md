# bio.kgrbnv.com

Link-in-bio страница для Instagram Кирилла Гурбанова.

## Ссылки
- **Продакшен**: https://bio.kgrbnv.com
- **GitHub**: https://github.com/kgrbnv/bio-kgrbnv (источник правды)
- **Railway**: проект `bio-kgrbnv`, сервис `bio-kgrbnv`, окружение `production` — обслуживает домен
- **Vercel**: https://vercel.com/kirillgurbanov-gmailcom/bio-kgrbnv — тоже собирает каждый push, но домен смотрит не туда

## Стек
- Next.js 14 (App Router), статическая генерация четырёх страниц
- Tailwind CSS
- TypeScript

## Запуск
```bash
npm ci         # установка зависимостей
npm run dev    # локальный сервер на localhost:3000
npm run build  # продакшен сборка (заодно проверка типов и линтер)
```

## Структура проекта
```
public/
  avatar.png                  # фото профиля (круглое)
  metastabilnost-logo.svg     # знак Метастабильности, белая (инверсная) версия
src/
  app/[locale]/[audience]/page.tsx  # страница: тексты, ссылки, метаданные для ru/en × personal/business
  app/layout.tsx                    # корневой layout и метаданные по умолчанию
  app/page.tsx                      # / → /ru|en/personal по языку браузера (клиентский запасной путь)
  middleware.ts                     # / → /ru|en/personal по Accept-Language, /ru и /en → /…/personal
  app/globals.css                   # стили и Tailwind
```

Адреса: `/ru/personal`, `/ru/business`, `/en/personal`, `/en/business`.

## Дизайн
- Тёмная тема (`#0a0a0b`)
- Акцент: градиент indigo→violet (`#6366f1` → `#8b5cf6`)
- Glassmorphism карточки с `backdrop-blur`
- Pill-toggle переключатель аудитории
- SVG иконки (Telegram, WhatsApp, Calendar, LinkedIn, глобус)

## Бренды (с 09.11.2026)
- Компания в России — **Метастабильность** (бывшая sfer.ai), сайт https://metastabilnost.ru
  (ru.sfer.ai редиректит туда). В тексте склоняется без кавычек: «Основатель Метастабильности».
- За пределами России — **Future as Usual**. Своего сайта и утверждённого логотипа пока нет:
  карточка ведёт на https://en.sfer.ai/, вместо логотипа — иконка глобуса.
- Знак Метастабильности в английской версии не используется.
- Знак Метастабильности — из брендбука, в экспорте с сайта: https://metastabilnost.ru/brand/metastability-sign.svg;
  цвета заменены на белый, как в инверсной версии логотипа (`/brand/metastability-logo-inverse.svg`).
- ФТЭП, FT Board и Global Talent UK с сайта убраны (решение Кирилла 09.11.2026).

## Контент

### RU — Частным лицам
1. Метастабильность → metastabilnost.ru (с UTM `biolinkgrbnv`)
2. Телеграм-канал (20К) → инвайт-ссылка t.me/+wWWpIR-3xnJjYTdi
3. Канал про ИИ (5К) → инвайт-ссылка t.me/+S5flPh8BiCsxNjcy
4. Написать мне → t.me/kirill1
5. Обо мне → gurbanov.ru
6. LinkedIn → linkedin.com/in/kgurbanov

### RU — Бизнесу
1. Назначить звонок → calendly.com/gurbanov/sfer-ai-30
2. WhatsApp → wa.me/79263814177
3. Telegram → t.me/kirill1
4. Метастабильность → metastabilnost.ru (с UTM `biolinkgrbnv`)

### EN — Personal
1. LinkedIn
2. About me → kgrbnv.com
3. Future as Usual → en.sfer.ai

### EN — Business
1. Schedule a call → calendly.com/gurbanov/sfer-ai-30
2. WhatsApp → wa.me/351916116466
3. Future as Usual → en.sfer.ai
4. LinkedIn
5. About me → kgrbnv.com

## Деплой
Push в `main` → Railway сам собирает и выкатывает (и Vercel параллельно). Статус без Railway API:
```bash
gh api repos/kgrbnv/bio-kgrbnv/deployments --jq '.[0:4][] | "\(.environment) \(.sha[0:7]) \(.created_at)"'
gh api repos/kgrbnv/bio-kgrbnv/deployments/<id>/statuses --jq '.[0].state'
```

### Домен
DNS: `bio.kgrbnv.com` → CNAME `r4twvi2r.up.railway.app` (Railway).
