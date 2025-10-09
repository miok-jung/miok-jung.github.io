import { defineRouter } from '#q-app/wrappers'
import {
  createMemoryHistory,
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from 'vue-router'
import routes from './routes'

export default defineRouter(function () {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : process.env.VUE_ROUTER_MODE === 'history'
      ? createWebHistory
      : createWebHashHistory

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,
    history: createHistory(process.env.VUE_ROUTER_BASE),
  })
  if (process.env.CLIENT) {
    Router.afterEach((to) => {
      const metaTitle = typeof to.meta?.title === 'function' ? to.meta.title(to) : to.meta?.title
      document.title = metaTitle ? `${metaTitle} | Portfolio` : 'Portfolio'
    })
  }

  return Router
})
