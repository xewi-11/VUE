<template>
  <div class="home-container">
    <h1 class="home-title">Bienvenido al CRUD de Series y Personajes</h1>
  </div>
</template>

<script>
export default {
  name: "HomeComponent"
}
</script>

<style scoped>
/* Fondo degradado con animación suave */
.home-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 80px); /* Ajusta según tu navbar */
  background: linear-gradient(135deg, #5bc0be, #3a506b, #0b132b);
  background-size: 400% 400%;
  animation: gradientShift 15s ease infinite;
  font-family: 'Poppins', sans-serif;
}

/* Animación del gradiente */
@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

/* Título estilo neon/glass */
.home-title {
  color: #e0eaff;
  font-size: 3rem;
  text-align: center;
  text-shadow:
    0 0 5px #5bc0be,
    0 0 10px #5bc0be,
    0 0 20px #3a506b,
    0 0 30px #0b132b;
  padding: 20px 40px;
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  box-shadow: 0 0 25px rgba(91, 192, 190, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: default;
}

.home-title:hover {
  transform: scale(1.05);
  box-shadow: 0 0 35px rgba(91, 192, 190, 0.6);
}

/* Responsive */
@media (max-width: 768px) {
  .home-title {
    font-size: 2rem;
    padding: 15px 25px;
  }
}
</style>
