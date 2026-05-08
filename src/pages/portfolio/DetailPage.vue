<script setup lang="ts">
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute, useRouter } from 'vue-router'
import { Icon } from '@iconify/vue'
import BaseBadge from '../../components/common/BaseBadge.vue'

// 슬라이드 이미지 import
// 이미지 추가 시 여기에 같이 추가해주세요
import hanacard01 from '../../assets/images/portfolio/projects/hanacard/thumb.png'
import hanacard02 from '../../assets/images/portfolio/projects/hanacard/thumb.png'
import cjone01 from '../../assets/images/portfolio/projects/cj-one/thumb.png'
import cjone02 from '../../assets/images/portfolio/projects/cj-one/thumb.png'

const slideMap: Record<string, string[]> = {
  hanacard: [hanacard01, hanacard02],
  'cj-one': [cjone01, cjone02],
}

const { t, tm } = useI18n({ useScope: 'global' })
const route = useRoute()
const router = useRouter()

const projects = computed(() =>
  Array.from(tm('portfolio.project.items') as any[]),
)
const project = computed(() =>
  projects.value.find((p: any) => p.id === route.params.id),
)
const slides = computed(() => slideMap[route.params.id as string] ?? [])

// 슬라이드
const currentIndex = ref(0)
const prev = () => {
  currentIndex.value =
    (currentIndex.value - 1 + slides.value.length) % slides.value.length
}
const next = () => {
  currentIndex.value = (currentIndex.value + 1) % slides.value.length
}
const goTo = (index: number) => {
  currentIndex.value = index
}

const goBack = () => {
  router.push({ path: '/', hash: '#project' })
}
</script>

<template>
  <main class="detail">
    <div v-if="project" class="detail__inner">
      <!-- 상단 네비 -->
      <div class="detail__nav">
        <button type="button" class="detail__back" @click="goBack">
          <Icon icon="ph:arrow-left" width="18" height="18" />
          {{ t('portfolio.project.back') }}
        </button>
        <a
          v-if="project.link"
          :href="project.link"
          target="_blank"
          rel="noopener noreferrer"
          class="detail__link">
          <Icon icon="ph:arrow-square-out" width="18" height="18" />
          {{ t('portfolio.aria.go_to_link') }}
        </a>
      </div>

      <!-- 제목 / 태그 -->
      <div class="detail__header">
        <h2 class="detail__title">{{ project.title }}</h2>
        <div class="detail__tags">
          <BaseBadge
            v-for="tag in project.tags"
            :key="tag"
            :text="tag"
            size="sm" />
        </div>
      </div>

      <!-- 이미지 슬라이드 -->
      <div v-if="slides.length" class="detail__slider">
        <div class="detail__slider-view">
          <Transition name="slide-fade" mode="out-in">
            <img
              :key="currentIndex"
              :src="slides[currentIndex]"
              :alt="project.title + ' 이미지 ' + (currentIndex + 1)"
              class="detail__slider-img" />
          </Transition>
        </div>

        <!-- 이전/다음 버튼 -->
        <button
          v-if="slides.length > 1"
          type="button"
          class="detail__slider-btn detail__slider-btn--prev"
          @click="prev"
          aria-label="이전 이미지">
          <Icon icon="ph:caret-left-bold" width="20" height="20" />
        </button>
        <button
          v-if="slides.length > 1"
          type="button"
          class="detail__slider-btn detail__slider-btn--next"
          @click="next"
          aria-label="다음 이미지">
          <Icon icon="ph:caret-right-bold" width="20" height="20" />
        </button>

        <!-- 도트 인디케이터 -->
        <div v-if="slides.length > 1" class="detail__dots">
          <button
            v-for="(_, i) in slides"
            :key="i"
            type="button"
            class="detail__dot"
            :class="{ 'detail__dot--active': i === currentIndex }"
            @click="goTo(i)"
            :aria-label="'이미지 ' + (i + 1)" />
        </div>
      </div>

      <!-- 설명 -->
      <p class="detail__desc">{{ project.description }}</p>
      <div class="detail__content">{{ project.detail }}</div>
    </div>

    <!-- 잘못된 id 접근 -->
    <div v-else class="detail__not-found">
      <p>프로젝트를 찾을 수 없습니다.</p>
      <button type="button" @click="goBack">돌아가기</button>
    </div>
  </main>
</template>

<style scoped lang="scss">
.detail {
  min-height: 100svh;
  padding: 80px;
  box-sizing: border-box;
  background: var(--grey-100);

  &__inner {
    display: flex;
    flex-direction: column;
    gap: 32px;
    max-width: 900px;
    margin: 0 auto;
  }

  &__nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__back {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 14px;
    color: var(--grey-600);
    background: none;
    border: none;
    cursor: pointer;
    padding: 4px 8px;

    &:hover {
      color: var(--grey-900);
    }
  }

  &__link {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 14px;
    color: var(--grey-600);
    text-decoration: none;

    &:hover {
      color: var(--grey-900);
      background: transparent;
      border: none;
    }
  }

  &__header {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  &__title {
    font-size: 32px;
    line-height: 40px;
    font-weight: 700;
  }

  &__tags {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }

  /* 슬라이더 */
  &__slider {
    position: relative;
    border-radius: 12px;
    overflow: hidden;
    background: var(--grey-200);
  }

  &__slider-view {
    width: 100%;
    aspect-ratio: 16 / 9;
    overflow: hidden;
  }

  &__slider-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  &__slider-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.85);
    border: none;
    cursor: pointer;
    color: var(--grey-800);
    transition: background 0.2s ease;

    &:hover {
      background: white;
    }

    &--prev {
      left: 12px;
    }
    &--next {
      right: 12px;
    }
  }

  &__dots {
    display: flex;
    justify-content: center;
    gap: 6px;
    padding: 12px 0 8px;
  }

  &__dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    border: none;
    background: var(--grey-400);
    cursor: pointer;
    padding: 0;
    transition: background 0.2s ease;

    &--active {
      background: var(--grey-800);
    }
  }

  &__desc {
    font-size: 16px;
    line-height: 26px;
    color: var(--grey-600);
  }

  &__content {
    font-size: 15px;
    line-height: 26px;
    color: var(--grey-800);
    white-space: pre-line;
  }

  &__not-found {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;
    min-height: 60vh;
    color: var(--grey-500);
  }
}

/* 슬라이드 트랜지션 */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: opacity 0.25s ease;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
}

/* tablet */
@media (max-width: $bp-tablet) {
  .detail {
    padding: 80px 48px;
  }
}

/* mobile */
@media (max-width: $bp-mobile) {
  .detail {
    padding: 80px 24px 24px;
  }

  .detail__title {
    font-size: 24px;
    line-height: 32px;
  }

  .detail__slider-btn {
    width: 32px;
    height: 32px;
  }
}
</style>
