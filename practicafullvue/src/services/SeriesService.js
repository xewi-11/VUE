import Global from "@/Global";
import axios from "axios";

export default class SeriesService {
  async getSeries2() {
    try {
      const res = await fetch(Global.urlSeries);

      if (!res.ok) {
        throw new Error("Error en la llamada a la API " + res.status);
      }

      const data = await res.json();
      return data;
    } catch (error) {
      console.error(error);
      throw error; // re-lanza el error si quieres manejarlo fuera
    }
  }

  getSeries() {
    return new Promise(function (resolve) {
      var url = Global.urlSeries;
      axios.get(url).then((response) => {
        resolve(response.data);
      });
    });
  }
  getSerieById(id) {
    return new Promise(function (resolve) {
      let requestUrl = Global.urlSeries + "/  " + id;
      axios.get(requestUrl).then((response) => {
        resolve(response.data);
      });
    });
  }
  getPersonajesBySerie(idSerie) {
    return new Promise(function (resolve) {
      let request = "/PersonajesSerie/" + idSerie;
      let url = Global.urlSeries + request;
      axios.get(url).then((response) => {
        resolve(response.data);
      });
    });
  }
  getPersonajeById(idPersonaje) {
    return new Promise(function (resolve) {
      let request = Global.urlPersonajes + "/Personajes/" + idPersonaje;
      axios.get(request).then((response) => {
        resolve(response.data);
      });
    });
  }
  async setPersonaje2(personaje) {
    try {
      // 1️⃣ Hacemos la petición POST a la API para crear un nuevo personaje
      //    Enviamos los datos del personaje en formato JSON
      const res = await fetch(Global.urlPersonajes + "/Personajes", {
        method: "POST", // Método HTTP POST para insertar datos
        headers: { "Content-Type": "application/json" }, // Indicamos que enviamos JSON
        body: JSON.stringify(personaje), // Convertimos el objeto personaje a JSON
      });

      // 2️⃣ Comprobamos si la respuesta fue exitosa
      //    Si no, lanzamos un error para manejarlo en el catch
      if (!res.ok) {
        throw new Error("Error en la llamada a la API " + res.status);
      }

      // 3️⃣ Convertimos la respuesta de la API a JSON
      const data = await res.json();

      // 4️⃣ Devolvemos los datos recibidos de la API
      return data;
    } catch (error) {
      // 5️⃣ Si ocurre algún error (fallo en la petición o status != 200)
      //    lo mostramos por consola y lo re-lanzamos para que pueda manejarse fuera
      console.error(error);
      throw error;
    }
  }
  setPersonaje(personaje) {
    return new Promise(function (resolve) {
      let request = Global.urlPersonajes + "/Personajes";
      axios.post(request, personaje).then((response) => {
        resolve(response.data);
      });
    });
  }
  getPersonajes() {
    return new Promise(function (resolve) {
      let request = Global.urlPersonajes + "/Personajes";
      axios.get(request).then((response) => {
        resolve(response.data);
      });
    });
  }
  updatePersonaje(personaje) {
    return new Promise(function (resolve) {
      let request =
        Global.urlPersonajes +
        "/Personajes/" +
        personaje.idPersonaje +
        "/" +
        personaje.idSerie;
      axios.put(request, personaje).then((response) => {
        resolve(response.data);
      });
    });
  }
}
