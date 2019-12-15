<template>
  <div class="all_pages">
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

            <v-divider></v-divider>
            
            <!-- expansion panels for all pages -->
            <div class="list">
                <v-row>
                    <v-card width="200" height="250" color="green" class="ma-4" v-for="(page, index) in pages" :key="index"  :to="page.link">
                      <v-img class="white--text align-end" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="250px">
                        <v-card-title class="headline">{{ page.title}}</v-card-title>
                      </v-img>
                    </v-card>
                    </v-row>
            </div>
        </div>

        <div class="notification">
            <rightNote />
        </div>
    </div>
  </div>
</template>

<script> 
import dheader from '../../../components/dheader'
import rightNote from '../../../components/notification1'
import snackbar from '../../../components/snackbar'
import sidebar from '../../../components/sidebar'

  export default {
      components: {
          dheader,
          rightNote,
          snackbar,
          sidebar
      },

       data: () => ({
        items: [
            {
                text: 'Course_name',
                disabled: false,
                href: '/instructor/home',
            },
            {
                text: 'Home',
                disabled: false,
                href: '/instructor/home',
            },
            {
                text: 'Course_material',
                disabled: true,
                href: '#',
            }
        ],

        divider: '>',
        large: false,
        customDiv: false,

        pages: [
            {
                iconClass: 'black',
                title: 'Week One',
                icon: 'mdi-file',
                link: '/instructor/course_material/id'
            },
            {
                iconClass: 'black',
                title: 'Week Two',
                icon: 'mdi-file',
                link: '/instructor/course_material/id'
            },
            {
                iconClass: 'black',
                title: 'Week Three',
                icon: 'mdi-file',
                link: '/instructor/course_material/id'
            }
        ]
    }),    
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