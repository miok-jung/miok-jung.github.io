<template>
  <div class="wrap" ref="vanillaRef"></div>
</template>

<script setup lang="ts">
import { computed, onBeforeUpdate, onMounted, onUnmounted, onUpdated, ref, watch } from 'vue';

// EXAMPLE: Partial<Type> : 모든 속성을 선택 사항으로 설정한 유형을 구성한다. 즉, HTML 요소의 속성을 선택적으로 정의할 수 있도록 타입을 설정
interface ElementConfig {
  tagName: keyof HTMLElementTagNameMap; // HTML 태그 이름
  properties?: Partial<HTMLElement | HTMLInputElement | HTMLLabelElement>; // 태그 속성들
  parent?: HTMLElement | HTMLElement[] | null; // 부모 요소
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
    if (Array.isArray(parent)) {
      // parent가 배열일 경우, 각 부모 요소에 대해 자식 요소 추가
      parent.forEach((el) => el.appendChild(createdElements[0]));
    } else {
      // parent가 HTMLElement일 경우
      parent.appendChild(createdElements[0]);
    }
  }

  // 생성된 요소가 하나면 단일 요소 반환, 아니면 배열 반환
  return count === 1 ? createdElements[0] : createdElements;
}

// NOTE: 추가 버튼 이벤트
function setTodoTotalCount() {
  let itemWrap = document.querySelectorAll('#item-list > li');
  let totalCountText = document.querySelector('.total-count');

  if (totalCountText?.TEXT_NODE) totalCountText.innerHTML = itemWrap.length.toString();
}
function onClickAddTodoList() {
  let count = document.querySelector('#item-list')?.childNodes.length;
  const todoInput = document.querySelector('.todo-input') as HTMLInputElement;
  const itemList = document.querySelector('#item-list') as HTMLElement;
  // 추가 전에 넣어야 할 값 카운팅

  if (count) count = count + 1;
  else count = 1;

  // NOTE: 아이템 생성
  createElement({
    tagName: 'li',
    parent: itemList,
    children: [
      {
        tagName: 'input',
        properties: { id: 'check' + count, type: 'checkbox' },
      },
      { tagName: 'label', properties: { htmlFor: 'check' + count } },
      { tagName: 'span', properties: { innerText: todoInput.value } },
      {
        tagName: 'button',
        properties: {
          className: `remove-button index-${count}`,
          innerText: '삭제',
        },
      },
    ],
  });

  // NOTE: 전체 카운트 업데이트
  setTodoTotalCount();

  // NOTE: 제거 이벤트 생성
  const removeBtn = document.querySelector(`.remove-button.index-${count}`);

  removeBtn?.addEventListener('click', onClickRemoveButton);
}

// NOTE: 제거 버튼 이벤트
function onClickRemoveButton(event: Event) {
  const selectRemovePos = parseInt((event.currentTarget as HTMLElement).classList[1].slice(-1));

  const todoWrap = document.querySelector('#item-list');
  if (todoWrap) {
    todoWrap.childNodes[selectRemovePos - 1].remove();
  }

  // NOTE: 전체 카운트
  setTodoTotalCount();

  // NOTE: input idx 재설정 업데이트
  setTodoIndex();
}

// NOTE: todo Index값 재설정
function setTodoIndex() {
  const todoWrap = document.querySelector('#item-list');
  if (todoWrap) {
    for (let i = 0; i < todoWrap.childNodes.length; i++) {
      let childNode = todoWrap.childNodes[i] as HTMLElement;

      // 바꿀 자식 요소들 찾기
      const input = childNode.querySelector('input');
      const label = childNode.querySelector('label');
      const removeBtn = childNode.querySelector('button');

      if (input && label && removeBtn) {
        // input ID값/label for 속성값 변경
        input.id = `check-${i + 1}`;
        label.htmlFor = input.id;

        // 특정 클래스명 패턴 변경 (번호가 포함된 클래스명 찾기)
        const classPattern = /^index-\d+$/;
        // EXAMPLE: index-1, index-2, index-3 등의 패턴
        removeBtn.classList.forEach((className) => {
          if (classPattern.test(className)) {
            const newClassName = `index-${i + 1}`; // 새로 적용할 클래스명
            removeBtn.classList.replace(className, newClassName);
          }
        });
      }
    }
  }
}

// NOTE: life-cycle
onMounted(() => {
  const app = createElement({
    tagName: 'div',
    properties: { id: 'app' },
    parent: vanillaRef.value,
  });

  // NOTE: Header HTML 생성
  createElement({
    tagName: 'div',
    properties: { id: 'header' },
    parent: app,
    children: [
      {
        tagName: 'p',
        properties: { className: 'text-h4', innerText: 'To-do list' },
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
            tagName: 'b',
            properties: { className: 'total-count', innerText: '0' },
          },
          {
            tagName: 'span',
            properties: { className: 'space-center-border' },
          },
          {
            tagName: 'span',
            properties: { innerText: 'Completed: ' },
          },
          {
            tagName: 'b',
            properties: { className: 'complete-count', innerText: '0' },
          },
        ],
      },
    ],
  });

  // NOTE: Input field HTML 생성
  createElement({
    tagName: 'div',
    properties: { id: 'input-field' },
    parent: app,
    children: [
      {
        tagName: 'input',
        properties: { className: 'todo-input', ariaPlaceholder: '할일을 입력해주세요' },
      },
      {
        tagName: 'button',
        properties: { className: 'add-button', innerText: 'Add' },
      },
    ],
  });

  // NOTE: Item List Container HTML 생성
  const itemListContainer = createElement({
    tagName: 'div',
    properties: { id: 'item-list-container' },
    parent: app,
  });

  // NOTE: Item List Container HTML 생성
  createElement({
    tagName: 'ul',
    properties: { id: 'item-list' },
    parent: itemListContainer,
  });

  // NOTE: App 스타일 넣기
  document.styleSheets[0].insertRule(`#app {
    background: #fff;
    max-width: 500px;
    width: 100%;
    margin: 100px auto;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
  }`);

  const stylesheet = new CSSStyleSheet();
  stylesheet.replace(`
      .wrap {
        height: calc(100vh - 50px);
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
        border-radius: 10px;
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
        width: calc(100% - 55px);
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
        font-size: 18px;
        outline: none;
        background: #3ac6f3;
        border-radius: 5px;
        cursor: pointer;
      }

      #input-field button:hover {
        background: #ff0051;
      }

      #item-list-container {
        max-height: 250px;
        overflow: auto;
      }

      #item-list-container li {
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        list-style: none;
        height: 2.5rem;
        line-height: 2.5rem;
        margin-bottom: 0.5rem;
        overflow: hidden;
      }

      #item-list-container div {
        width: 100%;
        display: flex;
        justify-content: space-between;
      }
      #item-list-container input {
        margin: 0.5rem;
        transition-duration: 0.5s;
        opacity: 1;
      }
      #item-list-container button {
        width: 50px;
        border: none;
        color: #fff;
        margin-left: 5px;
        font-size: 0.8rem;
        font-weight: bold;
        outline: none;
        background: #f97;
        border-radius: 5px;
        transition-duration: 0.5s;
        opacity: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
      }
      #item-list-container button:hover {
        background-color: #ddd;
      }
      #item-list-container span {
        margin-left: 25px;
        width: calc(100% - 80px);
        text-align: left;
      }
      input[type='checkbox']{
        display: none;
      }
      input[type='checkbox'] + label {
        display: inline-block;
        min-width: 20px;
        height: 20px;
        border: 2px solid #707070;
        position: absolute;
        margin-right: 5px;
        border-radius: 2px;
        cursor: pointer;
      }
      input:checked + label::after{
        content:'✔';
        font-size: 20px;
        width: 20px;
        height: 20px;
        color: lightGreen;
        text-align: center;
        position: absolute;
        left: -2px;
        top: -100%;
      }
      input:checked + label + span{
        text-decoration: line-through;
      }

  `);
  document.adoptedStyleSheets = [stylesheet];

  // 1. Add 버튼 클릭시 내용을 체크리스트 추가하기
  const addButton = document.querySelector('.add-button');
  if (addButton) {
    addButton.addEventListener('click', onClickAddTodoList);
  }
});
onUnmounted(() => {
  // 이벤트 제거
  const addButton = document.querySelector('.add-button');
  if (addButton) addButton.removeEventListener('click', onClickAddTodoList);
});
</script>

<style lang="scss">
// NOTE: onMount가 된 후에 CSS 적용이 되는 경우
// scope를 쓰는 경우 내부에만 스타일을 적용할 수 있기에 scope를 제거하거나 글로벌 스타일로 선언을 해야된다.
.space-center-border {
  display: inline-block;
  margin: 0 5px;
  width: 3px;
  height: 3px;
  border: 1px solid grey;
  border-radius: 50%;
}
</style>
