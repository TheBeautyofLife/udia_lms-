<template>
  <div class="browse">
    <dheader />
    
    <!-- flex wrapper -->
    <div class="wrapper d-flex justify-lg-space-between">
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
            </div>
            <h2 class="display-2 mb-3">All Courses</h2>
            <v-divider></v-divider>
            
            <!-- list of courses-->
            <v-row>
                <v-col cols="12">
                    <v-row>
                        <v-card v-for="course in courses" :key="course.title" width="300" height="300" :color="course.color" class="ma-4">
                            <v-img class="white--text align-end"  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="250px">
                            <v-card-title class="display-1">{{ course.title }}</v-card-title>
                            </v-img>
                        
                            <!-- add functionality -->
                            <v-card-actions class="white">
                                <v-spacer></v-spacer>
                                <v-btn icon class="ml-5" @click.stop="dialog = true">
                                    <v-icon size="30" color="grey">mdi-plus</v-icon>
                                </v-btn>

                                <!-- modal form to add course to list of taken forms -->
                                <v-dialog v-model="dialog" max-width="800" class="">
                                    <div class="white modal">
                                        <div class="close">
                                            <v-btn class="icon" icon @click.stop="dialog = false">
                                                <v-icon size="40">mdi-close</v-icon>
                                            </v-btn>
                                        </div>
                                        <v-divider></v-divider>
                                        <h3 class="pt-9 display-1">You are enrolling to Course_name</h3>
                                        <p>Are you sure you want to enroll to this course?</p>
                                        <p>To confirm select "Yes" below</p>
                                        <div class="radio d-flex justify-center align-center orange lighten-4 mt-12">
                                            <v-radio-group v-model="radios" row :mandatory="false">
                                                <v-radio color="orange lighten-1" label="Yes" value="radio-1"></v-radio>
                                                <v-radio color="orange lighten-1" label="No" value="radio-2"></v-radio>
                                            </v-radio-group>
                                        </div>
                                        <v-btn dark depressed type="submit" value="submit" class="blue ma-12" @click.stop="dialog1 = true">submit</v-btn>
                                    </div>
                                </v-dialog>

                                <!-- yes and after clicking submit -->
                                <v-dialog v-model="dialog1" max-width="800">
                                    <div class="white modal">
                                        <div class="close">
                                            <v-btn class="icon" icon @click.stop="dialog1 = false">
                                                <v-icon size="40">mdi-close</v-icon>
                                            </v-btn>
                                        </div>
                                        <v-divider></v-divider>
                                        <v-icon color="orange" size="90">mdi-cloud-check</v-icon>
                                        <h3>You have successfully enrolled</h3>
                                        <p>You can click here to go back</p>
                                        
                                        <div class="buttons d-flex justify-center align-center">
                                            <v-btn dark depressed type="submit" value="submit" class="blue ma-10" to="/">Go to Dashboard</v-btn>
                                            <v-btn dark outlined type="submit" value="submit" class="blue--text">View Course</v-btn>
                                        </div>
                                    </div>
                                </v-dialog>

                                <!-- no and after clicking submit -->
                                <v-dialog v-model="dialog2" max-width="800">
                                    <div class="white modal">
                                        <div class="close">
                                            <v-btn class="icon" icon @click.stop="dialog2 = false">
                                                <v-icon size="40">mdi-cloud-alert</v-icon>
                                            </v-btn>
                                        </div>
                                        <v-divider></v-divider>
                                        <v-icon color="orange" size="90">mdi-cloud-check</v-icon>
                                        <h3>You have successfully enrolled</h3>
                                        <p>You can click here to go back</p>
                                        
                                        <div class="buttons d-flex justify-center align-center">
                                            <v-btn dark depressed type="submit" value="submit" class="blue ma-10" to="/">Go to Dashboard</v-btn>
                                            <v-btn dark outlined type="submit" value="submit" class="blue--text">View Course</v-btn>
                                        </div>
                                    </div>
                                </v-dialog>

                            </v-card-actions>
                        </v-card>
                    </v-row>
                </v-col>
            </v-row>
        </div>

        <div class="notification">
            <rightNote />
        </div>
    </div>
  </div>
</template>

<script> 
import dheader from '../components/dheader'
import rightNote from '../components/notification1'
import snackbar from '../components/snackbar'

  export default {
      components: {
          dheader,
          rightNote,
          snackbar
      },

       data: () => ({
        dialog: false,
        dialog1: false,
        dialog2: false,
        items: [
            {
            text: 'Home',
            disabled: false,
            href: '/home'
            },
            {
            text: 'All Courses',
            disabled: false,
            href: '/all-courses'
            },
            {
            text: 'Browse',
            disabled: true,
            href: '#'
            },
        ],

        courses: [
            {title: 'Finance', color: 'green'},
            {title: 'Mathematics', color: 'red darken-2'},
            {title: 'English', color: 'purple lighten-3'},
            {title: 'Swahili', color: 'black'},
            {title: 'economics', color: 'yellow'},
            {title: 'Engineering', color: '#0d98ba'},
            {title: 'Marketing', color: 'brown lighten-2'},
            {title: 'Psychology', color: 'purple'},
            {title: 'Clerical Duties', color: 'brown'},
        ],

        divider: '>',
        large: false,
        customDiv: false
    })
  }
</script>

<style scoped>
* {
    list-style: none;
    text-decoration: none;
}

.snackbar {
    height: 100vh;
}

.main_content {
    padding: 30px;
    position: relative;
    margin: 30px 80px;
}

.modal {
    height: 700px !important;
    text-align: center;
}

.radio {
    width: 400px;
    margin-left: 200px;
    height: 150px;
}
.close {
    height: 60px;
}

.icon {
    position: relative;
    top: 4px;
    left: 47%;
}
.ma-12 {
    width: 120px;
    height: 60px !important;
    border-radius: 3px;
    left: 20%;
}
.buttons {
    height: 150px !important;
    width: 200px;
    position: relative;
    left: 300px;
}

</style>