<template>
    <div class="users">
        <h2>Users</h2>
       <alert v-if="alert" v-bind:message="alert"/>
        <input class="form-control" placeholder="Digite o username" v-model="filterInput"><br/>
        <b-button class="button-add" variant="outline-success" v-bind:to="'/add'">Adicionar Utilizador</b-button>

      <!--  <b-table class="table" 
            :sort-by.sync="sortBy"
            :sort-desc.sync="sortDesc"
            small
            fixed
            striped
            responsive
                    >

       </b-table>  WORK ON THIS TABLE STUFF -->

       <table class="table table-striped table-responsive table-sm">
            <thead>
            <tr>
                <th scope="col">Nome</th>
                <th scope="col">Username</th>
                <th scope="col">E-mail</th>
                <th scope="col">Perfil</th>
                <th scope="col"></th>
            </tr>
            </thead>
            <tbody>
                <tr v-for="user in filterBy(users, filterInput)">
                    <td>{{user.nome_user}}</td>
                    <td>{{user.username}}</td>
                    <td>{{user.email}}</td>
                    <td>{{user.perfis_id_perfis}}</td>
                    <td><b-button variant="outline-primary" v-bind:to="'/users/'+user.id_user">Ver</b-button></td>
                </tr>
            </tbody>
        </table>
        </div>

      <!--    <b-container fluid>
     User Interface controls 
    <b-row>
      <b-col md="6" class="my-1">
        <b-form-group horizontal class="mb-0">
        IMPORTANT    <b-input-group>
            <b-form-input v-model="filter" placeholder="Procurar Utilizador" />
            <b-input-group-append>
              <b-btn :disabled="!filter" @click="filter = ''">Limpar</b-btn>
            </b-input-group-append>
        IMPORTANT  </b-input-group>
        </b-form-group>
      </b-col>
    </b-row>

     Main table element 
    <b-table show-empty
             :items="fetchUsers"
             :fields="fields"
             :current-page="currentPage"
             :per-page="perPage"
             :filter="filter"
             :sort-by.sync="sortBy"
             :sort-desc.sync="sortDesc"
             @filtered="onFiltered"
             
             
    >
      <template slot="nome" slot-scope="row"></template>
      <template slot="Username" slot-scope="row"></template>
      <template slot="email" slot-scope="row"></template>
      <template slot="perfil" slot-scope="row"><?'Admin':'Utilizador'}}</template>
      <template slot="detalhes" slot-scope="row">
        <b-button variant="outline-primary" size="sm" @click.stop="row.toggleDetails">
          Ver detalhes
        </b-button>
      </template>
      <template slot="row-details" slot-scope="row">
      </template>
    </b-table>

    <b-row>
      <b-col md="6" class="my-1">
        <b-pagination :total-rows="totalRows" :per-page="perPage" v-model="currentPage" class="my-0" />
      </b-col>
    </b-row>

  </b-container>
    </div> -->
</template>

<script>
/**
import alert from './alert';
export default {
  name: 'users',
  data () {
    return {
      items: [],
      alert: '',
      fields: [
        { key: 'nome', sortable: true, sortDirection: 'desc' },
        { key: 'Username', sortable: true, sortDirection: 'desc' },
        { key: 'email', sortable: true, 'class': 'text-center' },
        { key: 'perfil' },
        { key: 'detalhes'}
      ],
      currentPage: 1,
      perPage: 5,
      totalRows: items.length,
      sortBy: null,
      sortDesc: false,
      sortDirection: 'asc',
      filter: null,
    }
  },
  computed: {
    sortOptions () {
      // Create an options list from our fields
      return this.fields
        .filter(f => f.sortable)
        .map(f => { return { text: f.label, value: f.key } })
    }
  },
  methods: {
    onFiltered (filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length
      this.currentPage = 1
    },
    fetchUsers(ctx){
    let params = '?page=' + ctx.currentPage
     
                this.$http.get('http://dbprojeto/api/users' + params)
                    .then(function(response){
                        const objstr = JSON.stringify(response.body);
                        let items = JSON.parse(objstr);
                        console.log(items);
                    })
            },
  },
    created: function(){
              if(this.$route.query.alert){
              this.alert = this.$route.query.alert;
            }
            this.fetchUsers();
        },
       
    components: {
       alert
        }
}
*/
 import alert from './alert';
    export default {
        name: 'users',
        data () {
            return {
                users: [],
                alert: '',
                filterInput: ''
            }
        },
        methods: {
            fetchUsers(){
                this.$http.get('http://dbprojeto/api/users')
                    .then(function(response){
                        const objstr = JSON.stringify(response.body);
                        this.users = JSON.parse(objstr);
                    })
            },
        
        filterBy(list, value){
            value = value.charAt(0).toUpperCase() + value.slice(1);
            return list.filter(function(user){
                return user.username.indexOf(value) > -1; 
            });
        }
        },
        created: function(){
            if(this.$route.query.alert){
                this.alert = this.$route.query.alert;
            }
            this.fetchUsers();
        },
       
        components: {
            alert
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2{
  margin-top: 18%;
}
.button-add{
  margin-bottom: 7%;
}
</style>
