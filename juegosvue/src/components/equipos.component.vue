<template>
  <div>
    <h1>Detalle del equipo</h1>
    <div v-if="equipo">
        <h2>{{equipo.nombre}}</h2>
        <img :src="equipo.imagen" alt="Imagen del equipo" style="width: 150px; height: 150px;" />
        <p><strong>champions:</strong> {{equipo.champions}}</p>
        <p><strong>descripcion:</strong> {{equipo.descripcion}}</p>
    </div>
    <div v-if="jugadores && jugadores.length">
        <h2>Jugadores del equipo</h2>
        <JugadoresComponent :jugadoresProps="jugadores"/>
    </div>
    <div v-else>
        <p>Cargando información del equipo...</p>
    </div>
  </div>
</template>

<script>
import ServiceEquipos from '@/services/serviceequipos';
import JugadoresComponent from './jugadores.component.vue';

const service=new ServiceEquipos();
export default {
    name: "EquiposComponent",
    data() {
        return {
            equipo: null,
            jugadores: null
        };
    },
    methods: {
        cargarDatos() {
            const equipoId = this.$route.params.idEquipo;

            // Combine both API calls into a single Promise.all
            Promise.all([
                service.getEquipoById(equipoId),
                service.getJugadoresByEquipo(equipoId)
            ])
                .then(([equipoResponse, jugadoresResponse]) => {
                    this.equipo = equipoResponse;
                    this.jugadores = jugadoresResponse;
                })
                .catch(error => {
                    console.error("Error loading data:", error);
                });
        }
    },
    watch: {
        '$route.params.idEquipo'(newVal, oldVal) {
            if (newVal !== oldVal) {
                this.cargarDatos();
            }
        }
    },
    mounted() {
        this.cargarDatos();
    },
    components: {
        JugadoresComponent
    }
}
</script>

<style>

</style>