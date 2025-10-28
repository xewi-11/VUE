<template>
  <div>
    <h1 style="color: blue">Padre Deportes Component</h1>
    <hr />
    <h2 v-if="favorito" style="background-color: yellow;">Su deporte favorito es {{ favorito }}</h2>
    <ul>
      <li v-for="sport in deportes" :key="sport">
        <HijoDeportes :nombreDeporte="sport" v-on:seleccionarFavoritoParent="seleccionarFavoritoParent" />
      </li>
    </ul>
    
  </div>
</template>

<script>
import HijoDeportes from "./HijoDeportes.vue";
export default {
  name: "PadreDeportes",
  components: {
    HijoDeportes,
  },
  data() {
    return {
      deportes: ["Futbol", "Baloncesto", "Tenis", "Rugby"],
      favorito:null
    };
  },
  methods:{
    seleccionarFavoritoParent(deporteFavorito){
      this.favorito=deporteFavorito;
    }
  }
};
</script>

<style></style>
