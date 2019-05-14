<template>
    <div class="erase">
        <h2>Delete user</h2>
        <table>
            <thead>
            <tr>
                <th>Nome do Utilizador</th>
                <th>Username</th>
                <th>email</th>
                <th>Data de Nascimento</th>
                <th>foto</th>
                <th>perfil de utilizador</th>
                <th>descricao</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="user in users">
                <td>{{user.nome_user}}</td>
                <td>{{user.username}}</td>
                <td>{{user.email}}</td>
                <td>{{user.dat_nasc}}</td>
                <td>{{user.foto}}</td>
                <td>{{user.perfis_id_perfis}}</td>
                <td>{{user.descricao}}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: 'erase',
        data () {
            return {
                users: []
            }
        },
        methods: {
            fetchUsers(){
                this.$http.delete('http://dbprojeto/api/users')
                    .then(function(response){
                        const objstr = JSON.stringify(response.body);
                        this.users = JSON.parse(objstr);
                    })
            }
        },
        created: function(){
            this.fetchUsers();
        }
       
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
