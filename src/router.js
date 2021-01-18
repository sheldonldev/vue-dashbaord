import {createRouter, createWebHistory} from "vue-router";
import Home from "./pages/Home.vue";
import Admin from "./pages/Admin.vue";
import Manual from "./pages/Manual.vue";

const routes = [
  {path: "/", component: Home},
  {path: "/admin", component: Admin},
  {path: "/manual", component: Manual},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

