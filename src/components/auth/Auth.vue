<template>
    <div class="container">
        <div v-if="showLogin">
            <h1>Login Form</h1>
            <v-btn @click="toggleAuth">No account yet?</v-btn>
        </div>
        <div v-else>
            <h3>Register Form</h3>
            <v-btn @click="toggleAuth">Login</v-btn>
        </div>
  </div>
</template>

<script>
export default {
    name: 'Auth',
    data(){
        return{
            showLogin: true,
        }
    },
    mounted(){

    },
    methods:{
        toggleAuth(){
            console.log("toggle clicked")
            this.showLogin = !this.showLogin

        }
    }
}
</script>

<style>

</style>