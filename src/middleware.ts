import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const VALID_LOCALES = ['ru', 'en']
const VALID_AUDIENCES = ['personal', 'business']

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Root: auto-detect locale from Accept-Language header
  if (pathname === '/') {
    const acceptLanguage = request.headers.get('accept-language') || ''
    const isRussian = /\bru\b/i.test(acceptLanguage)
    const locale = isRussian ? 'ru' : 'en'
    return NextResponse.redirect(new URL(`/${locale}/personal`, request.url))
  }

  // /ru or /en without audience → default to personal
  const localeOnly = pathname.match(/^\/(ru|en)\/?$/)
  if (localeOnly) {
    return NextResponse.redirect(new URL(`/${localeOnly[1]}/personal`, request.url))
  }
}

export const config = {
  matcher: ['/', '/ru', '/en', '/ru/', '/en/'],
}
