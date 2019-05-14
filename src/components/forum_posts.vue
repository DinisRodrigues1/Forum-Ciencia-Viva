<template>
<div class="forum">
<h2>{{areas.nome_area}}</h2>
<ol class="breadcrumb">
  <li class="breadcrumb-item"><a href="/forum">Fórum</a></li>
  <li class="breadcrumb-item active">{{infoArea}}</li>
</ol>
<div class='content' v-for="post in posts" :key="post">
    <ul class="list-unstyled">
  <b-media tag="li" >
    <b-img class="image-color" slot="aside" blank blank-color="#bac" width="64" alt="placeholder"/>
    <router-link v-bind:to="'/forum/'+areas.id_area+'/thread/'+post.id_post"><h5 class="mt-0 mb-1">{{post.titulo}}</h5></router-link>
    <small>{{post.data_post}}</small>
  </b-media>
  </ul>
  </div>
  <ul class="list-unstyled" id="two">
  <b-form @submit="addThread">
  <b-form-group id="textarea1">
    <b-input id='input' type="text"
    placeholder="Título" v-model="form.title">
    </b-input>      
    <b-form-textarea v-model="form.txt"
                     placeholder="Comece um tópico"
                     :rows="3"
                     :max-rows="6"
                     >
    </b-form-textarea>
    <b-button id='submitbtn' type="submit" variant="outline-info">Submeter</b-button>
  </b-form-group>  
  </b-form>  
</ul>
</div>

</template>

<script>
    import alert from './alert'
    export default {
    name: 'Forum',
        data () {
            return {
                areas: [],
                infoArea: '',
                alert: '',
                form: {
                txt: '',
                title: ''
                },
                posts: [],
                postsid: ''
                  
            }
            
        },
        methods: {
             fetchAreas(id_area){
                this.$http.get('http://dbprojeto/api/areas/'+id_area)
                    .then(function(response){
                        const objstr = JSON.stringify(response.body);
                        this.areas = JSON.parse(objstr);
                        this.areas = this.areas[0];
                        this.infoArea = this.areas.nome_area;
                       
                    })
            },
             fetchPosts(id_area){
                this.$http.get('http://dbprojeto/api/threads/'+id_area)
                    .then(function(response){
                        const objstr = JSON.stringify(response.body);
                        this.posts = JSON.parse(objstr);
                        
                    
                        
                    })
        },
            addThread(e){
                if(!this.form.title || !this.form.txt){
                    alert('Por favor preencha todos os campos')
                }else{
                    let newThread = {
                        titulo: this.form.title,
                        post: this.form.txt,
                        id_area: this.areas.id_area
                    };
                        this.$http.post('http://dbprojeto/api/threads/add', newThread)
                            .then(function(response){
                               this.$router.push({path: '/forum', query: {alert: "Thread Criado!"}})
                            });
                    e.preventDefault();
                }
                e.preventDefault();
            }
        },
        created: function(){
            this.fetchPosts(this.$route.params.id_area);
            this.fetchAreas(this.$route.params.id_area);
        
            
    }
    
    
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2{
    margin-left: 4%;
    margin-top: 17%;
    margin-bottom: 3%;
    font-weight: bold;
    color: #f1c761;
}
.move{
    margin-top: 4%;
}
.content{
    margin: 3%;
}
#textarea1{
    margin-top: 10%;
}
#submitbtn{
    margin-top: 2%;
}
#input{
    margin-bottom: 2%;
}

#two{
    margin-top: 40%;
}
</style>