<template>
    <div class="add user">
        <h2>Add User</h2>
        <form v-on:submit="addUser">
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
                <input type="text" class="form-control" placeholder="Data de Nascimento" v-model="user.data_nasc">
            </div>
            <div class="form-group">
                <label>Foto</label>
                <input type="text" class="form-control" placeholder="Foto" v-model="user.foto">
            </div>
            <div class="form-group">
                <label>Password</label>
                <input type="password" class="form-control" placeholder="password" v-model="user.password">
            </div>
            <div class="form-group">
                <label>Descrição</label>
                <input type="text" class="form-control" placeholder="Descricao" v-model="user.descricao">
            </div>
            <button type="submit" class="btn btn-success">Submit</button>
        </form>
    </div>
</template>

<script>
    export default {
        name: 'adduser',
        data () {
            return {
                user: {}
            }
        },
        methods: {
            addUser(e){
                if(!this.user.nome_user || !this.user.username || !this.user.email || !this.user.password){
                    alert('Por favor preencha todos os campos')
                }else{
                    let newUser = {
                        nome_user: this.user.nome_user,
                        username: this.user.username,
                        email: this.user.email,
                        dat_nasc: this.user.data_nasc,
                        password: this.user.password_hash,
                        foto: this.user.foto,
                        descricao: this.user.descricao,
                    };
                        this.$http.post('http://dbprojeto/api/users/add', newUser)
                            .then(function(response){
                               this.$router.push({path: '/users', query: {alert: "Utilizador Criado"}})
                            });
                    e.preventDefault();
                }
                e.preventDefault();
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>