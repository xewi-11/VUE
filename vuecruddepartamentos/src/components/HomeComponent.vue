<template>
  <div class="home-container">
    <h1 class="titulo-home">🏠 Soy Home</h1>
    <img src="./../assets/OIP.jpg" v-if="status == false" />
    <table class="tabla-departamentos">
      <thead>
        <tr>
          <th>Número</th>
          <th>Nombre</th>
          <th>Localidad</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="dep in departamentos" :key="dep.numero">
          <td>{{ dep.numero }}</td>
          <td>{{ dep.nombre }}</td>
          <td>{{ dep.localidad }}</td>
          <td>
            <router-link
              class="btn btn-warning"
              :to="`/details/${dep.numero}/${dep.nombre}/${dep.localidad}`"
            >
              Ver Detalles
            </router-link>
            <router-link
              style="margin-left: 10px"
              class="btn btn-info"
              :to="`/update/${dep.numero}`"
            >
              Actualizar
            </router-link>
            <button
              style="margin-left: 10px"
              class="btn btn-danger"
              @click="deleteDepartamento(dep.numero)"
            >
              Eliminar
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import ServiceDepartamentos from '@/services/ServiceDepartamentos';
import Swal from 'sweetalert2';

const service = new ServiceDepartamentos();

export default {
  name: 'HomeComponent',
  data() {
    return {
      departamentos: [],
      status: false,
    };
  },
  mounted() {
    service.getDepartamentos().then((response) => {
      this.departamentos = response;
      this.status = true;
    });
  },
  methods: {
    deleteDepartamento(id) {
      Swal.fire({
        title: '¿Estás seguro?',
        text: '¡No podrás revertir esto!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, eliminarlo!',
      }).then((result) => {
        if (result.isConfirmed) {
          service.eliminarDepartamento(id).then(() => {
            Swal.fire(
              'Eliminado!',
              'El departamento ha sido eliminado correctamente.',
              'success'
            );
            this.departamentos = this.departamentos.filter(
              (dep) => dep.numero !== id
            );
            this.$router.push('/');
          });
        }
      });
    },
  },
};
</script>

<style scoped>
.home-container {
  background: linear-gradient(135deg, #0b132b, #1c2541, #3a506b);
  color: #e0eaff;
  min-height: 100vh;
  padding: 40px;
  font-family: "Orbitron", sans-serif;
  text-align: center;
}

.titulo-home {
  color: #5bc0be;
  font-size: 1.8rem;
  margin-bottom: 30px;
  text-shadow: 0 0 8px #5bc0be, 0 0 15px #3a506b;
  letter-spacing: 2px;
  border-bottom: 2px solid #5bc0be;
  display: inline-block;
  padding-bottom: 10px;
}

.tabla-departamentos {
  width: 80%;
  margin: 0 auto;
  border-collapse: collapse;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(91, 192, 190, 0.3);
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
}

.tabla-departamentos th {
  background: rgba(91, 192, 190, 0.15);
  color: #5bc0be;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 15px;
  border-bottom: 2px solid #5bc0be;
}

.tabla-departamentos td {
  padding: 12px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  transition: background 0.3s ease;
}

.tabla-departamentos tr:hover td {
  background: rgba(91, 192, 190, 0.1);
}

@media (max-width: 768px) {
  .tabla-departamentos {
    width: 100%;
    font-size: 0.9rem;
  }

  .titulo-home {
    font-size: 1.5rem;
  }
}
</style>
