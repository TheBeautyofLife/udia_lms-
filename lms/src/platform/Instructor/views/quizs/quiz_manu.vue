<template>
  <div class="quiz">
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
                <v-text-field v-model="search" label="search for assignments..." class="textfield" outlined></v-text-field>
                <v-spacer></v-spacer>
                <v-btn dark depressed color="blue">Sort By Date</v-btn>
            </div>
            
            <div class="list">
                <v-expansion-panels :search="search" class="expand">
                    <v-expansion-panel class="mt-4">
                        <v-expansion-panel-header class="blue lighten-4">
                            <template v-slot:default="{ open }">
                                <v-row no-gutters>
                                    <v-col cols="4" class="subtitle-1 ">Quiz</v-col>
                                </v-row>
                            </template>
                        </v-expansion-panel-header>

                        <v-expansion-panel-content>
                            <v-list two-line rounded>
                                <v-list-item v-for="item in overdue" :key="item.title" :to="item.link">
                                    <v-icon :color="item.iconClass" class="pr-4" v-text="item.icon"></v-icon>

                                    <v-list-item-content>
                                     <v-list-item-title class="text" v-text="item.title"></v-list-item-title>
                                        <v-list-item-subtitle class="black--text" v-text="item.subtitle"></v-list-item-subtitle>
                                    </v-list-item-content>

                                    <v-list-item-action>
                                        <v-icon color="grey lighten-1">mdi-information</v-icon>
                                    </v-list-item-action>
                                </v-list-item>
                            </v-list>
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                </v-expansion-panels>
            </div>
        </div>

        <div class="notification">
            <rightNote />
        </div>
    </div>
  </div>
</template>

<script> 
import dheader from '../../components/dheader'
import rightNote from '../../components/notification1'
import snackbar from '../../components/snackbar'
import sidebar from '../../components/sidebar'

  export default {
      components: {
          dheader,
          rightNote,
          snackbar,
          sidebar
      },

       data: () => ({
           search: '',
        items: [
            {
                text: 'Dashboard',
                disabled: false,
                href: '/',
            },
            {
                text: 'Home',
                disabled: false,
                href: '/home',
            },
            {
                text: 'Assignments',
                disabled: true,
                href: '#',
            }
        ],

        divider: '>',
        large: false,
        customDiv: false,

        overdue: [
            { icon: 'mdi-file', iconClass: 'black', title: 'Quiz 1', subtitle: 'Due Jan 9, 2014 18:59', link: '/instructor/quiz/quiz-1'}
        ],
    }),

    methods: {
        select() {
            window.location.href = './instructor/quiz'
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
    left: 7%;
    margin: 30px 80px;
} 

.notification {
    position: relative;
}

.list {
  display: flex;
  justify-content: center;
  border-radius: 6px;
}

.expand {
  width: 90%;
}

.textfield {
    width: 0px;
}

.text {
    color: #0d98ba;
    font-size: 25px;
}
</style>