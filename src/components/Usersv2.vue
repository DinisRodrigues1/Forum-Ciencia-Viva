<template>
<b-table class="table" 
            :sort-by.sync="sortBy"
            :sort-desc.sync="sortDesc"
            :items="fetchUsers"
            :fields="fields"
            small
            fixed
            striped
            responsive>
    <template slot="nome_user" slot-scope="row">
        {{items.nome_user}}
    </template>                    
                    
</b-table>

</template>

<script>
export default {
    name: 'items',
data () {
    return {
      items: [],
      sortBy: 'perfis_id_perfis',
      sortDesc: false,
      fields: [
        { key: 'nome_user', label: 'Nome', sortable: true },
        { key: 'username', label: 'Username' , sortable: true },
        { key: 'email', label: 'Email', sortable: true },
        { key: 'perfis_id_perfis', label: 'perfil'},
        
      ],
      
    }
    
},
methods: {
    fetchUsers(ctx){
        this.$http.get('http://dbprojeto/api/users')
                    .then(function(response){
                        const objstr = JSON.stringify(response.body);
                        this.items = JSON.parse(objstr);
                        this.items = this.items[0]
                        console.log(this.items);
                        
                    })
                
            }
    }
}
</script>
<style scoped>
.table{
    margin-top: 20%;
}
</style>