import { nextTick } from 'vue'
import { createI18n } from 'vue-i18n'

type Messages = Record<string, string>

const modules = import.meta.glob<{ default: Messages }>('/src/i18n/**/*.ts')

// 초기 선언
export const i18n = createI18n({
  legacy: false,
  locale: 'ko',
  fallbackLocale: 'ko',
  messages: {},
})

// 번역 데이터 만들기
const loadLocaleMessages = async (locale: string) => {
  const messages: Messages = {}
  const promises: Promise<Messages>[] = []

  for (const path in modules) {
    if (path.includes(`/src/i18n/${locale}`)) {
      const p = modules[path]?.().then((m) => m.default)
      if (p) promises.push(p)
    }
  }

  const loaded = await Promise.all(promises)
  Object.assign(messages, ...loaded)

  return messages
}

// 번역 데이터 + locale 적용
export const setLocale = async (locale: string) => {
  const messages = await loadLocaleMessages(locale)

  if (!Object.keys(messages).length) return

  i18n.global.setLocaleMessage(locale, messages)

  await nextTick()
  i18n.global.locale.value = locale

  if (!import.meta.env.SSR) {
    document.querySelector('html')?.setAttribute('lang', locale)
  }
}
