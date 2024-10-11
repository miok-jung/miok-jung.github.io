<template>
  <div>
    <div class="wrap" ref="carouselRef"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { createElement } from 'src/assets/modules/createElement';

const carouselRef = ref<HTMLElement | undefined>(undefined);

// NOTE: life-cycle
onMounted(() => {
  // 현재 template에 Ref를 참조하여 div#carousel-wrap에 대한 html 생성
  const [app] = createElement({
    tagName: 'div',
    properties: { id: 'carousel-wrap' },
    parent: carouselRef.value,
  });

  app.style.cssText = `
    width: 700px;
    height: 250px;
    background-color: #646464;
  `;

  // SECTION: Wrap
  const [wrapper] = createElement({
    tagName: 'div',
    parent: app,
    count: 1,
  });
  wrapper.style.cssText = `
    position: relative;
    display: flex;
    overflow: hidden;
    width: 100%;
    height: 100%;
  `;

  // NOTE: Icon
  const iconNext = `
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
      <path color="white" stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
    </svg>
  `;
  const iconPrev = `
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
      <path color="white" stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
    </svg>
  `;
  const [prevButton, nextButton] = createElement({
    tagName: 'button',
    parent: wrapper,
    count: 2,
  }) as HTMLElement[];

  if (Array.isArray([prevButton, nextButton])) {
    console.log('array true');
  } else {
    console.log('array false');
  }

  prevButton.style.cssText = `
    z-index: 1;
    position: absolute;
    top: 0;
    width: 50px;
    height: 100%;
    border: 0;
    background-color: transparent;
    background: linear-gradient(90deg, rgba(0,0,0,0.3) 0%,rgba(0,0,0,0.1) 30%,rgba(0,0,0,0) 100%);
    filter: drop-shadow(3px 5px 2px rgb(0 0 0 / 0.7));
  `;
  nextButton.style.cssText = prevButton.style.cssText;

  nextButton.style.background = 'linear-gradient(270deg, rgba(0,0,0,0.3) 0%,rgba(0,0,0,0.1) 30%,rgba(0,0,0,0) 100%)';
  prevButton.style.left = '0px';
  nextButton.style.right = '0px';

  prevButton.innerHTML = iconPrev;
  nextButton.innerHTML = iconNext;

  // NOTE: 클릭 이벤트
  nextButton.onclick = () => handleSlide('next');
  prevButton.onclick = () => handleSlide('prev');
  function handleSlide(type: 'prev' | 'next') {
    itemContainer.style.transitionDuration = '0.5s';
    itemContainer.style.transform = type === 'prev' ? `translateX(${0})` : `translateX(${-1400}px)`;

    itemContainer.ontransitionend = () => {
      itemContainer.style.removeProperty('transition-duration');
      itemContainer.style.transform = 'translateX(-700px)';

      type === 'prev'
        ? itemContainer.prepend(itemContainer.lastChild as ChildNode)
        : itemContainer.appendChild(itemContainer.firstChild as ChildNode);
    };
  }
  // !SECTION

  // SECTION Container
  const [itemContainer] = createElement({
    tagName: 'div',
    parent: wrapper,
  });
  itemContainer.style.cssText = `
    display: flex;
    transform: translateX(-700px);
  `;
  addImageItem(itemContainer, '/src/assets/study/images/02.jpg');
  addImageItem(itemContainer, '/src/assets/study/images/03.jpg');
  addImageItem(itemContainer, '/src/assets/study/images/04.jpg');
  addImageItem(itemContainer, '/src/assets/study/images/05.jpg');
  function addImageItem(parent: HTMLElement, src: string, captionText = 'Caption text') {
    const [container] = createElement({
      tagName: 'div',
      parent: parent,
    });
    container.style.cssText = `
    display: flex;
    justify-content: center;
    align-items: center;
    width: 700px;
    height: 250px;
    overflow: hidden;
  `;
    const [image] = createElement({
      tagName: 'img',
      parent: container,
      properties: { src: src },
    });
    image.style.cssText = 'height: 100%;';

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

  // !SECTION
});
</script>

<style scoped></style>
