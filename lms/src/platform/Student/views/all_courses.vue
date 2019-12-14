<template>
    <div class="all_courses">
        <dheader />
        <div class="wrapper d-flex justify-lg-space-between">
            <div class="snackbar">
                <snackbar />
            </div>

            <div class="main-content">
                    <div class="divider">
                        <v-breadcrumbs :items="items" :divider="divider" class="breadcrumb">
                            <template v-if="customDiv" v-slot:divider>
                                <v-icon>mdi-chevron-right</v-icon>
                            </template>
                        </v-breadcrumbs>
                    </div>

                   <v-btn dark color="orange" width="300" height="70" class="ma-8  title" to="/instructor/browse">
                    browse all courses</v-btn>

                    <!-- main courses -->
                    <div class="main ml-10">
                        <div class="display-3">Main Courses</div>
                        <v-simple-table>
                            <template v-slot:default>
                                <thead>
                                    <tr>
                                         <th class="black--text headline">Course</th>
                                        <th class="black--text headline">Code</th>
                                        <th class="black--text headline">Stream</th>
                                        <th class="black--text headline">Term</th>
                                        <th class="black--text headline">Enrolled Date</th>
                                        <th class="black--text headline">Enrolled</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="item in courses" :key="item.Fin">
                                    <td class="subtitle-1">
                                        <v-avatar size="15" :color="item.color" class="mr-3"></v-avatar>{{ item.Fin }}</td>
                                    <td>{{ item.code }}</td>
                                    <td>{{ item.stream }}</td>
                                    <td>{{ item.term }}</td>
                                    <td>{{ item.date }}</td>
                                    <td>{{ item.enrolled }}</td>
                                    </tr>
                                </tbody>
                            </template>
                        </v-simple-table>
                    </div>

                    <!-- extra courses -->
                    <div class="mt-12 ml-10">
                        <div class="display-3">Extra Courses</div>
                        <v-simple-table>
                            <template v-slot:default>
                            <thead>
                                <tr>
                                    <th class="black--text display-1">Course</th>
                                    <th class="black--text display-1">Code</th>
                                    <th class="black--text display-1">Stream</th>
                                    <th class="black--text display-1">Term</th>
                                    <th class="black--text display-1">Enrolled Date</th>
                                    <th class="black--text display-1">Enrolled</th>
                                </tr>
                            </thead>
                            <tbody>
                                <h4 class="grey--text display-2 pt-7">No Courses Enrolled</h4>
                            </tbody>
                            </template>
                        </v-simple-table>
                    </div>
            </div>  

            <!-- side note with calendar view     -->
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


export default {
    components: {
        dheader,
        rightNote,
        snackbar
    },

    data: () => ({
        items: [
            {
            text: 'Home',
            disabled: false,
            href: '/student'
            },
            {
            text: 'All Courses',
            disabled: true,
            href: '#'
            },
        ],

        courses: [
            {color: 'red lighten-2', Fin: 'Financial Accounting', code: 'BUS101', stream: 'A', term: 'Winter', date: '09/12/2019', enrolled: 'Yes'},
            {color: 'green', Fin: 'Elements of Banking', code: 'FIN102', stream: 'F', term: 'Summer', date: '05/02/2009', enrolled: 'No'}
        ],


        divider: '>',
        large: false,
        customDiv: false
    })
}
</script>

<style scoped>
.snackbar {
    height: 100vh;
}

.divider {
    position: relative;
    border-bottom: 1px solid lightgray;
    margin-top: 65px;
    margin-left: 30px;
 }

 .ma-4 {
    width: 20%;
 }

 .ma-8 {
     display: absolute;
     left: 60%;
     border-radius: 5px !important;
     font-size: 25px;
 }

 .display-3 {
     border-bottom: 2px solid gray;
 }

 .mt-12 {
     margin-top: 20rem !important;  
 }

</style>