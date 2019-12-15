<template>
  <div class="snackbar">
      <v-navigation-drawer expand-on-hover clipped permanent color="#038A99">
          <template v-slot:prepend>
              <v-list> 
                <v-list-item>
                    <v-img class="img ma-2" :src="require('../../../assets/logo.svg')" width="20" height="auto">
                    </v-img>
                </v-list-item>
              </v-list>
          </template>

          <!-- <v-divider /> -->
          <v-layout justify-center ml-1 mr-1>
          <v-list nav>
            <v-list-item link to="/student">
              <v-list-item-icon>
                  <v-icon color="white" size="50">mdi-view-dashboard-outline</v-icon>
              </v-list-item-icon>
              <v-list-item-title size="50" class="white--text font-weight-bold headline">Dashboard</v-list-item-title>
            </v-list-item>
            <v-list-item link to="/student/profile">
              <v-list-item-icon>
                  <v-icon color="white" size="50">mdi-account-outline</v-icon>
              </v-list-item-icon>
              <v-list-item-title size="50" class="white--text">My Profile</v-list-item-title>
            </v-list-item>
            
            <v-list-item link to="/student/all-courses">
              <v-list-item-icon>
                  <v-icon color="white" size="50">mdi-book-open-outline</v-icon>
              </v-list-item-icon>
              <v-list-item-title size="50" class="white--text">Courses</v-list-item-title>
            </v-list-item>
            <v-list-item link>
              <v-list-item-icon>
                  <v-icon color="white" size="50"> mdi-settings-outline</v-icon>
              </v-list-item-icon>
              <v-list-item-title class="white--text" size="50">Preference</v-list-item-title>
            </v-list-item>
            <v-list-item link to="/student/calendar">
              <v-list-item-icon>
                  <v-icon color="white" size="50">mdi-calendar-outline</v-icon>
              </v-list-item-icon>
              <v-list-item-title size="50" class="white--text">My Calendar</v-list-item-title>
            </v-list-item>
            <v-list-item link class="help">
              <v-list-item-icon>
                  <v-icon color="white" size="50">mdi-help-circle-outline</v-icon>
              </v-list-item-icon>
              <v-list-item-title class="white--text">help</v-list-item-title>
            </v-list-item>
        </v-list>
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

.help {
  margin-top: 60% !important;
}

.img {
  width: 80px !important;
}
.snackbar{
  overflow: hidden;
}
</style>