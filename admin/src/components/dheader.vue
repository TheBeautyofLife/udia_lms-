<template>
    <v-toolbar class="toolbar">
        <v-spacer></v-spacer>
         <ul class="names">
            <li class="name">Firstname</li>
            <li class="name">Lastname</li>
        </ul>
        <v-divider vertical class="mt-2"></v-divider>
        <v-icon class="mr-12 ml-12" size="30" color="orange">mdi-bell</v-icon>

        <v-menu close-on-click close-on-content-click offset-y>
            <template v-slot:activator="{ on }">
                <v-avatar color="grey" size="65" class="mt-4" v-on="on">
                    <v-img src="/admin.jpeg" @click="index = !index"></v-img>
                </v-avatar>
            </template>

            <!-- drop down menu from the admin profile picture -->
            <v-list v-for="(menu, index) in dmenu" :key="index" width="250px">
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
                {icon: 'mdi-account', title: 'Profile', link: '/student_detail'},
                {icon: 'mdi-settings',title: 'Settings', link: '/dashboard'},
                {icon: 'mdi-logout', title: 'Logout', link: '/'}
            ],
        }
    }
}
</script>

<style scoped>
.names {
    list-style: none;
    padding-right: 200px;
}

.name {
    display: inline-block;
    padding-left: 5px;
}

.toolbar {
    height: 80px !important;
}
</style>