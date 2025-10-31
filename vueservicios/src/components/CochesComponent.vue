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
import  ServiceCoche  from '@/services/ServiceCoche.js';
// si necesitamos variables para todo el component y sus metodos se declaran aqui
const service= new ServiceCoche();
export default {
    name: 'CochesComponent',
    data(){
        return {
            coches:[]
        }
    },
    mounted(){

        service.GetCoches().then(response=>{
            this.coches=response;
        });
        console.log(this.coches);
    }

}
</script>

<style>

</style>