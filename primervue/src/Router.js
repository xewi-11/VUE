//necesitamos las librerias de navegacion
import { createRouter, createWebHistory } from "vue-router";

import HomeComponent from "./components/HomeComponent.vue";
import CineComponent from "./components/CineComponent.vue";
import MusicaComponent from "./components/MusicaComponent.vue";
//un array con las rutas de navegacion

const myRoutes = [
  { path: "/", component: HomeComponent },
  { path: "/musica", component: MusicaComponent },
  { path: "/cine", component: CineComponent },
];

//creamos una variable para el router indicando el tipo de navegacion y las rutas

const router = createRouter({
  history: createWebHistory(),
  routes: myRoutes,
});

// la constante router es la que utilizala el fichero main,js,asique debemos exportarla para poder usarla

export default router;
