<template>
  <div class="update-container">
    <button class="btn-volver" @click="$router.push('/')">⬅ Volver a Home</button>

    <h1 class="titulo-update">⚙️ Actualizar Departamento</h1>

    <form class="form-update" @submit.prevent="submitForm()">
      <div class="form-group">
        <label for="numero">Número:</label>
        <input
          type="number"
          id="numero"
          v-model="departamento.numero"
          required
        />
      </div>

      <div class="form-group">
        <label for="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          v-model="departamento.nombre"
          required
        />
      </div>

      <div class="form-group">
        <label for="localidad">Localidad:</label>
        <input
          type="text"
          id="localidad"
          v-model="departamento.localidad"
          required
        />
      </div>

      <button type="submit" class="btn-submit">💾 Actualizar Departamento</button>
    </form>
  </div>
</template>

<script>
import ServiceDepartamentos from '@/services/ServiceDepartamentos';

const service = new ServiceDepartamentos();

export default {
  name: "UpdateDepartamento",
  data() {
    return {
      departamento: {
        numero: 0,
        nombre: "",
        localidad: ""
      }
    };
  },
  mounted() {
    const id = this.$route.params.id;
    service.findDepartamento(id).then((response) => {
      this.departamento = response;
    });
  },
  methods: {
    submitForm() {
      service.updateDepartamento(this.$route.params.id, this.departamento).then((response) => {
        console.log("Departamento actualizado:", response);
        alert("Departamento actualizado correctamente");
        this.$router.push('/details/'+this.departamento.numero+'/'+this.departamento.nombre+'/'+this.departamento.localidad);
      });
    }
  }
};
</script>

<style scoped>
/* Fondo cósmico */
.update-container {
  background: radial-gradient(circle at top left, #0b132b, #1c2541, #3a506b);
  min-height: 100vh;
  color: #e0eaff;
  font-family: 'Orbitron', sans-serif;
  padding: 50px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Título brillante */
.titulo-update {
  font-size: 2rem;
  margin-bottom: 30px;
  color: #5bc0be;
  text-shadow: 0 0 8px #5bc0be, 0 0 15px #3a506b;
  letter-spacing: 2px;
  border-bottom: 2px solid #5bc0be;
  padding-bottom: 10px;
}

/* Botón de volver */
.btn-volver {
  align-self: flex-start;
  margin-bottom: 20px;
  padding: 10px 20px;
  font-family: 'Orbitron', sans-serif;
  background: none;
  color: #5bc0be;
  border: 1px solid #5bc0be;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
}
.btn-volver:hover {
  background: #5bc0be;
  color: #0b132b;
  box-shadow: 0 0 10px #5bc0be;
}

/* Formulario translúcido */
.form-update {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: 30px 40px;
  width: 90%;
  max-width: 400px;
  box-shadow: 0 0 20px rgba(91, 192, 190, 0.3);
}

/* Grupos de campos */
.form-group {
  margin-bottom: 20px;
  text-align: left;
}

label {
  display: block;
  color: #5bc0be;
  font-size: 0.9rem;
  margin-bottom: 8px;
  letter-spacing: 1px;
}

input {
  width: 100%;
  padding: 10px;
  border: 1px solid rgba(91, 192, 190, 0.4);
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  outline: none;
  font-family: 'Orbitron', sans-serif;
  transition: all 0.3s ease;
}

input:focus {
  border-color: #5bc0be;
  box-shadow: 0 0 10px #5bc0be;
}

/* Botón principal */
.btn-submit {
  width: 100%;
  padding: 12px;
  background: #5bc0be;
  color: #0b132b;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  font-family: 'Orbitron', sans-serif;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-submit:hover {
  background: #0b132b;
  color: #5bc0be;
  box-shadow: 0 0 15px #5bc0be;
}

/* Responsive */
@media (max-width: 600px) {
  .form-update {
    width: 100%;
    padding: 25px;
  }

  .titulo-update {
    font-size: 1.6rem;
  }
}
</style>
