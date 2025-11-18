<template>
  <div>
    <h2>Login Component</h2>
    <form >
        <div>
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" v-model="cajaName" />
        </div>
        <div>
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" v-model="cajaPassword" />
        </div>
        <button @click.prevent="login()" type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import ServiceEmpleados from '@/services/serviceempleados';


const service=new ServiceEmpleados();
export default {
    name: "LoginComponent",
    data() {
        return {
        cajaName: "",
        cajaPassword: ""
        };
    },
    methods:{
        login() {
            service.loginForUser(this.cajaName, this.cajaPassword).then((response)=>{
                this.$emit('updateToken',response);
                this.$router.push({ path: '/detalles' });
            })
        }
    }
}
</script>

<style>

</style>