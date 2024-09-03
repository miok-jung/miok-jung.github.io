import { RouteRecordRaw } from 'vue-router';

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
        component: () => import('pages/IndexPage.vue'),
      },
      {
        path: '/calculator',
        meta: {
          title: 'Simple Calculator',
        },
        component: () => import('pages/CalculatorPage.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
