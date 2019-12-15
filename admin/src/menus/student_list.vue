<template>
    <div class="student_list">
        
            <v-col cols="12">
                <v-row class="pl-5">
                    <v-card 
                    flat 
                    class="ma-3" 
                    @click="select()"
                    v-for="student in students" :key="student.name"> 
                        <v-img :src="student.image" style="height: 200px; width: 100px" class="image">
                            <v-card-subtitle class="title">
                                {{ student.name }}
                            </v-card-subtitle>
                        </v-img>
                        
                    </v-card>                    
                </v-row>
            </v-col>
        
    </div>
</template>

<script>

export default {
    data: () => ({
        students: [
        {
            image: '/student.jpg',
            name: 'Lorem, ipsum',
        },
        {
            image: '/student1.jpg',
            name: 'Lorem, ipsum'
        },
        {
            image: '/student2.jpg',
            name: 'Lorem, ipsum'
        },
    ],
    }),

    methods: {
        select: () => {
            window.location.href = 'student_details'           
        }
    }

}
</script>

<style scoped>
.ma-3 {
    width: 210px;
    height: 200px;
    display: flex;
    color: white;
    font-size: 40px !important;
    border-radius: 5px;
}

.image {
    display: flex;
    align-items: flex-end;
    width: 100%;
}
</style>