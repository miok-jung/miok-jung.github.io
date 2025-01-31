import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        meta: {
          title: 'Portfolio',
        },
        component: () => import('pages/MainPage.vue'),
      },
      {
        path: 'calculator',
        meta: {
          title: 'Mini Project: Calculator',
        },
        component: () => import('pages/CalculatorPage.vue'),
      },
    ],
  },
  {
    path: '/:catchAll(.*)*',
    meta: { title: '페이지를 찾을 수 없음' },
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
