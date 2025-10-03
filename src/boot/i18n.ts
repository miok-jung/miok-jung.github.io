import { boot } from 'quasar/wrappers'
import { STORAGE } from 'src/constants/storage'
import { createI18n, type DefineLocaleMessage } from 'vue-i18n'

type LocaleKey = string
type MessageSchema = DefineLocaleMessage

export function toShortLocale(input?: string): string {
  const raw = (input || '').trim()
  if (!raw) return 'en'
  // 언더스코어도 방어
  const norm = raw.replace('_', '-').toLowerCase()
  const short = norm.split('-')[0]
  return short || 'en'
}

function detectInitialLocale(): string {
  const saved = localStorage.getItem(STORAGE.SETTINGS.LANG)
  if (saved) return toShortLocale(saved)

  const cand = (navigator.languages && navigator.languages[0]) || navigator.language || 'en'
  return toShortLocale(cand)
}

function setHtmlLang(short: string) {
  document.documentElement.setAttribute(STORAGE.SETTINGS.LANG, short)
}

// 오직 영어로만 구성된 I18N을 모두 가져온다.
const allMessageModules = import.meta.glob<{ default: MessageSchema }>(
  '/src/i18n/**/[a-zA-Z]*.ts',
  { eager: false },
)

async function loadLocaleMessages(short: string): Promise<MessageSchema> {
  const prefix = `/src/i18n/${short}/`
  const entries = Object.entries(allMessageModules).filter(([path]) => path.startsWith(prefix))

  if (entries.length === 0) {
    // 폴더가 없어도 문제 없이 진행
    return {}
  }

  const parts = await Promise.all(
    entries.map(async ([, loader]) => {
      const mod = await loader()
      return mod?.default || {}
    }),
  )

  return Object.assign({}, ...parts)
}

const i18n = createI18n<MessageSchema, LocaleKey, false>({
  legacy: false,
  globalInjection: true,
  locale: 'en' as LocaleKey,
  fallbackLocale: 'en' as LocaleKey,
  messages: { en: {} } as Record<LocaleKey, MessageSchema>,
})

export async function setLocale(shortInput: string) {
  const short = toShortLocale(shortInput)
  const messages = await loadLocaleMessages(short)

  i18n.global.setLocaleMessage(short, messages || {})

  i18n.global.locale.value = short
  setHtmlLang(short)
  localStorage.setItem('locale', short)
}

export default boot(async ({ app }) => {
  app.use(i18n)

  const initial = detectInitialLocale()
  await setLocale(initial)
})
