# Portfolio

## 2025. 01. 21 -

### branch

- main: 배포 전용
- develop: 병합 전용, 에러 여부 확인
- calculator: 계산기 전용 브랜치
- portfolio: 포트폴리오 전용

#### 파일용도

assets: 일반자산으로 상대적으로 크기가 작거나, 자주 변경될 가능성이 있는 자산에 적합.
public: 정적자산으로 서버에 제공하는 큰 이미지나 동영상 파일에 적합.

### ECT

📌 <article> vs <section> 차이점
둘 다 HTML의 시맨틱(semantic) 요소이며, 웹페이지의 내용을 논리적으로 구조화하는 역할을 합니다.  
하지만 용도와 의미가 다릅니다.

|    요소     | <div align="center">주요 특징</div> | <div align="center">언제 사용?</div>                           |
| :---------: | :---------------------------------- | :------------------------------------------------------------- |
| `<article>` | 독립적인 콘텐츠 블록                | 블로그 글, 뉴스 기사, 제품 설명 등 단독으로 의미가 있는 콘텐츠 |
| `<section>` | 문서의 논리적인 그룹화              | 관련된 내용을 묶을 때 사용 (제목이 필요한 경우)                |

📌 1. `<article>`: 독립적인 콘텐츠 블록  
단독으로 존재해도 의미가 있는 콘텐츠  
블로그 글, 뉴스 기사, 리뷰, 댓글 등  
RSS 피드처럼 다른 페이지에서도 재사용 가능  
✅ 예제: 블로그 게시물 (`<article>`)

```html
<article>
  <h2>Vue 3의 새로운 기능</h2>
  <p>Vue 3는 Composition API, 새로운 Reactivity 시스템 등을 도입했습니다...</p>
</article>
```

✅ 이 `<article>`은 단독으로도 의미가 있음 (블로그 글)  
✅ RSS 피드나 뉴스 목록에서도 이 콘텐츠가 그대로 사용 가능

📌 2. `<section>`: 관련된 내용 그룹화
문서의 일부로 사용 (재사용이 필요 없음)  
논리적으로 관련된 내용을 묶을 때 사용
제목이 포함되는 경우가 많음  
✅ 예제: 웹페이지의 섹션 (`<section>`)

```html
<section>
  <h2>자주 묻는 질문</h2>
  <p>Q: Vue 3는 언제 출시되었나요?</p>
  <p>A: 2020년 9월에 출시되었습니다.</p>
</section>
```

✅ 이 `<section>`은 웹페이지의 일부로만 의미가 있음  
✅ 단독으로 존재할 의미는 없음 (FAQ 페이지의 일부)

📌 3. `<article>`과 `<section>` 비교 예제
❌ 잘못된 예시

```html
<section>
  <h2>블로그 글</h2>
  <p>Vue 3는 Composition API를 도입했습니다...</p>
</section>
```

✅ 여기서는 `<article>`이 더 적절함 → 블로그 글은 독립적인 콘텐츠이므로
❌ `<section>`은 문서 내 그룹화를 위한 태그이며, 독립적인 콘텐츠를 담기에는 부적절

✅ 올바른 예시

```html
<section>
  <h2>프론트엔드 개발 블로그</h2>

  <article>
    <h3>Vue 3의 새로운 기능</h3>
    <p>Vue 3는 Composition API, 새로운 Reactivity 시스템 등을 도입했습니다...</p>
  </article>

  <article>
    <h3>React 18 업데이트</h3>
    <p>React 18은 Concurrent Mode, Automatic Batching 등의 기능을 제공합니다...</p>
  </article>
</section>
```

✅ `<section>`은 "프론트엔드 개발 블로그"라는 큰 범주를 묶는 역할  
✅ `<article>`은 각 블로그 글이 독립적으로 의미를 가짐

📌 `<article>` & `<section>` 요약  
요소 의미 사용 예시

`<article>`독립적인 콘텐츠 블로그 글, 뉴스 기사, 리뷰  
`<section>`문서의 논리적 그룹화 FAQ, 챕터, 관련 정보 묶기  
📌 잘 사용되지 않지만, 의미가 명확한 HTML 태그  
HTML에는 많이 사용되지 않지만 특정한 의미를 가진 태그들이 존재합니다.

1️⃣ <address>: 연락처 정보  
웹사이트나 글쓴이의 연락처 정보를 명시할 때 사용  
이메일, 전화번호, 물리적 주소 등을 포함 가능

```html
<address>
  작성자: 홍길동<br />
  이메일: <a href="mailto:hong@example.com">hong@example.com</a><br />
  주소: 서울특별시 강남구 테헤란로 123
</address>
```

✅ SEO에 도움 (검색 엔진이 "연락처 정보"임을 이해함)  
✅ 이메일, 전화번호, 주소를 담을 때 사용

2️⃣ `<figure>` & `<figcaption>`: 이미지 & 설명  
이미지를 포함하면서 설명을 추가할 때 사용

```html
<figure>
  <img src="vue3-logo.png" alt="Vue 3 로고" />
  <figcaption>Vue 3의 공식 로고</figcaption>
</figure>
```

✅ 이미지에 대한 설명을 시각적으로 구분 가능  
✅ SEO에도 긍정적인 영향을 미침

3️⃣ `<mark>`: 강조 표시 (하이라이트)  
텍스트를 형광펜 효과처럼 강조할 때 사용

```html
<p>Vue 3는 <mark>Composition API</mark>를 지원합니다.</p>
```

✅ 검색 결과 페이지에서 중요한 키워드 강조 가능  
✅ 사용자가 특정 내용을 쉽게 찾을 수 있음

4️⃣ `<time>`: 날짜 및 시간 정보  
특정 날짜나 시간을 표현할 때 사용

```html
<p>이 문서는 <time datetime="2024-02-10">2024년 2월 10일</time>에 작성되었습니다.</p>
```

✅ 검색 엔진이 날짜 정보를 정확하게 인식 가능  
✅ 캘린더 앱, 일정 시스템과 연동 가능

5️⃣ `<abbr>`: 약어(줄임말) 표시
약어를 사용할 때 원래 의미를 명시할 수 있음

```html
<p><abbr title="HyperText Markup Language">HTML</abbr>은 웹페이지를 만드는 언어입니다.</p>
```

✅ 마우스를 올리면 전체 단어를 볼 수 있음  
✅ SEO에도 도움 (검색 엔진이 약어를 이해함)

6️⃣ `<details>` & `<summary>`: 접을 수 있는 정보 블록  
사용자가 클릭하면 열고 닫을 수 있는 UI 요소

```html
<details>
  <summary>더 많은 정보 보기</summary>
  <p>Vue 3는 Composition API, 새로운 Reactivity 시스템을 포함합니다.</p>
</details>
```

✅ FAQ 페이지, 도움말 시스템 등에 유용  
✅ 기본적으로 접힌 상태로 표시되므로 UX 향상
