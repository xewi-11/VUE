import { createApp } from "vue";
import App from "./App.vue";
import router from "./Router";

var app = createApp(App);

app.config.globalProperties.$filters = {
  // creamos dos metodos que recibirn algo y devolveran un resultado
  mayusculas(valor) {
    return valor.toUpperCase();
  },
  getNumeroDoble(valor) {
    return valor * 2;
  },
};

app.use(router).mount("#app");
