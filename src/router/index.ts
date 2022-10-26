import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import HeadphonesPage from '../views/HeadphonesPage.vue'
import SpeakersPage from '../views/SpeakersPage.vue'
import EarphonesPage from '../views/EarphonesPage.vue'
import SeeProduct from '../views/SeeProduct.vue'
import CheckOutPageVue from '../views/CheckOutPage.vue'

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
    },
    {
        path:'/products/:id',
        name:'product',
        component:SeeProduct
    },
    {
        path:'/checkout',
        name:'checkout',
        component:CheckOutPageVue
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})
  
export default router