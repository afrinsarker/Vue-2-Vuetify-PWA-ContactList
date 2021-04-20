import Vue from 'vue'
import VueRouter from 'vue-router'


// Website 
import Website from '../layouts/Website.vue'
import Home from '../views/website/Home.vue'


// Admin Portal
import AdminPortal from '../layouts/AdminPortal.vue'
import Dashboard from '../views/adminportal/Dashboard.vue'
import ContactList from '../views/adminportal/contact/ContactList.vue'

Vue.use(VueRouter)

const routes = [
  //Website
  {
    path: '/',
    name: 'Website',
    component: Website,
    children:[
      {
        path: '',
        name: 'Home',
        component: Home,
      },
      {
        path: '/about',
        name: 'About',
        component: () => import('../views/website/About.vue')
      }
    ]
  },

  //Admin Portal
  {
    path: '/admin',
    name: 'AdminPortal',
    component: AdminPortal,
    children:[
      {
        path: '',
        name: 'Dashboard',
        component:Dashboard,
      },
      {
        path: '/contacts',
        name: 'ContactList',
        component: ContactList
      },
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
