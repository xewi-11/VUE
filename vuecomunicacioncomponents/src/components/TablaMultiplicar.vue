<template>
  <div class="tabla-container">
    <h2>Tabla de Multiplicar del {{ $route.params.numero }}</h2>
    <table class="tabla-multiplicar">
      <thead>
        <tr>
          <th>Operación</th>
          <th>Resultado</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(oper, index) in operacion" :key="index">
          <td>{{ oper }}</td>
          <td>{{ resultado[index] }}</td>
        </tr>
      </tbody>
    </table>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      operacion: [],
      resultado: []
    }
  },
  mounted() {
    this.generarTabla()
  },
  watch: {
    '$route.params.numero'(newVal, oldVal) {
      if (newVal != oldVal) {
        this.generarTabla()
      }
    }
  },
  methods: {
    generarTabla() {
      this.operacion = []
      this.resultado = []
      const numero = this.$route.params.numero
      for (let i = 1; i <= 10; i++) {
        this.operacion.push(`${numero} x ${i}`)
        this.resultado.push(numero * i)
      }
    }
  }
}
</script>

<style scoped>
.tabla-container {
  max-width: 400px;
  margin: 40px auto;
  background: #f8f9fa;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.tabla-container h2 {
  text-align: center;
  color: #2c3e50;
  margin-bottom: 20px;
  font-weight: 600;
}

.tabla-multiplicar {
  width: 100%;
  border-collapse: collapse;
  background: white;
}

.tabla-multiplicar th {
  background-color: #007bff;
  color: white;
  text-align: left;
  padding: 10px;
  font-weight: 600;
}

.tabla-multiplicar td {
  padding: 10px;
  border-bottom: 1px solid #ddd;
}

.tabla-multiplicar tr:hover {
  background-color: #f1f1f1;
  transition: background 0.2s;
}

.tabla-multiplicar tbody tr:last-child td {
  border-bottom: none;
}
</style>
