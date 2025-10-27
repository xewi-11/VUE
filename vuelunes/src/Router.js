import CollatzComponent from "./components/CollatzComponent.vue";
import HomeComponent from "./components/HomeComponent.vue";
import { createRouter, createWebHistory } from "vue-router";
import TablaMultiplicar from "./components/TablaMultiplicar.vue";
const myRoutes = [
  {
    path: "/",
    component: HomeComponent,
  },
  {
    path: "/collatz",
    component: CollatzComponent,
  },
  {
    path: "/tablamultiplicar",
    component: TablaMultiplicar,
  },
];

const router = createRouter({ history: createWebHistory(), routes: myRoutes });

export default router;
