import { createRouter, createWebHistory } from 'vue-router'
import Home from '../assets/Home.vue'
import Product from '../Component/Product.vue'
import Variant from '../Component/Variant.vue'
import Promo from '../Component/Promo.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/Product', component: Product },
  { path: '/variant', component: Variant },
  { path: '/promo', component: Promo },
  
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
