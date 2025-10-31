export default class ServiceEjemplo {

   getSaludo(nombre){
    return `Hola ${nombre}, bienvenido a tu viernes de servicios`;
   }

   getpromesa= new Promise(function(resolve,reject){
    // tenemos dos posibilidades, que todo vaya bien o que haya un error
    let NUM=0;
    if(NUM==0){
        resolve("La operacion ha sido correcta");
    }else{
        reject("La operacion ha fallado");
    }
   })
//    service.getpromesa().then(response=>{
//     //dentro de response tenemos los datos de resolve
//     console.log(response);
//    })

}