<template>
  <div class="home">
    <dheader />
    
    <!-- flex wrapper -->
    <div class="wrapper d-flex justify-lg-space-between">
        <div class="snackbar">
            <snackbar />
        </div>

        <div class="sidebar">
           <sidebar /> 
        </div>
    

        <div class="main_content">
            <div class="divider">
                <v-breadcrumbs :items="items" :divider="divider" class="breadcrumb">
                    <template v-if="customDiv" v-slot:divider>
                        <v-icon>mdi-chevron-right</v-icon>
                    </template>
                </v-breadcrumbs>
            </div>
            <h2 class="display-2 mb-3">Course Introduction</h2>
            <v-divider></v-divider>
            <p class="subtitle-1 mt-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore reiciendis alias at veniam voluptatibus, illum aspernatur cumque molestiae illo eaque commodi tenetur. Maxime, dolor? Architecto, quibusdam officia? Excepturi, incidunt repellendus vero cumque nulla obcaecati quae placeat natus ipsum amet aspernatur culpa accusantium, consequuntur minus voluptatibus. Distinctio pariatur blanditiis enim illum molestiae esse repellat debitis voluptatum dignissimos expedita, voluptatibus delectus rerum obcaecati possimus porro illo mollitia est quasi ratione eum ab maiores saepe beatae vero! Error quam enim dolores eos a.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, vitae neque! Est explicabo esse, reprehenderit officiis ullam blanditiis, sunt sit unde quam repudiandae quisquam quod hic odit quaerat incidunt ut, omnis debitis ipsam sequi. Quo voluptates eum sapiente? At quam quae dolores doloribus rerum inventore esse eos perferendis perspiciatis, omnis voluptatibus, necessitatibus magnam. Nemo error, reprehenderit, dolores sit labore et quis illo laborum fuga asperiores explicabo reiciendis sapiente accusamus, inventore deleniti. Voluptatem magni laudantium error quae nostrum laborum alias voluptas. Ad nostrum dolorem nemo consequatur, illum doloribus atque architecto odit sapiente officia velit ipsam magnam autem accusamus laudantium aut optio?</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse quaerat earum excepturi ipsa in, eligendi aut omnis accusamus saepe harum minus id, quae corrupti alias sapiente fuga porro? Fuga quas blanditiis animi veniam culpa nesciunt explicabo atque quibusdam, quidem voluptas sunt iure, ducimus similique harum pariatur labore corporis, incidunt officia sint? Inventore qui iusto ex non, praesentium earum aspernatur facilis officiis doloribus nisi? Error, consectetur unde sapiente eligendi repellendus nihil.</p>
            
        </div>

        <div class="notification">
            <rightNote />
        </div>
    </div>
  </div>
</template>

<script> 
import dheader from '../components/dheader'
import rightNote from '../components/notifications2'
import snackbar from '../components/snackbar'
import sidebar from '../components/sidebar'

  export default {
      components: {
          dheader,
          rightNote,
          snackbar,
          sidebar
      },

       data: () => ({
        items: [
            {
                text: 'Dashboard',
                disabled: false,
                href: '/',
            },
            {
                text: 'Home',
                disabled: true,
                href: '#',
            }
        ],

        divider: '>',
        large: false,
        customDiv: false
    })
  }
</script>

<style scoped>
.snackbar {
    height: 100vh;
}

.sidebar {
    position: relative;
    height: 100%;
    width: 70px;
    padding: 100px 0;
    font-size: 25px;    
}

.main_content {
    padding: 30px;
    width: 55%;
    position: relative;
    left: 7%;
    margin: 30px 80px;
} 

.notification {
    position: relative;
}

</style>