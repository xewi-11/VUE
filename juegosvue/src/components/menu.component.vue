<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link class="nav-link active" aria-current="page" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/insertar-archivos">Subir archivos</router-link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Equipos
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
           
                <li v-for="equipo in equipos" :key="equipo.idEquipo">
                  <router-link class="dropdown-item" :to="'/equipos/' + equipo.idEquipo">{{equipo.nombre}}</router-link>
                </li>
            
          </ul>
        </li>
      </ul>
      <form class="d-flex">
        <input  v-model="cajaNombre" class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button  class="btn btn-outline-success" type="submit">Search</button>
      </form>
      
    </div>
  </div>
</nav>
  </div>
</template>

<script>
import ServiceEquipos from '@/services/serviceequipos';

const service =new ServiceEquipos();
export default {
    name: "MenuComponent",
    data() {
        return {
            equipos: [],
            cajaNombre: ''
        }
    },
    methods:{
         cargarEquipos(){
             service.getEquipos().then(response=>{
                    this.equipos=response;
             });
         }
    },
    mounted(){
        this.cargarEquipos();
    }
}
</script>

<style>

</style>