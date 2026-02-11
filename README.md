# 💼 Portfolio (miok-jung)

Date: 2025.11.25 -

## Rule

### I18N 규칙

아래 규칙은 i18n 키의 가독성, 일관성, 유지보수성을 유지하기 위해 정의합니다.

- **줄임말을 사용하지 않는다**
  - description (O)
  - desc (X)

- **모든 키는 소문자를 사용한다**
  - home, button, description

- **두 단어 이상은 snake_case를 사용한다**
  - page_description (O)
  - pageDescription (X)

- **camelCase는 사용하지 않는다**
  - 코드 변수·함수와의 혼동 방지 목적

- **의미는 계층 구조로 표현한다**
  - home.description (O)
  - home_description 단일 키 남용 (X)

i18n 키는 짧음보다 읽힘을 우선한다.

## 그 외

- Google Tag 추가
