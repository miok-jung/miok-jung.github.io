<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import BaseBadge from '../common/BaseBadge.vue'

const { t, tm } = useI18n({ useScope: 'global' })

const careers = computed(() =>
  Array.from(tm('portfolio.career.items') as any[]),
)

const formatDate = (date: string | undefined | null) => {
  if (!date) return t('portfolio.career.present')
  return new Date(date).toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
  })
}

const calcDuration = (from: string, to: string | null) => {
  const start = new Date(from)
  const end = to ? new Date(to) : new Date()
  const months =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth())
  const y = Math.floor(months / 12)
  const m = months % 12
  if (y === 0) return `${m}개월`
  if (m === 0) return `${y}년`
  return `${y}년 ${m}개월`
}
</script>

<template>
  <section id="career" class="career-section">
    <div class="career-section__title">
      <h2>{{ t('portfolio.career.title') }}</h2>
      <p>{{ t('portfolio.career.subtitle') }}</p>
    </div>

    <div class="career-section__list">
      <article
        v-for="career in careers"
        :key="career.company"
        class="career-card">
        <!-- 회사 헤더 -->
        <div class="career-card__header">
          <div class="career-card__info">
            <h3 class="career-card__company">{{ career.company }}</h3>
            <span class="career-card__role">{{ career.role }}</span>
            <div class="career-card__tags">
              <BaseBadge
                v-for="tag in career.tags"
                :key="tag"
                :text="tag"
                size="sm" />
            </div>
          </div>
          <div class="career-card__period">
            <span>
              {{ formatDate(career.from) }} – {{ formatDate(career.to) }}
            </span>
            <span class="career-card__duration">
              {{ calcDuration(career.from, career.to) }}
            </span>
          </div>
        </div>

        <!-- 프로젝트 목록 -->
        <ul class="career-card__projects">
          <li
            v-for="project in career.projects"
            :key="project.name"
            class="career-project">
            <div class="career-project__header">
              <h4 class="career-project__name">{{ project.name }}</h4>
              <div class="career-project__links">
                <a
                  v-if="project.link"
                  :href="project.link"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="career-project__link">
                  {{ project.link }}
                </a>
                <a
                  v-if="project.subLink"
                  :href="project.subLink"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="career-project__link">
                  {{ project.subLink }}
                </a>
              </div>
            </div>

            <ul class="career-project__tasks">
              <li
                v-for="(task, i) in project.tasks"
                :key="i"
                class="career-project__task">
                {{ task }}
              </li>
            </ul>
          </li>
        </ul>
      </article>
    </div>
  </section>
</template>

<style scoped lang="scss">
.career-section {
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
    display: flex;
    flex-direction: column;
    gap: 24px;
    width: 100%;
    max-width: 900px;
  }
}

.career-card {
  padding: 32px;
  border: 1px solid var(--grey-3);
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(6px);

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 16px;
    padding-bottom: 24px;
    margin-bottom: 24px;
    border-bottom: 1px solid var(--grey-2);
  }

  &__info {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  &__company {
    font-size: 20px;
    line-height: 28px;
    font-weight: 600;
  }

  &__role {
    font-size: 14px;
    color: var(--grey-6);
  }

  &__tags {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    margin-top: 4px;
  }

  &__period {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 4px;
    flex-shrink: 0;
    font-size: 14px;
    color: var(--grey-7);
    white-space: nowrap;
  }

  &__duration {
    font-size: 12px;
    color: var(--grey-5);
  }

  &__projects {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
}

.career-project {
  & + & {
    padding-top: 24px;
    border-top: 1px dashed var(--grey-2);
  }

  &__header {
    display: flex;
    align-items: baseline;
    gap: 12px;
    margin-bottom: 12px;
    flex-wrap: wrap;
  }

  &__name {
    font-size: 16px;
    line-height: 24px;
    font-weight: 600;
    flex-shrink: 0;
  }

  &__links {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  &__link {
    font-size: 12px;
    color: var(--grey-5);
    text-decoration: none;
    padding: 0;
    word-break: break-all;

    &:hover {
      color: var(--grey-8);
      background: transparent;
      border: none;
      text-decoration: underline;
    }
  }

  &__tasks {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  &__task {
    display: flex;
    align-items: flex-start;
    gap: 8px;
    font-size: 14px;
    line-height: 22px;
    color: var(--grey-8);

    &::before {
      content: '·';
      flex-shrink: 0;
      color: var(--grey-5);
      margin-top: 1px;
    }
  }
}

/* tablet */
@media (max-width: $bp-tablet) {
  .career-section {
    padding: 40px 48px;
  }
}

/* mobile */
@media (max-width: $bp-mobile) {
  .career-section {
    padding: 80px 24px 24px;
  }

  .career-card {
    padding: 16px;

    &__header {
      flex-direction: column;
      gap: 12px;
    }

    &__period {
      align-items: flex-start;
    }
  }

  .career-project {
    &__header {
      flex-direction: column;
      align-items: flex-start;
      gap: 4px;
    }
  }
}
</style>
