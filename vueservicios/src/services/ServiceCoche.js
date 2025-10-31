import Global from "@/Global";
import axios from "axios";

export default class ServiceCoche {
  GetCoches() {
    return new Promise(function (resolve) {
      let coches = [];
      let request = "webresources/coches";
      let urlApi = Global.urlCoches;
      axios.get(urlApi + request).then((response) => {
        console.log("Leyendo datos");
        coches = response.data;
        resolve(coches);
      }); 
    });
  }
}
