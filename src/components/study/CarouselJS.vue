<template>
  <div>
    <div class="wrap" ref="carouselRef"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { createElement } from 'src/assets/modules/createElement';
import { carousel } from 'src/assets/modules/carousel';

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

  // NOTE: carousel 모듈화 실행
  carousel({
    parentNode: app,
    itemList: [
      '/src/assets/study/images/02.jpg',
      '/src/assets/study/images/03.jpg',
      '/src/assets/study/images/04.jpg',
      '/src/assets/study/images/05.jpg',
      '/src/assets/study/images/06.jpg',
      '/src/assets/study/images/07.jpg',
    ],
    visibleCount: 5, // 보여질 개수
    slideCount: 3, // 슬라이드 될 개수
    captionArray: ['One', 'Two', 'Three', 'Four', 'Five', 'Six'],
    captionPos: ['center', 'center'],
    buttonPos: 'horizontal',
  });
});
</script>
