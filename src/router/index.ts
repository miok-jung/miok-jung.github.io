import { createMemoryHistory, createRouter } from "vue-router";

import HomeLayout from "../layouts/HomeLayout.vue";

const routes = [{ path: "/", component: HomeLayout }];

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
});
