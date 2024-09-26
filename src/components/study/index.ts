// SECTION createElement
/**
 * @tagName HTML 태그 이름을 string으로 넣기
 * @properties 해당 태그의 속성값을 Object값으로 넣기
 * EXAMPLE: id, className, type 등
 * @parent 부모 요소에 대한 정보를 넣기
 * @children 자식요소에 대한 정보를 Object 형식으로 넣어 tagName을 무한 반복하여 넣기
 * @count 생성할 요소수로, 처음 태그 이름 개수를 지정 대부분 1개로 되어있음 (비슷한 이름의 경우 대괄호로 변수 리스트를 정의해서 넣은 후 해당 개수 만큼 숫자를 기입할 것)
 */
interface ElementConfig {
  tagName: keyof HTMLElementTagNameMap;
  // EXAMPLE: Partial<Type> : 모든 속성을 선택 사항으로 설정한 유형을 구성한다. 즉, HTML 요소의 속성을 선택적으로 정의할 수 있도록 타입을 설정
  properties?: Partial<HTMLElement | HTMLInputElement | HTMLLabelElement>;
  parent?: HTMLElement;
  children?: Array<ElementConfig>;
  count?: number;
}
export function createElement({
  tagName,
  properties = {},
  parent = undefined,
  children = [],
  count = 1,
}: ElementConfig): HTMLElement[] {
  const create = (): HTMLElement => {
    const element = document.createElement(tagName);
    Object.assign(element, properties); // 속성 할당

    // 부모 요소에 appendChild, 부모가 배열이 아닐 때만 적용
    if (parent && !Array.isArray(parent)) {
      parent.appendChild(element);
    }

    // 자식 요소 처리
    children?.forEach((child) => {
      child.parent = element;
      createElement(child);
    });

    return element;
  };

  // 반복여부 체크
  if (count > 1) {
    const results: HTMLElement[] = [];
    for (let i = 0; i < count; ++i) {
      results.push(create());
    }
    return results;
  } else {
    return [create()];
  }
}
// !SECTION createElement END
