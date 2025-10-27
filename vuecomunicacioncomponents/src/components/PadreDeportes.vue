<template>
  <div>
    <h1 style="color: blue">Padre Deportes Component</h1>
    <hr />
    <HijoDeportes :deportes="deportes" />
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
    };
  },
};
</script>

<style></style>
