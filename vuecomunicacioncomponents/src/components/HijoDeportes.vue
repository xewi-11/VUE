<template>
  <div>
    <h1 style="color: red">Hijo Deportes Component</h1>

    <h2>{{ nombreDeporte }}</h2>

    <button v-on:click="seleccionarFavorito">Selecionar favorito</button>
  </div>
</template>

<script>
export default {
  name: "HijoDeportes",
  props: ["nombreDeporte"],
  mounted(){
    if(this.dep!=null){
     console.log(this.dep);
    }
    
  },
  methods:{
    seleccionarFavorito(){
      console.log("Soy el hijo "+ this.nombreDeporte);
      //para enviar informacion se realiza a partir e la llamada con cada parametro separado por comas,dentro del metodo emit
      this.$emit("seleccionarFavoritoParent",this.nombreDeporte);
    }
  }
};
</script>

<style></style>
