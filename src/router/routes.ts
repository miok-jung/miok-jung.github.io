import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
  },
  {
    path: '/side',
    children: [
      {
        path: '',
        component: () => import('layouts/side/IndexLayout.vue'),
        children: [{ path: 'apple', component: () => import('pages/side/apple/IndexPage.vue') }],
      },
    ],
  },
  {
    path: '/test',
    component: () => import('layouts/TestLayout.vue'),
    children: [{ path: '', component: () => import('pages/TestPage.vue') }],
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
