import HomeComponent from "./components/HomeComponent.vue";
import CineComponent from "./components/CineComponent.vue";
import MusicaComponent from "./components/MusicaComponent.vue";
import { createRouter, createWebHistory } from "vue-router";
const myRoutes = [
  { path: "/", component: HomeComponent },
  { path: "/musica", component: MusicaComponent },
  { path: "/cine", component: CineComponent },
];
const router = createRouter({
  history: createWebHistory(),
  routes: myRoutes,
});
export default router;
