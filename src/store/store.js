import Vue from 'vue';
import Vuex from 'vuex';

import demographics from './modules/demographics'
import login from './modules/login'
import rewards from './modules/rewards'
import surveys from './modules/surveys'

Vue.use(Vuex);

const state = {
	apiURL: 'https://api.mediasciencelabs.com/v1/',
	apiKey: 'OWNiMjVhMDNkMGIwOTcwZWMzYjI4MGJj',
	participantKey: 'B9796FFFFB3CB7964B3AF776A7A9A',
	contactKey: 'RIi6NW3DXdnab288or7Y8XGYPmfAEun5',
	demKey: 'v2ivZ9WKHseRxzjWFf08iAZ6sMfZwP6c',
	requestKey: 'rAbwSLTCvpjrLgbA4zASvhUFiR3OEPIx',
  	update:'drN2oV1kqRxxz8yGmu78XlzCYIUGXMBf',
  	isLoading: false,
  	isWelcome: false
 }
 const getters = {
 	isLoading: state => state.isLoading,
 	isWelcome: state => state.isWelcome
 }
 const actions ={
	showLoading({ commit }, isLoading) {
		console.log("isLoading in actions:", isLoading)
    	commit('SHOW_LOADING', isLoading)
	},
	setWelcomeModal({ commit }, isWelcome) {
    	commit('SET_WELCOME_MODAL', isWelcome)
	}

 }
 const mutations = {
 	SHOW_LOADING(state,isLoading) {
    	state.isLoading = true
  	},
  	SET_WELCOME_MODAL(state, isWelcome) {
    	state.isWelcome = isWelcome
  	}
 }

export default new Vuex.Store({
	state,
	getters,
	actions,
	mutations,
	modules: {
		demographics,
		login,
		rewards,
		surveys
	}
})