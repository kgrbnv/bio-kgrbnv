# bio.kgrbnv.com

Link-in-bio страница для Instagram.

## Стек
- Next.js 14 (App Router)
- Tailwind CSS
- TypeScript
- Vercel (хостинг)

## Запуск
```bash
npm install    # установка зависимостей
npm run dev    # локальный сервер на localhost:3000
npm run build  # продакшен сборка
npm run lint   # линтер
```

## Структура
- `src/app/page.tsx` — главная страница
- `src/app/layout.tsx` — корневой layout + метаданные
- `src/app/globals.css` — глобальные стили
- `src/components/` — UI-компоненты
- `public/avatar.webp` — фото профиля

## Дизайн
- Тёмная тема (`#0a0a0b`)
- Акцент: градиент indigo→violet (`#6366f1` → `#8b5cf6`)
- Glassmorphism карточки с `backdrop-blur`
- Pill-toggle переключатель аудитории

## Контент
Страница имеет два режима:
1. **Частным лицам** — воркшопы, телеграм-каналы, личные контакты
2. **Бизнесу** — звонки через Calendly, WhatsApp, Telegram, sfer.ai

## Деплой
Автоматический через Vercel при push в main.
Домен: bio.kgrbnv.com

### Настройка домена
В DNS добавить CNAME запись:
```
bio → cname.vercel-dns.com
```
