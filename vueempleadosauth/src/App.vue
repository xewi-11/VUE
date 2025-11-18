<template>
 <div v-if="tokenEmpleados!='' ">
  <MenuComponent/>
  <router-view/>
 </div>
  <div v-else>
    <Logincomponent @updateToken="updateToken"/>
  </div>
</template>

<script>
import Logincomponent from './components/logincomponent.vue';
import MenuComponent from './components/menucomponent.vue'
import Global from './Global';


export default {
  name: 'App',
  components: {
    MenuComponent,
    Logincomponent
  },
  data() {
    return {
       tokenEmpleados:''
    }
  },
  methods:{
    updateToken(token){
      this.tokenEmpleados=token;
      Global.tokenEmpleados=token;
    }
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
