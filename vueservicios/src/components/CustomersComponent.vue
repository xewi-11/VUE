<template>
  <div class="customers-container">
    <h1 class="title">🧾 Customers Component</h1>
    <div v-if="customerFound" class="customer-found">
      <h2>Cliente encontrado:</h2>
      <div class="customer-card">
        <p><strong>ID:</strong> {{ customerFound.CustomerID }}</p>
        <p><strong>Nombre:</strong> {{ customerFound.ContactName }}</p>
        <p><strong>Compañía:</strong> {{ customerFound.CompanyName }}</p>
      </div>
    </div>

    <form @submit.prevent="searchCustomerbyId" class="search-form">
      <input
        type="text"
        v-model="searchId"
        placeholder="🔍 Buscar cliente por ID..."
        class="search-input"
      />
      <button type="submit" class="search-button ">Buscar</button>
    </form>

    <div class="table-container">
      <table class="customers-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Compañía</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="customer in customers" :key="customer.CustomerID">
            <td>{{ customer.CustomerID }}</td>
            <td>{{ customer.ContactName }}</td>
            <td>{{ customer.CompanyName }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>

import axios from 'axios';
import Global from '../Global.js';

let urlApi = Global.urlCustomer;

export default {
  name: 'CustomersComponent',
  data() {
    return {
      customers: [],
      searchId: '',
      customerFound: null,
    };
  },
  mounted() {
    let request = 'Customers';
    axios.get(urlApi + request).then((response) => {
      console.log('Leyendo datos');
      this.customers = response.data.value;
    });
  },
  methods: {
    searchCustomerbyId() {
      console.log('Buscando cliente por id: ' + this.searchId);
      this.customerFound = this.customers.find(
        (customer) => customer.CustomerID === this.searchId.toUpperCase()
      );
      this.searchId = '';
    },
  },
};
</script>

<style scoped>
/* === Estilos generales === */
.customers-container {
  max-width: 900px;
  margin: 40px auto;
  background: #ffffff;
  padding: 30px 40px;
  border-radius: 15px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
  font-family: "Poppins", sans-serif;
  color: #333;
}

/* === Título === */
.title {
  text-align: center;
  font-size: 2rem;
  color: #0078d4;
  margin-bottom: 25px;
}

/* === Formulario de búsqueda === */
.search-form {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 25px;
  gap: 10px;
}

.search-input {
  width: 250px;
  padding: 10px 15px;
  border: 2px solid #0078d4;
  border-radius: 8px;
  outline: none;
  font-size: 1rem;
  transition: 0.3s;
}

.search-input:focus {
  border-color: #005ea6;
  box-shadow: 0 0 8px rgba(0, 120, 212, 0.3);
}

.search-button {
  background: #0078d4;
  color: white;
  border: none;
  padding: 10px 18px;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: 0.3s;
}

.search-button:hover {
  background: #005ea6;
}

/* === Cliente encontrado === */
.customer-found {
  margin-bottom: 30px;
  text-align: center;
}

.customer-card {
  background: #f3f9ff;
  border: 2px solid #0078d4;
  border-radius: 10px;
  padding: 20px;
  display: inline-block;
  box-shadow: 0 4px 10px rgba(0, 120, 212, 0.1);
  transition: transform 0.3s;
}

.customer-card:hover {
  transform: scale(1.02);
}

/* === Tabla === */
.table-container {
  overflow-x: auto;
}

.customers-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.95rem;
  text-align: left;
  border-radius: 10px;
  overflow: hidden;
}

/* Encabezado */
.customers-table th {
  background-color: #0078d4;
  color: white;
  padding: 12px 10px;
}

/* Celdas */
.customers-table td {
  padding: 10px;
  border-bottom: 1px solid #eaeaea;
}

/* Filas alternas */
.customers-table tbody tr:nth-child(odd) {  
  background-color: #f8f9fa; /* gris claro */
}

.customers-table tbody tr:nth-child(even) {
  background-color: #e6f7e6; /* verde suave */
}

/* Hover */
.customers-table tbody tr:hover {
  background-color: #d2f1d2;
  transition: background 0.2s;
}

/* === Responsivo === */
@media (max-width: 600px) {
  .customers-container {
    padding: 20px;
  }

  .search-form {
    flex-direction: column;
    gap: 10px;
  }

  .search-input {
    width: 100%;
  }
}
</style>
