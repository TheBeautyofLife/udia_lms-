<template>
    <div class="courses">
        <v-container fluid class="card-container">
                <v-row>
                    <v-col cols="12">
                        <v-row class="pl-5">
                            <v-card 
                            flat 
                            class="ma-3"
                            v-for="(course, index) in courses"
                            :key="index" 
                            :color="course.color"
                            > 
                                <v-card-title>
                                    {{course.title}}
                                </v-card-title>

                                <v-card-actions>
                                    <v-menu transition="slide-y-transition" bottom offset-y>
                                        <template v-slot:activator="{ on }">
                                            <v-btn icon v-on="on">
                                                <v-icon @click="index = !index">mdi-dots-vertical</v-icon>
                                            </v-btn>
                                        </template>

                                        <!-- drop down menu from the course list -->
                                        <v-list v-for="(menu, index) in hamburger" :key="index">
                                            <v-list-item class="vList" :to="menu.link">
                                                <v-list-item-title class="">{{ menu.name }}</v-list-item-title>
                                                <v-icon class="mr-12">{{ menu.icon }}</v-icon>
                                                <v-list-item-title>{{ menu.title }}</v-list-item-title>
                                            </v-list-item>
                                        </v-list>
                                    </v-menu>
                                </v-card-actions>
                            </v-card>
                        </v-row>
                    </v-col>
                </v-row>
            </v-container>
    </div>
</template>

<script>

export default {
    data() {
        return {
            courses: [
                {title: 'French', color: 'green'},
                {title: 'English', color: 'blue'},
                {title: 'Chinese', color: 'orange'}
            ],

            hamburger: [
                {title: 'French 1', link: '/course_details'},
                {title: 'French 2', link: '#'},
                {title: 'View All', link: '#'}
            ],
        }
    },

    methods: {
        select: () => {
            window.location.href = 'course_details'
        }
    },
}
</script>

<style scoped> 

.ma-3 {
    width: 210px;
    height: 200px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    color: white;
    font-size: 20px !important;
} 

.vList {
    width: 250px;
    margin-left: -38% !important;
}

</style>