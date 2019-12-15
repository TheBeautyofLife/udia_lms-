<template>
    <div class="teacher_list">        
        <v-col cols="12">
            <v-row class="pl-5">
                <v-card flat class="grey ma-3" @click="select()"
                v-for="teacher in teachers" :key="teacher.name">
                    <v-img :src="teacher.image" style="height: 200px; width: 100px" class="image">
                        <v-card-subtitle class="title" @click="select()">
                            {{ teacher.name }}
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
        teachers: [
        {
            image: '/teacher.jpeg',
            name: 'Lorem, ipsum',
        },
        {
            image: '/teacher1.jpeg',
            name: 'Lorem, ipsum'
        },
        {
            image: '/teacher2.jpeg',
            name: 'Lorem, ipsum'
        },
        {
            image: '/teacher3.jpeg',
            name: 'Lorem, ipsum'
        },
        {
            image: '/teacher4.jpeg',
            name: 'Lorem, ipsum'
        },
        {
            image: '/teacher5.jpeg',
            name: 'Lorem, ipsum'
        },
        {
            image: 'teacher6.jpeg',
            name: 'Lorem, ipsum'
        },

    ],
    }),

    methods: {
        select: () => {
            window.location.href = 'teacher_details'           
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
    width: 210px;
}

</style>