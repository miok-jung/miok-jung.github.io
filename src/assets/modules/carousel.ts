import { createElement } from './createElement';
import { dummy_carousel } from 'assets/dummy/itemList.json';

/**
 * @parentNode 넣을 부모 노드
 * @itemList 이미지 정보
 * @visibleCount 보여질 개수
 * @slideCount 슬라이드 될 개수
 * @buttonPos 화살표 버튼 위치 vertical OR horizontal
 */
type itemInformation = {
  id: number;
  imgUrl: string;
  title?: string;
  caption?: string;
  captionPos?: string[];
  // 캡션 텍스트 위치 ['top' | 'center' | 'bottom', 'left' | 'center' | 'right']
};
type carouselConfig = {
  parentNode: HTMLElement;
  itemList?: itemInformation[];
  visibleCount?: number;
  slideCount?: number;
  buttonPos?: 'horizontal' | 'vertical';
};
export function carousel({
  parentNode,
  itemList,
  visibleCount = 1,
  slideCount = 1,
  buttonPos = 'horizontal',
}: carouselConfig) {
  // NOTE: Slide를 감쌀 Wrap을 만들어 부모에 대입 및 스타일 적용
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
  if (buttonPos === 'horizontal') {
    itemContainer.style.cssText = `
      display: flex;
      align-items: center;
      transform: translateX(0px);
    `;
  } else {
    itemContainer.style.cssText = `
      display: flex;
      flex-wrap: wrap;
      transform: translateY(0px);
    `;
  }
  if (itemList) {
    // itemList가 있는 경우, 새로 아이템을 만들기
    itemList.forEach((item) => {
      addImageItem(itemContainer, item);
    });
  } else {
    for (let i = 0; i < dummy_carousel.length; i++) {
      addImageItem(itemContainer, dummy_carousel[i]);
    }
  }

  // NOTE: 화살표 아이콘 버튼 생성 및 스타일 적용
  addButtons();

  // NOTE: 이미지 크기 정수로 추출
  const imgItemWidth = Math.trunc(700 / visibleCount);
  const imgItemHeight = Math.trunc(250 / visibleCount);

  // NOTE: 화살표 클릭 이벤트
  function handleSlide(type: 'prev' | 'next') {
    let slideDistance = 0;
    let imgSize = 0;
    switch (buttonPos) {
      case 'vertical': {
        imgSize = imgItemHeight;
        slideDistance = imgSize * slideCount;
        // DOM에 클론 노드를 먼저 추가
        for (let i = 0; i < slideCount; i++) {
          if (type === 'prev') {
            // 이전 버튼 클릭
            // 앞에 마지막 노드 복사하기
            itemContainer.prepend(itemContainer.children[itemContainer.children.length - i - 1].cloneNode(true));
          } else {
            slideDistance = -slideDistance;
            itemContainer.appendChild(itemContainer.children[i].cloneNode(true));
          }
        }
        itemContainer.style.transform = `translateY(${slideDistance}px)`;

        break;
      }
      default: {
        imgSize = imgItemWidth;
        itemContainer.style.transitionDuration = '2s';
        slideDistance = imgSize * slideCount;
        // DOM에 클론 노드를 먼저 추가

        if (type === 'prev') {
          // 이전 버튼 클릭
          // 앞에 마지막 노드 복사하기
          console.log('t', itemContainer.children.length, visibleCount);
          itemContainer.style.transform = `translateX(${slideDistance}px)`;
          for (let i = 0; i < slideCount; i++) {
            itemContainer.prepend(itemContainer.children[itemContainer.children.length - i - 1].cloneNode(true));
          }
        } else {
          slideDistance = -slideDistance;
          itemContainer.style.transform = `translateX(${slideDistance}px)`;
          for (let i = 0; i < slideCount; i++) {
            itemContainer.appendChild(itemContainer.children[i].cloneNode(true));
          }
        }

        console.log('default', type, slideDistance);

        break;
      }
    }

    itemContainer.ontransitionend = () => {
      handleTransitionEnd(type);
    };
  }

  // NOTE: 화면 이동 및 CSS 초기화
  function handleTransitionEnd(type: 'prev' | 'next') {
    itemContainer.style.removeProperty('transition-duration');
    if (buttonPos === 'horizontal') {
      for (let i = 0; i < slideCount; i++) {
        // 버튼 위치가 좌우일 때
        if (type === 'prev') {
          // 이전 버튼 클릭 이후 마무리 단계
          itemContainer.lastChild?.remove(); // 첫 번째 자식을 삭제
        } else {
          // 다음 버튼 클릭 이후 마무리 단계
          itemContainer.firstChild?.remove(); // 첫 번째 자식을 삭제
        }
      }
      itemContainer.style.transform = 'translateX(0)';
      console.log('transform', itemContainer.style.transform);
    } else {
      console.log(type);
      for (let i = 0; i < slideCount; i++) {
        // 버튼 위치가 상하일 때
        if (type === 'prev') {
          // 이전 버튼 클릭 이후 마무리 단계
          itemContainer.lastChild?.remove(); // 첫 번째 자식을 삭제
        } else {
          console.log(type);
          // 다음 버튼 클릭 이후 마무리 단계
          itemContainer.firstChild?.remove(); // 첫 번째 자식을 삭제
        }
      }
      itemContainer.style.transform = 'translateY(0)';
    }
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
  function addImageItem(parent: HTMLElement, item: itemInformation) {
    const [container] = createElement({
      tagName: 'div',
      parent: parent,
    });
    container.style.cssText = `
      display: flex;
      justify-content: center;
      align-items: center;
      background: #000;
      overflow: hidden;
    `;
    if (buttonPos === 'horizontal') {
      container.style.cssText += `
        width: calc(700px / ${visibleCount});
        height: 250px;
      `;
    } else {
      container.style.cssText += `
        flex-direction: column;
        width: 700px;
        height: calc(250px / ${visibleCount});
      `;
    }
    const [image] = createElement({
      tagName: 'img',
      parent: container,
      properties: { src: item.imgUrl },
    });
    image.style.cssText = `
      height: 100%;
      object-position: 50% 50%;
      object-fit: cover;
    `;
    const [caption] = createElement({
      tagName: 'span',
      properties: { innerText: item.caption },
      parent: container,
    });
    caption.style.cssText = `
      position: absolute;
      color: white;
      font-weight: bold;
      filter: drop-shadow(3px 3px 3px rgb(0 0 0 / 0.5));
    `;
    if (item.captionPos) {
      switch (item.captionPos[0]) {
        // 캡션 상하
        case 'top': {
          container.style.justifyContent = 'flex-start';
          break;
        }
        case 'bottom': {
          container.style.justifyContent = 'flex-end';
          break;
        }
        default: {
          container.style.justifyContent = 'center';
        }
      }
      switch (item.captionPos[1]) {
        // 캡션 좌우
        case 'left': {
          container.style.alignItems = 'flex-start';
          break;
        }
        case 'right': {
          container.style.alignItems = 'flex-end';
          break;
        }
        default: {
          container.style.alignItems = 'center';
        }
      }
    }
    return container;
  }
}
