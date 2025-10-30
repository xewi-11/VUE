<template>
    <div>
        <!-- Lista principal centrada, rellena desde navItems -->

        <!-- Navbar inferior: usa la misma fuente navItems para estar sincronizado -->
        <nav class="navbar navbar-expand navbar-light bg-light">
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
            </ul>
        </nav>
        
    </div>
</template>

<script>
export default {
    name: 'MenuComponent',
    data() {
        return {
            // Fuente única de elementos de navegación. Mantener en sync con Router si cambia.
            navItems: [
                { name: 'Home', path: '/' },
                { name: 'Coches', path: '/coches' },
                { name: 'Empleados', path: '/empleados' },
                { name: 'Customers', path: '/customers' }
            ]
        }
    }
}
</script>

<style>

</style>