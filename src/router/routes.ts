import type { RouteRecordRaw } from 'vue-router'

import PortfolioLayout from '../layouts/PortfolioLayout.vue'
import PortfolioPages from '../pages/PortfolioPage.vue'
import TestLayout from '../layouts/TestLayout.vue'
import TestPage from '../pages/TestPage.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: PortfolioLayout,
    children: [
      {
        path: '',
        component: PortfolioPages,
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
        name: 'test',
        component: TestPage,
        meta: { title: '테스트' },
      },
    ],
  },
]

export default routes
