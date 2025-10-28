<template>
  <ComicsComponent />
</template>

<script>
import ComicsComponent from './components/ComicsComponent.vue';




export default {
  name: "App",
  components: {
    ComicsComponent,
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
</style>
