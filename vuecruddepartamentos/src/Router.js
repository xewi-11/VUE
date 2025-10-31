import { createRouter,createWebHistory } from "vue-router"
import HomeComponent from "./components/HomeComponent.vue";
import InsertDepartamento from "./components/InsertDepartamento.vue";
import DetailsDepartamento from "./components/DetailsDepartamento.vue";
import UpdateDepartamento from "./components/UpdateDepartamento.vue";

const myRoutes=[
    {
        path:"/", component:HomeComponent
    },
    {
        path:"/insert", component:InsertDepartamento
    }
    ,
    {
        path:"/details/:numero/:nombre/:localidad", component:DetailsDepartamento
    }
    ,
    {
        path:"/update/:id", component:UpdateDepartamento
    }
]
const router=createRouter({
    history:createWebHistory(),
    routes:myRoutes
})
export default router;