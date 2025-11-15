<template>
  <div>
    <h1>Detalle del equipo</h1>
    <div v-if="equipo">
        <h2>{{equipo.nombre}}</h2>
        <img :src="equipo.imagen" alt="Imagen del equipo" style="width: 150px; height: 150px;" />
        <p><strong>champions:</strong> {{equipo.champions}}</p>
        <p><strong>descripcion:</strong> {{equipo.descripcion}}</p>
       
    </div>
    <div v-else>
        <p>Cargando información del equipo...</p>
    </div>
  </div>
</template>

<script>
import ServiceEquipos from '@/services/serviceequipos';

const service=new ServiceEquipos();
export default {
    name: "EquiposComponent",
    data(){
        return{
            equipo:null,
            jugadores:null
        }
    },
    methods:{
        cargarEquipo(){
         service.getEquipoById(this.$route.params.idEquipo).then(response=>{
             this.equipo=response;
         });
        }
    },
    mounted(){
        this.cargarEquipo();
    }
}
</script>

<style>

</style>