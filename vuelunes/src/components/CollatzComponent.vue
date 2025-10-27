<template>
  <div>
    <h2>Collatz Component</h2>

    <label>Introduce numero</label>
    <input type="number" v-model="numero" />
    <button v-on:click="generarCollatz()">Realizar Dibujo</button>
    <ul>
      <li v-for="num in secuencia" :key="num" v-html="$filters.esPar(num)"></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "CollatzComponent",
  data() {
    return {
      numero: 0,
      secuencia: [],
    };
  },
  methods: {
    generarCollatz() {
      this.secuencia = [];
      let n = this.numero;
      while (n !== 1) {
        this.secuencia.push(n);
        if (n % 2 === 0) {
          n = n / 2;
        } else {
          n = 3 * n + 1;
        }
      }
      this.secuencia.push(1);
      return this.secuencia;
    },
  },
};
</script>

<style></style>
