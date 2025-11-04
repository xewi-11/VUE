<template>
  <div class="insert-container">
    <h1 class="titulo">🚀 Insertar Nuevo Personaje</h1>

    <form class="formulario" @submit.prevent="insertarPersonaje">
      <div class="campo">
        <label for="nombre" class="label">Nombre del Personaje</label>
        <input
          id="nombre"
          type="text"
          v-model="nombre"
          class="input-estilizado"
          placeholder="Ej: Walter White"
          required
        />
      </div>

      <div class="campo">
        <label for="imagen" class="label">URL de la Imagen</label>
        <input
          id="imagen"
          type="text"
          v-model="imagen"
          class="input-estilizado"
          placeholder="https://..."
          required
        />
      </div>

      <div class="campo">
        <label class="label">Selecciona la Serie</label>
        <select v-model="idSerie" class="select-estilizado" required>
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

      <button type="submit" class="boton-insertar">💾 Insertar Personaje</button>
    </form>
  </div>
</template>

<script>
import SeriesService from '@/services/SeriesService';
const service = new SeriesService();

export default {
  name: 'InsertarPersonaje',
  data() {
    return {
      series: [],
      nombre: '',
      imagen: '',
      idSerie: null,
    };
  },
  methods: {
    cargarSeries() {
      service.getSeries().then((response) => {
        this.series = response;
      });
    },
    insertarPersonaje() {
      const nuevoPersonaje = {
        nombre: this.nombre,
        imagen: this.imagen,
        idSerie: this.idSerie,
      };
      service.setPersonaje2(nuevoPersonaje).then((response) => {
        console.log('Personaje insertado:', response);
        this.$router.push('/personajes/' + this.idSerie);
      });
    },
  },
  mounted() {
    this.cargarSeries();
  },
};
</script>

<style scoped>
/* 🌈 Fondo con gradiente animado */
.insert-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #0b132b, #1c2541, #3a506b, #5bc0be);
  background-size: 400% 400%;
  animation: fondoAnimado 12s ease infinite;
  color: #e0eaff;
  font-family: 'Poppins', sans-serif;
  text-align: center;
  padding: 50px 20px;
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

/* ✨ Título */
.titulo {
  color: #5bc0be;
  font-size: 2rem;
  margin-bottom: 30px;
  text-shadow: 0 0 12px #5bc0be, 0 0 25px #3a506b;
  border-bottom: 2px solid #5bc0be;
  display: inline-block;
  padding-bottom: 10px;
  letter-spacing: 2px;
}

/* 🧾 Formulario */
.formulario {
  width: 60%;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  backdrop-filter: blur(10px);
  box-shadow: 0 0 25px rgba(91, 192, 190, 0.25);
  padding: 30px;
  transition: transform 0.4s ease;
}

.formulario:hover {
  transform: scale(1.02);
}

/* 📋 Campos */
.campo {
  margin-bottom: 20px;
  text-align: left;
}

.label {
  color: #9fffcf;
  display: block;
  font-weight: bold;
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

/* 🧠 Inputs */
.input-estilizado,
.select-estilizado {
  width: 100%;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #5bc0be;
  background: rgba(255, 255, 255, 0.1);
  color: #15cf1e;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.input-estilizado:focus,
.select-estilizado:focus {
  outline: none;
  border-color: #9fffcf;
  box-shadow: 0 0 12px #5bc0be;
  background: rgba(91, 192, 190, 0.15);
}

.input-estilizado::placeholder {
  color: #b0c7e1;
}

/* 🚀 Botón de acción */
.boton-insertar {
  margin-top: 15px;
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

.boton-insertar:hover {
  background: linear-gradient(90deg, #9fffcf, #5bc0be);
  transform: scale(1.05);
  box-shadow: 0 0 25px rgba(159, 255, 207, 0.6);
  color: #0b132b;
}

/* 📱 Responsive */
@media (max-width: 768px) {
  .formulario {
    width: 90%;
  }

  .titulo {
    font-size: 1.6rem;
  }
}
</style>
