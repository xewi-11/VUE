<template>
  
<div>
    <h1>Componente de Jugadores</h1>
     <div v-if="jugadores && jugadores.length">
        <h2>Jugadores del equipo</h2>
        <div class="card-container" style="display: flex; flex-wrap: wrap; gap: 20px;">
            <div v-for="jugador in jugadores" :key="jugador.idJugador" class="card" style="width: 200px; border: 1px solid #ccc; border-radius: 8px; overflow: hidden;">
                <img :src="jugador.imagen" alt="Imagen del jugador" style="width: 100%; height: 150px; object-fit: cover;" />
                <div class="card-body" style="padding: 10px;">
                    <h5 class="card-title">{{ jugador.nombre }}</h5>
                    <p class="card-text"><strong>Posición:</strong> {{ jugador.posicion }}</p>
                    <p class="card-text"><strong>Fecha de Nacimiento:</strong> {{ jugador.fechaNacimiento }}</p>
                    <p class="card-text"><strong>País:</strong> {{ jugador.pais }}</p>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import ServiceEquipos from '@/services/serviceequipos';

const service=new ServiceEquipos();
export default {
    name: "JugadoresComponent",
    props: ["jugadoresProps"],
    data(){
        return{
            jugadores:null
        }
    },methods:{
        cargarJugadores(){
            if(this.$route.params.nombre){
                  service.getJugadoresPorNombre(this.$route.params.nombre).then(response=>{
                      this.jugadores=response;
                  });
            }else{
                console.table(this.jugadoresProps);
                  this.jugadores=this.jugadoresProps;
            }
        }
    },
    mounted(){
        this.cargarJugadores();
    },
    watch:{
         '$route.params.nombre'(newVal, oldVal) {
            if(newVal !== oldVal){
                  this.cargarJugadores();
            }
         },
         jugadoresProps: {
            handler(newVal) {
                this.jugadores = newVal;
            },
            deep: true
        }
    }
}
</script>

<style>

</style>