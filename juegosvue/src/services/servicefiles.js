import Global from "@/Global";
import axios from "axios";

export default class ServiceFiles{
    subirArchivo(archivo){
        return new Promise((resolve, reject) => {
            const nombresArchivos = Array.from(archivo).map(archivo => archivo.name).join(", "); // Convertir a string
            const archivoPromises = Array.from(archivo).map(archivo => this.convertirArchivoABase64(archivo));

            Promise.all(archivoPromises)
                .then(fileContents => {
                    const file = {
                        fileName: nombresArchivos, // Asegurar que sea un string
                        fileContent: fileContents.join(";") // Convertir el contenido a un único string
                    };

                    let url = Global.urlFiles + "api/TestingFiles";
                    axios.post(url, file, {
                        headers: {
                            "Content-Type": 'application/json'
                        }
                    }).then(response => {
                        resolve(response.data);
                    }).catch(error => {
                        reject(error);
                    });
                })
                .catch(error => {
                    reject(error);
                });
        });
    }

    convertirArchivoABase64(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                const base64String = reader.result.split(",")[1]; // Extraer solo la parte Base64
                resolve(base64String);
            };
            reader.onerror = (error) => reject(error);
        });
    }
}