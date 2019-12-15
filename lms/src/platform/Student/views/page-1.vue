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
                <v-btn depressed dark class="blue ma-3" to="/course_material">view all pages</v-btn>
            </div>

            <v-divider></v-divider>
            <h1>Page One</h1>
            <p>Welcome to the course notes</p>
            <p>This is a sample page created fro the course. By default it is called 'Page One'</p>

            <p class="mt-12">Here's a link to <a href="/page-2">Page Two</a></p>
            
        </div>

        <div class="notification">
            <rightNote />
        </div>
    </div>
  </div>
</template>

<script> 
import dheader from '../components/dheader'
import snackbar from '../components/snackbar'
import rightNote from '../components/notification1'
import sidebar from '../components/sidebar'

  export default {
      components: {
          dheader,
          snackbar,
          rightNote,
          sidebar
      },

       data: () => ({
        items: [
            {
                text: 'Course Name',
                disabled: false,
                href: '/',
            },
            {
                text: 'Home',
                disabled: false,
                href: '/home',
            },
            {
                text: 'Course Material',
                disabled: false,
                href: '/course_material',
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