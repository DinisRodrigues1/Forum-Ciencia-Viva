<template>
  <div class="login">
    <h2>Log in</h2>
    <div class="login-form">
    <b-form inline>   
      <label class="sr-only" for="username">Name</label>
      <b-input class="mb-2 mr-sm-2 mb-sm-0" id="usernamelogin" placeholder="Username" />
      <label class="sr-only" for="password">Username</label>
      <b-input-group left="@" class="mb-2 mr-sm-2 mb-sm-0">
        <b-input id="loginpassword" type="password" placeholder="Palavra-Passe"/>
      </b-input-group>
      <b-button type="submit" variant="outline-info">Entrar</b-button>
    </b-form>
    <br/>
    <p>Ainda não tem conta? <b-link v-bind:to="'/register'">Registe-se</b-link>.</p>
  </div>
  </div>
</template>

<script>
    export default {
        name: 'Login',
        data () {
            return {
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .login-form{
    margin: 5%;
  }
  h2{
    margin-left: 4%;
    padding-top: 18%;
  }
  p{
    margin: 2%;
  }
</style>