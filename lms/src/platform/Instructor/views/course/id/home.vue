<template>
  <div class="home">
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
            <v-layout row wrap ml-3 mt-4>
                <h2 class="display-2 mb-3 ">Course Introduction</h2>
                <v-spacer/>
                <v-btn  @click.stop="edit = true" :disabled="edit" text color="#262626" class="mr-8">Edit</v-btn>
            </v-layout>
            
            <v-divider></v-divider>
            <p class="subtitle-1 mt-6">{{ introduction }}</p>

            <!-- display after the submit button is clicked -->
            <v-card v-if="edit">
                   <v-row>
                        <v-col cols="12">
                            <v-col>
                                <p class="pl-5">Copy and paste or type your submission right here</p>
                                <form>
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
            
        </div>

        <div class="notification mr-11" style="width:280px;">
            <rightNote />
        </div>
    </div>
  </div>
</template>

<script> 
import dheader from '../../../components/dheader'
import rightNote from '../../../components/notifications2'
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
        edit: false,
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
        customDiv: false,
        introduction: `'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'`,
        textdata: '',
        course: 'course name',
        id:'4'
    }),

    created() {
        axios.get('http://localhost:3000/course/1')  
        .then(res => {
       this.companies = res.data
     })
     .catch(err => {
       this.errors.push(err);
     })
    },
    methods: {
        submit() {
            let formData = new FormData()
            formData.append('description', this.textdata)
            formData.append('name', this.course)

            axios.post('http://localhost:3000/course/SEr84Zk4', formData)
            .then(res =>{
              this.dialog = true
            }).catch(err => {
              this.errors.push(error);
            })
        }

    }
  }
</script>

<style scoped>
.snackbar {
    height: 130vh;
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