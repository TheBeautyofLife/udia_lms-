<template>
    <div class="upComing">
        <v-card flat class="not-card ma-4 pl-6">
            <v-layout row justify-start align-center>
                <h3 class="mr-4 ml-4">Up Coming</h3>
                 <v-btn text small color="#038A99" to="/instructor/calendar">View Calendar</v-btn>
            </v-layout>
            <v-divider></v-divider>
            <p class="grey--text">Nothing for the next week</p>

            <v-btn depressed width="450" to="/instructor/students" height="50" dark color="#038A99" class=" mb-2">View Students</v-btn>
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
}
</style>