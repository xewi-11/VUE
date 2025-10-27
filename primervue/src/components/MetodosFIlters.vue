<template>
  <div>
    <h1>Métodos y Filtros</h1>
    <ul>
      <!-- en directivas usar in en vez de of -->
      <li v-for="num in numeros" :key="num">
        Numero: {{ num }}, Doble: {{ $filters.getNumeroDoble(num) }}
      </li>
    </ul>
    <hr />
    <ul>
      <li v-for="item in palabras" :key="item">
        {{ $filters.mayusculas(item) }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MetodosFIlters",
  data() {
    return {
      numeros: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      palabras: ["hola", "que", "tal", "estas"],
    };
  },
};
</script>

<style scoped>
div {
  max-width: 500px;
  margin: 40px auto;
  padding: 24px;
  background: #f9f9f9;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}
h1 {
  color: #2c3e50;
  font-size: 2rem;
  margin-bottom: 18px;
  text-align: center;
}
ul {
  list-style: none;
  padding: 0;
  margin-bottom: 18px;
}
li {
  background: #fff;
  margin-bottom: 10px;
  padding: 12px 18px;
  border-radius: 8px;
  box-shadow: 0 1px 4px rgba(44, 62, 80, 0.07);
  font-size: 1.1rem;
  color: #34495e;
}
hr {
  border: none;
  border-top: 2px solid #e1e1e1;
  margin: 24px 0;
}
</style>
