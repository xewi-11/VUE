<template>
  <div>
    <h1 style="color: red">Hijo Deportes Component</h1>

    <ul>
      <li v-for="dep in deportes" :key="dep">{{ dep }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HijoDeportes",
  props: ["deportes"],
};
</script>

<style></style>
