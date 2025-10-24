<template>
  <div>
   <h1>Mi primer vue de viernes,que ilusion</h1> 
   <h2>su nombre es {{ nombre }}</h2>
   <h2>su edad es {{ edad }}</h2>
   <img src="./../assets/images/kaneki.png" alt="">
  </div>
</template>

<script>
 //vue utiliza codigo js especial 
//cada component que generemos debe tener un nombre obligatorio y debemos exportarlo con dicho nombr. el name es la etiqueta que utilizaran otros componentes para dibujar -->

export default {
  name:"HolaMUndo",
  data(){
    // las variables son declaradas en formato json dentro de un return
    return{
      nombre:"Alumno",
      edad:25,
      miArray:[],
      obejto:{}
    }
  }
}
</script>

<style>
   h1{
    color: blue;
   }
   @import url('./../assets/css/estilos.css');
</style>