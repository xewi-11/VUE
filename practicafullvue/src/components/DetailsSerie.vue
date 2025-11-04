<template>
  <div class="details-container">
    <h1 class="titulo">🎬 Detalles de la Serie</h1>

    <div v-if="serie" class="card-serie">
      <h2 class="nombre-serie">{{ serie.nombre }}</h2>
      <img :src="serie.imagen" :alt="serie.nombre" class="imagen-serie" />
      <p class="info-serie">⭐ Puntuación: {{ serie.puntuacion }}</p>
      <p class="info-serie">📅 Año: {{ serie.anyo }}</p>
    </div>

    <div class="botones">
      <button class="btn-neon" @click="$router.push('/personajes/' + serie.idSerie)">
        Ver Personajes
      </button>
      <button class="btn-neon" @click="redirectToHome()">🏠 Volver a Home</button>
    </div>
  </div>
</template>

<script>
import SeriesService from '@/services/SeriesService';

const service = new SeriesService();

export default {
  name: "DetailsSerie",
  data() {
    return {
      serie: {
        idSerie: null,
        nombre: "",
        imagen: "",
        puntuacion: null,
        anyo: null
      }
    };
  },
  methods: {
    cargarInformacionSerie() {
      const idSerie = this.$route.params.idSerie;
      service.getSerieById(idSerie).then(serie => {
        this.serie = serie;
      });
    },
    redirectToHome() {
      this.$router.push('/');
    }
  },
  mounted() {
    this.cargarInformacionSerie();
  },
  watch: {
    '$route.params.idSerie'(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.cargarInformacionSerie();
      }
    }
  }
};
</script>

<style scoped>
/* 🌌 Fondo animado */
.details-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #0b132b, #1c2541, #3a506b, #5bc0be);
  background-size: 400% 400%;
  animation: gradientAnim 12s ease infinite;
  color: #e0eaff;
  font-family: 'Poppins', sans-serif;
  text-align: center;
  padding: 50px 20px;
}

@keyframes gradientAnim {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

/* 🎯 Título */
.titulo {
  font-size: 2rem;
  color: #5bc0be;
  text-shadow: 0 0 12px #5bc0be, 0 0 25px #3a506b;
  border-bottom: 2px solid #5bc0be;
  display: inline-block;
  padding-bottom: 10px;
  margin-bottom: 30px;
  letter-spacing: 2px;
}

/* 🃏 Card de la serie */
.card-serie {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  padding: 25px;
  margin-bottom: 30px;
  display: inline-block;
  backdrop-filter: blur(10px);
  box-shadow: 0 0 25px rgba(91, 192, 190, 0.25);
  transition: transform 0.3s ease;
}

.card-serie:hover {
  transform: scale(1.03);
}

.nombre-serie {
  font-size: 1.8rem;
  margin-bottom: 15px;
  color: #9fffcf;
}

.imagen-serie {
  max-width: 300px;
  border-radius: 12px;
  margin-bottom: 15px;
  box-shadow: 0 0 15px rgba(91, 192, 190, 0.4);
}

.info-serie {
  font-size: 1rem;
  margin: 5px 0;
}

/* ✨ Botones */
.botones {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.btn-neon {
  background: linear-gradient(90deg, #5bc0be, #3a506b);
  border: none;
  border-radius: 30px;
  color: #fff;
  padding: 12px 30px;
  font-size: 1rem;
  cursor: pointer;
  box-shadow: 0 0 15px rgba(91, 192, 190, 0.4);
  transition: all 0.3s ease;
}

.btn-neon:hover {
  background: linear-gradient(90deg, #9fffcf, #5bc0be);
  transform: scale(1.05);
  box-shadow: 0 0 25px rgba(159, 255, 207, 0.6);
  color: #0b132b;
}

/* 📱 Responsive */
@media (max-width: 768px) {
  .titulo {
    font-size: 1.6rem;
  }
  .card-serie {
    width: 90%;
  }
  .imagen-serie {
    max-width: 80%;
  }
  .botones {
    flex-direction: column;
    gap: 15px;
  }
}
</style>
