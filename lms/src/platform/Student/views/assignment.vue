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
                <h2 class="display-2 mb-3">Assignment 1</h2>
                <v-spacer></v-spacer>
                <v-btn color="blue" @click.stop="terms = true" :disabled="terms" dark depressed>Submit assignment</v-btn>
            </div>

            <div class="d-flex justify-space-between mt-7">
                <!-- display after submit is pressed -->
                <p v-if="terms">Points: 10</p>
                <v-spacer></v-spacer>
                <p><strong>Due:</strong> 17 July 2019 22:59</p>
                </div>
            <v-divider></v-divider>
            <ol type="1" class="mt-7">
                <li>
                    <p>Objective: Use techniology to move beyond textbook-based instruction.
                    in your historyclass are having difficulty understanding the significance of WWII
                    What activities would help students get more engaged? (Choose 2 answers)</p>
                    <ol type="i">
                        <li>Students create YouTube videos describing key battles in WWII</li>
                        <li>Teacher creates a final exam in Forms to give a grade on what the students know</li>
                        <li>Students use the explore tool to find out more inofrmation in Docs</li>
                        <li><p>Students answer questions at the end of the WWII chapter</p></li>
                    </ol>
                </li>
                <li>
                    <p>What are these "great oppressions" preparing the world for? (p. 5)</p>
                </li>
                <li>
                    <p>Describe the realtionship between the Most Great Civilization, the Most Great Justice and the Most Great Peace.<br>
                    (p. 7) What is the Great Peace mentioned in the opening sentence of The Promise of World Peace</p>
                </li>
                <li>
                    <p>What were the changes made against Faith? (p.7) What is Eclectism? How does it differ from Syncretism?
                    How would you answer these charges? What is the nature of the charges most recently made against the faith in Iran?
                    Which institutions and groups of people do you think will attack the Faith in the future?</p>
                </li>
            </ol>

            <!-- display after the submit button is clicked -->
            <v-card v-if="terms">
                <v-tabs text color="#0d98ba">
                    <v-tabs-slider></v-tabs-slider>
                    <v-tab href="#tab-1">
                        File Upload
                    </v-tab>

                    <v-tab href="#tab-2">
                        Work Online
                    </v-tab>

                    <v-tab-item id="tab-1">
                        <v-row>
                            <v-col cols="12">
                                <v-row>
                                    <!-- file upload area -->
                                    <div color="#F5F5F5" class="sheet_upload d-flex justify-center align-center">
                                        <div>
                                            <h2 class="grey--text">Drag & drop your files here,<br> or</h2><br>
                                        </div>
                                        <div>
                                            <strong><i>File:</i></strong>
                                            <v-btn color="grey" dark>choose file</v-btn>
                                            <p class="grey--text">no file selected</p>
                                        </div>
                                    </div>
                                    <v-spacer></v-spacer>
                                    <v-btn depressed class="mr-7" dark color="orange" @click.stop="dialog = true">Submit</v-btn>
                                </v-row>                             
                            </v-col>
                        </v-row>
                    </v-tab-item>

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
import sidebar from '../components/sidebar'

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