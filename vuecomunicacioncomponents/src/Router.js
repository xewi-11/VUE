import { createWebHistory, createRouter } from "vue-router";

import ComicsComponent from "./components/ComicsComponent.vue";
import PadreDeportes from "./components/PadreDeportes.vue";
import PadreSuma from "./components/PadreSuma.vue";
import NumeroDoble from "./components/NumeroDoble.vue";
import TablaMultiplicar from "./components/TablaMultiplicar.vue";

const myRoutes=[
    {path:"/",component:PadreDeportes},
    {path:"/comics",component:ComicsComponent},
    {path:"/padre-suma",component:PadreSuma},
    {path:"/numero-doble/:numero?",component:NumeroDoble},
    {path:"/tabla-multiplicar/:numero?",component:TablaMultiplicar}
]
const router = createRouter({
    history: createWebHistory(),
    routes: myRoutes
});
export default router;