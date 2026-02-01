<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'

import JLoading from '../components/global/JLoading.vue'
import About from '../components/home/About.vue'
import Contact from '../components/home/Contact.vue'
import Home from '../components/home/Home.vue'

// 어떤 요소가 기준 영역에 얼마나 들어왔는지 알려주는 브라우저 API
// 보임 상태가 바뀔 때만 호출이 됨
let io: IntersectionObserver | null = null

onMounted(() => {
  const targets = document.querySelectorAll<HTMLElement>('[data-section]')

  io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (!entry.isIntersecting) return

          const target = entry.target as HTMLElement
          const key = target.dataset.section
          if (!key) return

          updateBodyClass(key)
          console.log('현재 섹션:', key)
        }
      })
    },
    {
      root: null,
      threshold: 0.5,
    },
  )

  targets.forEach((el) => io!.observe(el))
})

const updateBodyClass = (key: string) => {
  const body = document.body

  body.classList.forEach((cls) => {
    if (cls.startsWith('section-')) body.classList.remove(cls)
  })

  body.classList.add(`section-${key}`)
}

onUnmounted(() => {
  io?.disconnect()
})
</script>
<template>
  <div class="out-wrap">
    <Home class="wrap" data-section="home" />
    <About class="wrap" data-section="about" />
    <Contact class="wrap" data-section="contact" />
  </div>
</template>

<style scoped lang="scss">
.out-wrap {
  .wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    width: inherit;
    height: 100vh;
    &:nth-of-type(1) {
      background: MistyRose;
    }
    &:nth-of-type(2) {
      background: Ivory;
    }
    &:nth-of-type(3) {
      background: FloralWhite;
    }
  }
}
</style>
