import { createRouter, createWebHistory } from "vue-router";
import Homepage from "../components/Homepage.vue";
import Shop from "../components/Shop.vue";
import Tips from "../components/Tips.vue";
const routes = [
  {
    path: "/",
    component: Homepage,
  },
  {
    path: "/Shop",
    component: Shop,
  },
  {
    path: "/Tips",
    component: Tips,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;