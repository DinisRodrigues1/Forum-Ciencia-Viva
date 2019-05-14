<template>
<div class='post_detail'>
    <h2>{{areas.nome_area}}</h2>
    <ol class="breadcrumb">
  <li class="breadcrumb-item"><a href="/forum">Fórum</a></li>
  <li class="breadcrumb-item"><a href="/forum">{{infoArea}}</a></li>
  <li class="breadcrumb-item active">{{infoPost}}</li>
</ol>
<b-media>
    <div class='content' v-for="post in posts" :key="post">

  <b-media>
    <b-img slot="aside" blank blank-color="#ccc" width="64" alt="placeholder" />
    <h5 class="mt-0">{{post.titulo}}</h5>
    <p>
      {{post.post}}
    </p>
  </b-media>
 </div> 
 </b-media>
 <ul class="list-unstyled" id="two">
  <b-form @submit="addReply">
  <b-form-group id="textarea1">   
    <b-form-textarea v-model="form.txt"
                     placeholder="Escreva uma resposta"
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
    name: 'Post',
        data () {
            return {
                areas: [],
                infoArea: '',
                infoPost: '',
                alert: '',
                form: {
                txt: ''
                },
                posts: [],
                                  
            }
            
        },
        methods: {
           fetchAreas(id_area){
                this.$http.get('http://dbprojeto/api/areas/'+id_area)
                    .then(function(response){
                        const objstr = JSON.stringify(response.body);
                        this.areas = JSON.parse(objstr);
                        this.areas = this.areas[0]
                        this.infoArea = this.areas.nome_area;
                       
                    })
            },
            fetchPosts(id_post){
                this.$http.get('http://dbprojeto/api/thread/'+id_post)
                    .then(function(response){
                        const objstr = JSON.stringify(response.body);
                        this.posts = JSON.parse(objstr)
                        console.log(this.posts);
                        this.infoPost = this.posts[0].titulo;
                        console.log(this.infoPost);
                    })
        },
        
            addReply(e){
                if(!this.form.txt){
                    alert('Por favor preencha todos os campos')
                }else{
                    let newAnswer = {
                        post: this.form.txt,
                        id_post: this.posts.id_post
                    };
                        this.$http.post('http://dbprojeto/api/threads/reply', newAnswer)
                            .then(function(response){
                               this.$router.push({path: '/forum', query: {alert: "Resposta Enviada!"}})
                            });
                    e.preventDefault();
                }
                e.preventDefault();
            }
        },
        created: function(){
            this.fetchPosts(this.$route.params.id_post);
            this.fetchAreas(this.$route.params.id_area);
            
    },
    
    
    
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