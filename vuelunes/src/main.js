import { createApp } from "vue";
import App from "./App.vue";
import router from "./Router";

var app = createApp(App);
app.config.globalProperties.$filters = {
  esPar(num) {
    var dataHtml = "";

    if (num % 2 === 0) {
      dataHtml += "<p style='color: green;'>" + num + " es par</p>";
    } else {
      dataHtml += "<p style='color: red;'>" + num + " es impar</p>";
    }
    return dataHtml;
  },
};

app.use(router).mount("#app");
