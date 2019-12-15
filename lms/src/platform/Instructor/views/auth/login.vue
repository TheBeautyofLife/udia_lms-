<template>
  <div color="#0d98ba" class="register">
    <v-layout class="m-10 pa-50">
        <v-container class="pa-20">
          <div class="input-areas">
            <h1>Udia</h1>
            <p>Learning Management System</p>

            <h2>STUDENT</h2>
            <v-form ref="form" v-model="valid" lazy-validation>
              
              <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
              <v-text-field v-model="password" label="Password" required></v-text-field>
              <v-btn text class="ma-4" to="/forgot">FORGOT YOUR PASSWORD?</v-btn>
              <v-btn color="orange" depressed class="mr-6" @click="submit">LOGIN</v-btn>
            </v-form>
          </div>
        </v-container>
    </v-layout>
  </div>
</template>


<script>
  export default {
    
  }
</script>

<style scoped>
.register {
  background: #0d98ba; 
  height: 100%;
}

.m-10 {
    width: 75%;
    
}

.mr-6 {
    width: 100%;
    text-align: center;
}

.pa-20 {
  width: 70%;
  padding-top: 3.2rem;
}

.input-areas {
  margin-top: 20%;
  margin-left: 50%;
  text-align: center;
  background: #FFEEF2;
  padding: 50px;
  border-radius: 6px;
  
}

</style>