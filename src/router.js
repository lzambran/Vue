import Vue from 'vue'
import Router from 'vue-router'
import  Home from './views/Home.vue'
import login from './views/Auth/login.vue'
import Registro from './views/Auth/registro.vue'
import Dashboard from './views/Dashboard.vue'
import firebase from  'firebase'
import Admin  from './views/Admin.vue'
import Products from "./views/Products.vue";



Vue.use(Router)

const router = new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        
        {
            path:'/login',
            name: 'login',
            component: login
        },
        {
            path: '/registro',
            name: 'registro',
            component: Registro
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: Dashboard,
            meta: {
                requireAuth: true
            } 
        },
        {
            path: "/admin",
            name: "admin",
            component: Admin,
            meta: { requiresAuth: true },
            children:[
              
              {
                path: "products",
                name: "products",
                component: Products
              },
              
            ]
          },
        
    ]
});

router.beforeEach((to, from, next) => {
    if(to.matched.some(ruta => ruta.meta.requireAuth)){
        const user = firebase.auth().currentUser;
        if(user){
            next();
        } else {
            next({
                name: 'login'
            })
        }
    }else {
        next();
    }
})
router.beforeEach((to, from, next) => {

    const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
    const currentUser = firebase.auth().currentUser
  
    if (requiresAuth && !currentUser) {
        next('/')
    } else if (requiresAuth && currentUser) {
        next()
    } else {
        next()
    }
  })

export default router;