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
    itemList.forEach((item, i) => {
      addImageItem(itemContainer, item, captionArray[i]);
    });
  } else {
    for (let i = 0; i < 5; i++) {
      addImageItem(itemContainer, `/src/assets/study/images/0${i + 1}.jpg`, `${i}${i}`);
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
    if (buttonPos === 'horizontal') {
      imgSize = imgItemWidth;
      if (type === 'prev') {
        // 이전 버튼 클릭
        for (let i = 0; i < slideCount; i++) {
          // 앞에 마지막 노드 복사하기
          itemContainer.prepend(itemContainer.children[itemContainer.children.length - i - 1].cloneNode(true));
        }
      } else {
        slideDistance = -1;
        for (let i = 0; i < slideCount; i++) {
          itemContainer.appendChild(itemContainer.children[i].cloneNode(true));
        }
      }
      slideDistance = slideDistance * imgSize * slideCount;
      itemContainer.style.transitionDuration = '0.5s';
      itemContainer.style.transform = `translateX(calc(${slideDistance})px)`;
    } else {
      imgSize = imgItemHeight;
      if (type === 'prev') {
        // 이전 버튼 클릭
        for (let i = 0; i < slideCount; i++) {
          // 앞에 마지막 노드 복사하기
          itemContainer.prepend(itemContainer.children[itemContainer.children.length - i - 1].cloneNode(true));

          slideDistance = imgSize * slideCount;
        }
      } else {
        for (let i = 0; i < slideCount; i++) {
          itemContainer.appendChild(itemContainer.children[i].cloneNode(true));
          slideDistance = -imgSize * slideCount;
        }
      }
      itemContainer.style.transform = `translateY(${slideDistance}px)`;
    }

    setTimeout(() => {
      handleTransitionEnd(type);
    }, 0);
  }

  // NOTE: 화면 이동 및 CSS 초기화
  function handleTransitionEnd(type: 'prev' | 'next') {
    if (buttonPos === 'horizontal') {
      // 버튼 위치가 좌우일 때
      if (type === 'prev') {
        // 이전 버튼 클릭 이후 마무리 단계
        for (let i = 0; i < slideCount; i++) {
          itemContainer.lastChild?.remove(); // 첫 번째 자식을 삭제
        }
      } else {
        // 다음 버튼 클릭 이후 마무리 단계
        for (let i = 0; i < slideCount; i++) {
          itemContainer.firstChild?.remove(); // 첫 번째 자식을 삭제
        }
      }
      itemContainer.style.transform = 'translateX(0)';
    } else {
      // 버튼 위치가 상하일 때
      if (type === 'prev') {
        // 이전 버튼 클릭 이후 마무리 단계
        for (let i = 0; i < slideCount; i++) {
          itemContainer.lastChild?.remove(); // 첫 번째 자식을 삭제
        }
      } else {
        // 다음 버튼 클릭 이후 마무리 단계
        for (let i = 0; i < slideCount; i++) {
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
  function addImageItem(parent: HTMLElement, src: string, captionText = 'Caption text') {
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
    return container;
  }
}