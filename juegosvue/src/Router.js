import { createRouter,createWebHistory } from "vue-router"
import HomeComponent from "./components/home.component.vue";
import EquiposComponent from "./components/equipos.component.vue";




const myRoutes=[
    {
        path:"/", component:HomeComponent
    }
    ,
    {
        path:"/equipos/:idEquipo", component:EquiposComponent
    }
]
const router=createRouter({
    history:createWebHistory(),
    routes:myRoutes
})
export default router;