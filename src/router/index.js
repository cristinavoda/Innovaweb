import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Precios from '../views/Precios.vue'
import Servicios from '../views/Servicios.vue'
import Portfolio from '../views/Portfolio.vue'
import Nosotros from '../views/Nosotros.vue'
import Contacto from '../views/Contacto.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/precios', name: 'Precios', component: Precios },
  { path: '/servicios', name: 'Servicios', component: Servicios },
  { path: '/portfolio', name: 'Portfolio', component: Portfolio },
  { path: '/nosotros', name: 'Nosotros', component: Nosotros },
  { path: '/contacto', name: 'Contacto', component: Contacto }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
