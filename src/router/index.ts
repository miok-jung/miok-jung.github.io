import { createMemoryHistory, createRouter } from "vue-router";

import HomeLayout from "../layouts/HomeLayout.vue";
import HomePages from "../pages/HomePage.vue";

const routes = [
  {
    path: "/",
    component: HomeLayout,
    children: [
      {
        path: "",
        component: HomePages,
      },
    ],
  },
];

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
});
