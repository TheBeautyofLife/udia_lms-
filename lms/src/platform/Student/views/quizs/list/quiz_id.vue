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
            <div class="divider">
                <v-breadcrumbs :items="items" :divider="divider" class="breadcrumb">
                    <template v-if="customDiv" v-slot:divider>
                        <v-icon>mdi-chevron-right</v-icon>
                    </template>
                </v-breadcrumbs>
            </div>

            <div class="d-flex justify-lg-space-between">
                <h2 class="display-2 mb-3">Quiz 1</h2>
                <v-spacer></v-spacer>
                <v-btn color="blue" @click.stop="terms = true" :disabled="terms" dark depressed>Start Quiz</v-btn>
            </div>

            <div class="d-flex justify-space-between mt-7">
                <!-- display after submit is pressed -->
                <p v-if="terms">Points: 10</p>
                <v-spacer></v-spacer>
                <p><strong>Due:</strong> 17 July 2019 22:59</p>
                </div>
            <v-divider></v-divider>
            <v-layout row>
                <v-flex xs12 md5 class="ml-5">
                    
                
            <ol type="1" class="mr-3">
                <li>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis amet consequatur minima ratione doloribus sunt et suscipit aut, eaque dolore aliquam ab voluptatibus nobis unde impedit temporibus consectetur assumenda saepe!</p>
                    <ol type="i">
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li><br/>
                        <li>Ducimus maiores in magni fuga accusamus illum quibusdam doloremque quae aut ex aspernatur qui iusto.</li><br/>
                    </ol>
               </li>
               <li>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis amet consequatur minima ratione doloribus sunt et suscipit aut, eaque dolore aliquam ab voluptatibus nobis unde impedit temporibus consectetur assumenda saepe!</p>
               </li>
            </ol>
        </v-flex>
            <!-- display after the submit button is clicked -->
            <v-card v-if="terms" class="ml-3">
                <v-tabs text color="#0d98ba">
                    <v-tabs-slider></v-tabs-slider>

                    <v-tab href="#tab-2">
                        Work Online
                    </v-tab>


                    <!-- success dialog -->
                    <v-dialog v-model="dialog" max-width="800">
                        <div class="white modal">
                            <div class="close">
                                <v-btn class="icon" icon @click.stop="dialog = false">
                                    <v-icon size="40">mdi-close</v-icon>
                                </v-btn>
                            </div>
                            <v-divider></v-divider>
                            <v-icon color="orange" size="90">mdi-cloud-check</v-icon>
                            <h3>You have successfully enrolled</h3>
                            <p>You can click here to go back</p>
                            
                            <div class="buttons d-flex justify-center align-center">
                                <v-btn dark depressed type="submit" value="submit" class="blue ma-10" @click.stop="dialog = false">Go Back</v-btn>
                            </div>
                        </div>
                    </v-dialog>

                    <v-tab-item id="tab-2">
                        <v-row>
                            <v-col cols="12">
                                <v-row>
                                    <p class="pl-5">Copy and paste or type your submission right here</p>
                                    <!-- write online area -->
                                    <div color="#F5F5F5" class="sheet_upload d-flex justify-center align-center">
                                        <div>
                                            
                                        </div>
                                        
                                        <div>
                                            
                                        </div>
                                    </div>
                                    <v-spacer></v-spacer>
                                    <v-btn depressed class="mr-7" dark color="orange" @click.stop="dialog = true">Submit</v-btn>
                                </v-row>
                            </v-col>
                        </v-row>
                    </v-tab-item>
                </v-tabs>
            </v-card>
                    
        </v-layout>
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
        dialog1: false,
        dialog: false,
        terms: false,

        items: [
            {
                text: 'Dashboard',
                disabled: false,
                href: '/student',
            },
            {
                text: 'Home',
                disabled: false,
                href: '/student/home',
            },
            {
                text: 'Assignments',
                disabled: false,
                href: '/student/assignments',
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
    }),
  }
</script>

<style scoped>
.snackbar {
    height: 110vh;
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
</style>