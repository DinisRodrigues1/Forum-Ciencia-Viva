<template>
    <div class="userDetails">
        <h3 class="page-header">Detalhes do Utilizador:</h3>
            <b-button variant="outline-warning" v-bind:to="'/update/'+user.id_user">Editar</b-button>
            <b-button variant="outline-danger" v-on:click="deleteUser(user.id_user)">Apagar</b-button>
         <table class="table">
            <thead class="thead-dark">
            <tr>
                <th scope="col">Nome do Utilizador</th>
                <th scope="col">Username</th>
                <th scope="col">E-mail</th>
                <th scope="col">Data de Nascimento</th>
                <th scope="col">Foto</th>
                <th scope="col">Perfil de Utilizador</th>
                <th scope="col">Descrição</th>
                <th scope="col">Preferencias</th>
            
            </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{{user.nome_user}}</td>
                    <td>{{user.username}}</td>
                    <td>{{user.email}}</td>
                    <td>{{user.dat_nasc}}</td>
                    <td>{{user.foto}}</td>
                    <td>{{user.perfis_id_perfis}}</td>
                    <td>{{user.descricao}}</td>
                    <td>{{user.preferencias}}</td>
                </tr>
            </tbody>
        </table>
        <router-link to="/users">Voltar</router-link>
    </div>
</template>

<script>
    export default {
        name: 'userDetails',
        data () {
            return {
                user: []
            }
        },
        methods:{
            fetchUser(id_user){
                this.$http.get('http://dbprojeto/api/users/'+id_user)
                    .then(function(response){ 
                        const objstr = JSON.stringify(response.body);
                        this.user = JSON.parse(objstr);
                        this.user = this.user[0];
                        console.log(this.user)
                    });
            },
            deleteUser(id_user){
                this.$http.delete('http://dbprojeto/api/users/delete/'+id_user)
                    .then(function(response){
                        this.$router.push({path: '/users', query: {alert: 'Utilizador Apagado'}})
                    });
            }
        },
        created: function () {
            this.fetchUser(this.$route.params.id_user);
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>