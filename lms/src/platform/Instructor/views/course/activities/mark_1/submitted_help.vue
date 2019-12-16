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
                   How it Works
                   </p>
                 </v-layout>
                <v-spacer></v-spacer>
                <v-layout row justify-end>
                   <p>
                    <strong>Due:</strong> {{ Deadline }}
                   </p>

                     <v-btn class="mr-2 mb-1" icon>
                     <v-icon>mdi-calendar-blank</v-icon>
                   </v-btn>
                 </v-layout>

                 
            </div>
            <v-divider></v-divider>
           
            <v-layout row wrap mt-10 ml-3>
              <v-flex xs10>
                    Morbi mattis ornare quam eget aliquet. Vivamus tempus libero sem, blandit ullamcorper dui semper eget. Donec laoreet tempus massa in feugiat. Sed feugiat, arcu eget feugiat tempor, nulla velit laoreet nibh, sit amet elementum metus est et leo. Ut semper id neque ac pretium. In viverra in sapien et rhoncus. Vivamus posuere nisi sit amet leo ultrices, eget consequat risus fermentum. Pellentesque et varius dolor. Praesent ut leo at lorem luctus scelerisque.
              </v-flex>

              <v-flex xs10 class="mt-10">
                   <p class="font-weight-bold headline">Rubrics For Marking</p>
                    <v-container>
                       <!--  Rubric one -->
                        <v-layout row> 
                            <div class="subtitle font-weight-bold mb-7"> Content & Development</div>
                            <v-layout row wrap ml-2>
                            <v-card width="250" class="ma-1">
                                <v-card-title class="body-1 font-weight-bold">
                                    Poor (0 pt)
                                </v-card-title >
                                <v-card-text class="body-2">
                                    <ul>
                                        <li> Content is incomplete.</li>
                                        <li> Points are not clear and /or persuasive.</li>
                                    </ul>
                                </v-card-text>
                            </v-card>

                             <v-card width="250" class="ma-1">
                                <v-card-title class="body-1 font-weight-bold">
                                    Fair (1 pt)
                                </v-card-title >
                                <v-card-text class="body-2">
                                    <ul>
                                        <li> Content is not comprehensive and /or persuasive.</li>
                                        <li> Major points are addressed, but not well supported.</li>
                                        <li> Research is inadequate or does not address course concepts.</li>
                                    </ul>
                                </v-card-text>
                            </v-card>

                             <v-card width="250" class="ma-1">
                                <v-card-title class="body-1 font-weight-bold">
                                    Good (2 pt)
                                </v-card-title >
                                <v-card-text class="body-2">
                                    <ul>
                                        <li> Content is comprehensive, accurate, and persuasive.</li>
                                        <li> Major points are stated clearly and are well supported.</li>
                                        <li> Research is adequate, timely and addresses course concepts.</li>
                                    </ul>
                                </v-card-text>
                            </v-card>

                             <v-card width="250" class="ma-1">
                                <v-card-title class="body-1 font-weight-bold">
                                    Excellent (3 pt)
                                </v-card-title >
                                <v-card-text class="body-2">
                                    <ul>
                                        <li> Content is thorough, accurate, persuasive and relates to a specific purpose</li>
                                        <li> Major points are specific, stated clearly, and are well-supported.</li>
                                        <li> Research is primary</li>
                                    </ul>
                                </v-card-text>
                            </v-card>
                            </v-layout>
                        </v-layout>
                        <!-- --- -->

                        <!--  Rubric two -->
                        <v-layout row mt-9> 
                            <div class="subtitle font-weight-bold mb-7"> Organization & Structure</div>
                            <v-layout row wrap ml-2>
                            <v-card width="250" class="ma-1">
                                <v-card-title class="body-1 font-weight-bold">
                                    Poor (0 pt)
                                </v-card-title >
                                <v-card-text class="body-2">
                                    <ul>
                                        <li> Organization and structure detract from the concepts of the paper.</li>
                                        <li> Concepts are disjointed and lack transition of thoughts.</li>
                                    </ul>
                                </v-card-text>
                            </v-card>

                             <v-card width="250" class="ma-1">
                                <v-card-title class="body-1 font-weight-bold">
                                    Fair (1 pt)
                                </v-card-title >
                                <v-card-text class="body-2">
                                    <ul>
                                        <li> Structure of the paragraph is not easy to follow.</li>
                                        <li> Paragraph transitions need improvement.</li>
                                        <li> Concepts are disconnected. </li>
                                    </ul>
                                </v-card-text>
                            </v-card>

                             <v-card width="250" class="ma-1">
                                <v-card-title class="body-1 font-weight-bold">
                                    Good (2 pt)
                                </v-card-title >
                                <v-card-text class="body-2">
                                    <ul>
                                        <li> Concepts of the paragraphs are clear and easy to follow.</li>
                                    </ul>
                                </v-card-text>
                            </v-card>

                             <v-card width="250" class="ma-1">
                                <v-card-title class="body-1 font-weight-bold">
                                    Excellent (3 pt)
                                </v-card-title >
                                <v-card-text class="body-2">
                                    <ul>
                                        <li> Concepts of paragraphs are filled with details of support for thesis and topic sentences.</li>
                                        <li> Paragraphs flow into each other with connective concepts.</li>
                                    </ul>
                                </v-card-text>
                            </v-card>
                            </v-layout>
                        </v-layout>
                        <!-- --- -->

                         <!--  Rubric three -->
                        <v-layout row mt-9> 
                            <div class="subtitle font-weight-bold mb-7"> Grammar, Punctuation & Spelling</div>
                            <v-layout row wrap ml-2>
                            <v-card width="250" class="ma-1">
                                <v-card-title class="body-1 font-weight-bold">
                                    Poor (0 pt)
                                </v-card-title >
                                <v-card-text class="body-2">
                                    <ul>
                                        <li> Paper contains numerous grammatical, punctuation, and spelling errors. </li>
                                        <li> Language uses jargon or conversational tone </li>
                                        <li> Language is not professional </li>
                                    </ul>
                                </v-card-text>
                            </v-card>
                             <v-card width="250" class="ma-1">
                                <v-card-title class="body-1 font-weight-bold">
                                    Fair (1 pt)
                                </v-card-title >
                                <v-card-text class="body-2">
                                    <ul>
                                        <li> Paper contains few grammatical, punctuation and spelling errors.</li>
                                        <li> Language lacks clarity or includes the use of some jargon or conversational tone; lacks professionalism</li>
                                    </ul>
                                </v-card-text>
                            </v-card>

                             <v-card width="250" class="ma-1">
                                <v-card-title class="body-1 font-weight-bold">
                                    Good (2 pt)
                                </v-card-title >
                                <v-card-text class="body-2">
                                    <ul>
                                        <li> Rules of grammar, usage, and punctuation are followed; spelling is correct</li>
                                        <li> Language is clear; sentences display consistently varied structure.</li>
                                    </ul>
                                </v-card-text>
                            </v-card>

                             <v-card width="250" class="ma-1">
                                <v-card-title class="body-1 font-weight-bold">
                                    Excellent (3 pt)
                                </v-card-title >
                                <v-card-text class="body-2">
                                    <ul>
                                        <li> Correct grammatical construction</li>
                                        <li> Free of typos</li>
                                        <li> Compound/complex sentences</li>
                                        <li> Correct puncutation</li>
                                    </ul>
                                </v-card-text>
                            </v-card>
                            </v-layout>
                        </v-layout>
                        <!-- --- -->

                    </v-container>
              </v-flex>
            </v-layout>
            <v-layout justify-end>
              <v-btn color="#038A99" class="ml-3 mt-7 font-weight-medium" to="/instructor/marks/all-view-submitted/student_id/set1" dark depressed>Next</v-btn> 
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
        
    }),
  }
</script>

<style scoped>
.snackbar {
    height: 380vh;
}

.snackbarlong {
    height: 110vh;
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