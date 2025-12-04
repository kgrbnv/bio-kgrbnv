# bio.kgrbnv.com

Link-in-bio страница для Instagram Кирилла Гурбанова.

## Ссылки
- **Продакшен**: https://bio.kgrbnv.com
- **GitHub**: https://github.com/kgrbnv/bio-kgrbnv
- **Vercel**: https://vercel.com/kirillgurbanov-gmailcom/bio-kgrbnv

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

## Структура проекта
```
bio.kgrbnv.com/
├── public/
│   ├── avatar.png       # Фото профиля (круглое)
│   └── sfer-logo.png    # Логотип sfer.ai
├── src/app/
│   ├── page.tsx         # Главная страница
│   ├── layout.tsx       # Корневой layout + SEO метаданные
│   └── globals.css      # Глобальные стили + Tailwind
├── CLAUDE.md            # Этот файл
├── package.json
├── tailwind.config.ts
└── next.config.js
```

## Дизайн
- Тёмная тема (`#0a0a0b`)
- Акцент: градиент indigo→violet (`#6366f1` → `#8b5cf6`)
- Glassmorphism карточки с `backdrop-blur`
- Pill-toggle переключатель аудитории
- SVG иконки (Telegram, WhatsApp, Calendar и др.)

## Контент
Страница имеет два режима (переключатель):

### Частным лицам
1. Воркшоп "База ИИ" → ru.sfer.ai/baza
2. Телеграм-канал (10.3К) → t.me/kgrbnv
3. Канал про ИИ (2.5К) → t.me/ailetter
4. Написать мне → t.me/kgurbanov
5. Обо мне → gurbanov.ru

### Бизнесу
1. Назначить звонок → calendly.com/gurbanov/sfer-intro
2. WhatsApp → wa.me/79263814177
3. Telegram → t.me/kgurbanov
4. sfer.ai → ru.sfer.ai/teams

## Деплой
Автоматический через Vercel при push в `main` ветку.

### Домен
DNS запись (уже настроена):
```
Тип:     CNAME
Имя:     bio
Значение: cname.vercel-dns.com
```

## Git
```bash
git add .
git commit -m "описание изменений"
git push
```
После push Vercel автоматически задеплоит изменения.
