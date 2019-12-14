<template>
    <div class="upComing">
        
        <v-card flat class="not-card ma-4 pl-6">
            <h3 class="d-inline-block mr-12">Up Coming</h3>
            <v-btn text class="orange--text d-inline-block pa-3" to="/calendar">View Calendar</v-btn>
            <v-divider></v-divider>
            <p class="grey--text">Nothing for the next week</p>

            <v-btn depressed width="450" to="/all-courses" height="70" dark color="orange" class="d-block mb-2 pt-6">View Courses</v-btn>
            <v-btn depressed width="450" to="/instructor/students" height="70" dark color="orange" class="d-block pt-6 mb-2">View Students</v-btn>
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