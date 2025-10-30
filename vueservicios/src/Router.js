import { createWebHistory,createRouter } from "vue-router";
import HomeComponent from "./components/HomeComponent.vue";
import CochesComponent from "./components/CochesComponent.vue";
import EmpleadosDetailsComponent from "./components/EmpleadosDetailsComponent.vue";
import CustomersComponent from "./components/CustomersComponent.vue";

const myRoutes=[
    {path:"/",component:HomeComponent},
    {path:"/coches",component:CochesComponent},
    {path:"/empleados",component:EmpleadosDetailsComponent},
    {path:"/customers",component:CustomersComponent},

]

const router = createRouter({
    history: createWebHistory(),
    routes: myRoutes
});

export default router;
