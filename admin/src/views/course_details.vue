<template>
  <div class="course_details">
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

            <h4 class="ml-9">Course Information</h4>
            <div class="divider d-flex justify-lg-space-between">
                <h3>Course Name</h3>
                <v-btn text color="orange" class="editBtn" @click="dialog = true">Edit
                    <v-icon color="orange" class="ml-1">mdi-pencil</v-icon>
                </v-btn>
            </div>

            <!-- add course -->
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
                                v-model="courseName"
                                type="text"
                                label="Course Name"
                                required
                                ></v-text-field>

                                <v-select
                                v-model="departmentSelect"
                                :items="department"
                                placeholder="Select One (i.e Department)"
                                required
                                ></v-select>

                                <v-select
                                v-model="schoolSelected"
                                :items="schools"
                                placeholder="Select One (i.e School of Science)"
                                required
                                ></v-select>

                                <textarea cols="60" rows="5" placeholder="Description"></textarea>
                                <v-btn dark depressed color="blue" class="mr-4 mt-10 submitted" @click="dialog1 = true">Next</v-btn>
                            </form> 
                        </div>
                    </div>
                </div>
            </v-dialog>

            <!-- assign course -->
            <v-dialog v-model="dialog1" max-width="800">
                <div class="white modal pa-3">
                    <div class="close d-flex justify-lg-space-between">
                        <h2 class="grey--text">Assign Course</h2>
                        <v-btn class="icon" icon @click.stop="dialog1 = false">
                            <v-icon size="40">mdi-close</v-icon>
                        </v-btn>
                    </div>
                    <v-divider></v-divider>

                    <div class="personalForm d-flex justify-center">
                        
                        <div class="academicForm">
                            <p class="mt-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, tenetur libero esse voluptatibus aut</p>
                            <div class="public orange lighten-4 d-flex justify-center">
                                
                                <v-radio-group row v-model="publicize" :mandatory="false">
                                    <p>Do you want to make this public in the system?</p>
                                    <v-radio label="Disable" color="orange" value="Disable"></v-radio>
                                    <v-radio label="Enable" color="orange" value="Enable"></v-radio>
                                </v-radio-group>
                            </div>

                            <div class="assign orange lighten-4 d-flex justify-center mt-12">
                                <v-radio-group row v-model="assign" :mandatory="false">
                                    <p>Do you want to assign course to Lecturer?</p>
                                    <v-radio label="No" color="orange" value="No"></v-radio>
                                    <v-radio label="Yes" color="orange" value="Yes" @click="lecs = true"></v-radio>
                                </v-radio-group>
                            </div> 

                            <v-autocomplete
                            v-model="lecs"
                            :items="lecturers"
                            chips
                            label="Lecturer Name"
                            full-width
                            hide-details
                            hide-no-data
                            hide-selected
                            multiple
                            single-line
                            ></v-autocomplete>

                            <v-btn dark depressed color="blue" class="mr-4 mt-10 submitted" @click="dialog2 = true">Submit</v-btn> 
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

            <v-row class="date_row">
                <v-col>
                    <v-row class="grey--text">
                        <h5>Date Created: </h5>
                        <p class="pl-9">00/00/00</p>
                        <p class="pl-5">00:00</p>
                    </v-row>
                    <v-row>
                        <h4 class="blue--text"><i>Department Name</i></h4>
                    </v-row>
                </v-col>
            </v-row>

            <div class="divider divider1 d-flex justify-lg-space-between">
                <h3>Assigned Teachers</h3>
            </div>

            <v-container class="teacher_list">
                <teacherList />
            </v-container>
        </div>

        <!-- notifications -->
        <div class="notification">
            <notifycard />
        </div>
    </div>
  </div>
</template>

<script>
import dheader from '../components/dheader'
import teacherList from '../menus/teacher_list'
import snackbar from '../components/snackbar'

export default {
    components: {
        dheader,
        teacherList,
        snackbar
    },

    data: () => ({
        //data for breadcrumbs
        items: [
            {
            text: 'Home',
            disabled: false,
            href: './dashboard',
            },
            {
            text: 'Course Management',
            disabled: false,
            href: '/manage_courses',
            },
            {
            text: 'Course Name',
            disabled: true,
            href: '#',
            }
        ],

        divider: '>',
        large: false,
        customDiv: false,
        dialog: false,
        dialog1: false,
        dialog2: false,
        
        //data for adding course
        courseName: null,
        departmentSelect: '',
        schoolSelected: '',
        department: ['Languages', 'Law', 'Journalism', 'Diplomacy & Interstudy'],
        schools: ['Business School', 'Art & Design', 'Engineering School', 'Health Science', 'Humanities'],

        //data for publicizing & assigning lecturers
        publicize: 'public',
        assign: 'No',
        lecs: false,
        selected: ['Rodgers Brian'],
        lecturers: ['Rodgers Brian', 'Joshua Kimbareeba', 'Stephanie Kirathe', 'Precious Wangu', 'Evans Kimathi', 'ngari Frida']
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

.date_row {
    margin-left: 60px;
}

.editBtn {
    text-transform: capitalize;
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
    left: 45%;
    margin-top: 40px;
}
</style>
