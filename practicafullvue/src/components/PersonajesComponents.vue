<template>
  <div class="personajes-container">
    <h1 class="titulo">🎭 Personajes</h1>
    <button class="btn-volver" @click="redirectToHome">⬅️ Volver al Home</button>

    <table class="tabla-personajes">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Imagen</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="personaje in personajes" :key="personaje.idPersonaje">
          <td class="nombre">{{ personaje.nombre }}</td>
          <td>
            <img
              :src="personaje.imagen"
              :alt="'Imagen de ' + personaje.nombre"
              class="img-personaje"
            />
          </td>
          <td>
            <router-link
              class="btn-detalles"
              :to="{ path: '/personajesDetails/' + personaje.idPersonaje }"
            >
              Ver Detalles
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import SeriesService from '@/services/SeriesService';
const service = new SeriesService();

export default {
  name: 'PersonajesComponent',
  data() {
    return {
      personajes: [],
    };
  },
  methods: {
    cargarPersonajes() {
      const idSerie = this.$route.params.idSerie;
      service.getPersonajesBySerie(idSerie).then((response) => {
        this.personajes = response;
      });
    },
    redirectToHome() {
      this.$router.push('/');
    },
  },
  mounted() {
    this.cargarPersonajes();
  },
};
</script>

<style scoped>
/* 🌌 Fondo general animado */
.personajes-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #0b132b, #1c2541, #3a506b, #5bc0be);
  background-size: 400% 400%;
  animation: movimientoGradiente 12s ease infinite;
  color: #e0eaff;
  font-family: 'Poppins', sans-serif;
  padding: 50px 20px;
  text-align: center;
}

@keyframes movimientoGradiente {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

/* ✨ Título */
.titulo {
  color: #5bc0be;
  font-size: 2.2rem;
  margin-bottom: 25px;
  text-shadow: 0 0 12px #5bc0be, 0 0 25px #3a506b;
  letter-spacing: 2px;
  border-bottom: 2px solid #5bc0be;
  display: inline-block;
  padding-bottom: 10px;
}

/* 🧭 Botón de volver */
.btn-volver {
  background: transparent;
  color: #9fffcf;
  border: 2px solid #9fffcf;
  padding: 10px 25px;
  border-radius: 25px;
  font-size: 1rem;
  cursor: pointer;
  margin-bottom: 30px;
  transition: all 0.3s ease;
  box-shadow: 0 0 15px rgba(159, 255, 207, 0.3);
}

.btn-volver:hover {
  background: #9fffcf;
  color: #0b132b;
  transform: scale(1.05);
  box-shadow: 0 0 25px rgba(159, 255, 207, 0.6);
}

/* 📋 Tabla con efecto glassmorphism */
.tabla-personajes {
  width: 80%;
  margin: 0 auto;
  border-collapse: collapse;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(91, 192, 190, 0.25);
  animation: aparecer 0.8s ease;
}

@keyframes aparecer {
  from {
    opacity: 0;
    transform: translateY(15px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.tabla-personajes thead {
  background: rgba(91, 192, 190, 0.15);
}

.tabla-personajes th {
  color: #9fffcf;
  text-transform: uppercase;
  padding: 15px;
  border-bottom: 2px solid #5bc0be;
  letter-spacing: 1px;
}

.tabla-personajes td {
  padding: 12px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  vertical-align: middle;
}

.tabla-personajes tr:hover td {
  background: rgba(91, 192, 190, 0.08);
  transition: background 0.3s ease;
}

/* 🧍 Imagen del personaje */
.img-personaje {
  width: 90px;
  height: 90px;
  border-radius: 10px;
  object-fit: cover;
  box-shadow: 0 0 12px rgba(91, 192, 190, 0.4);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.img-personaje:hover {
  transform: scale(1.08);
  box-shadow: 0 0 20px rgba(159, 255, 207, 0.6);
}

/* 🔗 Botón de detalles */
.btn-detalles {
  display: inline-block;
  background: linear-gradient(90deg, #5bc0be, #3a506b);
  color: #fff;
  padding: 8px 20px;
  border-radius: 25px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  box-shadow: 0 0 15px rgba(91, 192, 190, 0.4);
}

.btn-detalles:hover {
  background: linear-gradient(90deg, #9fffcf, #5bc0be);
  color: #0b132b;
  transform: scale(1.05);
  box-shadow: 0 0 25px rgba(159, 255, 207, 0.6);
}

/* 🧠 Responsive */
@media (max-width: 768px) {
  .tabla-personajes {
    width: 100%;
    font-size: 0.9rem;
  }

  .img-personaje {
    width: 70px;
    height: 70px;
  }

  .btn-detalles {
    padding: 6px 15px;
    font-size: 0.85rem;
  }
}
</style>
