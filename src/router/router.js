import Vue from 'vue'
import Router from 'vue-router'
import { routes } from './routes'
import VueResource from 'vue-resource'
import VeeValidate from 'vee-validate'
import VueMask from 'v-mask'
import store from '../store/store'

Vue.use(VueMask)
Vue.use(Router)
Vue.use(VeeValidate)
Vue.use(VueResource)

var router = new Router({
  base: '/',
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes
})

router.beforeEach((to, from, next) => {
	if(to.meta.auth){
		const isAuth = store.state.login.isAuth
		const localToken = JSON.parse(localStorage.getItem('userToken'))
		const userToken = store.state.login.userToken
		if(isAuth){
	        	next()
		}else{
			next({path: '/login'})
		}
	}else{
		next()
	}  
})

export { router }
