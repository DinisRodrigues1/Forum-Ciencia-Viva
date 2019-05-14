// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import vueResource from 'vue-resource'
import Users from './components/Users'
import Usersv2 from './components/Usersv2'
import user_profile from './components/user_profile'
import Login from './components/Login'
import add from './components/add'
import update from './components/update'
import erase from './components/erase'
import Forum from './components/Forum'
import forum_posts from './components/forum_posts'
import post_detail from './components/post_detail'
import Register from './components/Register'
import Landingpage from './components/Landingpage'
import userDetails from './components/userDetails'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.use(vueResource);
Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.http.options.crossOrigin = true;

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        {path: '/login', component: Login},
        {path:'/', component: Landingpage},
        {path: '/users', component: Users},
        {path: '/usersv2', component: Usersv2},
        {path: '/add', component: add},
        {path: '/delete', component: erase},
        {path: '/users/:id_user', component: userDetails},
        {path: '/update/:id_user', component: update},
        {path: '/user/profile/:id_user', component: user_profile},
        {path: '/register', component: Register},
        {path: '/forum', component: Forum},
        {path: '/forum/:id_area', component: forum_posts},
        {path: '/forum/:id_area/thread/:id_post', component: post_detail}
       

    ]
});
/* eslint-disable no-new */
new Vue({
    router,
    template: `
    <div id="app">
    <div>
  
  <b-navbar fixed="top" type="dark" variant="dark" toggleable="md">
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav>
        
        <b-nav-item v-bind:to="'/'">Home</b-nav-item>
        <b-nav-item v-bind:to="'/users'">Utilizadores</b-nav-item>
        <b-nav-item v-bind:to="'/forum'">Fórum</b-nav-item>
        <b-nav-item-dropdown text="Dinis Rodrigues">
          <b-dropdown-item v-bind:to="'/user/profile/3'">Perfil</b-dropdown-item>
          <b-dropdown-item>Sair</b-dropdown-item>
        </b-nav-item-dropdown> 
      </b-navbar-nav>
     </b-collapse>
    </b-navbar>    
  </div>
  <router-view></router-view>
  </div>
  `
}).$mount('#app');

