<template>
  <div class="user_management">
    <dheader />
    
    <!-- flex wrapper -->
    <div class="wrapper">
        <div class="snackbar">
            <snackbar />
        </div>    

        <div class="main_content">

            <div class="divider">
                <v-breadcrumbs :items="items" :divider="divider" class="breadcrumb">
                    <template v-if="customDiv" v-slot:divider>
                        <v-icon>mdi-chevron-right</v-icon>
                    </template>
                </v-breadcrumbs>
            </div>
            
            <!-- import the quicklinks menu here -->
            <quicklinks />
        </div>

        <!-- notifications -->
        <div class="notification">
            <notifycard />
        </div>
    </div>
  </div>
</template>

<script>
import dheader from '../components/dheader.vue'
import quicklinks from '../menus/quicklinks.vue'
import snackbar from '../components/snackbar'

export default {
    components: {
        dheader,
        quicklinks,
        snackbar
    },

    data: () => ({
        items: [
            {
            text: 'Home',
            disabled: false,
            href: './dashboard',
            },
            {
            text: 'User Management',
            disabled: true,
            href: '#',
            },
        ],

        divider: '>',
        large: false,
        customDiv: false
    }),

}
</script>


<style scoped>
.wrapper {
    display: flex;
    justify-content: space-between;
}

.snackbar {
    height: 95vh;
}

.main_content {
    width: 100%;
    padding: 30px;
    margin: 30px 80px;
}

.ml-12 {
    width: 70%;
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 3px;
}

.divider {
    border-bottom: 1px solid lightgray;
    width: 70%;
    margin: 50px 35px;
 }

.card {
    width: 210px;
    height: 200px;
    display: flex;
    align-items: flex-end;
    color: white;
    font-size: 20px !important;
}

</style>