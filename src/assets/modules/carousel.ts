import { createElement } from './createElement';

/**
 * @parentNode 넣을 부모 노드
 * @itemList 이미지 경로 배열
 * @visibleCount 보여질 개수
 * @slideCount 슬라이드 될 개수
 * @captionArray 캡션별 텍스트 배열
 * @captionPos 캡션 텍스트 위치 ['top' | 'center' | 'bottom', 'left' | 'center' | 'right']
 * @buttonPos 화살표 버튼 위치 vertical OR horizontal
 */

type carouselConfig = {
  parentNode: HTMLElement;
  itemList: string[];
  visibleCount?: number;
  slideCount?: number;
  captionArray?: string[];
  captionPos?: [string, string];
  buttonPos?: 'horizontal' | 'vertical';
};
export function carousel({
  parentNode,
  itemList,
  visibleCount = 1,
  slideCount = 1,
  captionArray = [],
  captionPos = ['center', 'center'],
  buttonPos = 'horizontal',
}: carouselConfig) {
  // NOTE: 1. Slide를 감쌀 Wrap을 만들어 부모에 대입 및 스타일 적용
  const [wrapper] = createElement({
    tagName: 'div',
    parent: parentNode,
    count: 1,
  });
  wrapper.style.cssText = `
    position: relative;
    display: flex;
    overflow: hidden;
    width: 100%;
    height: 100%;
  `;

  // NOTE: itemList가 있는 경우, 새로 아이템을 만들기
  const [itemContainer] = createElement({
    tagName: 'div',
    parent: wrapper,
  });
  if (itemList) {
    itemList.forEach((item, i) => {
      console.log('list', i);
      addImageItem(itemContainer, itemList[i], captionArray[i]);
    });
  } else {
    addImageItem(itemContainer, '/src/assets/study/images/01.jpg');
    addImageItem(itemContainer, '/src/assets/study/images/02.jpg');
    addImageItem(itemContainer, '/src/assets/study/images/03.jpg');
    addImageItem(itemContainer, '/src/assets/study/images/04.jpg');
    addImageItem(itemContainer, '/src/assets/study/images/05.jpg');
  }
  // NOTE: 2. 화살표 아이콘 버튼 생성 및 스타일 적용

  addButtons();

  // NOTE: 이미지 크기 정수로 추출
  const imgItemWidth = Math.trunc(700 / visibleCount);
  const imgItemHeight = Math.trunc(250 / visibleCount);

  // NOTE: 화살표 클릭 이벤트
  function handleSlide(type: 'prev' | 'next') {
    for (let i = 0; i < slideCount; ++i) {
      const index = i % itemContainer.children.length; // 모듈로 연산자로 인덱스를 제한
      console.log('type, i: ', type, i, index);
      if (type === 'next') {
        itemContainer.appendChild(itemContainer.children[i].cloneNode(true));
      } else {
        itemContainer.prepend(itemContainer.children[itemContainer.children.length - i - 1].cloneNode(true));
      }
    }
    buttonPos === 'horizontal'
      ? (itemContainer.style.transform = `translateX(${imgItemWidth}px)`)
      : (itemContainer.style.transform = `translateY(${imgItemHeight}px)`);
    setTimeout(() => {
      handleTransitionEnd(type);
    }, 0);
  }

  // NOTE: 화면 이동 및 CSS 초기화
  function handleTransitionEnd(type: 'prev' | 'next') {
    console.log('handle end', type);
    itemContainer.style.transitionDuration = '0.5s';
    let slideDistance = 0;
    let imgSize = 0;
    if (buttonPos === 'horizontal') {
      imgSize = imgItemWidth;
      slideDistance = type === 'next' ? -imgSize * slideCount : 0;
      itemContainer.style.cssText = `
        display: flex;
        align-items: center;
        transform: translateX(0px);
      `;

      // transition이 끝난 후 transition 속성 제거
      itemContainer.style.removeProperty('transition-duration');
      itemContainer.style.transform = 'translateX(0)';
    } else {
      imgSize = imgItemHeight;
      slideDistance = type === 'next' ? -imgSize * slideCount : 0;
      itemContainer.style.cssText = `
        display: flex;
        flex-wrap: wrap;
        flex-wrap: translateY(0px);
      `;

      // transition이 끝난 후 transition 속성 제거
      itemContainer.style.removeProperty('transition-duration');
      itemContainer.style.transform = 'translateY(0)';
    }
    itemContainer.ontransitionend = () => {
      for (let i = 0; i < slideCount; ++i) {
        console.log('trans end: ', i);
        // NOTE: 슬라이드 방향에 따라 아이템을 삭제
        if (type === 'next') {
          itemContainer.firstChild?.remove(); // 첫 번째 자식을 삭제
        } else {
          itemContainer.lastChild?.remove(); // 마지막 자식을 삭제
        }
      }
    };
  }
  // NOTE: 버튼 생성하기
  function addButtons() {
    const iconRight = `
    <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24">
      <title>chevron-right</title><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
    </svg>
  `;
    const iconLeft = `
    <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24">
      <title>chevron-left</title><path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" />
    </svg>
  `;
    const iconDown = `
    <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24">
      <title>chevron-down</title><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
    </svg>
  `;
    const iconUp = `
    <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24">
      <title>chevron-up</title><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" />
    </svg>
  `;

    const [prevButton, nextButton] = createElement({
      tagName: 'button',
      parent: wrapper,
      count: 2,
    }) as HTMLElement[];

    prevButton.style.cssText = `
    z-index: 1;
    position: absolute;
    display: flex;
    align-items: center;
    width: 40px;
    height: 40px;
    border: 0;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.3);
    filter: drop-shadow(3px 5px 2px rgb(0 0 0 / 0.7));
  `;
    nextButton.style.cssText = prevButton.style.cssText;
    if (buttonPos === 'horizontal') {
      prevButton.innerHTML = iconLeft;
      prevButton.style.cssText += `
      top: 50%;
      left: 10px;
      transform: translateY(-50%);
    `;
      nextButton.innerHTML = iconRight;
      nextButton.style.cssText += `
      top: 50%;
      right: 10px;
      transform: translateY(-50%);
    `;
    } else {
      prevButton.innerHTML = iconUp;
      prevButton.style.cssText += `
      top: 10px;
      left: 50%;
      transform: translateX(-50%);
    `;
      nextButton.innerHTML = iconDown;
      nextButton.style.cssText += `
      bottom: 10px;
      left: 50%;
      transform: translateX(-50%);
    `;
    }

    nextButton.onclick = () => handleSlide('next');
    prevButton.onclick = () => handleSlide('prev');
  }

  // NOTE: 이미지 생성하기
  function addImageItem(parent: HTMLElement, src: string, captionText = 'Caption text') {
    const [container] = createElement({
      tagName: 'div',
      parent: parent,
    });

    container.style.cssText = `
      display: flex;
      width: calc(700px / ${visibleCount});
      height: 250px;
      background: #000;
      overflow: hidden;
    `;

    if (buttonPos === 'vertical') {
      container.style.width = '700px';
      container.style.height = `calc(250px / ${visibleCount})`;
    } else {
      container.style.justifyContent = 'center';
      container.style.alignItems = 'center';
    }

    switch (captionPos[0]) {
      // 캡션 상하
      case 'top': {
        container.style.justifyContent = 'flex-start';
        break;
      }
      case 'center': {
        container.style.justifyContent = 'center';
        break;
      }
      case 'bottom': {
        container.style.justifyContent = 'flex-end';
        break;
      }
    }
    switch (captionPos[1]) {
      // 캡션 좌우
      case 'left': {
        container.style.alignItems = 'flex-start';
        break;
      }
      case 'center': {
        container.style.alignItems = 'center';
        break;
      }
      case 'right': {
        container.style.alignItems = 'flex-end';
        break;
      }
    }

    if (buttonPos === 'vertical') {
      container.style.cssText += `
        flex-direction: column;
      `;
    }
    const [image] = createElement({
      tagName: 'img',
      parent: container,
      properties: { src: src },
    });
    image.style.cssText = `
      height: 100%;
      object-position: 50% 50%;
      object-fit: cover;
    `;
    const [caption] = createElement({
      tagName: 'span',
      properties: { innerText: captionText },
      parent: container,
    });
    caption.style.cssText = `
      position: absolute;
      color: white;
      font-weight: bold;
      filter: drop-shadow(3px 3px 3px rgb(0 0 0 / 0.5));
    `;
    return container;
  }
}
