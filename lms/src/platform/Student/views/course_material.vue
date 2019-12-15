<template>
  <div class="all_pages">
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

            <v-divider></v-divider>
            
            <!-- expansion panels for all pages -->
            <div class="list">
                <v-expansion-panels class="expand">
                    <v-expansion-panel class="mt-4">
                        <v-expansion-panel-header class="blue lighten-4">
                            <template v-slot:default="{ open }">
                                <v-row no-gutters>
                                    <v-col cols="4" class="subtitle-1 ">Pages</v-col>
                                </v-row>
                            </template>
                        </v-expansion-panel-header>

                        <v-expansion-panel-content>
                            <v-list two-line>
                                <v-list-item v-for="(page, index) in pages" :key="index"  :to="page.link">
                                    <v-icon :color="page.iconClass" class="pr-4" v-text="page.icon"></v-icon>
                                    <v-list-item-content>
                                        <v-list-item-title class="text" v-text="page.title"></v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                            </v-list>
                        </v-expansion-panel-content>
                    </v-expansion-panel>

                    <v-expansion-panel class="mb-4">
                        <v-expansion-panel-header class="blue lighten-4" v-slot="{ open }">
                            <v-row no-gutters>
                                <v-col cols="4" class="subtitle-1">Videos</v-col>
                            </v-row>
                        </v-expansion-panel-header>

                        <v-expansion-panel-content>
                            <v-list one-line rounded>
                                <v-list-item v-for="(video, index) in videos" :key="index">
                                    <v-icon :color="video.iconClass" class="pr-4" v-text="video.icon"></v-icon>

                                    <v-list-item-content>
                                        <v-list-item-title class="text">{{video.title}}</v-list-item-title>
                                    </v-list-item-content>
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
        items: [
            {
                text: 'Course_name',
                disabled: false,
                href: '/home',
            },
            {
                text: 'Home',
                disabled: false,
                href: '/home',
            },
            {
                text: 'Course_material',
                disabled: true,
                href: '#',
            }
        ],

        divider: '>',
        large: false,
        customDiv: false,

        pages: [
            {
                iconClass: 'black',
                title: 'Page One',
                icon: 'mdi-file',
                link: '/page-1'
            },
            {
                iconClass: 'black',
                title: 'Page Two',
                icon: 'mdi-file',
                link: '/page-2'
            },
            {
                iconClass: 'black',
                title: 'Page Three',
                icon: 'mdi-file',
                link: '/page-3'
            }
        ],

        videos: [
            {
                iconClass: 'black',
                title: 'Video One',
                icon: 'mdi-file-video'
            },
        ]
    }),    
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

</style>