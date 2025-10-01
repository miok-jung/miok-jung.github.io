// ...d.ts : TypeScript의 타입 정의 전용 파일
// d: Declaration (선언)을 의미한다.
// 실제 코드는 없고, 타입 정보만 선언돼 있는 파일이다.
// 컴파일러나 IDE가 타입 추론 자동완성/에러체크 할 때 참고용으로 읽는다.
// 빌드 결과물에는포함되지 않아 런타임 영향이 없다.
import type { DefineLocaleMessage } from 'vue-i18n'

declare module '*.ts' {
  const messages: DefineLocaleMessage
  export default messages
}
