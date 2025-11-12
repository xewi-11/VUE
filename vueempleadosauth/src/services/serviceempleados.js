import axios from "axios";

export default class ServiceEmpleados {
     loginForUser(Usuario,Password){
        let request="auth/login";
        let url=Global.urlEmpleados+request;
        return axios.post(url,{
            usuario:Usuario,
            password:Password
        });
     }
}