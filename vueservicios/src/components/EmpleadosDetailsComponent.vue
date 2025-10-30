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
import axios from "axios";
import Global from "../Global.js";
var urlApi = Global.urlEmpleados;
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
    let request = "api/Empleados";
    axios.get(urlApi + request).then((response) => {
      console.log("Leyendo datos empleados");
      this.empleados = response.data;
    });
  },methods:{
    onEmpleadoChange(){
        console.log("Empleado cambiado a: " + this.idEmpleado);
         let request="api/Empleados/" + this.idEmpleado;
         axios.get(urlApi + request).then((response) => {
           console.log("Leyendo datos empleado");
           this.selectedEmpleado = response.data;
         });
    }
  }
};
</script>

<style></style>
