import Global from "@/Global";
import axios from "axios";

export default class ServiceEmpleados {
  loginForUser(Usuario, Password) {
    return new Promise((resolve) => {
      let request = "auth/login";
      let url = Global.urlEmpleados + request;
       axios.post(url, {
        userName: Usuario,
        password: Password,
      }).then((response) => {
        resolve(response.data.response);
      });
    });
  }
  getEmpleadoByToken(){
    return new Promise((resolve)=>{
      let request="api/Empleados/PerfilEmpleado";
      let url=Global.urlEmpleados+request;
      axios.get(url,{
        headers:{
          "Authorization":"Bearer "+Global.tokenEmpleados
        }
      }).then((response)=>{
        resolve(response.data);
      });
    });
  }
  getSubordinadosPorEmpleado(){
    return new Promise((resolve)=>{
      let request="api/Empleados/SubordinadosEmpleado";
      let url=Global.urlEmpleados+request;
        axios.get(url,{
          headers:{
            "Authorization":"Bearer "+Global.tokenEmpleados
          }
        }).then((response)=>{
          resolve(response.data);
        });
      });
    }
}
