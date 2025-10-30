<template>
  <div> 
    <h1>Coches Component</h1>
    <div v-for="car in coches" :key="car">
        <h3 style="color: blue;">
            {{ car.marca }}  {{ car.modelo }}  
            
        </h3> 
        <p>Driver: {{ car.conductor }}</p>
         <img :src="car.imagen" alt="" style="width: 150px; height: 150px;"/>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Global from '../Global.js';
// si necesitamos variables para todo el component y sus metodos se declaran aqui
let urlApi=Global.urlCoches;
export default {
    name: 'CochesComponent',
    data(){
        return {
            coches:[]
        }
    },
    mounted(){
        let request="webresources/coches";
        axios.get(urlApi+request).then((response)=>{
            console.log("Leyendo datos");
            this.coches=response.data;
        })
    }

}
</script>

<style>

</style>