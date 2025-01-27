import 'vue-router'
// NOTE: 인터페이스 확장하여 meta 객체의 타입을 명확하게 정의하는 선언 파일
declare module 'vue-router' {
  interface RouterMeta {
    title?: string
  }
}
