import { defineRouter } from '#q-app/wrappers';
import {
  createMemoryHistory,
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from 'vue-router';
import routes from './routes';

export default defineRouter(function () {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : process.env.VUE_ROUTER_MODE === 'history'
      ? createWebHistory
      : createWebHashHistory;

  // 복원 적용할 라우터 경로
  const scrollSavedPaths = ['/side/apple'];

  const Router = createRouter({
    history: createHistory(process.env.VUE_ROUTER_BASE),
    routes,

    scrollBehavior(to, from, savedPosition) {
      if (scrollSavedPaths.includes(to.path) && savedPosition) {
        return savedPosition; // 이전 스크롤 위치로 복원
      }
      return { left: 0, top: 0 }; // 기본: 항상 맨 위로 이동
    },
  });

  return Router;
});
