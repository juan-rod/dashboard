import Login from '../pages/Login/Login.vue'
import LoginForm from '../pages/Login/LoginForm.vue'
import RegisterForm from '../pages/Login/RegisterForm.vue'
import Home from '../pages/Home/Home.vue'
import HomeView from '../pages/Home/HomeView.vue'
import Profile from '../pages/Profile/Profile.vue'
import{isLoggedIn} from './guards'

export const routes = [
    {
    	path: '/login',
    	component: Login,
    	children: [
   			{path: '', component: LoginForm, props: true},
   			{path: 'register', component: RegisterForm, props: true}
   			// {path: 'checkemail', component: CheckEmail, props: true},
   			// {path: '/reset/password/:id', component: Verify}
   		]
    },
    {
      path:'/',
      component: Home,
      meta: { auth: true },
      children:[
        {path:'', component: HomeView, meta:{auth:true}},
        {path:'profile', component: Profile, meta:{auth:true}},
      ]
    },
    {
      path:'*',
      component: Login

    }
]