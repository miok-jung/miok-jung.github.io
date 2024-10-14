<template>
  <div class="custom-scroll-component">
    <div ref="contentRef" class="content" :style="props.style">
      <slot />
    </div>
    <div class="custom-scrollbar">
      <div ref="scrollThumbRef" class="scroll-thumb" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { CSSProperties, onBeforeUnmount, onMounted, ref } from 'vue';

// NOTE: props, Ref
const props = withDefaults(
  defineProps<{
    style: CSSProperties;
  }>(),
  {
    style: () => ({
      height: '100vh',
    }),
  }
);
const contentRef = ref<HTMLDivElement | null>(null);
const scrollThumbRef = ref<HTMLDivElement | null>(null);

// NOTE: 스크롤 이벤트 처리
function updateScrollThumb() {
  const content = contentRef.value;
  const thumb = scrollThumbRef.value;

  if (content && thumb) {
    const scrollHeight = content.scrollHeight - content.clientHeight;
    const scrollRatio = content.scrollTop / scrollHeight;

    // thumb 높이 계산 (콘텐츠가 더 클수록 thumb는 짧아짐)
    const thumbHeight = (content.clientHeight / content.scrollHeight) * content.clientHeight;
    thumb.style.height = `${thumbHeight}px`;

    // thumb의 위치 업데이트 (스크롤 비율에 따라 이동)
    const thumbPosition = scrollRatio * (content.clientHeight - thumbHeight);
    thumb.style.transform = `translateY(${thumbPosition}px)`;
  }
}

// NOTE: life-cycle
onMounted(() => {
  if (contentRef.value) {
    // 이벤트 리스너 추가
    contentRef.value.addEventListener('scroll', updateScrollThumb);
    // 초기 thumb 위치 설정
    updateScrollThumb();
  }
});
onBeforeUnmount(() => {
  // 이벤트 제거
  if (contentRef.value) contentRef.value.removeEventListener('scroll', updateScrollThumb);
});
</script>

<style scoped lang="scss">
.custom-scroll-component {
  position: relative;
  overflow: hidden;
  width: 100%;
  .content {
    overflow-y: scroll;
    width: 100%;
    height: 100%;
  }
  .custom-scrollbar {
    position: absolute;
    top: 0;
    right: 0;
    width: 8px;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.1);
    opacity: 0; /* 초기 상태에서는 숨김 */
    transition: opacity 0.3s; /* 부드러운 애니메이션 */
    .scroll-thumb {
      position: relative;
      width: 100%;
      height: 30px; /* 스크롤바 손잡이 크기 */
      background-color: rgba(0, 0, 0, 0.5);
      border-radius: 4px;
    }
  }
  .content:hover + .custom-scrollbar,
  .custom-scrollbar:hover {
    opacity: 1; /* hover 시 스크롤바를 보이게 */
  }
}
/* 기본 스크롤바 숨기기 */
::-webkit-scrollbar {
  width: 0px; /* 스크롤바 너비를 0으로 설정하여 숨김 */
  background: transparent; /* 배경 투명 */
}
</style>
