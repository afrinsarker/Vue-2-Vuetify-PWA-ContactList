<template>
    <div class="container">
        <div v-if="showLogin">
            <v-container fluid>
                <v-row>
                    <v-col cols="12" sm="12" md="12">
                    <v-row>
                        <!---sidebar images--->
                        <v-col cols="12" md="4" sm="12">
                            <v-img src="https://image.freepik.com/free-photo/islamic-decoration-with-arabic-lantern-dates-fruit-gift-box-crescent-iftar-illustration_257995-595.jpg" alt="" height="800" width="100%"></v-img>
                        </v-col>
                            <!---sidebar images--->
                            <!---Login From--->
                            <v-row align="center" justify="center" dense>
                            <v-col cols="12" sm="8" md="8" lg="6" >
                                <v-card elevation="0">
                                    <v-img src="https://www.designevo.com/res/templates/thumb_small/pink-dress-and-clothing-brand.png" alt="" contain height="200"></v-img>
                                    <v-card-text>
                                    <v-form>
                                        <v-text-field label="Enter your email" name="email" prepend-inner-icon="mdi-account" type="email" class="rounded-0" outlined></v-text-field>
                                        <v-text-field label="Enter your password" name="password" prepend-inner-icon="mdi-lock" type="password" suffix="| Forgot?" class="rounded-0" outlined></v-text-field>
                                        <div class="text-right">
                                        <v-btn color="primary" dark>Log In</v-btn>
                                        </div>
                                        <v-card-actions class="text--secondary">
                                        <v-checkbox color="#000000" label="Remember me"></v-checkbox>
                                        <v-spacer></v-spacer>

                                        <span class="ma-2 ">No accounts yet?</span> <nuxt-link :to="{ name: 'Register' }">Sign Up</nuxt-link>
                                        </v-card-actions>
                                    </v-form>
                                    </v-card-text>

                                </v-card>
                            </v-col>
                            </v-row>
                        <!---Login From--->
                    </v-row>
                    </v-col>
                </v-row>
            </v-container>
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