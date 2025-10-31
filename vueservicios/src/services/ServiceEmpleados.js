import Global from "@/Global";
import axios from "axios";

export default class ServiceEmpleados {
  getEmpleados() {
    return new Promise(function (resolve) {
      let urlApi = Global.urlEmpleados;
      let request = "api/Empleados";
      axios.get(urlApi + request).then((response) => {
        console.log("Leyendo datos empleados");
        resolve(response.data);
      });
    });
  }
  getEmpleadoID(id){
    return new Promise(function(resolve){
          let request="api/Empleados/" + id;
          let urlApi = Global.urlEmpleados;
          axios.get(urlApi + request).then((response)=>{
              console.log("Leyendo empleado por ID");
              resolve(response.data);
          });
    });
  }
  getOficios(){
    return new Promise(function(resolve){
          let request = "api/empleados/oficios";
          let urlApi = Global.urlEmpleados;
          axios.get(urlApi+request).then((response)=>{
              console.log("Leyendo oficios");
            resolve(response.data);
          })
    })
  }
  getEmpleadosOficio(oficio){
    return new Promise(function(resolve){
            let request="api/Empleados/EmpleadosOficio/" + oficio;
            let urlApi = Global.urlEmpleados;
            axios.get(urlApi + request).then((response)=>{
                console.log("Leyendo empleados por oficio");
                resolve(response.data);
            });
    });
  }
}
