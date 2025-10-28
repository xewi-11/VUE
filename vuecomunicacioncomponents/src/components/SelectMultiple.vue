<template>
  <div>
    <form >
    <select multiple v-model="selectedOptions" @input="ocultarSeleccionados">
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
      <option value="4">Option 4</option>
      <option value="5">Option 5</option>
      <option value="6">Option 6</option>
    </select>
    <button @click.prevent="mostrarseleccionados">Mostrar Seleccionados</button>
    </form>
    <p v-if="mostrar"> Selected Options: {{ selectedOptions.join(', ') }}</p>
  </div>
</template>

<script>
export default {
    name:"SelectMultiple",
    data(){
        return{
            selectedOptions: [],
            mostrar:false
        }
    },
    methods:{
        mostrarseleccionados(){
            this.mostrar=true
        },
        ocultarSeleccionados(){
            this.mostrar=false
        }
    }
}
</script>

<style>

</style>