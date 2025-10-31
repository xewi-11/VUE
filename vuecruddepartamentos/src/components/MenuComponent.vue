<template>
  <div>
    <!-- Lista principal centrada, rellena desde navItems -->

    <!-- Navbar inferior: usa la misma fuente navItems para estar sincronizado -->
    <nav class="navbar navbar-expand navbar-light bg-light">
        <h1 style="font-size: 1.2rem;">CRUD DEPARTAMENTOS</h1>
      <ul class="nav navbar-nav">
        <li class="nav-item" v-for="item in navItems" :key="item.path + '-nav'">
          <router-link
            class="nav-link"
            :to="item.path"
            exact-active-class="active"
          >
            {{ item.name }}
          </router-link>
        </li>
        <!-- Dropdown extra -->
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Oficios
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li v-for="oficio in oficios" :key="oficio">
              <router-link class="dropdown-item" :to="{ path: '/' }">opciones</router-link>

            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>

export default {
  name: "MenuComponent",
  data() {
    return {
      // Fuente única de elementos de navegación. Mantener en sync con Router si cambia.
      navItems: [
        { name: "Home", path: "/" },
        { name: "Crear", path: "/insert" },
        
      ],
      oficios: [],
    };
  }
};
</script>

<style></style>
