<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n({ useScope: 'global' })

const EMAIL = 'miok.dev@gmail.com'

// 구형 대비 clipboard
// TODO: 다른 곳에서도 클립보드를 쓸 경우 EXPORT 필요
const fallbackCopyText = (text: string) => {
  const textarea = document.createElement('textarea')
  textarea.value = text
  textarea.setAttribute('readonly', '')
  textarea.style.position = 'fixed'
  textarea.style.top = '-9999px'
  textarea.style.left = '-9999px'
  document.body.appendChild(textarea)
  textarea.focus()
  textarea.select()

  const success = document.execCommand('copy')
  document.body.removeChild(textarea)

  if (!success) throw new Error('copy failed')
}

const copyEmail = async () => {
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(EMAIL)
    } else {
      fallbackCopyText(EMAIL)
    }

    alert('이메일이 복사되었습니다.')
  } catch {
    try {
      fallbackCopyText(EMAIL)
      alert('이메일이 복사되었습니다.')
    } catch {
      alert('복사에 실패했습니다.')
    }
  }
}
</script>

<template>
  <section id="contact" class="contact-section">
    <div class="contact-section__title">
      <h2>{{ t('portfolio.contact.title') }}</h2>
      <p>{{ t('portfolio.contact.subtitle') }}</p>
    </div>

    <div class="contact-section__list">
      <!-- Email -->
      <article class="contact-card">
        <div class="contact-card__header">
          <Icon icon="lucide:mail" width="24" height="24" />
          <h3>Email</h3>
        </div>
        <p class="contact-card__desc">{{ EMAIL }}</p>
        <div class="contact-card__actions">
          <button @click="copyEmail">
            {{ t('portfolio.contact.mail.copy') }}
          </button>
          <a :href="`mailto:${EMAIL}`">
            {{ t('portfolio.contact.mail.send') }}
          </a>
        </div>
      </article>

      <!-- Design -->
      <article class="contact-card">
        <div class="contact-card__header">
          <Icon icon="lucide:figma" width="24" height="24" />
          <h3>Design</h3>
        </div>
        <p class="contact-card__desc">
          {{ t('portfolio.contact.design.description') }}
        </p>
        <div class="contact-card__actions">
          <a
            target="_blank"
            href="https://www.figma.com/design/imiEE5YYowBdWvWdZdD79S/Project?node-id=22-2&t=dySbF0Oiy36mfMaN-1"
            rel="noopener noreferrer">
            {{ t('portfolio.contact.design.view_link') }}
          </a>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped lang="scss">
.contact-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 80px;
  min-height: 100svh;

  &__title {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    margin-bottom: 20px;
  }

  &__list {
    display: grid;
    // TODO: 추가할 것이 있다면 개수를 늘릴 것
    grid-template-columns: repeat(2, 1fr);
    gap: 16px 32px;
    width: 100%;
    max-width: 1200px;

    @media (max-width: $bp-mobile) {
      grid-template-columns: 1fr;
    }
  }
}

.contact-card {
  padding: 20px;
  border: 1px solid var(--grey-5);
  border-radius: 20px;
  background: white;
  text-align: center;
  transition: all 0.25s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 10px 25px rgba($color: #000, $alpha: 0.12);
  }

  &__header {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 8px;
    margin-bottom: 16px;
  }

  &__desc {
    margin-bottom: 20px;
    font-size: 16px;
  }

  &__actions {
    display: flex;
    flex-direction: column;
    gap: 8px;

    button {
      width: 100%;
    }

    a {
      display: block;
      text-align: center;
    }
  }
}
</style>
