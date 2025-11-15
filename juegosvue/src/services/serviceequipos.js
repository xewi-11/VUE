import axios from "axios";
import Global from "./../Global";
export default class ServiceEquipos{


    getEquipos(){
         return new Promise((resolve)=>{
             let request="api/equipos";
             let url=Global.apiFutbol+request;
             axios.get(url).then(response=>{
                 resolve(response.data);
             });
         })
    }
    getEquipoById(idEquipo){
          return new Promise((resolve)=>{
             let request="api/equipos/"+idEquipo;
             let url=Global.apiFutbol+request;
             axios.get(url).then(response=>{
                 resolve(response.data);
             });
          })
    }
}