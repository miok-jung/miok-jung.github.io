import { createElement } from './createElement';

/**
 * @parentNode 넣을 부모 노드
 * @imageArray 이미지 경로 배열
 * @visibleCount 보여질 개수
 * @slideCount 슬라이드 될 개수
 * @captionArray 캡션별 텍스트 배열
 * @captionPos 캡션 텍스트 위치 ['top' | 'center' | 'bottom', 'left' | 'center' | 'right']
 * @buttonPos 화살표 버튼 위치 vertical OR horizontal
 */

type carouselConfig = {
  parentNode: HTMLElement;
  imageArray: string[];
  visibleCount?: number;
  slideCount?: number;
  captionArray?: string[];
  captionPos?: [string, string];
  buttonPos?: 'horizontal' | 'vertical';
};
export function carousel({
  parentNode,
  imageArray,
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

  // NOTE: 2. 화살표 아이콘 버튼 생성 및 스타일 적용
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

  // NOTE: 3. 화살표 클릭 이벤트
  const imgItemWidth = 700 / visibleCount;
  const igmItemHeight = 250 / visibleCount;

  nextButton.onclick = () => handleSlide('next');
  prevButton.onclick = () => handleSlide('prev');
  function handleSlide(type: 'prev' | 'next') {
    itemContainer.style.transitionDuration = '0.5s';

    let slideDistance = 0;
    if (type === 'prev') {
      slideDistance = (buttonPos === 'horizontal' ? imgItemWidth : igmItemHeight) * slideCount;
    } else {
      slideDistance = (buttonPos === 'horizontal' ? -imgItemWidth : -igmItemHeight) * slideCount;
    }
    if (type === 'prev') {
      // NOTE: 버튼 타입이 prev 일 때
      if (buttonPos === 'horizontal') {
        itemContainer.style.transform = `translateX(${slideDistance}px)`;
      } else {
        itemContainer.style.transform = `translateY(${slideDistance}px)`;
      }
    } else {
      // NOTE: 버튼 타입이 next 일 떄
      if (buttonPos === 'horizontal') {
        itemContainer.style.transform = `translateX(${slideDistance}px)`;
      } else {
        itemContainer.style.transform = `translateY(${slideDistance}px)`;
      }
    }

    itemContainer.ontransitionend = () => {
      // transition이 끝난 후 transition 속성 제거
      itemContainer.style.removeProperty('transition-duration');

      if (type === 'prev') {
        for (let i = 0; i < slideCount; i++) {
          itemContainer.prepend(itemContainer.lastChild as ChildNode);
        }
      } else {
        for (let i = 0; i < slideCount; i++) {
          itemContainer.appendChild(itemContainer.firstChild as ChildNode);
        }
      }

      if (buttonPos === 'horizontal') {
        itemContainer.style.transform = 'translateX(0)';
        console.log('ontransitioned', itemContainer.style.transform);
      } else {
        itemContainer.style.transform = 'translateY(0)';
      }
    };
  }

  // NOTE: 4. 이미지 넣기
  const [itemContainer] = createElement({
    tagName: 'div',
    parent: wrapper,
  });
  if (buttonPos === 'horizontal') {
    itemContainer.style.cssText = `
      display: flex;
      align-items:center;
      transform: translateX(0px);
    `;
  } else {
    itemContainer.style.cssText = `
      display: flex;
      flex-wrap: wrap;
      transform: translateY(0px);
    `;
  }
  for (let i = 0; i < imageArray.length; i++) {
    addImageItem(itemContainer, imageArray[i], captionArray[i]);
  }
  function addImageItem(parent: HTMLElement, src: string, captionText = 'Caption text') {
    const [container] = createElement({
      tagName: 'div',
      parent: parent,
    });

    container.style.cssText = `
      display: flex;
      justify-content: center;
      align-items: center;
      width: calc(700px / ${visibleCount});
      height: 250px;
      overflow: hidden;
    `;

    if (buttonPos === 'vertical') {
      container.style.width = '700px';
      container.style.height = `calc(250px / ${visibleCount})`;
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
