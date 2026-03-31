# Badge Component

## 역할

텍스트 기반 상태 정보를 표시하는 공통 UI 컴포넌트

---

## Props

| name      | type           | required | description   |
| --------- | -------------- | -------- | ------------- |
| text      | string         | ✔        | 표시할 텍스트 |
| size      | sm \| md \| lg | ✖        | 크기          |
| color     | string         | ✖        | 배경색        |
| textColor | string         | ✖        | 텍스트 색상   |

---

## 설계 기준

- Badge는 상태 표현 전용 UI이며, 인터랙션을 포함하지 않는다.
- size와 padding을 통해 시각적 단계 구분
- 레이아웃에 영향을 받지 않도록 독립적으로 동작

---

## 사용 예시

```vue
<BaseBadge text="NEW" />
<BaseBadge text="완료" size="sm" color="green" />
<BaseBadge text="오류" size="lg" color="red" text-color="var(--grey-2)" />
```
