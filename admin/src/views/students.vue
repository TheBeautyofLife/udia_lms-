<template>
  <div class="students">
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

            <h4 class="pl-5">Manage listed students</h4>
            <v-row class="card-row">
                <studList />
            </v-row>
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
import studList from '../menus/student_list.vue'
import snackbar from '../components/snackbar'

export default {
    components: {
        dheader,
        studList,
        snackbar
    },

    data: () => ({
        items: [
            {
            text: 'Home',
            disabled: false,
            href: '/dashboard',
            },
            {
            text: 'User Management',
            disabled: false,
            href: '/user_management',
            },
            {
            text: 'Manage Students',
            disabled: false,
            href: '/manage_students',
            },
            {
            text: 'School name',
            disabled: true,
            href: '#',
            }
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
    position: relative;
    border-bottom: 1px solid lightgray;
    margin-top: 65px;
    margin-left: 30px;
 }

 .divider {
    border-bottom: 1px solid lightgray;
    width: 60%;
    margin: 60px 30px;
}

.title {
    font-size: 25px !important;
}

</style>