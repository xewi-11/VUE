import { createWebHistory,createRouter } from "vue-router";
import HomeComponent from "./components/HomeComponent.vue";
import DetailsSerie from "./components/DetailsSerie.vue";
import PersonajesComponents from "./components/PersonajesComponents.vue";
import PersonajesDetails from "./components/personajesDetails.vue";
import InsertarPersonaje from "./components/InsertarPersonaje.vue";
import UpdatePersonaje from "./components/UpdatePersonaje.vue";

const myRoutes=[
    {
        path:"/",component:HomeComponent
    },
    {
        path:"/insertar",component:InsertarPersonaje
    },
    {
        path:"/update",component:UpdatePersonaje
    },
    {
        path: "/serie/:idSerie",component:DetailsSerie
    }
    ,
    {
        path: "/personajes/:idSerie",component:PersonajesComponents
    }
    ,
    {
        path: "/personajesDetails/:idPersonaje",component:PersonajesDetails
    }
];
const router=createRouter({
    history:createWebHistory(),
    routes:myRoutes
});
export default router;
