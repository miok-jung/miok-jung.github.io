import { createRouter, createWebHistory } from 'vue-router'

import HomeLayout from '../layouts/HomeLayout.vue'
import HomePages from '../pages/HomePage.vue'
import TestLayout from '../layouts/TestLayout.vue'
import TestPage from '../pages/TestPage.vue'

const routes = [
  {
    path: '/',
    component: HomeLayout,
    children: [
      {
        path: '',
        component: HomePages,
      },
    ],
  },
  {
    path: '/test',
    component: TestLayout,
    children: [{ path: '', component: TestPage }],
  },
]

export const router = createRouter({
  // NOTE
  // history: createMemoryHistory(),
  // 주소창이 바뀌지 않는다.
  // hash가 외부에서 안보인다.
  // 새로고침 공유가 불가하다.
  // 테스트, SSR, 임베디드 용도
  history: createWebHistory(),
  routes,
})
