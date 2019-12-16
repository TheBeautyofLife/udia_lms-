<template>
  <div class="snackbar">
   
      <v-navigation-drawer expand-on-hover clipped permanent color="#038A99" style='overflow: hidden;'>
           <template v-slot:prepend>
              <v-img class="img ma-2" :src="require('../../../assets/logo.svg')"  height="auto" style="width:70px !important;">
              </v-img>
          </template>
          

          <!-- <v-divider /> -->
          <v-layout justify-center ml-1 mr-1 style='overflow: hidden;'>
          <v-flex nav style='overflow: hidden;' overflow>
            <v-list-item link to="/instructor">
              <v-list-item-icon>
                  <v-icon color="white" size="50">mdi-view-dashboard-outline</v-icon>
              </v-list-item-icon>
              <v-list-item-title size="50" class="white--text font-weight-medium headline">Dashboard</v-list-item-title>
            </v-list-item>
            <v-list-item link to="/instructor/profile">
              <v-list-item-icon>
                  <v-icon color="white" size="50">mdi-account-outline</v-icon>
              </v-list-item-icon>
              <v-list-item-title size="50" class="white--text font-weight-medium title">My Profile</v-list-item-title>
            </v-list-item>
            
            <v-list-item link to="/instructor/all-courses">
              <v-list-item-icon>
                  <v-icon color="white" size="50">mdi-book-open-outline</v-icon>
              </v-list-item-icon>
              <v-list-item-title size="50" class="white--text font-weight-medium title">Courses</v-list-item-title>
            </v-list-item>
            <v-list-item link>
              <v-list-item-icon>
                  <v-icon color="white" size="50"> mdi-settings-outline</v-icon>
              </v-list-item-icon>
              <v-list-item-title class="white--text font-weight-medium title" size="50">Preference</v-list-item-title>
            </v-list-item>

            <v-list-item link to="/instructor/calendar">
              <v-list-item-icon>
                  <v-icon color="white" size="50">mdi-calendar-outline</v-icon>
              </v-list-item-icon>
              <v-list-item-title size="50" class="white--text font-weight-medium title">My Calendar</v-list-item-title>
            </v-list-item>

            <v-list-item link to="/instructor/repository">
              <v-list-item-icon>
                  <v-icon color="white" size="50">mdi-folder-outline</v-icon>
              </v-list-item-icon>
              <v-list-item-title size="50" class="white--text font-weight-medium title">Messeges</v-list-item-title>
            </v-list-item>
            

            <v-list-item link class="help">
              <v-list-item-icon>
                  <v-icon color="white" size="50">mdi-help-circle-outline</v-icon>
              </v-list-item-icon>
              <v-list-item-title class="white--text font-weight-medium title">help</v-list-item-title>
            </v-list-item>
        </v-flex>
          </v-layout>
      </v-navigation-drawer>
  
  </div>
</template>

<script>
  export default {
    data () {
      return {
        drawer: true,
        mini: true
      }
    },
  }
</script>

<style scoped>

.snack {
  width: 300px !important;
}
.snackbar{
  overflow: hidden;
}
</style>