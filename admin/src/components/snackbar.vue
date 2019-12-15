<template>
  <div class="snackbar">
      <v-navigation-drawer expand-on-hover clipped  permanent color="#038A99">
          <template v-slot:prepend>
              <v-list> 
                <v-list-item>
                    <v-img class="img ma-2" :src="require('../assets/logo.svg')" width="20" height="auto">
                    </v-img>
                </v-list-item>
              </v-list>
          </template>

          <!-- <v-divider /> -->
          <v-layout justify-center ml-1 mr-1>
          <v-list nav>
            <v-list-item link to="/">
              <v-list-item-ic
                  <v-icon color="white" size="50">mdi-view-dashboard-outline</v-icon>
              </v-list-item-icon>
              <v-list-item-title size="50" class="white--text font-weight-bold headline">Dashboard</v-list-item-title>
            </v-list-item>
            <v-list-item link to="/profile">
              <v-list-item-icon>
                  <v-icon color="white" size="50">mdi-account-outline</v-icon>
              </v-list-item-icon>
              <v-list-item-title size="50" class="white--text font-weight-bold headline">My Profile</v-list-item-title>
            </v-list-item>
            
            <v-list-item link to="/manage_courses">
              <v-list-item-icon>
                  <v-icon color="white" size="50">mdi-book-open-outline</v-icon>
              </v-list-item-icon>
              <v-list-item-title size="50" class="white--text font-weight-bold headline">Courses</v-list-item-title>
            </v-list-item>

            <v-list-item link to="/#">
              <v-list-item-icon>
                  <v-icon color="white" size="50"> mdi-settings-outline</v-icon>
              </v-list-item-icon>
              <v-list-item-title class="white--text" size="50">Preference</v-list-item-title>
            </v-list-item>

            <v-list-item link to="/user_management">
              <v-list-item-icon>
                  <v-icon color="white" size="50">mdi-account-group-outline</v-icon>
              </v-list-item-icon>
              <v-list-item-title class="white--text" size="50" alt="manage users">Users</v-list-item-title>
            </v-list-item>

             <v-list-item link to="/manage_schools">
              <v-list-item-icon>
                  <v-icon color="white" size="50">mdi-office-building</v-icon>
              </v-list-item-icon>
              <v-list-item-title class="white--text" size="50" alt="manage users">School</v-list-item-title>
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
  height: 150vh !important;
}
</style>