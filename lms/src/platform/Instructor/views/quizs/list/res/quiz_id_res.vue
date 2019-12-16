<template>
  <div class="assignment">
    <dheader />
    
    <!-- flex wrapper -->
    <div class="wrapper d-flex justify-lg-space-between">
        <div class="snackbar" :class="{'snackbarlong' : terms ===true}">
            <snackbar />
        </div>

        <div class="sidebar">
           <sidebar /> 
        </div>
    

        <div class="main_content">
            <div class="divider ">
                <v-breadcrumbs :items="items" :divider="divider" class="breadcrumb">
                    <template v-if="customDiv" v-slot:divider>
                        <v-icon>mdi-chevron-right</v-icon>
                    </template>
                </v-breadcrumbs>
            </div>

            <div class="d-flex justify-lg-space-between mt-6">
                <h2 class="display-2 mb-3">Assignment 1</h2>
                <v-spacer></v-spacer>
            </div>

            <ol type="1" class="mt-7">
                <div >
                    {{ item }}
                </div>
               <v-card flat v-for="student in students" :key="student.id">
                 <v-layout row mt-4 align-center>
                  <v-avatar
                      size="80"
                      :color="red"
                  >
                      <img :src="student.p_pic" alt="alt">
                  </v-avatar>

                  <v-badge left class="mb-10" color="primary">
                      <v-icon medium large :color="student.colour">{{ student.icon }}</v-icon>
                  </v-badge>

                <p class="ml-8">{{ student.lastname}}, {{student.firstname}}</p>
                
                <v-btn :disabled="student.disabled" color="grey lighten-2" class="mb-4 ml-10" :to="student.to">View</v-btn>
                 </v-layout>  
               </v-card>
            </ol>

        </div>

        <div class="notification mr-11" style="width:280px;">
            <rightNote />
        </div>
    </div>
  </div>
</template>

<script> 
import dheader from '../../../../components/dheader'
import rightNote from '../../../../components/notification1'
import snackbar from '../../../../components/snackbar'
import sidebar from '../../../../components/sidebar'

  export default {
    components: {
        dheader,
        rightNote,
        snackbar,
        sidebar
    },

    data: () => ({
        dialog1: false,
        dialog: false,
        terms: false,

        items: [
            {
                text: 'Dashboard',
                disabled: false,
                href: '/instructor',
            },
            {
                text: 'Home',
                disabled: false,
                href: '/instructor/home',
            },
            {
                text: 'Quiz',
                disabled: false,
                href: '/instructor/marks',
            },
            {
                text: 'Submitted Quiz',
                disabled: true,
                href: '#',
            }
        ],

        students: [
            {
                firstname: 'John',
                lastname: 'Kamau',
                _studentid: '0329',
                p_pic: 'https://randomuser.me/api/portraits/men/54.jpg',
                status: 'submitted',
                colour: 'green',
                icon: 'mdi-check-circle',
                to: '/instructor/marks/all-view-submitted/student_id/'
            },
             {
                firstname: 'Lucy',
                lastname: 'Omondi',
                _studentid: '0145',
                p_pic: 'https://randomuser.me/api/portraits/women/92.jpg',
                status: 'not submitted',
                colour: 'red',
                icon: 'mdi-checkbox-blank-circle',
                disabled: 'true',
                to: ''
            },
             {
                firstname: 'Lucy',
                lastname: 'Omondi',
                _studentid: '0145',
                p_pic: 'https://randomuser.me/api/portraits/women/89.jpg',
                status: 'not submitted',
                colour: 'red',
                icon: 'mdi-checkbox-blank-circle',
                disabled: 'true',
                to: ''
            },
             {
                firstname: 'Lucy',
                lastname: 'Omondi',
                _studentid: '0145',
                p_pic: 'https://randomuser.me/api/portraits/men/59.jpg',
                status: 'not submitted',
                colour: 'red',
                icon: 'mdi-checkbox-blank-circle',
                disabled: 'true',
                to: ''
            }
        ],

        divider: '>',
        large: false,
        customDiv: false
    }),
  }
</script>

<style scoped>
.snackbar {
    height: 140vh;
}

.snackbarlong {
    height: 190vh;
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

.btndisable {
    color: grey;
}

.justify-lg-space-between {
    border-bottom: 1px solid #ccc;
}

.mt-7 {
    font-size: 20px;
}

.sheet_upload {
  height: 500px;
  width: 95%;
  margin: 30px;
  border: 1px dotted #ccc;
}

 .online {
     height: 500px;
     margin: 50px 30px;
     width: 100%;
 }

 .editor {
     height: 90%;
     border: 1px dotted #ccc;
 }

 .modal {
    height: 700px !important;
    text-align: center;
}

.close {
    height: 60px;
}

.icon {
    position: relative;
    top: 4px;
    left: 47%;
}

.is-disabled {
    background: grey;
}

.p_pic {
    border-radius: 40px;
}
</style>