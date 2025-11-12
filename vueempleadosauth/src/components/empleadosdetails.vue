<template>
    <div>
        <h2>Empleados Details Component</h2>
        <div v-if="empleado!=null">
            <p><strong>Oficio:</strong> {{empleado.oficio}}</p>
            <p><strong>Apellido:</strong> {{empleado.apellido}}</p>
            <p><strong>Director:</strong> {{empleado.director}}</p>
            <p><strong>Salario:</strong> {{empleado.salario}}</p>
        </div>
    </div>
</template>

<script>
import ServiceEmpleados from '@/services/serviceempleados';

var service=new ServiceEmpleados();
export default {
    name: 'EmpleadosDetailsComponent',
    data() {
        return {
            empleado:null
        };
    },
    methods:{
        cargarInformacion(){
            service.getEmpleadoByToken().then((response)=>{
                this.empleado=response;
            });
        }
    },
    mounted(){
        this.cargarInformacion();
    }
}
</script>

<style>

</style>