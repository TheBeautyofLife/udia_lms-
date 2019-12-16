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
               
                <v-spacer></v-spacer>
                <v-btn color="blue" class="font-weight-bold" @click="editQues" dark depressed>Mark sumitted Work</v-btn>
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
                    <p class="ml-2 mb-3 title">Marks</p>
                    <v-layout column>
                        <v-card class="ml-2" height="420">
                        <p class="pl-4 pt-4">Question 1</p>
                    </v-card>
                    <v-card class="ml-2 mt-5" height="420">
                        <p class="pl-4 pt-4">Question 2</p>
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

        <div class="notification mr-11" style="width:280px;">
            <rightNote />
        </div>
    </div>
  </div>
</template>

<script> 
import { TiptapVuetify, Heading, Bold, Italic, Strike, Underline, Code, Paragraph, BulletList, OrderedList, ListItem, Link, Blockquote, HardBreak, HorizontalRule, History } from 'tiptap-vuetify'
import dheader from '../../../../components/dheader'
import rightNote from '../../../../components/notification1'
import snackbar from '../../../../components/snackbar'
import sidebar from '../../../../components/sidebar'

  export default {
    components: {
        dheader,
        rightNote,
        snackbar,
        sidebar,
        TiptapVuetify
    },

    data: () => ({
        dialog: false,
        isEditingQues: false,

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

                    Quisque lacinia, mi vehicula vulputate ornare, metus magna eleifend nisi, sed consequat justo metus sit amet lectus. Nam dignissim, justo egestas semper scelerisque, nunc arcu lobortis ex, in iaculis purus purus nec urna. Nam ut auctor ligula. Quisque auctor in augue non pretium. Aliquam auctor consectetur viverra. Duis porttitor ex id orci dapibus euismod. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam quis luctus metus. Vestibulum vehicula mi vel sem semper sodales. Pellentesque imperdiet id mauris non vehicula.
                    
                     </div>

                    <br />
                    2. <em style="color:#038A99">What are these "great oppressions" preparing the world for?
                    
                    </em> <strong>(p. 15)</strong> <br /><br />
                    
                     <div style="border:0.2px solid #D9D9D9; padding:20px;margin:3px">

                     Vestibulum fringilla, dolor et pharetra placerat, quam metus sagittis elit, sed lobortis quam lacus at ex. Donec bibendum sodales maximus. Pellentesque et augue vestibulum, luctus augue id, blandit turpis. Aenean molestie nisi eros, sit amet ultrices augue finibus et. Nunc volutpat lorem risus, eu blandit sapien condimentum id. Etiam eget interdum lorem. Nullam aliquet eleifend vestibulum.
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
    height: 110vh;
}

.snackbarlong {
    height: 250vh;
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