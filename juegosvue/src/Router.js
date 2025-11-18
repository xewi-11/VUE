import { createRouter,createWebHistory } from "vue-router"
import HomeComponent from "./components/home.component.vue";
import EquiposComponent from "./components/equipos.component.vue";
import JugadoresComponent from "./components/jugadores.component.vue";
import Insertararchivos from "./components/insertararchivos.vue";




const myRoutes=[
    {
        path:"/", component:HomeComponent
    }
    ,
    {
        path:"/equipos/:idEquipo", component:EquiposComponent
    }
    ,
    {
        path:"/jugadores/:nombre", component:JugadoresComponent
    }
    ,
    {
        path:"/insertararchivos", component:Insertararchivos
    }
]
const router=createRouter({
    history:createWebHistory(),
    routes:myRoutes
})
export default router;