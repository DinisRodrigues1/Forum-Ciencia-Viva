<template>
  <div class="register">
    
    <div class="mx-auto"><h2>Registo</h2></div>
    <div>
    <b-form class="form" @submit="onSubmit" @reset="onReset">
      <b-form-group id="nome_user"
                    label="Nome:"
                    label-for="nome_user"
                    >
        <b-form-input id="nome_user"
                      type="text"
                      v-model="form.nome_user"
                      required
                      placeholder="Insira o seu Nome">
        </b-form-input>
      </b-form-group>
      <b-form-group id="username"
                    label="Username:"
                    required
                    label-for="inputuser">
        <b-form-input id="username"
                      type="text"
                      v-model="form.username"
                      required
                      placeholder="Insira o seu Username">
        </b-form-input>
        </b-form-group>
        <b-form-group id="email"
                    label="E-mail:"
                    required
                    label-for="email_user">
        <b-form-input id="email"
                      type="text"
                      v-model="form.email"
                      required
                      placeholder="Insira o seu E-mail">
        </b-form-input>
        </b-form-group>
        <b-form-group id="password"
                    label="Palavra-passe"
                    required
                    label-for="password">
        <b-form-input id="password"
                      type="password"
                      v-model="form.password_hash"
                      required>
        </b-form-input>
        </b-form-group>
        <b-form-group id="ficheiroimg"
                      label="Fotografia do Utilizador"
                      label-for="imagem_user">      
        <b-form-file accept=".jpg, .png, .jpeg" @change="onFileChanged" v-model="form.foto" :state="Boolean(form.foto)" ref="fileinput" 
        placeholder="Escolha um ficheiro"></b-form-file>
        <div class="mt-3">Ficheiro selecionado: {{form.foto && form.foto.name}}</div>
        </b-form-group>
        <b-form-group id="datanasc"
                    label="Data de nascimento"
                    label-for="data_nasc"
                    >
        <b-form-input id="datanasc"
                      type="text"
                      placeholder= "YYYY-MM-DD"
                      v-model="form.data_nasc"
                      required>
        </b-form-input>
        </b-form-group>              
        <b-form-group></b-form-group>
      <b-form-group id="preferencias"
                    label="Preferências Ciêntificas">
        <b-form-checkbox-group stacked v-model="form.preferencias" id="prefs">
          <b-form-checkbox v-model="form.pref1" value="Fisica">Física</b-form-checkbox>
          <b-form-checkbox v-model="form.pref2" value="Quimica">Quimica</b-form-checkbox>
          <b-form-checkbox v-model="form.pref3" value="Biologia">Biologia</b-form-checkbox>
          <b-form-checkbox v-model="form.pref4" value="Matematica">Matemática</b-form-checkbox>
          <b-form-checkbox v-model="form.pref5" value="Robotica">Robótica</b-form-checkbox>
          <b-form-checkbox v-model="form.pref6" value="Geologia">Geologia</b-form-checkbox>
        </b-form-checkbox-group>
    
      </b-form-group>
      <b-form-group id="descricao"
                    label="Descrição"
                    label-for=descricao_user
                    placeholder="Uma descrição do utilizador">
      <b-form-textarea id="desc_user"
                       v-model="form.desc_user"
                       placeholder="Escreva algo sobre si..."
                       :rows="3"
                       :max-rows="6">
      </b-form-textarea>
      </b-form-group>    
      <b-form-group>
          <b-form-checkbox id="checkbox1"
                     v-model="form.status"
                     value="accepted"
                     unchecked-value="not_accepted">
      Eu aceito os termos de uso.
    </b-form-checkbox>
      </b-form-group>                           
      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
  </div>
</template>

<script>
    export default {
        name: 'Register',
        data () {
            return {
                form: {
                preferencias: [],
                pref1: '',
                pref2: '',
                pref3: '',
                pref4: '',
                pref5: '',
                pref6: '',
                nome_user: '',
                username: '',
                foto: null,
                email: '',
                password_hash: '',
                desc_user: '',
                data_nasc: ''
            }
            }
           
        },
        methods: {
            onFileChanged(event){
                this.foto = event.target.files[0];
            },
            onSubmit (evt) {
                if(!this.form.nome_user || !this.form.username || !this.form.email || !this.form.password_hash || !this.form.desc_user){
                    alert('Por favor preencha todos os campos')
                }else{
                    let newUser = {
                        nome_user: this.form.nome_user,
                        username: this.form.username,
                        email: this.form.email,
                        dat_nasc: this.form.data_nasc,
                        password_hash: this.form.password_hash,
                        foto: this.form.foto.name,
                        ficheiro: this.form.foto,
                        descricao: this.form.desc_user,
                        //preferencias: this.form.preferencias
                    };
                        (this.$http.post('http://dbprojeto/api/user/register', newUser)
                        .then(this.$http.post('http://dbprojeto/api/upload', this.foto))
                        
                            .then(function(response){
                               this.$router.push({path: '/', query: {alert: "Conta Criada"}})
                            }));
                    evt.preventDefault();
                    //console.log(this.form.preferencias)
                }
                evt.preventDefault();
            },
        onReset (evt) {
      evt.preventDefault();
      /* Reset our form values */
      this.form.email = '';
      this.form.nome_user = '';
      this.form.username = '';
      this.form.password_hash = '';
      this.$refs.fileinput.reset();
      this.form.preferencias = [];
      this.form.desc_user = '';
      this.form.data_nasc = '';
      this.form.status = '';
      
      /* Trick to reset/clear native browser form validation state */
      this.show = false;
      this.$nextTick(() => { this.show = true });
         }
        }
    }
    </script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.form{
    margin: 5%
}
.mx-auto{
    padding-top: 18%;
    padding-left: 4%;
}
</style>
