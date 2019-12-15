<template>
    <v-toolbar class="d-flex justify-end" height="100px">
        <v-toolbar-title class="display-1 mr-12">Student</v-toolbar-title>
        <v-icon color="orange" size="35" class="mr-10">mdi-bell</v-icon>
        <!-- <v-avatar size="70">
            <img src="/student.jpeg" alt="alt">
        </v-avatar>    -->

        <v-menu close-on-click close-on-content-click offset-y>
            <template v-slot:activator="{ on }">
                <v-avatar color="grey" size="80" v-on="on">
                    <v-img src="/img/other/student.jpeg" @click="index = !index"></v-img>
                </v-avatar>
            </template>

            <!-- drop down menu from the admin profile picture -->
            <v-list v-for="(menu, index) in dmenu" :key="index" width="250px" class="dmenu">
                <v-list-item class="ml-n12" :to="menu.link">
                    <v-list-item-title class="ml-12">{{ menu.name }}</v-list-item-title>
                    <v-icon class="mr-12">{{ menu.icon }}</v-icon>
                    <v-list-item-title>{{ menu.title }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
    </v-toolbar>
</template>

<script>
export default {
    data() {
        return {
            dmenu: [
                {name: 'firstName lastName'},
                {icon: 'mdi-account', title: 'Profile', link: '/profile'},
                {icon: 'mdi-settings',title: 'Settings', link: '#'},
                {icon: 'mdi-logout', title: 'Logout', link: '/login'}
            ],
        }
    }
}
</script>

<style scoped>

</style>