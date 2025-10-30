<template>
    <div>
        <h1>Numero doble</h1>
        <h2 style="color: red;">{{ mensaje }}</h2>
        <h2>{{ doble }}</h2>
        <button   @click="redirectToHome">Ir a home</button>
        
    </div>
</template>
 
<script>
    export default {
        name: "NumeroDoble",
        data(){
            return {
                mensaje: "",
                doble: 0
            }
        },
        mounted() {
            console.log("Param: " + this.$route.params.numero);
            //Los parametros siempre son string, no importan que sean numericos.
            var numero = this.$route.params.numero;
            if(numero == ""){
                this.mensaje = "Sin parametros en Routing";
            }else {
                this.mensaje = "Parametros recibido: " + numero;
                this.doble = parseInt(numero) * 2;
            }
        },
        watch: {
            '$route.params.numero' (nextVal, oldVal) {
                if(nextVal != oldVal){
                    this.mensaje = "Esto ha cambiado: " + this.$route.params.numero;
                    console.log("Next: " + nextVal);
                    console.log("Old: " + oldVal);
                    if(this.$route.params.numero == ""){
                        this.doble = 0;
                    } else {
                        this.doble = parseInt(this.$route.params.numero) * 2;
                    }
                }
            }
        },
        methods: {
            redirectToHome(){
                this.$router.push("/");
            }
        }
    }
</script>