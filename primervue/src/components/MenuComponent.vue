<template>
  <div>
    <ul id="menu">
      <li><router-link to="/">HOME</router-link></li>
      <li><router-link to="/cine">CINE</router-link></li>
      <li><router-link to="/musica">MUSICA</router-link></li>
      <li><router-link to="/ciclovida">Ciclo de vida</router-link></li>
      <li><router-link to="/directivas">Directivas vue</router-link></li>
      <li><router-link to="/pareimpar">numeros par e impar</router-link></li>
      <li>
        <router-link to="/propiedadconmutada">Propiedad Conmutada</router-link>
      </li>
      <li>
        <router-link to="/filters">Filtros</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MenuComponent",
};
</script>

<style>
@import "./../assets/css/estilos.css";
</style>
