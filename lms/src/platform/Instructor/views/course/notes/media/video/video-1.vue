<template>
  <div class="course_material">
    <dheader />
    
    <!-- flex wrapper -->
    <div class="wrapper d-flex justify-lg-space-between">
        <div class="snackbar">
            <snackbar />
        </div>

        <div class="sidebar">
           <sidebar /> 
        </div>
    

        <div class="main_content">
            <div class="divider">
                <v-breadcrumbs :items="items" :divider="divider" class="breadcrumb">
                    <template v-if="customDiv" v-slot:divider>
                        <v-icon>mdi-chevron-right</v-icon>
                    </template>
                </v-breadcrumbs>
            </div>

            <div class="d-flex justify-lg-space-between">
                <v-spacer></v-spacer>
                 <v-btn depressed dark color="#038A99" class="ma-3" to="/instructor/course_material/id">view all pages</v-btn>
                 <v-btn depressed dark class="grey ma-3" @click.stop="edit = true">Edit</v-btn>
            </div>

            <v-divider></v-divider>
            
            <h1>Video One</h1>
            <p>Welcome to the course notes<br/>
           This is a sample page created fro the course. By default it is called 'Page One'</p>

            <!-- display after the submit button is clicked -->
            <v-card v-if="edit">
                   <v-row>
                        <v-col cols="12">
                            <v-col>
                                <p class="pl-5">Copy and paste or type your submission right here</p>
                                <form>
                                    <div></div>
                                </form>
                                <v-spacer></v-spacer>
                                 <v-btn depressed class="mr-2" color="transparent" @click.stop="edit = false">Close</v-btn>

                                 <v-btn depressed class="mr-7 font-weight-bold" dark color="orange" @click.stop="submit()">Submit</v-btn>
                            </v-col>
                        </v-col>
                    </v-row>
                     <!-- success dialog -->
                <v-dialog v-model="dialog" max-width="800">
                     <div class="white modal">
                        <div class="close">
                            <v-btn class="icon ma-2 mr-8" icon @click.stop="dialog = false">
                                <v-icon size="30">mdi-close</v-icon>
                            </v-btn>
                        </div>
                        <v-divider></v-divider>

                        <v-layout column wrap mt-12 justify-center>
                            <v-icon color="orange" size="90">mdi-cloud-check</v-icon>
                            <h3>You have successfully enrolled</h3>
                            <p>You can click here to go back</p>
                        </v-layout>

                        <div class="buttons d-flex justify-center align-center">
                            <v-btn dark depressed type="submit" value="submit" class="blue ma-10" @click.stop="dialog = false">Go Back</v-btn>
                        </div>
                    </div>
                </v-dialog>
            </v-card>
            <p class="mt-12"><a href="/instructor/page-2">Page Two</a></p>
            
        </div>

        <div class="notification">
            <rightNote />
        </div>
    </div>
  </div>
</template>

<script> 
import dheader from '../../../../../components/dheader'
import snackbar from '../../../../../components/snackbar'
import rightNote from '../../../../../components/notification1'
import sidebar from '../../../../../components/sidebar'

  export default {
      components: {
          dheader,
          snackbar,
          rightNote,
          sidebar,
      },

       data: () => ({
         dialog1: false,
        dialog: false,
        edit: false,
       items: [
            {
                text: 'Course Name',
                disabled: false,
                href: '/instructor',
            },
            {
                text: 'Home',
                disabled: false,
                href: '/instructor/home',
            },
            {
                text: 'Course Material',
                disabled: false,
                href: '/instructor/course_material',
            },
            {
                text: 'Course Material',
                disabled: false,
                href: '/instructor/course_material/id',
            },
            {
                text: '01',
                disabled: true,
                href: '#',
            }
        ],

        divider: '>',
        large: false,
        customDiv: false
    })
  }
</script>

<style scoped>
.snackbar {
    height: 100vh;
}

.sidebar {
    position: relative;
    height: 100%;
    width: 70px;
    padding: 100px 0;
    font-size: 25px;    
}

.main_content {
    padding: 30px;
    width: 55%;
    position: relative;
    left: 7%;
    margin: 30px 80px;
} 

.notification {
    position: relative;
}

</style>