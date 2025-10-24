<template>
  <div id="direct">
    <h1>Ejemplos directivas vue</h1>
    <h3>{{ $data }}</h3>
    <ul v-if="series.length > 0">
      <li v-for="serie in series" :key="serie">
        {{ serie }}
      </li>
    </ul>
    <label>Introduzca un numero</label>
    <input type="number" v-model="numero" />
    <label>Introduzca la serie</label>
    <input type="text" v-model="serieNueva" />
    <button @click="agregarSerie()">Agregar serie</button>

    <h3 v-if="numero > 0">positivo</h3>
    <h3 v-else-if="numero < 0">Negativo</h3>
    <h3 v-else>Cero</h3>
  </div>
</template>

<script>
export default {
  name: "DirectivasComponent",
  data() {
    return {
      series: ["Futurama", "Minhunter", "the boys", "stanger things"],
      numero: 0,
      nombre: "Alumno",
      serieNueva: "",
    };
  },
  methods: {
    agregarSerie() {
      this.series.push(this.serieNueva);
    },
  },
};
</script>

<style>
h3 {
  color: green;
  background-color: lightcyan;
}
div#direct {
  margin: 20px;
  padding: 20px;
  border: 2px solid black;
}
</style>
