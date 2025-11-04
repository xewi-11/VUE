import Global from "@/Global";
import axios from "axios";

export default class SeriesService {
  getSeries() {
    return new Promise(function (resolve) {
      var url = Global.urlSeries;
      axios.get(url).then((response) => {
        resolve(response.data);
      });
    });
  }
  getSerieById(id){
    return new Promise(function(resolve){
        let requestUrl=Global.urlSeries+"/  "+id;
        axios.get(requestUrl).then((response) => {
          resolve(response.data);
        });
    })
  }
  getPersonajesBySerie(idSerie){
    return new Promise(function(resolve){
        let request="/PersonajesSerie/"+idSerie;
        let url=Global.urlSeries+request;
        axios.get(url).then((response) => {
          resolve(response.data);
        });
    })
}
getPersonajeById(idPersonaje){
  return new Promise(function(resolve){
    let request=Global.urlPersonajes+"/Personajes/"+idPersonaje;
    axios.get(request).then((response) => {
      resolve(response.data);
    });
  })
}
setPersonaje(personaje){
    return new Promise(function(resolve){
        let request=Global.urlPersonajes+"/Personajes";
        axios.post(request,personaje).then((response) => {
            resolve(response.data);
        });
    })
}
getPersonajes(){
    return new Promise(function(resolve){
        let request=Global.urlPersonajes+"/Personajes";
        axios.get(request).then((response) => {
            resolve(response.data);
        });
    });
}
updatePersonaje(personaje){
      return new Promise(function(resolve){
        let request=Global.urlPersonajes+"/Personajes/"+personaje.idPersonaje+"/"+personaje.idSerie;
        axios.put(request,personaje).then((response) => {
            resolve(response.data);
        });
      });

}
}
