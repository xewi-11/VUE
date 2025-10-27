<template>
  <div>
    <h2>Tabla Multiplicar Component</h2>
    <label>Introduce numero</label>
    <input type="number" v-model="numero" />
    <button v-on:click="generarTabla()">Generar tabla</button>
    <ul>
      <li v-for="num in resultado" :key="num">
        {{ operacion[resultado.indexOf(num)] + " = " + num }}
      </li>
    </ul>
    <hr />
    <h2>Tabla multiplicar con directivas</h2>
    <label>Introduce numero</label>
    <input type="number" v-model="numero2" />
    <ul v-if="numero2 != null">
      <li v-for="num in 10" :key="num">
        {{ numero2 + "x" + num + "=" + numero2 * num }}
      </li>
    </ul>
    <hr />

    <h2>Tabla multiplicar con filtros</h2>
    <label>Introduce numero</label>
    <input type="number" v-model="numero3" />
    <table v-if="numero3 != null" border="1" style="margin-top: 10px">
      <thead>
        <tr>
          <th>Operación</th>
          <th>Resultado</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="num in 10" :key="num">
          <td v-html="$filters.getOperacion(numero3, num)"></td>
          <td v-html="$filters.getResultado(numero3, num)"></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "TablaMultiplicar",
  data() {
    return {
      resultado: [],
      operacion: [],
      numero: 0,
      numero2: null,
      numero3: null,
    };
  },
  methods: {
    generarTabla() {
      this.resultado = [];
      this.operacion = [];
      for (let i = 1; i <= 10; i++) {
        this.resultado.push(this.numero * i);
        this.operacion.push(this.numero + " x " + i);
      }
      return this.resultado;
    },
  },
};
</script>

<style></style>
