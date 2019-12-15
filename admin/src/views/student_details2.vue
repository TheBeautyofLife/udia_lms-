<template>
    <div class="student_details2">
        <dheader />
        <v-container>
            <h4 class="pl-5">Manage Student Information</h4>
            <v-card class="mt-6 pl-10" max-width="600" flat>
                <v-list-item three-line>
                    <v-list-item-avatar size="120" color="grey" class="mt-5">
                        <v-img src="/student.jpg"></v-img>
                    </v-list-item-avatar>

                    <v-list-item-content>
                        <v-list-item-title class="headline mb-1">Lorem Ipsumdolor</v-list-item-title>
                        <v-list-item-subtitle color="grey lighten-3"><i>student_number</i></v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </v-card>

        
            <v-container>
                <div class="divider">
                    <h3 class="display-2">Course Selection</h3>
                    <span class="span"></span>
                    <div color="grey" class="blue--text">Edit
                        <v-icon class="ml-3" color="blue">mdi-pencil</v-icon>
                    </div>
                    <div color="grey" class="blue--text ml-4">Download CSV
                        <v-icon class="ml-3" color="blue">mdi-cloud-download</v-icon>
                    </div>
                </div>

                <!-- table displaying the student's information in detail -->
                <v-simple-table fixed-header class="table" height="500px">
                    <template v-slot:default>
                    <thead>
                        <tr>
                            <th class="orange--text">Course Code</th>
                            <th class="orange--text">Credit Hours</th>
                            <th class="orange--text">Days</th>
                            <th class="orange--text">Times</th>
                            <th class="orange--text">Beginning Date</th>
                            <th class="orange--text">Semester</th>
                            <th class="orange--text">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in details" :key="item.name">
                            <td>{{ item.code }}</td>
                            <td>{{ item.credit }}</td>
                            <td>{{ item.days }}</td>
                            <td>{{ item.times }}</td>
                            <td>{{ item.date }}</td>
                            <td>{{ item.semester }}</td>
                            <td>{{ item.status }}</td>
                        </tr>
                    </tbody>
                    </template>
                </v-simple-table>

                <!-- financial information -->
                <div class="divider mt-12">
                    <h3 class="display-2">Financial Information</h3>
                    <span class="span span-f"></span>
                    <div color="grey" class="blue--text">Edit
                        <v-icon class="ml-3" color="blue">mdi-pencil</v-icon>
                    </div>
                    <div color="grey" class="blue--text ml-4">Upload CSV
                        <v-icon class="ml-3" color="blue">mdi-cloud-upload</v-icon>
                    </div>
                    <div color="grey" class="blue--text ml-4">Download CSV
                        <v-icon class="ml-3" color="blue">mdi-cloud-download</v-icon>
                    </div>
                </div>

                <v-simple-table class="table">
                    <template v-slot:default>
                    <thead>
                        <tr>
                            <th class="orange--text">Date</th>
                            <th class="orange--text">Description</th>
                            <th class="orange--text">Payment or Credit</th>
                            <th class="orange--text">status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in finance" :key="item.name">
                            <td>{{ item.code }}</td>
                            <td>{{ item.description }}</td>
                            <td>{{ item.payment }}</td>
                            <td>{{ item.status }}</td>
                        </tr>
                    </tbody>
                    </template>
                </v-simple-table>
            </v-container>

            <v-btn color="orange" dark class="previous display-1" to="/student_details">
                <v-icon size="40">mdi-arrow-left</v-icon>Previous
            </v-btn>
        </v-container>
    </div>
</template>

<script>
import dheader from '../components/dheader.vue'

export default {
    components: {
        dheader
    },

    data() {
        return {
            details: [
                {
                    code: 'Course Code', credit: 'Credit Hours', days: 'M|T|F', times: '', date: '03/21/2019', semester: 'Winter', status: 'In Progress'

                },
                {
                    code: 'Course Code', credit: "Credit Hours", days: 'W|TH|S', times: '', date: '06/30/2018', semester: 'Fall', status: 'In Progress'
                },
                {
                    code: 'Course Code', credit: 'Credit Hours', days: 'M|T|F', times: '', date: '01/01/2017', semester: 'Summer', status: 'In Progress'
                },
                {
                    code: 'Course Code', credit: 'Credit Hours', days: 'F|S|S', times: '', date: '12/23/2017', semester: 'Fall', status: 'Incomplete'
                },
                {
                    code: 'Course Code', credit: 'Credit Hours', days: 'M|TH|F', times: '', date: '11/15/2019', semester: 'Spring', status: 'Incomplete'
                },
                {
                    code: 'Course Code', credit: 'Credit Hours', days: 'M|T|W', times: '', date: '05/26/2019', semester: 'Winter', status: 'Completed'
                },
                {
                    code: 'Course Code', credit: 'Credit Hours', days: 'T|TH|S', times: '', date: '08/12/2017', semester: 'Summer', status: 'Completed'
                },
                {code: 'Course Code', credit: 'Credit Hours', days: 'M|T|F', times: '', date: '03/20/2019', semester: 'Fall', status: 'In Progress'},
                {code: 'Course Code', credit: 'Credit Hours', days: 'M|T|F', times: '', date: '04/17/2019', semester: 'Winter', status: 'In Progress'},
                {code: 'Course Code',  credit: 'Credit Hours', days: 'M|T|F', times: '', date: '01/01/2017', semester: 'Fall', status: 'Completed'},
                {code: 'Course Code', credit: 'Credit Hours', days: 'M|T|F', times: '', date: '03/20/2019', semester: 'Fall', status: 'In Progress'},
                {code: 'Course Code', credit: 'Credit Hours', days: 'M|T|F', times: '', date: '04/17/2019', semester: 'Winter', status: 'In Progress'},
                {code: 'Course Code',  credit: 'Credit Hours', days: 'M|T|F', times: '', date: '01/01/2017', semester: 'Fall', status: 'Completed'},
                {code: 'Course Code', credit: 'Credit Hours', days: 'M|T|F', times: '', date: '03/20/2019', semester: 'Fall', status: 'In Progress'},
                {code: 'Course Code', credit: 'Credit Hours', days: 'M|T|F', times: '', date: '04/17/2019', semester: 'Winter', status: 'In Progress'},
                {code: 'Course Code',  credit: 'Credit Hours', days: 'M|T|F', times: '', date: '01/01/2017', semester: 'Fall', status: 'Completed'},
                {
                    code: 'Course Code',
                    credit: 'Credit Hours',
                    days: 'T|TH|S',
                    times: '',
                    date: '03/21/2019',
                    semester: 'Spring',
                    status: 'Completed'
                },
                {
                    code: 'Course Code',
                    credit: 'Credit Hours',
                    days: 'M|T|F',
                    times: '',
                    date: '03/21/2019',
                    semester: 'Spring',
                    status: 'Incomplete'
                }
            ],
            finance: [
                {code: 'Course Code', description: 'School Fees', payment: '',status: 'In Progress'},
                {code: 'Course Code', description: 'School Fees', payment: '', status: 'In Progress'},
                {code: 'Course Code',  description: 'Book Purchase', payment: '', status: 'Completed'},
                {
                    code: 'Course Code',
                    description: 'Book Purchase',
                    payment: '',
                    status: 'Completed'
                },
                {
                    code: 'Course Code',
                    description: 'School Fees',
                    payment: '',
                    status: 'Incomplete'
                }
            ]
        }
    }    
}
</script>

<style scoped>
.divider {
    border-bottom: 2px solid lightgray;
    width: 65%;
    margin: 6px 0px;
}

.divider div,
.divider h3,
.span {
    display: inline-block;
}

.span {
    margin-left: 30%;
}

.table {
    width: 64%;
    margin-top: 30px;
}

.blue--text {
    font-size: 24px;
}

.span-f {
    margin-left: 15%;
}

.previous {
    display: absolute;
    left: 60%;
    height: 80px !important;
    width: 15.6rem !important;
    border-radius: 10px !important;
}
</style>