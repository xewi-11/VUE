<template>
  <div class="update-container">
    <h1 class="titulo">⚡ Actualizar Personaje</h1>

    <form class="formulario" @submit.prevent="actualizarPersonaje">
      <div class="campo">
        <label>Selecciona una Serie</label>
        <select
          v-model="serieSeleccionada"
          @change="cargarInformaionSerie()"
          class="select-estilizado"
        >
          <option disabled value="">-- Escoge una serie --</option>
          <option
            v-for="serie in series"
            :key="serie.idSerie"
            :value="serie.idSerie"
          >
            {{ serie.nombre }}
          </option>
        </select>
      </div>

      <div class="campo">
        <label>Selecciona un Personaje</label>
        <select
          v-model="personajeSeleccionado"
          @change="cargarInformacionPersonaje()"
          class="select-estilizado"
        >
          <option disabled value="">-- Escoge un personaje --</option>
          <option
            v-for="personaje in personajes"
            :key="personaje.idPersonaje"
            :value="personaje.idPersonaje"
          >
            {{ personaje.nombre }}
          </option>
        </select>
      </div>

      <button class="boton-actualizar">Actualizar 🔄</button>
    </form>

    <div class="info-container">
      <div v-if="serie.idSerie" class="tarjeta">
        <h2>🎬 Serie Seleccionada</h2>
        <h3>{{ serie.nombre }}</h3>
        <img :src="serie.imagen" :alt="serie.nombre" />
        <p>⭐ Puntuación: <strong>{{ serie.puntuacion }}</strong></p>
        <p>📅 Año: <strong>{{ serie.anyo }}</strong></p>
      </div>

      <div v-if="personaje.idPersonaje" class="tarjeta">
        <h2>🧍 Personaje Seleccionado</h2>
        <h3>{{ personaje.nombre }}</h3>
        <img :src="personaje.imagen" :alt="personaje.nombre" />
        <p>🎞 ID Serie: <strong>{{ personaje.idSerie }}</strong></p>
      </div>
    </div>
  </div>
</template>

<script>
import SeriesService from '@/services/SeriesService';
const service = new SeriesService();

export default {
  name: 'UpdatePersonaje',
  data() {
    return {
      series: [],
      personajes: [],
      personajeSeleccionado: null,
      serieSeleccionada: null,
      serie: {
        idSerie: null,
        nombre: '',
        imagen: '',
        puntuacion: null,
        anyo: null,
      },
      personaje: {
        idPersonaje: null,
        nombre: '',
        imagen: '',
        idSerie: null,
      },
    };
  },
  methods: {
    cargarSeries() {
      service.getSeries().then((response) => {
        this.series = response;
      });
    },
    cargarPersonajes() {
      service.getPersonajes().then((response) => {
        this.personajes = response;
      });
    },
    actualizarPersonaje() {
      const personajeActualizado = {
        idPersonaje: this.personajeSeleccionado,
        idSerie: this.serieSeleccionada,
      };
      service.updatePersonaje(personajeActualizado).then((response) => {
        console.log('Personaje actualizado:', response);
        this.$router.push('/personajes/' + this.serieSeleccionada);
      });
    },
    cargarInformaionSerie() {
      const idSerie = this.serieSeleccionada;
      service.getSerieById(idSerie).then((serie) => {
        this.serie = serie;
      });
    },
    cargarInformacionPersonaje() {
      const idPersonaje = this.personajeSeleccionado;
      service.getPersonajeById(idPersonaje).then((personaje) => {
        this.personaje = personaje;
      });
    },
  },
  mounted() {
    this.cargarSeries();
    this.cargarPersonajes();
  },
};
</script>

<style scoped>
/* 🌈 Fondo general con gradiente animado */
.update-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #0b132b, #1c2541, #3a506b, #5bc0be);
  background-size: 400% 400%;
  animation: fondoAnimado 12s ease infinite;
  color: #e0eaff;
  font-family: 'Poppins', sans-serif;
  padding: 40px;
  text-align: center;
}

@keyframes fondoAnimado {
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

/* ✨ Título principal */
.titulo {
  color: #5bc0be;
  font-size: 2rem;
  margin-bottom: 25px;
  text-shadow: 0 0 12px #5bc0be, 0 0 25px #3a506b;
  letter-spacing: 2px;
  border-bottom: 2px solid #5bc0be;
  display: inline-block;
  padding-bottom: 10px;
}

/* 🧾 Formulario con estilo futurista */
.formulario {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(91, 192, 190, 0.3);
  border-radius: 15px;
  width: 60%;
  margin: 0 auto 40px auto;
  padding: 25px;
  box-shadow: 0 0 20px rgba(91, 192, 190, 0.25);
}

/* Campos */
.campo {
  margin-bottom: 20px;
  text-align: left;
}

.campo label {
  display: block;
  margin-bottom: 8px;
  color: #5bc0be;
  font-weight: bold;
}

/* 🎛 Selects con estilo */
.select-estilizado {
  width: 100%;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #5bc0be;
  background: rgba(255, 255, 255, 0.1);
  color: #0be72f;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.select-estilizado:hover,
.select-estilizado:focus {
  outline: none;
  border-color: #9fffcf;
  background: rgba(91, 192, 190, 0.2);
  box-shadow: 0 0 10px #5bc0be;
}

/* 🧿 Botón de acción */
.boton-actualizar {
  background: linear-gradient(90deg, #5bc0be, #3a506b);
  border: none;
  border-radius: 30px;
  color: #fff;
  padding: 12px 40px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 0 15px rgba(91, 192, 190, 0.4);
}

.boton-actualizar:hover {
  transform: scale(1.05);
  background: linear-gradient(90deg, #9fffcf, #5bc0be);
  box-shadow: 0 0 25px #9fffcf;
}

/* 💾 Tarjetas de información */
.info-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
}

.tarjeta {
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(15px);
  border-radius: 15px;
  width: 300px;
  padding: 20px;
  box-shadow: 0 0 20px rgba(91, 192, 190, 0.3);
  transition: all 0.3s ease;
}

.tarjeta:hover {
  transform: translateY(-5px);
  box-shadow: 0 0 30px rgba(159, 255, 207, 0.4);
}

.tarjeta img {
  width: 100%;
  border-radius: 10px;
  margin: 10px 0;
  border: 1px solid rgba(91, 192, 190, 0.3);
}

.tarjeta h2 {
  color: #9fffcf;
  font-size: 1.3rem;
  margin-bottom: 5px;
}

.tarjeta h3 {
  color: #ffffff;
  margin-bottom: 8px;
}

.tarjeta p {
  color: #b0c7e1;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .formulario {
    width: 90%;
  }
  .info-container {
    flex-direction: column;
    align-items: center;
  }
}
</style>
