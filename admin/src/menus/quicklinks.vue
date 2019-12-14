<template>
    <div class="quicklinks">
        <v-container fluid class="card-container">
                <h3 class="pl-5">Quicklinks</h3>
                <v-row>
                    <v-col cols="12">
                        <v-row class="pl-5">
                            <v-card flat color="green" class="ma-3" @click="select('students')"> 
                                <v-card-title>
                                    Manage students
                                </v-card-title>
                            </v-card>

                            <v-card flat color="orange" class="ma-3" @click="select('teachers')"> 
                                <v-card-title>
                                    Manage<br>Teachers
                                </v-card-title>
                            </v-card>

                            <v-card flat color="pink" class="ma-3" @click="select('schools')"> 
                                <v-card-title>
                                    Manage Schools
                                </v-card-title>
                            </v-card>

                            <v-card flat color="blue" class="ma-3" @click="select('courses')"> 
                                <v-card-title>
                                    Manage Courses
                                </v-card-title>
                            </v-card>
                        </v-row>
                    </v-col>
                </v-row>
            </v-container>
    </div>
</template>

<script>

export default {

    methods: {
        select: function(person) {
            if(person == 'students') {
                window.location.href = 'manage_students'
            }else if(person == 'teachers') {
                window.location.href = 'manage_teachers'
            }else if(person =='schools') {
                window.location.href = 'manage_schools'
            }else if(person == 'courses') {
                window.location.href = 'manage_courses'
            }
            
        }
    },
}
</script>

<style scoped> 

.ma-3 {
    width: 210px;
    height: 200px;
    display: flex;
    align-items: flex-end;
    color: white;
    font-size: 20px !important;
} 

</style>