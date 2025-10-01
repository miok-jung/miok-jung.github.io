import { boot } from 'quasar/wrappers'
import { createI18n, type DefineLocaleMessage } from 'vue-i18n'

type LocaleKey = string
type MessageSchema = DefineLocaleMessage

/** (A) 축약형 변환: ko-KR → ko, en-US → en, zh-Hant → zh */
export function toShortLocale(input?: string): string {
  const raw = (input || '').trim()
  if (!raw) return 'en'
  // 언더스코어도 방어
  const norm = raw.replace('_', '-').toLowerCase()
  // zh-계열 등 특수케이스가 필요하면 여기서 별도 분기 가능
  const short = norm.split('-')[0]
  return short || 'en'
}

/** (B) 브라우저/저장소에서 최초 언어 추론 */
function detectInitialLocale(): string {
  const saved = localStorage.getItem('locale')
  if (saved) return toShortLocale(saved)

  const cand = (navigator.languages && navigator.languages[0]) || navigator.language || 'en'
  return toShortLocale(cand)
}

/** (C) HTML lang 속성 업데이트 */
function setHtmlLang(short: string) {
  document.documentElement.setAttribute('lang', short)
}

/** (D) 메시지 로더: src/i18n/<short>/* 를 전부 병합
 *  - 폴더가 없어도 에러 없이 빈 객체 반환
 *  - button.ts, chatbot.ts, tooltip.ts … 자유 추가/삭제 가능
 */
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
      // 각 파일은 default export 객체여야 함
      return mod?.default || {}
    }),
  )

  // 파일 단위로 평범 병합(깊은 병합이 필요하면 lodash.merge 등 사용)
  return Object.assign({}, ...parts)
}

/** (E) i18n 인스턴스 준비: fallback en */
const i18n = createI18n<MessageSchema, LocaleKey, false>({
  legacy: false,
  globalInjection: true,
  locale: 'en' as LocaleKey,
  fallbackLocale: 'en' as LocaleKey,
  messages: { en: {} } as Record<LocaleKey, MessageSchema>,
})

/** (F) 런타임 언어 변경 API
 *  - HTML lang 변경
 *  - 로컬스토리지 저장
 *  - 폴더가 없으면 빈 메시지로 교체(에러 없음)
 */
export async function setLocale(shortInput: string) {
  const short = toShortLocale(shortInput)
  const messages = await loadLocaleMessages(short)

  // 메시지 등록(없으면 빈 객체)
  i18n.global.setLocaleMessage(short, messages || {})

  // 적용
  i18n.global.locale.value = short
  setHtmlLang(short)
  localStorage.setItem('locale', short)
}

export default boot(async ({ app }) => {
  app.use(i18n)

  // 최초 진입 시 브라우저 언어 → 축약형 → HTML lang 반영
  const initial = detectInitialLocale()
  await setLocale(initial)
})
