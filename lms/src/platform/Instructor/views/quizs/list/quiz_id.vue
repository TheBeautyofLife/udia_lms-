<template>
  <div class="quiz">
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
                <h2 class="display-2 mb-3">Quiz 1</h2>
                <v-spacer></v-spacer>
                <v-btn color="blue" class="font-weight-bold" to="/instructor/marks/all-view-submitted"  dark depressed>Mark Quiz</v-btn>
                 <v-btn color="grey" class="ml-3 font-weight-bold" @click="editQues"  dark depressed>Edit</v-btn>
            </div>

            <div class="d-flex justify-space-between mt-7">
                <!-- display after submit is pressed -->
                <v-spacer></v-spacer>
                <v-layout row justify-end>
                   <p v-show="!isEditing">
                    <strong>Due:</strong> {{ Deadline }}
                   </p>

                    <span v-show="isEditing" class="mr-5 mb-1">
                        <input class="grey lighten-3 editField ml-4" type="text" v-model="Deadline">
                        <v-btn small icon @click="deActivateEditMode">
                            <v-icon>mdi-calendar-check</v-icon>
                        </v-btn>
                    </span>

                     <v-btn class="mr-2 mb-1" icon @click="activateEditMode">
                     <v-icon>mdi-calendar-edit</v-icon>
                   </v-btn>
                 </v-layout>

                 
            </div>
            <v-divider></v-divider>
            <v-layout mt-8 v-show="!isEditingQues">
                <div class="tiptap-vuetify-editor__content" v-html="content"/>
            </v-layout> 
            <div v-show="isEditingQues">
                <tiptap-vuetify v-model="content" :extensions="extensions"/>
                <v-layout justify-end>
                    <v-btn color="#038A99" class="ml-3 mt-7 font-weight-medium" @click="editQues_submitted"  dark depressed>Edit</v-btn> 
                </v-layout>
            </div>  
             <v-dialog v-model="dialog" max-width="600">
                     <div class="white modal">
                        <div class="close">
                            <v-btn class="icon ma-2 mr-8" icon @click.stop="dialog = false">
                                <v-icon size="30">mdi-close</v-icon>
                            </v-btn>
                        </div>
                        <v-divider></v-divider>

                        <v-layout column wrap mt-12 justify-center>
                            <v-icon color="orange" size="90">mdi-cloud-check</v-icon>
                            <h3>You have successfully submitted</h3>
                            <p>You can click here to go back</p>
                        </v-layout>

                        <div class="buttons d-flex justify-center align-center">
                            <v-btn dark depressed type="submit" value="submit" class="blue ma-10" @click.stop="dialog = false">Go Back</v-btn>
                        </div>
                    </div>
                </v-dialog>
        </div>

        <div class="notification" style="width:280px;">
        </div>
    </div>
  </div>
</template>

<script> 
import { TiptapVuetify, Heading, Bold, Italic, Strike, Underline, Code, Paragraph, BulletList, OrderedList, ListItem, Link, Blockquote, HardBreak, HorizontalRule, History } from 'tiptap-vuetify'
import dheader from '../../../components/dheader'
import rightNote from '../../../components/notification1'
import snackbar from '../../../components/snackbar'
import sidebar from '../../../components/sidebar'

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
        terms: false,
        isEditing: false,
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
                href: '/instructor/quiz',
            },
            {
                text: '01',
                disabled: true,
                href: '#',
            }
        ],

        divider: '>',
        large: false,
        customDiv: false,
        Deadline: '09 January 2019 22:59',
        content: ` 
                  1. Objective: Use techniology to move beyond textbook-based instruction.
                    in your historyclass are having difficulty understanding the significance of WWII
                    What activities would help students get more engaged? <strong>(p. 15)</strong>
                    <br /><br />

                  2. What are these "great oppressions" preparing the world for? <strong>(p. 5)</strong> <br /><br />
                
                  3.  Describe the realtionship between the Most Great Civilization, the Most Great Justice and the Most Great Peace.
                     What is the Great Peace mentioned in the opening sentence of The Promise of World Peace <strong>(p. 7)</strong><br /><br />
               
                  4.What were the changes made against Faith? <strong>(p.7) </strong> 
                    <br /><br />What is Eclectism? <br />
                    How does it differ from Syncretism? <br />
                    How would you answer these charges? <br />
                    
                `
    }),
     methods: {
        activateEditMode() {
            this.isEditing = true
        },
        deActivateEditMode() {
            this.isEditing = false
        },
        editQues () {
            this.isEditingQues = true
        },
        editQues_submitted () {
            this.isEditingQues = false;
            this.dialog = true;
        }
    }
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
    height: 400px !important;
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