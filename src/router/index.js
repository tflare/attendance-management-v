import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Signin from '@/components/Signin.vue'
import firebase from 'firebase';

Vue.use(VueRouter)


const routes = [
  {path: '/', component: Home, meta: { requiresAuth: true } },
  {path: '/signin', component: Signin},
  {
    // 未定義パスへの対応。トップページへリダイレクト
    path: '*',
    redirect: '/signin'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


router.beforeEach((to, from, next) => {
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  let currentUser = firebase.auth().currentUser
  if (requiresAuth) {
    if (!currentUser) {
      next({
        path: '/signin',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
