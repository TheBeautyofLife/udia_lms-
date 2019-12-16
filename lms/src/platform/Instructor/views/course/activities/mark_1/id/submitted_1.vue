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

            <div class="d-flex justify-lg-space-between mt-6">
                <v-layout column>
                    <h2 class="display-1 mb-3">Assignment 1</h2> 
                </v-layout>
            </div>

            <div class="d-flex justify-space-between mt-7">
                <!-- student credentials-->
                 <v-layout row justify-start ml-3>
                   <p>
                    {{ lastname }}, {{ firstname }}
                   </p>
                 </v-layout>
                <v-spacer></v-spacer>
                <v-layout row justify-end>
                   <p v-show="!isEditing">
                    <strong>Due:</strong> {{ Deadline }}
                   </p>

                     <v-btn class="mr-2 mb-1" icon>
                     <v-icon>mdi-calendar-blank</v-icon>
                   </v-btn>
                 </v-layout> 
            </div>
            <v-divider></v-divider>

            <v-layout row mt-8>
                <v-flex xs12 md7>
                    <div class="tiptap-vuetify-editor__content" v-html="response"/>
                </v-flex>

                <v-flex xs12 md5 v-show="isEditingQues">
                    <v-layout row ml-2 align-baseline> 
                     <p class="ml-2 mb-3 title">Marks</p>

                     <v-layout row justify-end mr-12>
                         <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
                            <template v-slot:activator="{ on }">
                                <v-btn v-on="on" text x-small class="mb-3 pr-7 caption text-capitalize font-italic">View Rubrics</v-btn>
                            </template>
                            <v-card>
                                  <v-toolbar dark color="#038A99">
                                     <v-toolbar-title>Settings</v-toolbar-title>
                                     <v-spacer></v-spacer>
                                     <v-btn icon dark @click="dialog = false">
                                        <v-icon>mdi-close</v-icon>
                                    </v-btn>
                                  </v-toolbar>
                                <RubricsPhase1 class="ml-12" />
                            </v-card>

                         </v-dialog>
                     </v-layout>
                    </v-layout>
                   
                    <v-layout column >
                        <v-card class="ml-3" height="640" width="280">
                        <p class="pl-5 pt-4 font-weight-bold">Question 1</p>
                        <div id="ContentDev" class="ml-4">
                            <p class="pl-6 pt-1">Content & Development</p>
                                <v-radio-group v-model="Q1_ContentDev" :mandatory="false" class="ml-9">
                                 <v-radio label="Poor (0 pt)" value="radio-1" color="teal" class="caption"></v-radio>
                                 <v-radio label="Fair (1 pt)" value="radio-2" color="teal" class="caption"></v-radio>
                                 <v-radio label="Good (2 pt)" value="radio-3" color="teal" class="caption"></v-radio>
                                 <v-radio label="Excellent (3 pt)" value="radio-4" color="teal" class="caption"></v-radio>
                                </v-radio-group>
                         </div>

                          <div id="OrganStruct" class="ml-4">
                            <p class="pl-6 pt-1">Organization & Structure</p>
                                <v-radio-group v-model="Q1_OrganStruct" :mandatory="false" class="ml-9">
                                 <v-radio label="Poor (0 pt)" value="radio-1" color="teal" class="caption"></v-radio>
                                 <v-radio label="Fair (1 pt)" value="radio-2" color="teal" class="caption"></v-radio>
                                 <v-radio label="Good (2 pt)" value="radio-3" color="teal" class="caption"></v-radio>
                                 <v-radio label="Excellent (3 pt)" value="radio-4" color="teal" class="caption"></v-radio>
                                </v-radio-group>
                         </div>

                          <div id="GraPuncSpell" class="ml-4">
                            <p class="pl-6 pt-1">Organization & Structure</p>
                                <v-radio-group v-model="Q1_GraPuncSpell" :mandatory="false" class="ml-9">
                                 <v-radio label="Poor (0 pt)" value="radio-1" color="teal" class="caption"></v-radio>
                                 <v-radio label="Fair (1 pt)" value="radio-2" color="teal" class="caption"></v-radio>
                                 <v-radio label="Good (2 pt)" value="radio-3" color="teal" class="caption"></v-radio>
                                 <v-radio label="Excellent (3 pt)" value="radio-4" color="teal" class="caption"></v-radio>
                                </v-radio-group>
                         </div>
                        </v-card>
                        <v-card class="ml-2 mt-10" height="640" width="280">
                            <p class="pl-4 pt-4 font-weight-bold">Question 2</p>
                            <div id="ContentDev" class="ml-4">
                            <p class="pl-6 pt-1">Content & Development</p>
                                <v-radio-group v-model="Q2_ContentDev" :mandatory="false" class="ml-9">
                                 <v-radio label="Poor (0 pt)" value="radio-1" color="teal" class="caption"></v-radio>
                                 <v-radio label="Fair (1 pt)" value="radio-2" color="teal" class="caption"></v-radio>
                                 <v-radio label="Good (2 pt)" value="radio-3" color="teal" class="caption"></v-radio>
                                 <v-radio label="Excellent (3 pt)" value="radio-4" color="teal" class="caption"></v-radio>
                                </v-radio-group>
                         </div>

                          <div id="OrganStruct" class="ml-4">
                            <p class="pl-6 pt-1">Organization & Structure</p>
                                <v-radio-group v-model="Q2_OrganStruct" :mandatory="false" class="ml-9">
                                 <v-radio label="Poor (0 pt)" value="radio-1" color="teal" class="caption"></v-radio>
                                 <v-radio label="Fair (1 pt)" value="radio-2" color="teal" class="caption"></v-radio>
                                 <v-radio label="Good (2 pt)" value="radio-3" color="teal" class="caption"></v-radio>
                                 <v-radio label="Excellent (3 pt)" value="radio-4" color="teal" class="caption"></v-radio>
                                </v-radio-group>
                         </div>

                          <div id="GraPuncSpell" class="ml-4">
                            <p class="pl-6 pt-1">Organization & Structure</p>
                                <v-radio-group v-model="Q2_GraPuncSpell" :mandatory="false" class="ml-9">
                                 <v-radio label="Poor (0 pt)" value="radio-1" color="teal" class="caption"></v-radio>
                                 <v-radio label="Fair (1 pt)" value="radio-2" color="teal" class="caption"></v-radio>
                                 <v-radio label="Good (2 pt)" value="radio-3" color="teal" class="caption"></v-radio>
                                 <v-radio label="Excellent (3 pt)" value="radio-4" color="teal" class="caption"></v-radio>
                                </v-radio-group>
                         </div>
                        </v-card>
                    </v-layout>
                </v-flex>
            </v-layout> 
            
            <v-layout row wrap mt-8>
              <v-flex xs12 v-show="isEditingQues">
                    <p class="font-weight-medium headline">Comments</p>
                    <tiptap-vuetify v-model="remarks" :extensions="extensions"/>
              </v-flex>
            </v-layout>

            <v-divider></v-divider>

            <v-layout column wrap mt-8 v-show="!isEditingQues">
                <p class="font-weight-medium headline">Comments</p>
                <div class="tiptap-vuetify-editor__content" v-html="remarks"/>
            </v-layout>

            <v-layout justify-end>
                 <v-btn color="grey" class="ml-3 mt-7 font-weight-medium" @click="editQues"  dark depressed>Edit</v-btn> 
              <v-btn color="#038A99" class="ml-3 mt-7 font-weight-medium" @click="editQues_submitted"  dark depressed>Next</v-btn> 
            </v-layout>


        </div>

        <div class="notification mr-11" style="width:180px;">
           
        </div>
    </div>
  </div>
</template>

<script> 
import { TiptapVuetify, Heading, Bold, Italic, Strike, Underline, Code, Paragraph, BulletList, OrderedList, ListItem, Link, Blockquote, HardBreak, HorizontalRule, History } from 'tiptap-vuetify'
import RubricsPhase1 from '../../../../../components/rubrics/Assign/assign-rubic-ph_1'
import dheader from '../../../../../components/dheader'
import rightNote from '../../../../../components/notification1'
import snackbar from '../../../../../components/snackbar'
import sidebar from '../../../../../components/sidebar'

  export default {
    components: {
        dheader,
        rightNote,
        snackbar,
        sidebar,
        TiptapVuetify,
        RubricsPhase1
    },

    data: () => ({
        dialog: false,
        isEditingQues: true,

        extensions: [
      History,
      Blockquote,
      Link,
      Underline,
      Strike,
      Italic,
      ListItem,
      BulletList,
      OrderedList,
      [Heading, {
        options: {
          levels: [1, 2, 3]
        }
      }],
      Bold,
      Code,
      HorizontalRule,
      Paragraph,
      HardBreak
    ],
    // student info
        firstname: 'John',
        lastname: 'Kamau',
        _studentid: '0329',
        p_pic: 'https://randomuser.me/api/portraits/men/54.jpg',

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
                text: 'Assignments',
                disabled: false,
                href: '/instructor/assignments/',
            },
            {
                text: 'Submitted',
                disabled: false,
                href: '/instructor/marks/all-view-submitted',
            },
            {
                text: 'Student_id',
                disabled: true,
                href: '#',
            }
        ],

        divider: '>',
        large: false,
        customDiv: false,
        Deadline: '17 July 2019 22:59',
        content: ` `,
        remarks:``,
        response: `  1. <em style="color:#038A99">Objective: Use techniology to move beyond textbook-based instruction.
                    in your historyclass are having difficulty understanding the significance of WWII
                    What activities would help students get more engaged?</em> (Choose 2 answers) <strong>(p. 15)</strong>
                    <br /><br />

                    <div style="border:0.2px solid #D9D9D9; padding:20px;margin:3px">

                    Quisque lacinia, mi vehicula vulputate ornare, metus magna eleifend nisi, sed consequat justo metus sit amet lectus. Nam dignissim, justo egestas semper scelerisque, nunc arcu lobortis ex, in iaculis purus purus nec urna. Nam ut auctor ligula. Quisque auctor in augue non pretium. Aliquam auctor consectetur viverra. Duis porttitor ex id orci dapibus euismod. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam quis luctus metus. Vestibulum vehicula mi vel sem semper sodales. Pellentesque imperdiet id mauris non vehicula. <br /><br />

                    Donec metus massa, egestas non lacinia eu, sodales vitae elit. Quisque purus nulla, condimentum ut maximus in, tempus at tellus. In odio ligula, tempus id ante non, sollicitudin posuere mauris. Pellentesque eu lectus quis ligula elementum consequat. Proin pellentesque placerat nunc eu rhoncus. Nulla rutrum, lacus eget pulvinar consectetur, augue ante tincidunt quam, eu efficitur ipsum nunc eget turpis. Nullam id mi id felis scelerisque eleifend. Etiam faucibus condimentum purus et congue. Aenean justo lacus, dictum nec turpis consectetur, sagittis venenatis augue. Vestibulum finibus sem vel metus ullamcorper, a gravida sem pretium. Vestibulum eget lobortis mauris.
                    
                     </div>
                    <br />

                    2. <em style="color:#038A99">What are these "great oppressions" preparing the world for?
                    
                    </em> <strong>(p. 15)</strong> <br /><br />
                    
                     <div style="border:0.2px solid #D9D9D9; padding:20px;margin:3px">

                     Vestibulum fringilla, dolor et pharetra placerat, quam metus sagittis elit, sed lobortis quam lacus at ex. Donec bibendum sodales maximus. Pellentesque et augue vestibulum, luctus augue id, blandit turpis. Aenean molestie nisi eros, sit amet ultrices augue finibus et. Nunc volutpat lorem risus, eu blandit sapien condimentum id. Etiam eget interdum lorem. Nullam aliquet eleifend vestibulum.<br /><br />
            
                     Aenean tempor vehicula eleifend. Integer eros urna, dignissim sed fringilla eleifend, porttitor sed nibh. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc in nunc in nisi varius tempor. Morbi vel sodales nisl. Donec tincidunt tortor ligula. Nunc euismod placerat velit et gravida. Cras fringilla ultrices velit, eget ultrices neque tincidunt vel. Phasellus quis tortor eu orci feugiat rhoncus. Nam placerat lectus volutpat condimentum efficitur. Quisque felis nibh, ultrices quis cursus nec, volutpat eget dolor. Duis imperdiet dui id turpis dignissim, eget scelerisque tellus imperdiet.
                     </div>
   `
    }),
     methods: {
        editQues () {
            this.isEditingQues = true
        },
        editQues_submitted () {
            this.isEditingQues = false;
            // this.dialog = true;
            this.$router.push({path: '/instructor/marks/all-view-submitted/student_id/set2',})
        }
    }
  }
</script>

<style scoped>
.snackbar {
    height: 320vh;
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