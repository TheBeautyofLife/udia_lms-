<template>
  <div class="profile">
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
            <h4 class="pl-5">Manage Student Information</h4>

            <!-- personal information in grid view -->
            <div class="divider d-flex justify-space-between align-baseline">
                <h3>Personal Information</h3>
                <v-btn depressed dark color="orange" class="edit" @click="activateEditMode">edit
                    <v-icon class="ml-3" size="30">mdi-pencil</v-icon>
                </v-btn>
                
            </div>

            <v-row class="card-row">
                <v-col>
                    <v-row class="pl-5">                        
                        <v-card flat class="card ma-1"> 
                            <v-list-item three-line>
                                <v-list-item-content>
                                    <v-list-item-subtitle class="orange--text mr-3">Firstname</v-list-item-subtitle>
                                    <v-list-item-title v-show="!isEditing" class=" mb-1">{{fname}}</v-list-item-title>

                                    <!-- edit field -->
                                    <span v-show="isEditing">
                                        <input class="grey lighten-3 editField" type="text" v-model="fname">
                                    </span>
                                </v-list-item-content>

                                <v-list-item-content>
                                    <v-list-item-subtitle class="orange--text">Lastname</v-list-item-subtitle>
                                    <v-list-item-title class="mb-1" v-show="!isEditing">{{lname}}</v-list-item-title>

                                    <!-- edit field -->
                                    <span v-show="isEditing">
                                        <input class="grey lighten-3 editField" type="text" v-model="lname">
                                    </span>
                                </v-list-item-content>
                            </v-list-item>
                        </v-card>                        
                    </v-row>

                    <v-row class="pl-5">
                        <v-card flat class="card ma-1"> 
                            <v-list-item three-line>
                                <v-list-item-content>
                                    <v-list-item-subtitle class="orange--text">Date of Birth</v-list-item-subtitle>
                                    <v-list-item-title class="mb-1" v-show="!isEditing">{{DOB}}</v-list-item-title>

                                    <!-- edit field -->
                                    <span v-show="isEditing">
                                        <input class="grey lighten-3 editField" type="date" v-model="DOB">
                                    </span>
                                </v-list-item-content>
                            </v-list-item>
                        </v-card>
                    </v-row>

                    <v-row class="pl-5">
                        <v-card flat class="card ma-1"> 
                            <v-list-item three-line>
                                <v-list-item-content>
                                    <v-list-item-subtitle class="orange--text">Sex</v-list-item-subtitle>
                                    <v-list-item-title v-show="!isEditing" class="mb-1">{{sex}}</v-list-item-title>

                                    <!-- edit field -->
                                    <span v-show="isEditing">
                                        <v-select :items="sexes" filled v-model="sex"></v-select>    
                                    </span>
                                </v-list-item-content>
                            </v-list-item>
                        </v-card>
                    </v-row>
                </v-col>
            </v-row>

        <!-- contact information -->
            <div class="divider">
                <h3>Contact Information</h3>
            </div>

            <v-row class="card-row">
                <v-col>
                    <v-row class="pl-5">
                        <v-card flat class="ma-1"> 
                            <v-list-item three-line>
                                <v-list-item-content>
                                    <v-list-item-subtitle class="orange--text">Email</v-list-item-subtitle>
                                    <v-list-item-title v-show="!isEditing" class="mb-1">{{email}}</v-list-item-title>

                                    <!-- edit field -->
                                    <span v-show="isEditing">
                                        <input class="grey lighten-3 editField" type="email" v-model="email">    
                                    </span>
                                </v-list-item-content>
                            </v-list-item>
                        </v-card>
                    </v-row>

                    <v-row class="pl-5">
                        <v-card flat class="ma-1"> 
                            <v-list-item three-line>
                                <v-list-item-content>
                                    <v-list-item-subtitle class="orange--text">Phone Number</v-list-item-subtitle>
                                    <v-list-item-title v-show="!isEditing" class="mb-1">{{phone}}</v-list-item-title>

                                    <!-- edit field -->
                                    <span v-show="isEditing">
                                        <input class="grey lighten-3 editField" type="text" v-model="phone">    
                                    </span>
                                </v-list-item-content>
                            </v-list-item>
                        </v-card>
                    </v-row>

                    <v-row class="pl-5">
                        <v-card flat class="ma-1"> 
                            <v-list-item three-line>
                                <v-list-item-content>
                                    <v-list-item-subtitle class="orange--text">Postal Address</v-list-item-subtitle>
                                    <v-list-item-title v-show="!isEditing" class="mb-1">{{postal}}</v-list-item-title>

                                    <!-- edit field -->
                                    <span v-show="isEditing">
                                        <input class="grey lighten-3 editField" type="text" v-model="postal">    
                                    </span>
                                </v-list-item-content>
                            </v-list-item>
                        </v-card>
                    </v-row>
                    <v-row class="pl-5">
                        <v-card flat class="ma-1"> 
                            <v-list-item three-line>
                                <v-list-item-content>
                                    <v-list-item-subtitle class="orange--text">Physical Address</v-list-item-subtitle>
                                    <v-list-item-title v-show="!isEditing" class="mb-1">{{physical}}</v-list-item-title>

                                    <!-- edit field -->
                                    <span v-show="isEditing">
                                        <input class="grey lighten-3 editField" type="text" v-model="physical">    
                                    </span>
                                </v-list-item-content>
                            </v-list-item>
                        </v-card>
                    </v-row>
                </v-col>
            </v-row>

        <!-- emergency contact info -->
            <div class="divider">
                <h3>Emergency Contact Information</h3>
            </div>

            <v-row class="card-row">
                <v-col>
                    <v-row class="pl-5">
                        <v-card flat class="ma-1"> 
                            <v-list-item three-line>
                                <v-list-item-content>
                                    <v-list-item-subtitle class="orange--text">Name of Emergency Contact Person</v-list-item-subtitle>
                                    <v-list-item-title v-show="!isEditing" class="mb-1">{{emergencyName}}</v-list-item-title>

                                    <!-- edit field -->
                                    <span v-show="isEditing">
                                        <input class="grey lighten-3 editField" type="text" v-model="emergencyName">    
                                    </span>
                                </v-list-item-content>
                            </v-list-item>
                        </v-card>
                    </v-row>

                    <v-row class="pl-5">
                        <v-card flat class="ma-1"> 
                            <v-list-item three-line>
                                <v-list-item-content>
                                    <v-list-item-subtitle class="orange--text">Phone Number of Emergency Contact</v-list-item-subtitle>
                                    <v-list-item-title v-show="!isEditing" class="mb-1">{{emergencyNumber}}</v-list-item-title>

                                    <!-- edit field -->
                                    <span v-show="isEditing">
                                        <input class="grey lighten-3 editField" type="text" v-model="emergencyNumber">    
                                    </span>
                                </v-list-item-content>
                            </v-list-item>
                        </v-card>
                    </v-row>

                    <v-row class="pl-5">
                        <v-card flat class="ma-1"> 
                            <v-list-item three-line>
                                <v-list-item-content>
                                    <v-list-item-subtitle class="orange--text">Relationship to student</v-list-item-subtitle>
                                    <v-list-item-title v-show="!isEditing" class="mb-1">{{rlshn}}</v-list-item-title>

                                    <!-- edit field -->
                                    <span v-show="isEditing">
                                        <input class="grey lighten-3 editField" type="text" v-model="rlshn">    
                                    </span>
                                </v-list-item-content>
                            </v-list-item>
                        </v-card>
                    </v-row>
                </v-col>
            </v-row>

        <!-- academic information about the student -->
            <div class="divider">
                <h3>Academic Information</h3>
            </div>

            <v-row class="card-row">
                <v-col>
                    <v-row class="pl-5">
                        <v-card flat class="ma-1"> 
                            <v-list-item three-line>
                                <v-list-item-content>
                                    <v-list-item-subtitle class="orange--text">Enrollment Number</v-list-item-subtitle>
                                    <v-list-item-title v-show="!isEditing" class="mb-1">{{enrollNo}}</v-list-item-title>

                                    <!-- edit field -->
                                    <span v-show="isEditing">
                                        <input class="grey lighten-3 editField" type="text" v-model="enrollNo">    
                                    </span>
                                </v-list-item-content>
                            </v-list-item>
                        </v-card>
                    </v-row>

                    <v-row class="pl-5">
                        <v-card flat class="ma-1"> 
                            <v-list-item three-line>
                                <v-list-item-content>
                                    <v-list-item-subtitle class="orange--text">Current Major/Concentration</v-list-item-subtitle>
                                    <v-list-item-title v-show="!isEditing" class="mb-1">{{major}}</v-list-item-title>

                                    <!-- edit field -->
                                    <span v-show="isEditing">
                                        <input class="grey lighten-3 editField" type="text" v-model="major">    
                                    </span>
                                </v-list-item-content>
                            </v-list-item>
                        </v-card>
                    </v-row>

                    <v-row class="pl-5">
                        <v-card flat class="ma-1"> 
                            <v-list-item three-line>
                                <v-list-item-content>
                                    <v-list-item-subtitle class="orange--text">Current Minor/Area of Study</v-list-item-subtitle>
                                    <v-list-item-title v-show="!isEditing" class="mb-1">{{minor}}</v-list-item-title>

                                    <!-- edit field -->
                                    <span v-show="isEditing">
                                        <input class="grey lighten-3 editField" type="text" v-model="minor">    
                                    </span>
                                </v-list-item-content>
                            </v-list-item>
                        </v-card>
                    </v-row>

                    
                </v-col>
            </v-row>

            <!-- save the edits -->
            <v-btn depressed dark color="blue" class="edit edit1" @click="deActivateEditMode">
                <v-icon class="ml-3" size="30">mdi-content-save</v-icon>save
            </v-btn>
        </div>

        <div class="notification">
        </div>
    </div>
  </div>
</template>

<script> 
import dheader from '../components/dheader'
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
            href: '/home'
            },
             {
            text: 'profile',
            disabled: true,
            href: '#'
            }
        ],

        divider: '>',
        large: false,
        customDiv: false,

        isEditing: false,
        
        //profile data
        fname: 'lorem,',
        lname: 'Ipsumdolor',
        DOB: '12-02-2019',
        sex: 'Male',
        sexes: ['Male', 'Female', 'Other'],
        email: 'Lorem@lorem2.com',
        phone: '+255-75643437',
        postal: '456 Maziwa',
        physical: '12-56700',
        emergencyName: 'Lorem, Ipsum dolor',
        emergencyNumber: '+255-75643437',
        rlshn: 'Best Friend',
        enrollNo: 'ST092',
        major: 'CS',
        minor: 'Economics'

    }),

    methods: {
        activateEditMode() {
            this.isEditing = true
        },
        deActivateEditMode() {
            this.isEditing = false
        }
    }
  }
</script>

<style scoped>
* {
    list-style: none;
    text-decoration: none;
}

.snackbar {
    height: 201vh;
}

.main_content {
    width: 70%;
    position: relative;
    margin: 30px;
} 

.divider {
    border-bottom: 1px solid lightgray;
    margin: 6px 0px;
}

.divider div,
.divider h3,
.span {
    display: inline-block;
}

.span {
    margin-left: 65%;
}

.edit {
    height: 80px !important;
    width: 12.5rem !important;
    border-radius: 10px !important;
    margin-bottom: 1rem;
    font-size: 30px;
}

.edit1 {
    position: relative;
    left: 50%;
}

.editField {
    height: 40px;
    border-radius: 4px;
    padding: 4px;
}
</style>