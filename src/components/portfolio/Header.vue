<script setup lang="ts">
import { ref } from 'vue'
import { Icon } from '@iconify/vue'

const headerRef = ref<HTMLElement | null>(null)
const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

const scrollToSection = (id: string) => {
  const el = document.getElementById(id)
  if (!el) return

  const headerH = headerRef.value?.offsetHeight ?? 0
  const extra = 0
  const top = el.getBoundingClientRect().top + window.scrollY - headerH + extra

  window.scrollTo({ top, behavior: 'smooth' })
  closeMenu()
}
</script>

<template>
  <header ref="headerRef">
    <div class="header left">
      <Icon icon="ph:house-line" width="24" height="24" />
      <h1>Mi Ok, Jung</h1>
    </div>

    <!-- PC nav -->
    <nav class="header right pc-nav">
      <button type="button" @click="scrollToSection('home')">Home</button>
      <!-- <button type="button" @click="scrollToSection('about')">About</button> -->
      <!-- <button type="button" @click="scrollToSection('contact')">Contact</button> -->
    </nav>

    <!-- Mobile 햄버거 버튼 -->
    <button
      class="hamburger"
      type="button"
      @click="toggleMenu"
      aria-label="메뉴 열기">
      <Icon
        :icon="isMenuOpen ? 'ph:x-circle-bold' : 'ph:list-bold'"
        width="24"
        height="24" />
    </button>
  </header>

  <!-- Mobile 오버레이 -->
  <Transition name="fade">
    <div v-if="isMenuOpen" class="drawer-overlay" @click="closeMenu" />
  </Transition>

  <!-- Mobile 드로어 -->
  <Transition name="slide">
    <nav v-if="isMenuOpen" class="drawer">
      <div class="drawer-header">
        <button
          type="button"
          class="drawer-close"
          @click="closeMenu"
          aria-label="메뉴 닫기">
          <Icon icon="ph:x-circle-bold" width="24" height="24" />
        </button>
      </div>
      <button type="button" @click="scrollToSection('home')">Home</button>
      <!-- <button type="button" @click="scrollToSection('about')">About</button> -->
      <!-- <button type="button" @click="scrollToSection('contact')">Contact</button> -->
    </nav>
  </Transition>
</template>

<style scoped lang="scss">
header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 16px 24px;
  box-sizing: border-box;
  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);

  @media (max-width: $bp-tablet) {
    padding: 8px 16px;
  }
}

.header {
  display: flex;
  align-items: center;

  &.left {
    gap: 8px;
  }

  &.right {
    gap: 8px;
  }
}

/* PC nav: 모바일에서 숨김 */
.pc-nav {
  @media (max-width: $bp-mobile) {
    display: none;
  }
}

/* 햄버거 버튼: PC에서 숨김 */
.hamburger {
  display: none;
  padding: 4px;
  background: none;
  border: none;
  color: var(--grey-10);
  cursor: pointer;

  @media (max-width: $bp-mobile) {
    display: flex;
    align-items: center;
  }
}

/* 오버레이 */
.drawer-overlay {
  position: fixed;
  inset: 0;
  z-index: 20;
  background: rgba(0, 0, 0, 0.4);
}

/* 드로어 */
.drawer {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 30;
  height: 100dvh;
  width: 200px;
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding: var(--space-4) var(--space-5) var(--space-5);
  box-sizing: border-box;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);

  .drawer-header {
    display: flex;
    justify-content: flex-end;
    padding-bottom: var(--space-4);
    border-bottom: 1px solid var(--grey-2);
    margin-bottom: var(--space-2);
  }

  .drawer-close {
    display: flex;
    align-items: center;
    background: none;
    border: none !important;
    border-bottom: none !important;
    padding: 4px;
    color: var(--grey-10);
    cursor: pointer;
    font-size: 1rem;

    &:hover {
      color: var(--grey-7);
    }
  }

  button:not(.drawer-close) {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1.2rem;
    text-align: left;
    padding: var(--space-3) var(--space-2);
    color: var(--grey-10);
    border-bottom: 1px solid var(--grey-2);

    &:hover {
      color: var(--grey-7);
    }
  }
}

/* 슬라이드 트랜지션 */
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}

/* 페이드 트랜지션 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
