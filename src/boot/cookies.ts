// src/boot/cookies.ts
import { Cookies } from 'quasar'
import { boot } from 'quasar/wrappers'
import { COOKIE_KEYS } from 'src/constants/cookieKeys'
import type { BootFileParams } from '@quasar/app-vite'

// ssrContext 존재 여부 타입가드
type CtxWithSSR = BootFileParams & { ssrContext: unknown }
const hasSSR = (c: BootFileParams | CtxWithSSR): c is CtxWithSSR =>
  Object.prototype.hasOwnProperty.call(c, 'ssrContext')

export default boot((ctx) => {
  // SSR일 때만 parseSSR 사용 (타입 안전)
  const cookies = process.env.SERVER && hasSSR(ctx) ? Cookies.parseSSR(ctx.ssrContext) : Cookies

  // 쿠키는 문자열/null이므로 문자열 기준으로만 판정
  const raw = cookies.get(COOKIE_KEYS.DARK_MODE)
  const theme: 'light' | 'dark' = raw && /^(true|1|dark)$/i.test(raw) ? 'dark' : 'light'

  ctx.app.config.globalProperties.$theme = theme
})
