import Global from "@/Global";
import axios from "axios";

export default class ServiceDepartamentos {
     

  getDepartamentos(){
    return new Promise(function(resolve){
        let request="/api/Departamentos";
        let urlApi=Global.urlDepartamentos;
        axios.get(urlApi+request).then(response=>{
              resolve(response.data);
        });
    })
  }
  setDepartamento(Departamento){
    return new Promise(function(resolve){
        let request="/api/Departamentos";
        let urlApi=Global.urlDepartamentos;
        axios.post(urlApi+request,Departamento).then(response=>{
                resolve(response.data);
        })
    })
  }
  findDepartamento(id){
    return new Promise(function(resolve){
        let request="/api/Departamentos/"+id;
        let url=Global.urlDepartamentos;
        axios.get(url+request).then(response=>{
            resolve(response.data);
        });
    })
  }
  updateDepartamento(id,Departamento){
    return new Promise(function(resolve){
        let request="/api/Departamentos";
        let url=Global.urlDepartamentos;
        axios.put(url+request,Departamento).then(response=>{
            resolve(response.data);
        })
    })
  }
  eliminarDepartamento(id){
    return new Promise(function(resolve){
        let request="/api/Departamentos/"+id;
        let url=Global.urlDepartamentos;
        axios.delete(url+request).then(response=>{
            resolve(response.data);
        })
    })
    }
}