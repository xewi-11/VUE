<template>
  <div>
    <nav class="navbar-custom">
      <h1 class="navbar-title">CRUD DEPARTAMENTOS</h1>

      <ul class="nav-items">
        <li v-for="item in navItems" :key="item.path + '-nav'" class="nav-item">
          <router-link
            class="nav-link"
            :to="item.path"
            exact-active-class="active"
          >
            {{ item.name }}
          </router-link>
        </li>

        <!-- Select series -->
        <li class="nav-item">
          <select class="select-series" v-model="selectedSerie" @change="goToSerie">
            <option value="" disabled selected>Series</option>
            <option v-for="serie in series" :key="serie.idSerie" :value="serie.idSerie">
              {{ serie.nombre }}
            </option>
          </select>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import SeriesService from '@/services/SeriesService';
const service = new SeriesService();

export default {
  name: "MenuComponent",
  data() {
    return {
      navItems: [
        { name: "Home", path: "/" },
        { name: "Crear", path: "/insertar" },
        { name: "Actualizar", path: "/update" },
      ],
      series: [],
      selectedSerie: "", // serie seleccionada
    };
  },
  mounted() {
    this.cargarSeries();
  },
  methods: {
    cargarSeries() {
      service.getSeries().then(response => {
        this.series = response;
      });
    },
    goToSerie() {
      if(this.selectedSerie) {
        this.$router.push(`/serie/${this.selectedSerie}`);
      }
    }
  }
};
</script>

<style scoped>
/* Navbar glass/neón */
.navbar-custom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  box-shadow: 0 0 25px rgba(91, 192, 190, 0.3);
  margin: 20px;
  font-family: 'Poppins', sans-serif;
}

.navbar-title {
  color: #5bc0be;
  text-shadow: 0 0 10px #5bc0be, 0 0 20px #3a506b;
  font-size: 1.5rem;
  margin: 0;
}

.nav-items {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  align-items: center;
  gap: 25px;
}

.nav-link {
  color: #e0eaff;
  text-decoration: none;
  padding: 8px 15px;
  border-radius: 10px;
  transition: all 0.3s ease;
}

.nav-link:hover {
  background: rgba(91, 192, 190, 0.3);
  box-shadow: 0 0 15px rgba(91, 192, 190, 0.5);
  color: #0b132b;
}

.active {
  background: #5bc0be;
  color: #0b132b !important;
  box-shadow: 0 0 20px rgba(91, 192, 190, 0.6);
}

/* Select series estilizado */
.select-series {
  padding: 8px 15px;
  border-radius: 12px;
  border: 2px solid rgba(8, 218, 214, 0.5);
  background: rgba(255, 255, 255, 0.05);
  color: #074bdf;
  backdrop-filter: blur(10px);
  font-family: 'Poppins', sans-serif;
  cursor: pointer;
  transition: all 0.3s ease;
}

.select-series:hover {
  background: rgba(8, 218, 214, 0.5);
  color: #0b132b;
  box-shadow: 0 0 10px rgba(91, 192, 190, 0.5);
}

/* Responsive */
@media (max-width: 768px) {
  .navbar-custom {
    flex-direction: column;
    gap: 15px;
  }
  .nav-items {
    flex-direction: column;
    gap: 10px;
  }
}
</style>
