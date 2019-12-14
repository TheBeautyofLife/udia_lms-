<template>
  <div class="files">
    <dheader />
    
    <!-- flex wrapper -->
    <div class="wrapper d-flex justify-lg-space-between">
        <div class="snackbar">
            <snackbar />
        </div>

        <div class="sidebar">
            <sidebar />
        </div>
        
        <div class="main_content d-flex justify-lg-space-around">
            <!-- treeview -->
            <v-row>
                <v-col>
                    <v-treeview
                    v-model="tree"
                    rounded
                    :open="open"
                    :items="tree_items"
                    color="grey"
                    open-on-click
                    return-object>
                        <template v-slot:prepend="{item, open}">
                            <v-icon v-if="!item.file">
                                {{ open? 'mdi-folder-open' : 'mdi-folder' }}
                            </v-icon>
                            
                                <v-icon v-else>
                                    {{ files[item.file] }}
                                </v-icon>
                        </template>
                    </v-treeview>
                </v-col>

                <v-divider vertical></v-divider>

                <!-- table to display folder contents -->
                <v-col class="pa-6" cols="8">
                    <template v-if="tree.length">
                    No nodes selected.
                    </template>
                    <template v-else>
                        <v-simple-table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Size</th>
                                    <th>Date Created</th>
                                    <th>Created By</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(file, index) in sub2" :key="index">
                                    <td>{{ file.name }}</td>
                                    <td>{{ file.size }}</td>
                                    <td>{{ file.date }}</td>
                                    <td>{{ file.author }}</td>
                                </tr>
                            </tbody>
                        </v-simple-table>
                    </template>
                </v-col>
            </v-row>            
        </div>

        

        <div class="notification">
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
                text: 'Files',
                disabled: true,
                href: '#',
            }
        ],

        divider: '>',
        large: false,
        customDiv: false,

        // table data stream, term, date, author
        subfolder2: [
            {},
        ],

        open: ['Course_name'],
        files: {
            html: 'mdi-language-html5',
            js: 'mdi-nodejs',
            json: 'mdi-json',
            md: 'mdi-markdown',
            pdf: 'mdi-file-pdf',
            png: 'mdi-file-image',
            txt: 'mdi-file-document-outline',
            xls: 'mdi-file-excel',
        },
        tree: [],
        tree_items: [        
            {
                name: 'Course_name',
                children: [
                    {
                      name: 'Week 1',
                      sub:'week1Submit()'
                    },
                    {
                      name: 'Week 2',
                      sub:'week2Submit()'
                    },
                    {
                        name: 'Assignment',
                        file: '',
                    },           
                ],
            },
        ],

        sub2: [
            {name: 'Assignment 1', size: '35KB ', date: '12/45/2014', author: 'Dr. Lawrence Nderu'},
            {name: 'Assignment 2', size: '23KB', date: '7/12/2301', author: 'Ms. Damaris Waema'},
            {name: 'Assignment 3', size: '30KB', date: '12/12/1201', author: ''},
            {name: 'Assignment 4', size: '1MB', date: '6/55/2356', author: ''}
        ],

        root: ''
    }),
    created () {
    this.week1Submit()
    this.week2Submit()
  },
    methods: {
    //
  }
  }
</script>

<style scoped>
* {
    list-style: none;
    text-decoration: none;
}

.sidebar {
    position: relative;
    height: 100%;
    padding: 100px 0;
    font-size: 25px;    
}

.sidebar ul li a:hover,
.sidebar ul li a:active {
    color: black;
}

.table {
    width: 100%;
    margin-top: 2%;
}

.snackbar {
    height: 100vh;
}

.main_content {
    width: 50%;
    padding: 30px;
    position: relative;
    margin-top: 100px;
}

</style>