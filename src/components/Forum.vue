<template>
  <div id="Forum">
    <h2>Fórum</h2>
    <div class="container" v-for="(area, index) in areas" :key="area">
    <router-link v-bind:to="'forum/'+area.id_area"><b-img fluid center class="image-forum" :src="require('../../media/'+images[index]+'.jpg')"/></router-link>
    <div class="bottom-left">
        <h3><strong>{{area.nome_area}}</strong></h3>
    </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'Forum',
        data() {
            return {
                areas: [],
                images: [
                    'biologia2',
                    'fisica',
                    'geologia',
                    'matematica3',
                    'quimica2',
                    'robotica'
                ]

            }

        },
        methods: {
            fetchAreas(){
                this.$http.get('http://dbprojeto/api/areas')
                    .then(function(response){
                        const objstr = JSON.stringify(response.body);
                        this.areas = JSON.parse(objstr);
                        console.log(this.areas);
                    })
            }
            },
        created: function(){
            this.fetchAreas();
            
    }
    }



</script>

<style scoped>
h2{
    margin-left: 4%;
    margin-top: 17%;
    margin-bottom: 3%;
    font-weight: bold;
    color: #f1c761;
}
.image-forum{
    opacity: 0.75;
    margin-bottom: 4%;
}

.container {
    position: relative;
    text-align: center;
    color: darkgray;
    font-weight: bold;
    
}
.bottom-left {
    position: absolute;
    bottom: -5px;
    left: 16px;
    
}
</style>