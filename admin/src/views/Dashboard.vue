<template>
  <div class="dashboard">
    <dheader />
    
    <!-- flex wrapper -->
    <div class="wrapper">
        <div class="snackbar">
            <snackbar />
        </div>    

        <div class="main_content">
            <v-card outlined class="ml-12" v-if="seen">
                <v-avatar  size="50" color="orange" class="notbell">
                    <v-icon color="white">mdi-bell-ring</v-icon>
                </v-avatar>
                <v-card-text>
                    <h2>Lorem ipsum dolor sit.</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A ut quidem architecto aut commodi ratione necessitatibus cumque similique! Recusandae, corporis.</p>
                </v-card-text>
                
                <v-btn icon class="close" @click="seen = !seen">
                    <v-icon >mdi-close</v-icon>
                </v-btn>
            </v-card>

            <div class="divider">
                <v-breadcrumbs :items="items" :divider="divider" class="breadcrumb">
                    <template v-if="customDiv" v-slot:divider>
                        <v-icon>mdi-chevron-right</v-icon>
                    </template>
                </v-breadcrumbs>
            </div>
            <quicklinks />
        </div>

        <div class="notification">
            <notifycard />
        </div>
    </div>
  </div>
</template>

<script>
import dheader from '../components/dheader.vue'
import notifycard from '../components/notifications.vue'
import quicklinks from '../menus/quicklinks.vue'
import snackbar from '../components/snackbar'

export default {
    components: {
        dheader,
        notifycard,
        quicklinks,
        snackbar
    },

    data: () => ({
        seen: true,
        items: [
            {
            text: 'Dashboard',
            disabled: true,
            href: '#'
            }
        ],

        divider: '>',
        large: false,
        customDiv: false
    })
}
</script>


<style scoped>
.wrapper {
    display: flex;
    justify-content: space-between;
}

.snackbar {
    box-sizing: border-box;
    height: 150vh;
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

.close {
    position: absolute;
    right: 4px;
    top: 4px;
}

.divider {
    position: relative;
    border-bottom: 1px solid lightgray;
    margin-top: 65px;
    margin-left: 30px;
 }

 .notification {
     margin-top: 3%;
 }

</style>
