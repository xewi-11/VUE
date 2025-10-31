<template>
    <div>
        <h1>Home Component</h1>
        <h2 style="color: blue ;">{{ mensajeSaludo }}</h2>
    </div>
</template>

<script>
import ServiceEjemplo from "../services/ServiceEjemplo.js";
const servicio = new ServiceEjemplo();
export default {
    name: 'HomeComponent',
    data(){
        return{
            mensajeSaludo:""
        }
    },
    mounted() {
        
        this.mensajeSaludo=servicio.getSaludo("Alonso");
    }
}
</script>

<style>

</style>