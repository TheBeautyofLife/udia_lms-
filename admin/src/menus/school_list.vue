<template>
    <div class="school_list">
        <v-row class="card-row">
            <v-col cols="12">
                <v-row class="pl-5">
                    <v-card flat color="green" class="ma-3" @click="select()"> 
                        <v-card-title>
                            School of <br>Art & Design
                        </v-card-title>
                    </v-card>

                    <v-card flat color="orange" class="ma-3" @click="select('business')"> 
                        <v-card-title>
                            School of <br>Business
                        </v-card-title>
                    </v-card>

                    <v-card flat color="pink" class="ma-3" @click="select('engineering')"> 
                        <v-card-title>
                            School of <br>Engineering
                        </v-card-title>
                    </v-card>

                    <v-card flat color="blue" class="ma-3" @click="select('science')"> 
                        <v-card-title>
                            School of <br>Health Science
                        </v-card-title>
                    </v-card>

                    <v-card flat color="blue" class="ma-3" @click="select('humanities')"> 
                        <v-card-title>
                            Humanities & <br>Social Sciences
                        </v-card-title>
                    </v-card>

                    <v-card flat color="purple" class="ma-3" @click="select('humanities')"> 
                        <v-card-title>
                            Information &<br>Technology
                        </v-card-title>
                    </v-card>
                </v-row>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
   
    methods: {
        select() {
            window.location.href = 'school_name'
        }
    }
} 
</script>

<style scoped>
.ma-3 {
    width: 13.1rem;
    height: 12.5rem;
    display: flex;
    align-items: flex-end;
    color: white;
    font-size: 40px !important;
}

.card-row {
    width: 90%;
}
</style>