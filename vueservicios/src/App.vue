<template>
  
  <CustomersComponent />
</template>

<script>

import CustomersComponent from './components/CustomersComponent.vue';


export default {
  name: 'App',
  components: {
    CustomersComponent
  }
}
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
