<template>
  <div>
    <h1>Propiedad Conmutada</h1>
    <label>Introduce un numero</label>
    <input type="number" v-model="numero" />
    <div v-html="evaluarNumero"></div>
    <ul>
      <li v-for="game in juegosRojos" :key="game" v-html="game" />
    </ul>
    <ul>
      <li v-for="game in juegos" :key="game" v-html="game" />
    </ul>
  </div>
</template>

<script>
export default {
  name: "PropiedadConmutada",
  computed: {
    //se escribe como un metodo pero se usa como una propiedad
    evaluarNumero() {
      let data = "";
      if (this.numero % 2 == 0) {
        data = "<h4 style='color:blue'>Par: " + this.numero + "</h4>";
      } else {
        data = "<h4 style='color:red'>Impar: " + this.numero + "</h4>";
      }
      return data;
    },
    juegosRojos() {
      var datos = this.juegos;
      var i = 0;
      //usar of el in solo para recorrer indices

      for (var game of this.juegos) {
        var juegoRojo = '<span style="color:red">' + game + "</span>";
        datos[i] = juegoRojo;
        i++;
      }
      return datos;
    },
  },
  data() {
    return {
      numero: 0,
      juegos: ["parchis", "ajedrez", "cartas", "monopoly"],
    };
  },
};
</script>

<style></style>
