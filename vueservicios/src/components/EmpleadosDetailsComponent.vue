<template>
  <div>
    <h1>Detalles Empleados Component</h1>
    <form>
        <label >Seleccione un empleado</label>
      <select  v-model="idEmpleado" class="w-25 p-2 border border-gray-300 rounded-md ">
        <option 
          v-for="empleado in empleados"
          :value="empleado.idEmpleado"
          :key="empleado"
        >
          {{ empleado.apellido }}
        </option>
      </select>
      <button v-on:click.prevent="onEmpleadoChange()">Ver detalles</button>
    </form>
  </div>
  <div>
    <h2 v-if="selectedEmpleado">Detalles del Empleado Seleccionado:</h2>
    <div v-if="selectedEmpleado">
      <p>
        <strong>ID Empleado:</strong>
        {{
          selectedEmpleado.idEmpleado
        }}
      </p>
      <p>
        <strong>Apellido:</strong>
        {{ selectedEmpleado.apellido }}
      </p>
      <p>
        <strong>Departamento:</strong>
        {{ selectedEmpleado.departamento }}
      </p>
    </div>
  </div>
</template>

<script>

import ServiceEmpleados from "@/services/ServiceEmpleados.js";
const service = new ServiceEmpleados();
export default {
  name: "EmpleadosDetailsComponent",
  data() {
    return {
      empleados: [],
      idEmpleado: 0,
      selectedEmpleado: null,
    };
  },
  mounted() {
    service.getEmpleados().then((data) => {
      this.empleados = data;
    });
  },methods:{
    onEmpleadoChange(){
        console.log("Empleado cambiado a: " + this.idEmpleado);
         service.getEmpleadoID(this.idEmpleado).then((data)=>{
        this.selectedEmpleado = data;
         })
    }
  }
};
</script>

<style></style>
