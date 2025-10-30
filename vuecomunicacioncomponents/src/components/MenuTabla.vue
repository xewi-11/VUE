<template>
  <div class="menu-container">
    <ul id="menu">
      <li>
        <router-link to="/" class="menu-link home-link">🏠 Home</router-link>
      </li>
      <li v-for="numero in numeros" :key="numero">
        <router-link :to="'/tabla-multiplicar/' + numero" class="menu-link">
          Tabla de Multiplicar del {{ numero }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MenuTabla",
  data() {
    return {
      numeros: []
    };
  },
  methods: {
    generarNumeros() {
      for (let i = 0; i < 4; i++) {
        this.numeros.push(parseInt(Math.random() * 100 + 1));
      }
    }
  },
  mounted() {
    this.generarNumeros();
  }
};
</script>

<style scoped>
.menu-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
}

#menu {
  list-style: none;
  padding: 0;
  background: #f8f9fa;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  width: 320px;
  text-align: center;
}

#menu li {
  margin: 10px 0;
}

.menu-link {
  display: inline-block;
  width: 90%;
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  font-weight: 500;
  border-radius: 6px;
  transition: all 0.3s ease;
}

.menu-link:hover {
  background-color: #0056b3;
  transform: scale(1.05);
}

.home-link {
  background-color: #28a745;
}

.home-link:hover {
  background-color: #1e7e34;
}
</style>
