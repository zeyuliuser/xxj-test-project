import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
 {
    path: '/',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  // {
  //   path: '/comment',
  //   name: 'comment',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/Comment.vue')
  // },
  {
    path: '/person',
    name: 'person',
    component: () => import(/* webpackChunkName: "about" */ '../views/Person.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
