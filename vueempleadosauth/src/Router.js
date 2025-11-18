import { createRouter,createWebHistory } from "vue-router"
import Homecomponent from "./components/homecomponent.vue";
import Logincomponent from "./components/logincomponent.vue";
import Empleadosdetails from "./components/empleadosdetails.vue";
import Subordinadosempleado from "./components/subordinadosempleado.vue";


const myRoutes=[
    {
        path:"/", component:Homecomponent
    },
    {
        path:"/login", component:Logincomponent
    }
    ,
    {
        path:"/detalles", component:Empleadosdetails
    }
    ,
    {
        path:"/subordinados", component:Subordinadosempleado
    }
]
const router=createRouter({
    history:createWebHistory(),
    routes:myRoutes
})
export default router;