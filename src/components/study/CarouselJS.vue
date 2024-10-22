<template>
  <div>
    <div class="wrap" style="width: 700px; height: 250px; background: #000" ref="carouselRef"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { carousel } from 'src/assets/modules/carousel';

const carouselRef = ref<HTMLElement | undefined>(undefined);

// NOTE: life-cycle
onMounted(() => {
  // NOTE: carousel 모듈화 실행
  if (carouselRef.value !== undefined) {
    carousel({
      parentNode: carouselRef.value,
      itemList: [
        '/src/assets/study/images/01.jpg',
        '/src/assets/study/images/02.jpg',
        '/src/assets/study/images/03.jpg',
        '/src/assets/study/images/04.jpg',
        '/src/assets/study/images/05.jpg',
        '/src/assets/study/images/06.jpg',
        '/src/assets/study/images/07.jpg',
      ],
      visibleCount: 5, // 보여질 개수
      slideCount: 3, // 슬라이드 될 개수
      captionArray: ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven'],
      captionPos: ['center', 'center'],
      buttonPos: 'horizontal',
    });
  }
});
</script>
