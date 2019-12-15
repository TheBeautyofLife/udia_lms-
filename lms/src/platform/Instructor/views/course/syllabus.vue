<template>
  <div class="syllabus">
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
            <h2 class="display-2 mb-3">The Syllabus</h2>
            <v-divider></v-divider>
            <div class="construct">
                <h1>Still under Construction!!!</h1>
            </div>
            
        </div>

        <div class="notification">
            <rightNote />
        </div>
    </div>
  </div>
</template>

<script> 
import dheader from '../../components/dheader'
import rightNote from '../../components/notification1'
import snackbar from '../../components/snackbar'
import sidebar from '../../components/sidebar'

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
                text: 'Dashboard',
                disabled: false,
                href: '/',
            },
            {
                text: 'Home',
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

.construct {
    position: absolute;
    top: 40%;
    left: 30%;
}

</style>