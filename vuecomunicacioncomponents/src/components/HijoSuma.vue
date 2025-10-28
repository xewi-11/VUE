<template>
  <div>
    <div class="hijo-suma">
      <h1 class="hijo-number">Numero hijo {{ numero }}</h1>

      <button class="btn-sumar" @click="sumarNumeros()">Sumar numero</button>
    </div>
  </div>
</template>

<script>
export default {
    name:"HijoSuma",
    props:["numero"],
    methods:{
        sumarNumeros(){
            console.log("Sumando numero "+ this.numero);
            this.$emit("sumarNumerosParent",this.numero);
        }
    }
}
</script>

<style scoped>
.hijo-suma{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.6rem;
  padding: 0.6rem 1rem;
  background: linear-gradient(180deg, rgba(255,255,255,0.6), rgba(245,245,245,0.6));
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(44,62,80,0.08);
}
.hijo-number{
  color: #e74c3c; /* same tone as original inline style */
  font-size: 1.25rem;
  margin: 0;
  font-weight: 600;
}
.btn-sumar{
  background: linear-gradient(90deg,#4CAF50,#43A047);
  border: none;
  color: #fff;
  padding: 0.45rem 0.8rem;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  transition: transform 120ms ease, box-shadow 120ms ease, opacity 120ms;
}
.btn-sumar:hover{ 
  transform: translateY(-2px);
  box-shadow: 0 6px 14px rgba(67,160,71,0.16);
}
.btn-sumar:active{ transform: translateY(0); opacity: 0.95 }

/* small responsive tweak */
@media (min-width: 720px){
  .hijo-suma{ padding: 0.8rem 1.2rem }
}
</style>