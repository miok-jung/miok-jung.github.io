<template>
  <div>
    <div class="wrap" style="width: 700px; height: 250px; background: #000" ref="carouselRef"></div>
    <div style="height: 50px"></div>
    <div class="text-wrap" style="width: 700px; height: 250px; background: #f1f2f3" ref="carousel2Ref"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { carousel } from 'src/assets/modules/carousel';

const carouselRef = ref<HTMLElement | undefined>(undefined);
const carousel2Ref = ref<HTMLElement | undefined>(undefined);

// NOTE: life-cycle
onMounted(() => {
  // NOTE: carousel 모듈화 실행
  if (carouselRef.value !== undefined) {
    carousel({
      parentNode: carouselRef.value,
      itemList: [
        {
          id: 1,
          imgUrl: '/src/assets/study/images/01.jpg',
          title: '',
          caption: 'One',
          captionPos: ['center', 'center'],
        },
        {
          id: 2,
          imgUrl: '/src/assets/study/images/02.jpg',
          title: '',
          caption: 'Two',
          captionPos: ['center', 'center'],
        },
        {
          id: 3,
          imgUrl: '/src/assets/study/images/03.jpg',
          title: '',
          caption: 'Three',
          captionPos: ['center', 'center'],
        },
        {
          id: 4,
          imgUrl: '/src/assets/study/images/04.jpg',
          title: '',
          caption: 'Four',
          captionPos: ['center', 'center'],
        },
        {
          id: 5,
          imgUrl: '/src/assets/study/images/05.jpg',
          title: '',
          caption: 'Five',
          captionPos: ['center', 'center'],
        },
        {
          id: 6,
          imgUrl: '/src/assets/study/images/06.jpg',
          title: '',
          caption: 'Six',
          captionPos: ['center', 'center'],
        },

        {
          id: 7,
          imgUrl: '/src/assets/study/images/07.jpg',
          title: '',
          caption: 'Seven',
          captionPos: ['center', 'center'],
        },
      ],
      visibleCount: 5, // 보여질 개수
      slideCount: 3, // 슬라이드 될 개수
      buttonPos: 'horizontal',
    });
  }

  if (carousel2Ref.value !== undefined) {
    carousel({
      parentNode: carousel2Ref.value,
      visibleCount: 2,
      slideCount: 1,
      buttonPos: 'vertical',
    });
  }
});
</script>
