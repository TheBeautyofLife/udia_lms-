<template>
  <div class="assignment">
    <dheader />
    
    <!-- flex wrapper -->
    <div class="wrapper d-flex justify-sm-space-between">
        <div class="snackbar" :class="{'snackbarlong' : terms ===true}">
            <snackbar />
        </div>

        <div class="sidebar">
           <sidebar /> 
        </div>
    

        <div class="main_content mr-12">
            <div class="divider">
                <v-breadcrumbs :items="items" :divider="divider" class="breadcrumb">
                    <template v-if="customDiv" v-slot:divider>
                        <v-icon>mdi-chevron-right</v-icon>
                    </template>
                </v-breadcrumbs>
            </div>

            <div class="d-flex justify-lg-space-between mt-9">
                <h2 class="display-2 mb-3">Quiz 1</h2>
                <v-spacer></v-spacer>
                <v-btn color="grey" @click.stop="edit = true" :disabled="edit" dark depressed>Edit</v-btn>
            </div>

            <div class="d-flex justify-space-between mt-7">
                <!-- display after submit is pressed -->
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
           <v-card v-if="edit">
                   <v-row>
                        <v-col cols="12">
                            <v-col>
                                <p class="pl-5">Copy and paste or type your submission right here</p>
                                <form>
                                <p>Question1</p>
                                <v-textarea
                                  v-model="textdata" 
                                  type="text"
                                  name="name"
                                  outlined
                                  auto-grow
                                ></v-textarea>
                                </form>
                                <v-spacer></v-spacer>
                                 <v-btn depressed class="mr-2" color="transparent" @click.stop="edit = false">Close</v-btn>

                                 <v-btn depressed class="mr-7 font-weight-bold" dark color="orange" @click.stop="submit()">Submit</v-btn>
                            </v-col>
                        </v-col>
                    </v-row>

                   <!--   <v-container>
                        <v-row>
                          <editor-menu-bar :editor="editor" v-slot="{ commands, isActive }">
                            <div >
                              <v-btn text icon
                                :class="{ 'is-active': isActive.heading({ level: 1 }) }"
                                @click="commands.heading({level: 1})"
                              >
                                <b> H1 </b>
                              </v-btn>
                              <v-btn text icon
                                 :class="{ 'is-active': isActive.bold() }"
                                 @click="commands.bold"
                               >
                              <v-icon>mdi-format-bold</v-icon>
                              </v-btn>

                              <v-btn text icon
                                 :class="{ 'is-active': isActive.underline() }"
                                 @click="commands.underline"
                              >
                                 <v-icon>mdi-format-underline</v-icon>
                              </v-btn>

                              <v-btn text icon
                                @click="loadImage(commands.image)">
                                <v-icon>mdi-image</v-icon>
                              </v-btn>
                            </div>            
                         </editor-menu-bar>
                      </v-row>
                      <v-row>
                         <v-col cols=12 >
                            <editor-content class="editor-box" :editor="editor"/>
                         </v-col>
                      </v-row>
                    </v-container> -->
     
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
                    
        </v-layout>
        </div>

        <div class="notification">
           
        </div>
    </div>
  </div>
</template>

<script> 
import dheader from '../../../components/dheader'
//import rightNote from '../../../components/notification1'
import snackbar from '../../../components/snackbar'
import sidebar from '../../../components/sidebar'

  export default {
    components: {
        dheader,
       // rightNote,
        snackbar,
        sidebar
    },

    data: () => ({
        dialog1: false,
        dialog: false,
        edit: false,

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
    width: 20px;
    padding: 90px 0;
    font-size: 25px;    
}

.main_content {
    padding: 30px;
    width: 70%;
    position: relative;
    left: 3%;
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