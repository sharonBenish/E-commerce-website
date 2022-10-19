import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import HeadphonesPage from '../views/HeadphonesPage.vue'
import SpeakersPage from '../views/SpeakersPage.vue'
import EarphonesPage from '../views/EarphonesPage.vue'

const routes = [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
        path:'/headphones',
        name:'headphones',
        component:HeadphonesPage,
    },
    {
        path:'/speakers',
        name:'speakers',
        component:SpeakersPage,
    },
    {
        path:'/earphones',
        name:'earphones',
        component:EarphonesPage,
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})
  
export default router