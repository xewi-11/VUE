import { createRouter,createWebHistory } from "vue-router"
import Homecomponent from "./components/homecomponent.vue";
import Logincomponent from "./components/logincomponent.vue";


const myRoutes=[
    {
        path:"/", component:Homecomponent
    },
    {
        path:"/login", component:Logincomponent
    }
]
const router=createRouter({
    history:createWebHistory(),
    routes:myRoutes
})
export default router;