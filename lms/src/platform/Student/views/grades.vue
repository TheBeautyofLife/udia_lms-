<template>
  <div class="grades">
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

            <div class="d-flex justify-lg-space-between">
                Sort By: 
                <v-combobox
                v-model="select"
                :items="combo"
                class="ml-4"
                multiple
                outlined
                dense
                ></v-combobox>
                <v-spacer></v-spacer>
                <v-btn dark depressed color="blue" @click="print">
                    <v-icon class="mr-3">mdi-printer</v-icon>
                    Print PDF
                </v-btn>
            </div>

            <v-card 
            color="transparent"
            flat id="grades">
                <v-list>
                    <template v-for="(item, index) in main">
                        <v-divider v-if="item.divider" :key="index"></v-divider>
                        <v-list-item v-else :key="item.title">
                            <v-list-item-content>
                                <v-list-item-title v-html="item.title"></v-list-item-title>
                            </v-list-item-content>
                            <v-list-item-content>
                                <v-list-item-title v-html="item.text"></v-list-item-title>
                            </v-list-item-content>
                            <v-list-item-content>
                                <v-list-item-title v-html="item.text1"></v-list-item-title>
                            </v-list-item-content>
                            <v-list-tile-content>
                                <v-list-item-subtitle class="black--text" v-html="item.text2"></v-list-item-subtitle>
                            </v-list-tile-content>
                        </v-list-item>
                    </template>
                    <v-spacer></v-spacer>
                </v-list>
            </v-card>
        </div>

        <div class="notification mt-10">
            <!-- Groups -->
            <h3>Marks are measured by groups</h3>
            <v-card color="transparent" flat>
                <v-list>
                    <template v-for="(item, index) in groups">
                        <v-divider v-if="item.divider" :key="index"></v-divider>
                        <v-list-item v-else :key="item.title">
                            <v-list-item-content>
                                <v-list-item-title v-html="item.title"></v-list-item-title>
                            </v-list-item-content>
                            <v-list-tile-content>
                                <v-list-item-subtitle class="black--text" v-html="item.text"></v-list-item-subtitle>
                            </v-list-tile-content>
                        </v-list-item>
                    </template>
                    <v-spacer></v-spacer>
                </v-list>
            </v-card>
        </div>
    </div>
  </div>
</template>

<script> 
import dheader from '../components/dheader'
import snackbar from '../components/snackbar'
import sidebar from '../components/sidebar'

  export default {
      components: {
          dheader,
          snackbar,
          sidebar
      },

       data: () => ({
        items: [
            {
                text: 'Course_name',
                disabled: false,
                href: '/',
            },
            {
                text: 'Home',
                disabled: false,
                href: '/home',
            },
            {
                text: 'Grades',
                disabled: true,
                href: '#',
            }
        ],

        divider: '>',
        large: false,
        customDiv: false,

        groups: [
          { icon: false, title: '<strong>Group</strong>', text: '<strong>Weight</strong>'},
          {divider: true},
          { title: 'Assignments', text: '25%' },
          {divider: true},
          { title: 'Tests', text: '35%' },
          {divider: true},
          { title: 'Exam', text: '40%' },
          {divider: true},
          { title: '<strong>Total</strong>', text: '<strong>100%</strong>' },
          {divider: true},
        ],

        main: [
          { title: '<strong>Group</strong>', text: '<strong>Due</strong>', text1: '<strong>Marks</strong>', text2: '<strong>Out Of</strong>'},
          {divider: true},
          { title: '<h2>Assignment 1</h2>', text: '<strong></strong>', text1: '<strong>-</strong>', text2: '<h3>10</h3>'},
          {divider: true},
          { title: '<h2>Assignment 2</h2>', text: '<strong></strong>', text1: '<strong>-</strong>', text2: '<h3>10</h3>'},
          {divider: true},
          { title: '<h2>Assignment 3</h2>', text: '<strong></strong>', text1: '<strong>-</strong>', text2: '<h3>10</h3>'},
          {divider: true},
          { title: '<h2>Assignment 4(Group Work)</h2>', text: '<strong></strong>', text1: '<strong>-</strong>', text2: '<h3>10</h3>'},
          {divider: true},
          { title: '<h2>Test 1</h2>', text: '<strong></strong>', text1: '<strong>-</strong>', text2: '<h3>25</h3>'},
          {divider: true},
          { title: '<h2>Test 2</h2>', text: '<strong></strong>', text1: '<strong>-</strong>', text2: '<h3>25</h3>'},
          {divider: true},
          { title: '<h2>Exam: Midterm</h2>', text: '<strong></strong>', text1: '<strong>-</strong>', text2: '<h3>60</h3>'},
          {divider: true}
        ],

        select: [],
        combo: [
          'Marks',
        ],
    }),

    methods: {
        print(){
            this.$htmlToPaper('grades')
        }
    }
  }
</script>

<style scoped>
.snackbar {
    height: 100vh;
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
    margin: 30px 80px;
} 

.notification {
    position: relative;
    right: 1%;
}

</style>