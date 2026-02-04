import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'

export const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.afterEach((to) => {
  const base = 'Project'
  const title = to.meta?.title as string | undefined
  document.title = title ? `${title} | ${base}` : base
})
