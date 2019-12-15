<template>
  <div class="manage_teachers">
    <dheader />
    
    <!-- flex wrapper -->
    <div class="wrapper">
        <div class="snackbar">
            <snackbar />
        </div>
    
        <div class="main_content">
            <div class="divider">
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

            <h4 class="pl-5">Manage listed teachers in the Schools</h4>
            <!-- <schoollist /> -->
            <v-row class="card-row">
                <v-col cols="12">
                    <v-row class="pl-5">
                        <v-card flat color="green" class="card ma-3" @click="select('art')"> 
                            <v-card-title>
                                School of <br>Art & Design
                            </v-card-title>
                        </v-card>

                        <v-card flat color="orange" class="card ma-3" @click="select('business')"> 
                            <v-card-title>
                                School of <br>Business
                            </v-card-title>
                        </v-card>

                        <v-card flat color="pink" class="card ma-3" @click="select('engineering')"> 
                            <v-card-title>
                                School of <br>Engineering
                            </v-card-title>
                        </v-card>

                        <v-card flat color="blue" class="card ma-3" @click="select('science')"> 
                            <v-card-title>
                                School of <br>Health Science
                            </v-card-title>
                        </v-card>

                        <v-card flat color="grey" class="card ma-3" @click="select('humanities')"> 
                            <v-card-title>
                                Humanities & <br>Social Sciences
                            </v-card-title>
                        </v-card>
                    </v-row>
                </v-col>
            </v-row>
        </div>

        <!-- notifications -->
        <div class="notification">
            <notifycard />
        </div>
    </div>
  </div>
</template>

<script>
import dheader from '../components/dheader.vue'
import snackbar from '../components/snackbar'

export default {
    components: {
        dheader,
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
            text: 'Manage Teachers',
            disabled: true,
            href: '#',
            }
        ],

        divider: '>',
        large: false,
        customDiv: false
    }),


    methods: {
        select: function(person) {
            if(person == 'art') {
                window.location.href = 'teachers'
            }else if(person == 'business') {
                window.location.href = '#'
            }else if(person =='engineering') {
                window.location.href = '#'
            }else if(person == 'science') {
                window.location.href = '#'
            }else if(person == 'humanities') {
                window.location.href = '#'
            }
            
        }
    }

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
    padding: 30px;
    margin: 30px 80px;
    position: relative;
    right: 10%;
} 

.divider {
    border-bottom: 1px solid lightgray;
    display: flex;
    justify-content: space-around;
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

</style>