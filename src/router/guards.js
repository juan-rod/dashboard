import store from '../store/store'


export function isLoggedIn(to, from, next) {
	console.log("to.meta.auth:",to.meta.auth);
		console.log("store.rootState.login.isAuth:",store.state.login.isAuth)
		console.log("store.getters.isLoggedIn:",store.getters.isLoggedIn)

	if (to.meta.auth){
		next()
	} else{
		const isAuth = store.state.login.isAuth
			console.log("hello:",isAuth)
		if(isAuth){
			console.log("yes! go to profile:")
	        	next({ path: '/profile' })
		} else{
			console.log("nope go to login:")
			next({path: '/'})
		}
	}

}
