import Vue from 'vue'
import { router } from '../../router/router'


const state = {
	currentUser : {},
	participant:{},
	verify: {
	    id: '',
	    username:'',
	    password: ''
	},
	contact:{},
	requestMember:[],
	resetPass:[],
	error:[],
	isLoggedIn: !!localStorage.getItem("userToken"),
	isAuth: false,
	userToken: ''
}

const getters = {
	apiURL : state => state.apiURL,
	currentUser : state => state.currentUser,
	participant : state => state.participant,
	contact: state => state.contact,
	verify : state => state.verify,
	isLoggedIn : state => state.isLoggedIn,
	isAuth: state => state.isAuth,
	userToken: state => state.userToken
}

const actions = {
	setUser ({commit},user){
		commit("SET_USER", user);
	},
	getLogin ({ commit, dispatch, rootState }, user){
		rootState.isLoading = true;
		Vue.http
	      	.post(rootState.apiURL + 'participants/login?api_key='+ rootState.requestKey, { email: user.email, password: user.password })
	      	.then((response) => {
	        const j = response
				if (j.statusText === 'OK') {
					return new Promise(resolve => {
						setTimeout(()=> {
							commit('SET_AUTH', true)
							commit('GET_LOGIN', j.data)
							commit('SET_TOKEN',j.data)
							rootState.isLoading = false;
							resolve()
						}, 1000)
					})

				} else {
					state.error = j.data
				}
	     	})
	     	.then(() =>{
	     		let contactId = state.participant.id
	     		dispatch('fetchParticipantByContactId', contactId );
	     	})
	     	.then(() =>{
	     		let userUuid = state.participant.uuid
	     		if(!userUuid){
	     			console.log("empty:", userUuid)
	     		}else{
		     		state.currentUser.uuid = userUuid
		     		state.currentUser.isAuth = true
	     		}
	     	})
	},
	logout({commit}) {
		localStorage.removeItem("token")
		commit('LOGOUT')
	},
	fetchParticipantByContactId({commit, rootState}, contactId){
		Vue.http
	      .get(rootState.apiURL + 'participants/' + contactId +'/contact?api_key=' + rootState.contactKey)
	      .then((response) => {
	        const j = response.data
	        if (j.status === 'OK') {
	        	let contactData = j.data.contact
	          	commit('FETCH_PARTICIPANT_BY_CONTACT_ID', contactData)
	          	router.push("/")
	        } else {
	          console.log(state, response)
	        }
	      })
	},
	requestPassword ({ commit, rootState }, member) {
		console.log("member in actions:", member)
		Vue.http
			.post(rootState.apiURL + 'participants/reset/request?api_key=' + rootState.requestKey, { email: member.email, member_id: member.memberID  })
			.then((response) => {
				const j = response.data
				console.log("request password j:",j)
				if (j.status === 'OK') {
					let response = j.data
				console.log("request response after ok j:",j)
  					commit('REQUEST_PASSWORD', response)
				} else {
					state.error = j.data
				console.log("request response after state.error:",state.error)
				}
		})
	},
	resetPassword ({ commit, rootState }, verify){
		Vue.http
			.post(rootState.apiURL + 'participants/reset/password?api_key=' + rootState.requestKey, { password: verify.password, uuid: verify.id })
			.then((response) => {
				const j = response.data
				console.log("reset password j:",j)
				if (j.status === 'OK') {
					let response = j.data
					console.log("reset password response:",response)
  					commit('RESET_PASSWORD', response)
				} else {
					state.error = j.data
				}
			})
	},
	updateParticipant ({commit, rootState}, obj) {
		console.log("obj in updateParticipant:",obj)
		Vue.http
			.put(rootState.apiURL +'participants/'+ obj.participant.id +'?api_key='+ rootState.update, { obj: { contact: obj.contact, participant: obj.participant } })
			.then((response) => { 
				const j = response.data
				console.log("updateParticipant:",j)
				if (j.status === 'OK') {
					let response = j.data
					console.log("reset password response:",response)
  					commit('UPDATE_PARTICIPANT', response)
				} else {
					state.error = j.data
				}
			})
	}


}

const mutations = {
	SET_USER(state, user){
    	state.currentUser = user
  	},
  	SET_TOKEN (state, token){
  		state.isLoggedIn = true;
    	state.userToken = token.data
    	// console.log("token:",token.data)
    	localStorage.setItem('userToken', JSON.stringify(token.data))
  		// console.log("SET_TOKEN state.isLoggedIn:",state.isLoggedIn)
  		// console.log(" SET_TOKEN state.userToken:",state.userToken)
  	},
  	LOGOUT (state){
  		state.isLoggedIn = false;
  		state.isAuth = false
	    state.participant = {}
	    state.userToken = ''
	    state.currentUser = {}
	    localStorage.removeItem('userToken')
  	},
  	SET_AUTH (state, isAuth) {
    	state.isAuth = isAuth
  		// console.log(" SET_AUTH state.isAuth:",state.isAuth)
  	},
	GET_LOGIN(state, user){
    	state.participant = user.data
  		// console.log(" GET_LOGIN state.participant:",state.participant)
  	},
  	FETCH_PARTICIPANT_BY_CONTACT_ID (state, contactData) {
    	state.contact = contactData
  	},
  	REQUEST_PASSWORD(state, member){
    	console.log("member mutations:", member)
   		state.requestMember = member
  	},
  	RESET_PASSWORD(state, data){
    	console.log("data mutations:", data)
   		state.resetPass = data
  	},
  	UPDATE_PARTICIPANT(state, response){
  		console.log("response from update participant:", response)
   		state.participant = response
  	}
}
export default {
  state,
  getters,
  actions,
  mutations
}
