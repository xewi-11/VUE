<template>
  <div class="details-container">
    <button class="btn-volver" @click="redirectToHome">
      ⬅️ Volver al Home
    </button>

    <h1 class="titulo">🌟 Detalles del Personaje</h1>

    <div v-if="personaje.idPersonaje" class="tarjeta-personaje">
      <h2 class="nombre">{{ personaje.nombre }}</h2>
      <img :src="personaje.imagen" :alt="personaje.nombre" class="imagen" />

      <div class="info-extra">
        <p><strong>ID Personaje:</strong> {{ personaje.idPersonaje }}</p>
        <p><strong>ID Serie:</strong> {{ personaje.idSerie }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import SeriesService from '@/services/SeriesService';
const service = new SeriesService();

export default {
  name: 'PersonajesDetails',
  data() {
    return {
      personaje: {
        idPersonaje: null,
        nombre: '',
        imagen: '',
        idSerie: null,
      },
    };
  },
  methods: {
    cargarInformacionPersonaje() {
      const idPersonaje = this.$route.params.idPersonaje;
      service.getPersonajeById(idPersonaje).then((personaje) => {
        this.personaje = personaje;
      });
    },
    redirectToHome() {
      this.$router.push('/');
    },
  },
  mounted() {
    this.cargarInformacionPersonaje();
  },
  watch: {
    '$route.params.idPersonaje': function (newVal, oldVal) {
      if (newVal !== oldVal) {
        this.cargarInformacionPersonaje();
      }
    },
  },
};
</script>

<style scoped>
/* 🌌 Fondo con gradiente dinámico */
.details-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #0b132b, #1c2541, #3a506b, #5bc0be);
  background-size: 400% 400%;
  animation: gradienteAnimado 12s ease infinite;
  color: #e0eaff;
  font-family: 'Poppins', sans-serif;
  padding: 50px 20px;
  text-align: center;
}

@keyframes gradienteAnimado {
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

/* 🧭 Botón de volver */
.btn-volver {
  background: transparent;
  color: #9fffcf;
  border: 2px solid #9fffcf;
  padding: 10px 25px;
  border-radius: 25px;
  font-size: 1rem;
  cursor: pointer;
  margin-bottom: 25px;
  transition: all 0.3s ease;
  box-shadow: 0 0 15px rgba(159, 255, 207, 0.3);
}

.btn-volver:hover {
  background: #9fffcf;
  color: #0b132b;
  transform: scale(1.05);
  box-shadow: 0 0 25px rgba(159, 255, 207, 0.6);
}

/* ✨ Título principal */
.titulo {
  color: #5bc0be;
  font-size: 2rem;
  margin-bottom: 30px;
  text-shadow: 0 0 12px #5bc0be, 0 0 25px #3a506b;
  letter-spacing: 2px;
  border-bottom: 2px solid #5bc0be;
  display: inline-block;
  padding-bottom: 8px;
}

/* 💾 Tarjeta del personaje */
.tarjeta-personaje {
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(15px);
  border-radius: 20px;
  padding: 30px;
  width: 350px;
  margin: 0 auto;
  box-shadow: 0 0 20px rgba(91, 192, 190, 0.3);
  transition: all 0.3s ease;
}

.tarjeta-personaje:hover {
  transform: translateY(-5px);
  box-shadow: 0 0 35px rgba(159, 255, 207, 0.5);
}

/* 🎭 Nombre */
.nombre {
  font-size: 1.8rem;
  color: #9fffcf;
  margin-bottom: 15px;
  text-shadow: 0 0 10px #9fffcf;
}

/* 🖼 Imagen */
.imagen {
  width: 100%;
  border-radius: 15px;
  border: 1px solid rgba(91, 192, 190, 0.4);
  box-shadow: 0 0 15px rgba(91, 192, 190, 0.4);
  margin-bottom: 20px;
  transition: transform 0.4s ease, box-shadow 0.4s ease;
}

.imagen:hover {
  transform: scale(1.05);
  box-shadow: 0 0 30px rgba(159, 255, 207, 0.6);
}

/* 📋 Info adicional */
.info-extra {
  color: #b0c7e1;
  font-size: 0.95rem;
}

.info-extra p {
  margin: 8px 0;
}

@media (max-width: 600px) {
  .tarjeta-personaje {
    width: 90%;
    padding: 20px;
  }

  .titulo {
    font-size: 1.5rem;
  }
}
</style>
