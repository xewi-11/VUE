<template>
  <div>
    <h1>Numero: {{ numero }}</h1>
    <h2>{{ mensaje }}</h2>
    <label>Introduce un numero</label>
    <input type="number" v-model="numero" />
    <button v-on:click="generarRamdom()">Generar numero ramdon</button>
  </div>
</template>

<script>
export default {
  name: "ParImpar",
  data() {
    return {
      numero: 0,
      mensaje: "es par",
    };
  },
  methods: {
    esPar() {
      return this.numero % 2 === 0;
    },
    generarRamdom() {
      this.numero = Math.floor(Math.random() * 100) + 1;
      this.actualizarMensaje();
    },
    actualizarMensaje() {
      this.mensaje = this.esPar() ? "es par" : "es impar";
    },
  },
  mounted() {
    this.actualizarMensaje();
  },
  updated() {
    this.actualizarMensaje();
  },
  created() {
    this.actualizarMensaje();
  },
};
</script>

<style></style>
