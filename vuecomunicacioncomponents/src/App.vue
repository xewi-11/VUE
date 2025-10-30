<template>
  <div class="menu-layout"><MenuTabla />
  <MenuComponent /></div>
  
  <router-view></router-view>
</template>

<script>
import MenuComponent from './components/MenuComponent.vue';


import MenuTabla from './components/MenuTabla.vue';







export default {
  name: "App",
  components: {
    MenuTabla,
    MenuComponent,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.menu-layout {
  display: flex;
  justify-content: center; /* centra los menús horizontalmente */
  align-items: flex-start; /* alinea los menús arriba */
  gap: 40px; /* espacio entre los menús */
  margin-top: 40px;
  flex-wrap: wrap; /* permite que se acomoden en varias filas si la pantalla es pequeña */
}
</style>
