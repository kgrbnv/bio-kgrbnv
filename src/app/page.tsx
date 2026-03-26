'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    const isRussian = navigator.language?.toLowerCase().startsWith('ru')
    const locale = isRussian ? 'ru' : 'en'
    router.replace(`/${locale}/personal`)
  }, [router])

  return null
}
