# Start Date / Last Update Date

September 01. 2024 / December 10. 2024

- Main Page

  - Editor 커스텀 및 개발이 목표
    - 현재 Boot 사용 및 컴포넌트 전체 default 전체
  - Layout Publishing (Theme, I18N 등)
  - 간단한 계산기 퍼블리싱

- Github Actions 자동배포 완료

- Study Page

  - Canvas에 대한 공부 및 정리 업데이트
  - Carousel JS 모듈화 스크립트 생성 및 업데이트
  - Lottie 라이브러리 테스트 해보기 (회사 프로젝트 로딩파일을 위한 준비 작업을 위한 테스트)
  - Vanilla JavaScript만으로 TODO List 만들기 (vue 확장자 파일이지만, 내부는 오직 JavaScript + Type으로만 진행)
  - Three.js 기본 정육면제 스터디 업데이트
  - Layout Publising

- 그 외 이야기

  - quasar, vue, node, typescript 24년 12월 10일자에 최신 버전으로 업데이트 완료
  - 24. 12. 10 기준으로 jridgewell/genmapping 버전 이슈로 인해서 overrides 작업으로 버전 업데이트 다소 지연되는 현상 발생 - 다행이도 빠른 대처 및 해결방안을 알려주신 분들에 의해 해결을 함 -> 그리고 바로 다운그레이 됨

# 브랜치 규칙

- 브랜치는 크게 알기 쉽게 1 ~ 2개의 단어로 정의한다.
- 현재는 main, dev, study, custom-editor 이렇게 4가지로 나뉜다.

## 각 브랜치별 정의

- main: Github Actions로 현재 서비스 되고 있는 페이지다.
- dev: 나머지 branch에서 작업한 것들을 locale에서 테스트를 한 후 업데이트를 진행한다.
- study: 각종 영상이나 다른 매체를 통해서 스터디 혹은 테스트를 하게 되는 경우, 작업물을 기록하기 위해 남긴다.
- custom-editor: 에디터를 직접 만들기 위해서 만든 브랜치이다.

# 커밋 규칙

## 커밋 메시지의 7가지 규칙

- 제목과 본문을 빈 행으로 구분한다.
- 제목은 50글자 이내로 제한한다.
- 제목의 첫 글자는 대문자로 작성한다.
- 제목 끝에는 마침표를 넣지 않는다.
- 제목은 명령문으로 사용하며 과거형을 사용하지 않는다.
- 본문의 각 행은 72글자 내로 제한한다.
- 어떻게 보다는 무엇과 왜를 설명한다.

## 커밋 이름 내용

- feat: 새로운 기능에 대한 커밋
- fix: 버그 수정에 대한 커밋
- update: 기존에 대한 내용에 추가적인 것에 대한 커밋
- build: 빌드 관련 파일 수정 / 모듈 설치 또는 삭제에 대한 커밋
- chore: 그 외 자잘한 수정에 대한 커밋
- ci: ci 관련 설정 수정에 대한 커밋
- docs: 문서 수정에 대한 커밋
- style: 코드 스타일 혹은 포맷 등에 관한 커밋
- refactor: 코드 리팩토링에 대한 커밋
- test: 테스트 코드 수정에 대한 커밋
- perf: 성능 개선에 대한 커밋

### 올리기 전 최종적으로 확인할 사항리스트

- 보안취약점 테스트
  $ npm audit
