<template>
    <div class="update">
        <h2>Atualizar Utilizador</h2>
        <alert v-if="alert" v-bind:message="alert"/>
        <form v-on:submit="updateUser">
            <div class="form-group">
                <label>First Name</label>
                <input type="text" class="form-control" placeholder="Nome" v-model="user.nome_user">
            </div>
            <div class="form-group">
                <label>Username</label>
                <input type="text" class="form-control" placeholder="Username" v-model="user.username">
            </div>
            <div class="form-group">
                <label>Email</label>
                <input type="text" class="form-control" placeholder="Email" v-model="user.email">
            </div>
            <div class="form-group">
                <label>Data de Nascimento</label>
                <input type="text" class="form-control" placeholder="Data de Nascimento" v-model="user.dat_nasc">
            </div>
            <div class="form-group">
                <label>Foto</label>
                <input type="text" class="form-control" placeholder="Foto" v-model="user.foto">
            </div>
             <div class="form-group">
                <label>Perfil</label>
                <input type="text" class="form-control" placeholder="Perfil" v-model="user.perfis_id_perfis">
            </div>
            <div class="form-group">
                <label>Descrição</label>
                <input type="text" class="form-control" placeholder="Descrição" v-model="user.descricao">
            </div>
            <button type="submit" class="btn btn-success">Submit</button>
        </form>
    </div>
</template>

<script>
    import alert from './alert'
    export default {
        name: 'updateUser',
        data () {
            return {
                user: {},
                alert: ''
            }
        },
        methods: {
            fetchUser(id_user){
                this.$http.get('http://dbprojeto/api/users/'+id_user)
                    .then(function(response){ 
                        const objstr = JSON.stringify(response.body);
                        this.user = JSON.parse(objstr);
                        this.user = this.user[0];
                        console.log(this.user)
                    });
            },
            updateUser(e){
                if(!this.user.nome_user || !this.user.username || !this.user.email){
                    this.alert = 'Por favor preencha todos os campos.';
                }else{
                    
                    let updUser = {
                        nome_user: this.user.nome_user,
                        username: this.user.username,
                        email: this.user.email,
                        dat_nasc: this.user.dat_nasc,
                        foto: this.user.foto,
                        perfis_id_perfis: this.user.perfis_id_perfis,
                        descricao: this.user.descricao,
                    };
            
                        this.$http.put('http://dbprojeto/api/users/update/'+this.$route.params.id_user, updUser)
                            .then(function(response){
                               this.$router.push({path: '/users', query: {alert: "Utilizador Modificado"}})
                            });
                    e.preventDefault();
                }
                e.preventDefault();
                
            }
        },
        created: function(){
            this.fetchUser(this.$route.params.id_user);
        },
        components:{
            alert
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>