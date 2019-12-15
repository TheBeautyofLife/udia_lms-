<template>
  <v-content>
      <v-toolbar color="#038A99" height="70">
        <v-toolbar-title>
          <v-img class="img ma-2" src="/img/logo/logo-1.png" width="90" />
        </v-toolbar-title>
      </v-toolbar>
      <v-flex xs12>
        <v-layout row wrap justify-center align-center mt-12>
          <v-card flat class="text-center" width="200">
            <v-layout row wrap justify-center align-center>
            <v-card-title class="display-1">
              Admin
            </v-card-title>
            <v-card-text >
             This is the admin plaform that goes to an external link
            </v-card-text>
            <v-card-actions>
              <v-btn color="#038A99" class="text-capitalize font-weight-bold" href='http://localhost:8081/' dark>Go to platform</v-btn>
            </v-card-actions>
             </v-layout>
          </v-card>

            <v-card flat class="text-center" width="200">
            <v-layout row wrap justify-center align-center>
            <v-card-title class="display-1">
              Student
            </v-card-title>
            <v-card-text >
              This is the student platform that goes to the dashboard.
            </v-card-text>
            <v-card-actions>
              <v-btn color="#038A99" class="text-capitalize font-weight-bold" to='/student' dark> Go to platform </v-btn>
            </v-card-actions>
             </v-layout>
          </v-card>

            <v-card flat class="text-center" width="200">
            <v-layout row wrap justify-center align-center>
            <v-card-title class="display-1">
              Instructor
            </v-card-title>
            <v-card-text >
              This is the student platform that goes to the dashboard.
            </v-card-text>
            <v-card-actions>
              <v-btn color="#038A99" class="text-capitalize font-weight-bold" to='/instructor' dark>Go to platform</v-btn>
            </v-card-actions>
             </v-layout>
          </v-card>
        </v-layout>
      </v-flex>
  </v-content>
</template>

<script>
export default {
    name: 'home'
    //
}
</script>
