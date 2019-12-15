<template>
  <div class="school_name">
    <dheader />
    
    <!-- flex wrapper -->
    <div class="wrapper">
        <div class="snackbar">
            <snackbar />
        </div>
    
        <div class="main_content">
            <div class="divider d-flex justify-lg-space-between">
                <v-breadcrumbs :items="items" :divider="divider" class="breadcrumb">
                    <template v-if="customDiv" v-slot:divider>
                        <v-icon>mdi-chevron-right</v-icon>
                    </template>
                </v-breadcrumbs>

                <v-spacer></v-spacer>

                <!-- context menu -->
                <v-menu close-on-click close-on-content-click offset-y>
                    <template v-slot:activator="{ on }">
                        <v-btn icon>
                            <v-icon size="30">mdi-dots-vertical</v-icon>
                        </v-btn>
                    </template>

                    <!-- drop down menu from the admin profile picture -->
                    <v-list v-for="(menu, index) in dmenu" :key="index" class="dmenu">
                        <v-list-item :to="menu.link">
                            <v-icon>{{ menu.icon }}</v-icon>
                            <v-list-item-title>{{ menu.title }}</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>

                
            </div>

            <h4 class="pl-5">Manage the School Information</h4>
            <div class="divider d-flex justify-lg-space-between">
                <h3>School Name</h3>
                <div class="orange--text"><i>Edit</i>
                    <v-icon color="orange" class="ml-1">mdi-pencil</v-icon>
                </div>
            </div>

            <v-row class="date_row">
                <v-col>
                    <v-row class="grey--text">
                        <h5 class="ml-5">Date Created: </h5>
                        <p class="pl-9">00/00/00</p>
                        <p class="pl-5">00:00</p>
                    </v-row>
                </v-col>
            </v-row>

            <div class="divider divider1 d-flex justify-lg-space-between">
                <h3>Departments</h3>
            </div>

            <departments />
        </div>

        <!--notifications -->
        <div class="notification">
            <notifycard />
        </div>
    </div>
  </div>
</template>

<script>
import dheader from '../components/dheader'
import departments from '../menus/departments'
import snackbar from '../components/snackbar'

export default {
    components: {
        dheader,
        departments,
        snackbar
    },

    data: () => ({
        items: [
            {
            text: 'Home',
            disabled: false,
            href: './dashboard',
            },
            {
            text: 'User Management',
            disabled: false,
            href: '/user_management',
            },
            {
            text: 'Manage Schools',
            disabled: false,
            href: '/manage_schools',
            },
            {
            text: 'School Name',
            disabled: true,
            href: '#',
            }
        ],

        divider: '>',
        large: false,
        customDiv: false
    }),
    
}
</script>

<style scoped>
.wrapper {
    display: flex;
    justify-content: space-between;
}

.snackbar {
    height: 100vh;
}

.main_content {
    width: 70%;
    padding: 30px;
    margin: 30px 80px;
    position: relative;
    right: 10%;
} 

.divider {
    border-bottom: 1px solid lightgray;
    margin-bottom: 3%;
    margin: 35px;
}

.card {
    width: 13.1rem;
    height: 12.5rem;
    display: flex;
    align-items: flex-end;
    color: white;
    font-size: 40px !important;
}

.divider1 {
    margin-top: 1%;
    border-bottom: 1px solid lightgrey;
}

.divider div,
.divider h3,
.span {
    display: inline-block;
}

.date_row {
    margin-left: 20px;
}
</style>