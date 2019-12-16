<template>
    <div class="all_courses">
        <dheader />
        <div class="wrapper d-flex justify-lg-space-between">
            <div class="snackbar">
                <snackbar style='overflow: hidden;' />
            </div>

            <div class="main-content">
                    <div class="divider mb-9">
                        <v-breadcrumbs :items="items" :divider="divider" class="breadcrumb">
                            <template v-if="customDiv" v-slot:divider>
                                <v-icon>mdi-chevron-right</v-icon>
                            </template>
                        </v-breadcrumbs>
                    </div>

                    <!-- main courses -->
                    <div class="main ml-10">
                        <div class="display-3">All Courses</div>
                        <v-simple-table >
                            <template v-slot:default>
                                <thead >
                                    <tr>
                                        <th class="black--text title mt-4">Course</th>
                                        <th class="black--text title">Code</th>
                                        <th class="black--text title">Stream</th>
                                        <th class="black--text title">Term</th>
                                        <th class="black--text title">Enrolled Date</th>
                                        <th class="black--text title">Enrolled</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="item in courses" :key="item.Fin">
                                     
                                        <td class="subtitle-1">
                                            <router-link :to="item.to">
                                                <v-avatar size="15" :color="item.color" class="mr-3"></v-avatar>
                                            </router-link>
                                        {{ item.Fin }}</td>
                                        
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

                
            </div>  

            <!-- side note with calendar view     -->
            <div class="notification mr-11" style="width:280px;">
                <rightNote />
            </div>
        </div>
    </div>
</template>

<script>
import dheader from '../../components/dheader'
import rightNote from '../../components/notifications2'
import snackbar from '../../components/snackbar'


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
            href: '/instructor'
            },
            {
            text: 'All Courses',
            disabled: true,
            href: '#'
            },
        ],

        courses: [
            {color: 'red lighten-2', Fin: 'Financial Accounting', code: 'BUS101', stream: 'A', term: 'Winter', date: '09/12/2019', enrolled: 'Yes', to: '/instructor/home'},
            {color: 'green', Fin: 'Elements of Banking', code: 'FIN102', stream: 'F', term: 'Summer', date: '05/02/2009', enrolled: 'No', to:'/instructor/home'}
        ],


        divider: '>',
        large: false,
        customDiv: false
    })
}
</script>

<style scoped>
.snackbar {
    height: 120vh;
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