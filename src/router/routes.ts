import type { RouteRecordRaw } from 'vue-router'

import HomeLayout from '../layouts/HomeLayout.vue'
import HomePages from '../pages/HomePage.vue'
import TestLayout from '../layouts/TestLayout.vue'
import TestPage from '../pages/TestPage.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: HomeLayout,
    children: [
      {
        path: '',
        component: HomePages,
        meta: { title: '홈' },
      },
    ],
  },
  {
    path: '/test',
    component: TestLayout,
    children: [
      {
        path: '',
        component: TestPage,
        meta: { title: '테스트' },
      },
    ],
  },
]

export default routes
