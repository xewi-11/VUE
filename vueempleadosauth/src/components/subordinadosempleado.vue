<template>
    <div>
        <h1>Subordinados Empleado</h1>
        <table v-if="subordinados">
            <thead>
                <tr>
                    <th>Oficio</th>
                    <th>Apellido</th>
                    <th>Director</th>
                    <th>Salario</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="subordinado in subordinados" :key="subordinado.id">
                    <td>{{ subordinado.oficio }}</td>
                    <td>{{ subordinado.apellido }}</td>
                    <td>{{ subordinado.director }}</td>
                    <td>{{ subordinado.salario }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import ServiceEmpleados from '@/services/serviceempleados';

const service = new ServiceEmpleados();
export default {
    name: "SubordinadosEmpleado",
    data() {
        return {
            subordinados:null
        }
    },
    methods: {
        cargarSubordinados(){
            service.getSubordinadosPorEmpleado().then(response=>{
                this.subordinados=response.data;
            }).catch(error=>{
                console.log(error);
            });
        }
    },
    mounted(){
        this.cargarSubordinados();
    }
}
</script>

<style>

</style>