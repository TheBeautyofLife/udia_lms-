<template>
    <div class="upComing">
        <v-card flat class=" not-card ma-4 pr-8">
           <v-layout row justify-start align-center>
                <h3 class="mr-4 ml-4">Up Coming</h3>
                 <v-btn text small color="#038A99" to="/instructor/calendar">View Calendar</v-btn>
            </v-layout>
            <v-divider></v-divider>
            <p class="grey--text">Nothing for the next week</p>
            <v-icon size="70"></v-icon>
        </v-card>
    </div>

</template>

<script>
export default {
    
}
</script>

<style scoped>
.not-card {
    width: 450px;
}

.orange--text {
  text-transform: capitalize;
  margin-left: 82px;
}
</style>