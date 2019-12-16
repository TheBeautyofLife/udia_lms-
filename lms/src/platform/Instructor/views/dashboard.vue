<template>
  <div class="dashboard">
    <dheader />
    <!-- snackbar -->
    <div class="wrapper d-flex justify-space-between">

      <!-- snackbar div -->
      <div class="snackbar">
        <snackbar />
      </div>

      <!-- breadcrumb, course list in grid view -->
      <div class="first">
       <!--  <v-card outlined class="ml-12" height="150px" v-if="seen">
            <v-avatar  size="50" color="orange" class="notbell">
                <v-icon color="white">mdi-bell-ring</v-icon>
            </v-avatar>
            <v-card-text>
                <h2>Lorem ipsum dolor sit.</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A ut quidem architecto aut commodi ratione necessitatibus cumque similique! Recusandae, corporis.</p>
            </v-card-text>
            
            <v-btn class="close" icon @click.prevent="seen = !seen">
              <v-icon >mdi-close</v-icon>
            </v-btn>
        </v-card> -->

        <div class="divider">
            <v-breadcrumbs :items="items" :divider="divider" class="breadcrumb">
                <template v-if="customDiv" v-slot:divider>
                    <v-icon>mdi-chevron-right</v-icon>
                </template>
            </v-breadcrumbs>
        </div>

        <div class="mainContent">
          <h3 class="mt-5 display-2">Welcome!</h3>
          <v-row>
              <v-col cols="12">
                  <v-row>
                    <v-card width="300" height="300" color="red lighten-2" class="ma-4">
                      <v-img class="white--text align-end" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="250px">
                        <v-card-title class="display-1">Financial<br>Accounting</v-card-title>
                      </v-img>

                      <v-card-actions class="white">
                        <v-btn icon class="ml-5">
                          <v-icon size="30" color="#038A99" @click="select()">mdi-view-dashboard-variant</v-icon>
                        </v-btn>

                        <v-btn icon class="ml-5">
                          <v-icon size="30" color="#038A99">mdi-folder</v-icon>
                        </v-btn> 

                        <v-btn icon class="ml-5">
                          <v-icon size="30" color="#038A99">mdi-comment-text-multiple</v-icon>
                        </v-btn>

                          <!--  <v-btn dark icon class="close ma-3">
                          <v-icon size="35">mdi-dots-vertical</v-icon>
                        </v-btn> -->
                      </v-card-actions>
                    </v-card>

                    <v-card width="300" height="300" color="green" class="ma-4">
                      <v-img class="white--text align-end" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="250px">
                        <v-card-title class="display-1">Elements<br>of Banking</v-card-title>
                      </v-img>

                      <v-card-actions class="white">
                        <v-btn icon class="ml-5">
                          <v-icon size="30" color="#038A99" @click="select()">mdi-view-dashboard-variant</v-icon>
                        </v-btn>

                        <v-btn icon class="ml-5">
                          <v-icon size="30" color="#038A99">mdi-folder</v-icon>
                        </v-btn> 

                        <v-btn icon class="ml-5">
                          <v-icon size="30" color="#038A99">mdi-comment-text-multiple</v-icon>
                        </v-btn>

                       <!--  <v-btn dark icon class="close ma-3">
                          <v-icon size="35">mdi-dots-vertical</v-icon>
                        </v-btn> -->
                      </v-card-actions>
                    </v-card>
                  </v-row>
              </v-col>
          </v-row>
        </div>
      </div>

      <!-- the right note with calendar view, grades and courses button -->
      <div class="notification">
        <rightNote />
      </div>
    </div>
    <!--  -->      
  </div>
</template>


<script>
import dheader from '../components/dheader'
import rightNote from '../components/notifications'
import snackbar from '../components/snackbar'

export default {
    components: {
      dheader,
      rightNote,
      snackbar
    },

    data: () => ({
      seen: true,
      items: [
          {
          text: 'Dashboard',
          disabled: true,
          href: '#'
          }
      ],

      divider: '>',
      large: false,
      customDiv: false,


    }),

    methods: {
      select() {
        window.location.href = '/instructor/home'
      }
    }
  }


</script>

<style scoped>
.wrapper {
    padding: 50px;
}

.snackbar {
    height: 120vh;
    position: relative;
    top: -25px;
    left: -26px;
}

.ml-12 {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 3px;
}

.close {
    position: absolute;
    right: 4px;
    top: 6px;
    border-radius: 50%;
}
 
.breadcrumb {
    position: absolute;
    top: -50px;
}

.divider {
    position: relative;
    border-bottom: 1px solid lightgray;
    margin-top: 65px;
    margin-left: 30px;
 }
.mdi_dots {
  display: absolute;
  left: 20% !important;
  top: 4px;
}

.first {
  width: 60%;
}
</style>
