<template>
  <div class="wrap" ref="vanillaRef"></div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

// EXAMPLE: Partial<Type> : 모든 속성을 선택 사항으로 설정한 유형을 구성한다. 즉, HTML 요소의 속성을 선택적으로 정의할 수 있도록 타입을 설정
interface ElementConfig {
  tagName: keyof HTMLElementTagNameMap; // HTML 태그 이름
  properties?: Partial<HTMLElement>; // 태그 속성들
  parent?: HTMLElement; // 부모 요소
  children?: Array<ElementConfig>; // 자식 요소들
  count?: number; // 생성할 요소 수
}

const vanillaRef = ref<HTMLElement | undefined>(undefined);
function createElement({
  tagName,
  properties = {},
  parent = undefined,
  children = [],
  count = 1,
}: ElementConfig): HTMLElement | HTMLElement[] {
  const createdElements: HTMLElement[] = [];

  const create = (): HTMLElement => {
    const element = document.createElement(tagName);
    Object.assign(element, properties); // 속성 할당

    // 자식 요소들을 재귀적으로 생성
    children.forEach((child) => {
      child.parent = element;
      createElement(child);
    });

    return element;
  };

  // 지정된 count만큼 요소 생성
  for (let i = 0; i < count; i++) {
    createdElements.push(create());
  }

  // 부모에 요소를 추가할 때 배열인지 체크
  if (parent) {
    if (Array.isArray(createdElements)) {
      createdElements.forEach((el) => parent.appendChild(el));
    } else {
      parent.appendChild(createdElements[0]);
    }
  }

  // 생성된 요소가 하나면 단일 요소 반환, 아니면 배열 반환
  return count === 1 ? createdElements[0] : createdElements;
}

// NOTE: life-cycle
onMounted(() => {
  const app = createElement({
    tagName: 'div',
    properties: { id: 'app' },
    parent: vanillaRef.value,
  });

  // 스타일 시트
  document.styleSheets[0].insertRule(`#app {
    background: #fff;
    max-width: 500px;
    width: 100%;
    margin: 100px auto;
    padding: 20px;
    border-radius: 6px;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
  }`);

  const stylesheet = new CSSStyleSheet();
  stylesheet.replace(`
  * {
        margin: 0;
        padding: 0;
      }

      .wrap {
        height: 100vh;
        background: linear-gradient(
          180deg,
          #3ac6f3 0%,
          rgba(200, 180, 180, 0.4) 40%,
          rgba(255, 0, 0, 0.56) 100%
        );
        overflow: hidden;
      }

      #app {
        background: #fff;
        max-width: 500px;
        width: 100%;
        margin: 100px auto;
        padding: 20px;
        border-radius: 6px;
        box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
      }

      #header {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      #counter span {
        margin-right: 0.5rem;
      }

      #input-field {
        margin: 20px 0;
        width: 100%;
        display: flex;
        height: 2.5rem;
      }

      #input-field input {
        width: 85%;
        height: 100%;
        border-radius: 3px;
        border: 1px solid #ccc;
        font-size: 0.8rem;
        padding-left: 15px;
        outline: none;
      }

      #input-field input:focus {
        border-color: #ff0051;
      }

      #input-field button {
        width: 50px;
        height: 100%;
        border: none;
        color: #fff;
        margin-left: 5px;
        font-size: 21px;
        outline: none;
        background: #3ac6f3;
        border-radius: 3px;
      }

      #input-field button:hover {
        background: #ff0051;
      }

      #item-list-container {
        max-height: 250px;
        overflow: scroll;
      }

      #item-list-container li {
        position: relative;
        display: flex;
        justify-content: space-between;
        list-style: none;
        height: 3rem;
        line-height: 3rem;
        margin-bottom: 0.5rem;
        overflow: hidden;
        border-radius: 5px;
      }

      #item-list-container div {
        width: 100%;
        display: flex;
        justify-content: space-between;
      }
      #item-list-container input {
        margin: 1rem;
        transition-duration: 0.5s;
        opacity: 1;
      }
      #item-list-container button {
        width: 3rem;
        margin: 0.3rem 1rem;
        width: 3rem;
        border: none;
        color: #fff;
        margin-left: 5px;
        font-size: 0.8rem;
        font-weight: bold;
        outline: none;
        background: #f97;
        border-radius: 3px;
        transition-duration: 0.5s;
        opacity: 1;
      }
      #item-list-container button:hover {
        background-color: #ddd;
      }
      #item-list-container span {
        width: 100%;
        text-align: 'left';
      }
  
  `);
  document.adoptedStyleSheets = [stylesheet];

  const header = createElement({
    tagName: 'div',
    properties: { id: 'header' },
    parent: app,
    children: [
      {
        tagName: 'h1',
        properties: { innerText: 'To-do list' },
      },
      {
        tagName: 'div',
        properties: { id: 'container' },
        children: [
          {
            tagName: 'span',
            properties: { innerText: 'Total: ' },
          },
          {
            tagName: 'span',
            properties: { innerText: '0' },
          },
          {
            tagName: 'span',
            properties: { innerText: 'Completed: ' },
          },
          {
            tagName: 'span',
            properties: { innerText: '0' },
          },
        ],
      },
    ],
  });
  const inputField = createElement({
    tagName: 'div',
    properties: { id: 'input-field' },
    parent: app,
    children: [
      {
        tagName: 'input',
        properties: { ariaPlaceholder: '할일을 입력해주세요' },
      },
      {
        tagName: 'button',
        properties: { innerText: 'Add' },
      },
    ],
  });
  const itemlistContainer = createElement({
    tagName: 'div',
    properties: { id: 'item-list-container' },
    parent: app,
    children: [
      {
        tagName: 'ul',
        properties: { id: 'item-list' },
        children: [
          {
            tagName: 'li',
            children: [
              {
                tagName: 'div',
                children: [
                  {
                    tagName: 'input',
                    properties: { type: 'checkbox' },
                  },
                  {
                    tagName: 'span',
                    properties: { innerText: '할일1' },
                  },
                  {
                    tagName: 'button',
                    properties: { innerText: '삭제' },
                  },
                ],
              },
            ],
          },
          { tagName: 'li' },
          { tagName: 'li' },
          { tagName: 'li' },
        ],
      },
    ],
  });
});
</script>

<style scoped lang="scss"></style>
