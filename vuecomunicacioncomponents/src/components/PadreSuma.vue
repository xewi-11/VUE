<template>
  <div class="padre-suma">
    <h1 class="padre-title">Padre Suma Component</h1>

    <div class="controls">
      <h2 v-if="sumaTotal" class="suma">La suma es: {{ sumaTotal }}</h2>
      <button class="btn-random" v-on:click="generarRandom()">Generar random</button>
    </div>

    <ul class="lista">
      <li v-for="num in numeros" :key="num" class="lista-item">
        <HijoSuma :numero="num" v-on:sumarNumerosParent="sumarNumerosParent"/>
      </li>
    </ul>
  </div>
</template>

<script>
import HijoSuma from './HijoSuma.vue';

export default {
  name:"PadreSuma",
  data(){
    return{
        numeros:[10,20,30,40],
        sumaTotal:0
    }
  },
  methods:{
    generarRandom(){
        this.numeros.push(Math.floor(Math.random()*100)+1);
    },
    sumarNumerosParent(numero){
        this.sumaTotal+=numero;
    }
  },
  components:{
    HijoSuma
  }
}
</script>

<style scoped>
.padre-suma{
  max-width: 780px;
  margin: 1.2rem auto;
  padding: 1rem;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial;
  color: #2c3e50;
}
.padre-title{
  margin: 0 0 0.6rem 0;
  color: #c0392b; /* visually similar to previous red */
  font-size: 1.6rem;
  font-weight: 700;
}
.controls{
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
}
.suma{
  margin: 0;
  color: #34495e;
  font-weight: 600;
}
.btn-random{
  background: linear-gradient(90deg,#1976D2,#1565C0);
  color: white;
  border: none;
  padding: 0.45rem 0.9rem;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
}
.btn-random:hover{ box-shadow: 0 6px 18px rgba(21,101,192,0.14); transform: translateY(-2px) }
.lista{
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 0.8rem;
}
.lista-item{
  display: flex;
  align-items: center;
}

@media (max-width: 480px){
  .controls{ flex-direction: column; align-items: flex-start; gap: 0.5rem }
}
</style>