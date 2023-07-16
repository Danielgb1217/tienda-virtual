import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home/HomeView.vue'
import ProductosView from '../views/productos/ProductosView.vue'
import CategoriasView from '../views/categorias/CategoriasView.vue'
import productosCategoriasView from '../views/productos/ProductosCategoriasView.vue'
import productoDetailView from '../views/productos/ProductoDetailView.vue'
import AdminView from '../../src/views/crud/AdminView.vue'
import AuthView from '../../src/views/auth/AuthView.vue'
import RegisterView from '../../src/views/auth/RegisterView.vue'
import { mapState} from "vuex";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta:{                //meta empleado para la validacion de la autenticacion
        requireAuth: false
      }
    },
    {
      path: '/productos',
      name: 'productos',
      component: ProductosView,
      meta:{
        requireAuth: false
      }
    }, 
    {
      path: '/categorias',
      component: CategoriasView,
      meta:{
        requireAuth: false
      },
      children:[
        {
          path: ':category',   //recibe el parametro enviado por la url params:
          name: 'categorias',
          component: productosCategoriasView,
        },
        {
          path: '/producto-detalle/:id',   //recibe el parametro enviado por la url params:
          name: 'detalle-producto',
          component: productoDetailView,
        }

      ]
    },
    {
      path: '/admin',
      name: 'admin',
      component: AdminView,
      meta:{
        requireAuth: true
      }
    }, 
    {
      path: '/login',
      name: 'auth',
      component: AuthView,
      meta:{
        requireAuth: false
      }
    }, 
    {
      path: '/registrar',
      name: 'registro',
      component: RegisterView,
      meta:{
        requireAuth: false
      }
    }, 


  ]
})

//se establece la logica para proteger las rutas que necesiten autenticacion

router.beforeEach((to, from, next) =>{

  const token = mapState.token

  if((to.meta.requireAuth) && (token ==null)){
    next('login')
  }else{
    next()
  }

})

export default router
