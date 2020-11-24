import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginView from '../views/LoginView.vue'
import firebase from 'firebase';

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    meta:{
      home: true
    },
    component: LoginView
  },
  {
    path: '/',
    redirect: 'Login',
  },
  {
    path: '*',
    redirect: 'Login',
  },
  {
    path: '/home',
    name: 'Home',
    meta:{
      login: true
    },
    component: () => import('../views/HomeView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from,next)=>{
  var user = firebase.auth().currentUser;
  let authRequired = to.matched.some(ruta => ruta.meta.home)

  if (!user && !authRequired) {
    next('login');
     alert('Debes loguearte primero!')
  }else if(user && authRequired){
    next('home');
    alert('Deslogueate!')
  }else {
    next()  
  }
})

export default router
