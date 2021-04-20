import Vue from 'vue'
import VueRouter from 'vue-router'
// Home 
import Home from '../views/Home.vue'
// Contact
import ContactList from '../views/contact/ContactList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/contacts',
    name: 'ContactList',
    component: ContactList
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
