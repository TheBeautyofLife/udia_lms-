<template>
    <div class="departments">
        <v-container fluid class="card-container">
                <v-row>
                    <v-col cols="12">
                        <v-row class="pl-5">
                            <v-card flat color="green" class="card ma-3" @click="select()"> 
                                <v-card-title>
                                    Languages
                                </v-card-title>
                            </v-card>

                            <v-card flat color="orange" class="ma-3" @click="select()"> 
                                <v-card-title>
                                    Law
                                </v-card-title>
                            </v-card>

                            <v-card flat color="pink" class="ma-3" @click="select()"> 
                                <v-card-title>
                                   Journalism
                                </v-card-title>
                            </v-card>

                            <v-card flat color="blue" class="ma-3" @click="select()"> 
                                <v-card-title>
                                    Diplomacy and<br>Interstudies
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
    components: {
    },

    methods: {
        select: () => {
            window.location.href = 'department_details'
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