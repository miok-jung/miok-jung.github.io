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
  {
    path: '/study',
    component: () => import('layouts/StudyLayout.vue'),
    children: [
      {
        path: '',
        meta: {
          title: 'Study Record Main',
        },
        component: () => import('pages/study/IndexPage.vue'),
      },
      {
        path: 'threejs',
        meta: {
          title: 'Three Study',
        },
        component: () => import('pages/study/ThreeJsPage.vue'),
      },
      {
        path: 'vanillajs',
        meta: {
          title: 'study: VanillaJS',
        },
        component: () => import('pages/study/VanillaJsPage.vue'),
      },
      {
        path: 'carouseljs',
        meta: {
          title: 'study: CarouselJS',
        },
        component: () => import('pages/study/CarouselJsPage.vue'),
      },
      {
        path: 'shop',
        meta: {
          title: 'study: Shop',
        },
        component: () => import('pages/study/ShopPage.vue'),
      },
      {
        path: 'lottie',
        meta: {
          title: 'study: lottie player',
        },
        component: () => import('pages/study/LottiePlayerPage.vue'),
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
