<template>
  <div class="manage_schools">
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

            <h4 class="pl-5">Manage listed Faculties/Schools</h4>
            <schoolList/>

            <!-- custom card to add faculties to the list -->
            <v-card flat class="card ml-5" @click="dialog = true"> 
                <v-card-text>
                    <v-icon size="60">mdi-plus</v-icon>
                    Create new
                </v-card-text>
            </v-card>

            <!-- add new course -->
            <v-dialog v-model="dialog" max-width="800">
                <div class="white modal pa-3">
                    <div class="close d-flex justify-lg-space-between">
                        <h2 class="grey--text">Add Course</h2>
                        <v-btn class="icon" icon @click.stop="dialog = false">
                            <v-icon size="40">mdi-close</v-icon>
                        </v-btn>
                    </div>
                    <v-divider></v-divider>

                    <div class="personalForm d-flex justify-center">
                        <div class="academicForm">
                            <p class="mt-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, tenetur libero esse voluptatibus aut</p>
                            <form>
                                <v-text-field
                                v-model="schoolName"
                                type="text"
                                label="school/College Name"
                                required
                                ></v-text-field>

                                <v-select
                                v-model="yes"
                                :items="textfield"
                                placeholder="Textfield"
                                required
                                ></v-select>
                                
                                <v-select
                                v-model="schoolSelected"
                                :items="schools"
                                placeholder="Select One (i.e School of Science)"
                                required
                                ></v-select>
                                
                                <v-btn text @click="yes =true">
                                    <v-icon size="50" color="blue">mdi-plus-circle</v-icon>
                                    Add another Field
                                </v-btn>

                                <v-btn dark depressed color="blue" class="mr-4 mt-10 submitted" @click="dialog2 = true">Submit</v-btn>
                            </form> 
                        </div>
                    </div>
                </div>
            </v-dialog>

            <!-- successful submission -->
            <v-dialog v-model="dialog2" max-width="800">
                <div class="white modal pa-3">
                    <div class="close d-flex justify-end">
                        <v-btn class="icon" icon @click.stop="dialog2 = false">
                            <v-icon size="40">mdi-close</v-icon>
                        </v-btn>
                    </div>
                    <v-divider></v-divider>
                    <v-icon color="orange" size="90">mdi-cloud-check</v-icon>
                    <h3>You have successfully enrolled</h3>
                    <p>You can click here to go back</p>
                    
                    <div class="buttons d-flex justify-center align-center">
                        <v-btn dark depressed type="submit" value="submit" class="blue ma-10" @click.stop="dialog2 = false">Go Back</v-btn>
                    </div>
                </div>
            </v-dialog>
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
import schoolList from '../menus/school_list.vue'
import snackbar from '../components/snackbar'

export default {
    components: {
        dheader,
        schoolList,
        snackbar
    },

    data: () => ({
        dialog: false,
        dialog2: false,
        yes: false,

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
                window.location.href = 'students'
            }else if(person == 'teachers') {
                window.location.href = 'manage_teachers'
            }else if(person =='schools') {
                window.location.href = 'manage_schools'
            }else if(person == 'courses') {
                window.location.href = 'manage_courses'
            }
            
        },
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
    margin-left: 6%;
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

.card {
    width: 13.1rem;
    height: 12.5rem;
    color: white;
    font-size: 40px !important;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px dashed lightgrey;
}

.modal {
    min-height: 700px;
    text-align: center;
}

.academicForm {
    width: 70%;
}

.submitted {
    position: relative;
    margin-top: 5%;

}
</style>