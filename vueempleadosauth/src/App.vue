<template>
 <div>
  <div v-if="empleadosToken">
    <MenuComponent/>
    <router-view/>
  </div>
  <div v-else>
    <LoginComponent/>
  </div>
 </div>
</template>

<script>
import MenuComponent from './components/menucomponent.vue';
import LoginComponent from './components/logincomponent.vue';
import Global from './Global';

export default {
  name: 'App',
  components: {
    MenuComponent,
    LoginComponent
  },
  data() {
    return {
      empleadosToken: Global.tokenEmpleados // Asumiendo que el token está en Global.tokenEmpleados
    };
  }
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
</style>
