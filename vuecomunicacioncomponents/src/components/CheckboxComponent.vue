<template>
  <div class="container">
    <h2 v-if="sumaTotal">💰 La suma es {{ sumaTotal }}</h2>
    <button @click="generarCheckbox" class="btn">Generar checkboxes</button>
    <form class="checkbox-form">
      <div 
        v-for="(checkbox, index) in checkboxes" 
        :key="index" 
        class="checkbox-card"
        :class="{ 'checked': checkbox.checked }"
      >
        <input 
          type="checkbox" 
          :id="'checkbox-' + index" 
          v-model="checkbox.checked" 
          @change.prevent="sumarNumeros"
        />
        <label :for="'checkbox-' + index">{{ checkbox.label }}</label>
      </div>
    </form>
  </div>
</template>

<script>
export default {
   name: 'CheckboxComponent',
   data(){
    return{
       checkboxes: [],
       sumaTotal: null
    }
   },
   methods: {
       generarCheckbox() {
        for (let i = 0; i < 7; i++) {
           const nuevoCheckbox = {
               id: this.checkboxes.length,
               label: `Checkbox ${(Math.floor(Math.random() * 500)+1)}`,
               checked: false
           };
           this.checkboxes.push(nuevoCheckbox);
       }},
       sumarNumeros(){
        this.sumaTotal = 0;
        this.checkboxes.forEach(checkbox => {
            if(checkbox.checked){
                const numero = parseInt(checkbox.label.split(" ")[1]);
                this.sumaTotal += numero;
            }
        });
       }
   }
}
</script>

<style>
/* Contenedor principal */
.container {
  max-width: 450px;
  margin: 40px auto;
  padding: 25px;
  background: linear-gradient(145deg, #f0f4ff, #d9e4ff);
  border-radius: 15px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
  text-align: center;
  font-family: 'Poppins', sans-serif;
}

/* Título */
h2 {
  color: #2c3e50;
  margin-bottom: 25px;
  font-weight: 600;
}

/* Botón principal */
.btn {
  background: #6a82fb;
  color: white;
  border: none;
  padding: 12px 22px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 25px;
  transition: all 0.3s ease;
}

.btn:hover {
  background: #5a6dfb;
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(0,0,0,0.2);
}

/* Formulario de checkboxes */
.checkbox-form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

/* Tarjeta de checkbox */
.checkbox-card {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 15px 20px;
  border-radius: 12px;
  background-color: #ffffffcc;
  border: 2px solid transparent;
  transition: all 0.3s ease;
  cursor: pointer;
}

.checkbox-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 18px rgba(0,0,0,0.15);
}

/* Estilo cuando está seleccionado */
.checkbox-card.checked {
  background: #6a82fb;
  color: white;
  border: 2px solid #4e63e0;
}

input[type="checkbox"] {
  width: 20px;
  height: 20px;
  cursor: pointer;
}

label {
  cursor: pointer;
  font-weight: 500;
  transition: color 0.3s;
}

/* Cambiar color del label cuando está marcado */
.checkbox-card.checked label {
  color: white;
}
</style>
