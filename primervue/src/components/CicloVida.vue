<template>
  <div>
    <h1>ciclo vida y mtods vue</h1>
    <h2 style="color:red">{{mensaje}}</h2>
    <button @click="cambiarMensaje()">Cambiar mensaje</button>
  </div>
</template>

<script>
export default {
   name:"CilcloVida",
   data(){
    return{
        mensaje:"Hoy es viernes!!!"
    }
   },
   methods:{
    //aqui incluimos metodos personalizados
    cambiarMensaje(){
        // para acceder a las variables de data() del component debemos utilizar la plabra this
        this.mensaje="Hoy se saleee!!!!";
    }
   },
   mounted(){
    console.log("Component mounted");
   },
   created(){
    console.log("component created");

   },
   updated(){
        console.log("component updated");
   },
   unmounted(){
    console.log("component unmounted");
   }
}
</script>

<style>

</style>