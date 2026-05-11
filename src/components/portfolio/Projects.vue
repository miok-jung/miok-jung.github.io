<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import { Icon } from '@iconify/vue'
import BaseBadge from '../common/BaseBadge.vue'

// 썸네일 이미지 import
// 이미지 추가 시 여기에 같이 추가해주세요
import hanacardThumb from '../../assets/images/portfolio/projects/hanacard/thumb.png'
import cjoneThumb from '../../assets/images/portfolio/projects/cj-one/thumb.png'

const thumbMap: Record<string, string> = {
  hanacard: hanacardThumb,
  'cj-one': cjoneThumb,
}

const { t, tm } = useI18n({ useScope: 'global' })
const router = useRouter()

const projects = computed(() =>
  Array.from(tm('portfolio.project.items') as any[]),
)

const goToDetail = (id: string) => {
  router.push({ name: 'project-detail', params: { id } })
}
</script>

<template>
  <section id="project" class="project-section">
    <div class="project-section__title">
      <h2>{{ t('portfolio.project.title') }}</h2>
      <p>{{ t('portfolio.project.subtitle') }}</p>
    </div>

    <ul class="project-section__list">
      <li
        v-for="project in projects"
        :key="project.id"
        class="project-card"
        @click="goToDetail(project.id)">
        <!-- 썸네일 -->
        <div class="project-card__thumb">
          <img
            :src="thumbMap[project.id]"
            :alt="project.title + ' 썸네일'"
            loading="lazy" />
        </div>

        <div class="project-card__body">
          <div class="project-card__info">
            <h3 class="project-card__name">{{ project.title }}</h3>
            <p class="project-card__desc">{{ project.description }}</p>
            <div class="project-card__tags">
              <BaseBadge
                v-for="tag in project.tags"
                :key="tag"
                :text="tag"
                size="sm" />
            </div>
          </div>

          <!-- 바로가기 링크 -->
          <div class="project-card__links" @click.stop>
            <a
              v-if="project.github"
              :href="project.github"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub">
              <Icon icon="ph:github-logo" width="20" height="20" />
            </a>
            <a
              v-if="project.link"
              :href="project.link"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="t('portfolio.aria.go_to_link')">
              <Icon icon="ph:arrow-square-out" width="20" height="20" />
            </a>
          </div>
        </div>
      </li>
    </ul>
  </section>
</template>

<style scoped lang="scss">
.project-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
  min-height: 100svh;
  padding: 40px 80px;
  box-sizing: border-box;

  &__title {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }

  &__list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 24px;
    width: 100%;
    max-width: 1200px;
  }
}

.project-card {
  display: flex;
  flex-direction: column;
  border: 1px solid var(--grey-200);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(6px);
  overflow: hidden;
  cursor: pointer;
  transition:
    border-color 0.2s ease,
    transform 0.2s ease;

  &:hover {
    border-color: var(--grey-500);
    transform: translateY(-2px);
  }

  &__thumb {
    width: 100%;
    aspect-ratio: 16 / 9;
    overflow: hidden;
    background: var(--grey-100);

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }

    &:hover img {
      transform: scale(1.03);
    }
  }

  &__body {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 16px;
    padding: 20px;
    flex: 1;
  }

  &__info {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  &__name {
    font-size: 18px;
    line-height: 28px;
    font-weight: 600;
  }

  &__desc {
    font-size: 14px;
    line-height: 20px;
    color: var(--grey-600);
  }

  &__tags {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    margin-top: 4px;
  }

  &__links {
    display: flex;
    justify-content: flex-end;
    gap: 8px;

    a {
      display: flex;
      align-items: center;
      padding: 4px;
      color: var(--grey-600);

      &:hover {
        color: var(--grey-900);
        border: none;
        background: transparent;
      }
    }
  }
}

/* tablet */
@media (max-width: $bp-tablet) {
  .project-section {
    padding: 40px 48px;
  }
}

/* mobile */
@media (max-width: $bp-mobile) {
  .project-section {
    padding: 80px 24px 24px;
  }

  .project-section__list {
    grid-template-columns: 1fr;
  }
}
</style>
