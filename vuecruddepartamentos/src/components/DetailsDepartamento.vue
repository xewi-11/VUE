<template>
  <div class="details-container">
    <h1 class="titulo-details">🌌 Detalles del Departamento</h1>

    <div class="card-details">
      <p><strong>Número:</strong> <span>{{ numero }}</span></p>
      <p><strong>Nombre:</strong> <span>{{ nombre }}</span></p>
      <p><strong>Localidad:</strong> <span>{{ localidad }}</span></p>
    </div>

    <button class="btn-volver" @click="$router.push('/')">⬅ Volver al Inicio</button>
  </div>
</template>

<script>
export default {
  name: "DetailsDepartamento",
  data() {
    return {
      numero: 0,
      nombre: "",
      localidad: "",
    };
  },
  mounted() {
    this.numero = this.$route.params.numero;
    this.nombre = this.$route.params.nombre;
    this.localidad = this.$route.params.localidad;
  },
};
</script>

<style scoped>
.details-container {
  background: radial-gradient(circle at top left, #0b132b, #1c2541, #3a506b);
  color: #e0eaff;
  min-height: 100vh;
  padding: 50px 20px;
  font-family: 'Orbitron', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Título brillante */
.titulo-details {
  font-size: 2rem;
  color: #5bc0be;
  text-shadow: 0 0 8px #5bc0be, 0 0 15px #3a506b;
  letter-spacing: 2px;
  margin-bottom: 40px;
  border-bottom: 2px solid #5bc0be;
  padding-bottom: 10px;
}

/* Tarjeta de detalles */
.card-details {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 30px 50px;
  box-shadow: 0 0 25px rgba(91, 192, 190, 0.3);
  width: 90%;
  max-width: 500px;
  text-align: left;
  line-height: 2rem;
  color: #e0eaff;
  font-size: 1.1rem;
  transition: all 0.3s ease;
}

.card-details:hover {
  box-shadow: 0 0 35px rgba(91, 192, 190, 0.6);
  transform: scale(1.02);
}

/* Textos */
.card-details strong {
  color: #5bc0be;
  text-shadow: 0 0 5px #5bc0be;
}

.card-details span {
  color: #ffffff;
}

/* Botón volver */
.btn-volver {
  margin-top: 40px;
  padding: 12px 25px;
  border: none;
  border-radius: 8px;
  background: #5bc0be;
  color: #0b132b;
  font-weight: bold;
  font-family: 'Orbitron', sans-serif;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-volver:hover {
  background: #0b132b;
  color: #5bc0be;
  box-shadow: 0 0 20px #5bc0be;
}

/* Responsive */
@media (max-width: 600px) {
  .card-details {
    width: 100%;
    padding: 20px 30px;
  }

  .titulo-details {
    font-size: 1.6rem;
  }
}
</style>
