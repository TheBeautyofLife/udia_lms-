<template>
    <div class="card">
        <v-card outlined class="ml-12" v-for="(notification, index) in notifications" :key="index">
            <v-icon size="55" :color="notification.color">{{notification.avatar}}</v-icon>
            <v-card-text>
                <h2>{{notification.title}}</h2>
                <p>{{notification.text}}</p>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>

export default {

    data: () => ({
        notifications: [
            {avatar: 'mdi-alert-circle', title: 'Error Message', color: 'red', text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. A ut quidem architecto aut commodi ratione necessitatibus cumque similique! Recusandae, corporis'},
            {avatar: 'mdi-email', title: 'Incoming Message', color: 'grey', text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. A ut quidem architecto aut commodi ratione necessitatibus cumque similique! Recusandae, corporis'}
        ],
    })
}
</script>

<style scoped>
.ml-12 {
    width: 75%;
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 3px;
}
</style>