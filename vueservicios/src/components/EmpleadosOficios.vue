<template>
  <div class="empleados-container">
    <h1>🌌 Empleados por Oficio</h1>
    <table class="tabla-empleados">
      <thead>
        <tr>
          <th>ID Empleado</th>
          <th>Apellido</th>
          <th>Oficio</th>
          <th>Salario</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="empleado in empleados" :key="empleado.idEmpleado">
          <td>{{ empleado.idEmpleado }}</td>
          <td>{{ empleado.apellido }}</td>
          <td>{{ empleado.oficio }}</td>
          <td>{{ empleado.salario }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import ServiceEmpleados from "@/services/ServiceEmpleados";

const service=new ServiceEmpleados();
export default {
  name: "EmpleadosOficios",
  data() {
    return {
      empleados: [],
    };
  },
  mounted() {
      service.getEmpleadosOficio(this.$route.params.oficio).then((data)=>{
          this.empleados=data;
      });
  },
  watch: {
    "$route.params.oficio"(newOficio, oldOficio) {
      if (newOficio != oldOficio) {
        service.getEmpleadosOficio(newOficio).then((data) => {
          this.empleados = data;
        });
      }
    },
  },
};
</script>

<style scoped>
.empleados-container {
  background: radial-gradient(circle at top left, #0b132b, #1c2541, #3a506b);
  color: #e0eaff;
  min-height: 100vh;
  padding: 40px;
  font-family: "Orbitron", sans-serif;
  text-align: center;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 30px;
  color: #5bc0be;
  text-shadow: 0 0 8px #5bc0be, 0 0 15px #3a506b;
  letter-spacing: 2px;
  border-bottom: 2px solid #5bc0be;
  display: inline-block;
  padding-bottom: 10px;
}

.tabla-empleados {
  width: 80%;
  margin: 0 auto;
  border-collapse: collapse;
  box-shadow: 0 0 25px rgba(91, 192, 190, 0.4);
  border-radius: 10px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
}

.tabla-empleados thead {
  background: rgba(91, 192, 190, 0.15);
}

.tabla-empleados th {
  padding: 15px;
  color: #5bc0be;
  text-transform: uppercase;
  letter-spacing: 1px;
  border-bottom: 2px solid #5bc0be;
}

.tabla-empleados td {
  padding: 12px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  transition: background 0.3s ease;
}

.tabla-empleados tr:hover td {
  background: rgba(91, 192, 190, 0.1);
}

@media (max-width: 768px) {
  .tabla-empleados {
    width: 100%;
    font-size: 0.9rem;
  }

  h1 {
    font-size: 2rem;
  }
}
</style>
