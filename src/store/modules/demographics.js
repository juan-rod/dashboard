import Vue from 'vue'
import router from '../../router/router'

const state = {
	  panel: {
	    educations: [],
	    ethnicities: [],
	    incomes: [],
	    occupations: [],
	    labs:[]
	  }
}

const getters = {
	incomes : state => state.panel.incomes,
	occupations : state => state.panel.occupations,
	educations : state => state.panel.educations,
	ethnicities : state => state.panel.ethnicities,
	labs : state => state.panel.labs
}

const actions = {
	fetchEducations ({ commit, rootState }) {
		Vue.http
			.get(rootState.apiURL + 'educations'+'?api_key=' + rootState.demKey)
			.then((response) => {
				const j = response.data
			if (j.status === 'OK') {
				let response = j.data
	  			commit('FETCH_EDUCATIONS', response)
			} else {
				state.error = j.data
			}
		})
	},
	fetchEthnicities ({ commit, rootState }) {
		Vue.http
			.get(rootState.apiURL + 'ethnicities'+'?api_key=' + rootState.demKey)
			.then((response) => {
				const j = response.data
			if (j.status === 'OK') {
				let response = j.data
				commit('FETCH_ETHNICITIES', response)
			} else {
				state.error = j.data
			}
		})
	},
	fetchIncomes ({ commit, rootState }) {
		Vue.http
			.get(rootState.apiURL + 'incomes'+'?api_key=' + rootState.demKey)
			.then((response) => {
				const j = response.data
			if (j.status === 'OK') {
				let response = j.data
				commit('FETCH_INCOMES', response)
			} else {
				state.error = j.data
			}
		})
	},
	fetchOccupations ({ commit, rootState }) {
		Vue.http
			.get(rootState.apiURL + 'occupations'+'?api_key=' + rootState.demKey)
			.then((response) => {
				const j = response.data
			if (j.status === 'OK') {
				let response = j.data
				commit('FETCH_OCCUPATIONS', response)
			} else {
				state.error = j.data
			}
		})
	},
	fetchLabs ({ commit, rootState }) {
		Vue.http
			.get(rootState.apiURL + 'labs'+'?api_key=' + rootState.demKey)
			.then((response) => {
				const j = response.data
			if (j.status === 'OK') {
				let response = j.data
				commit('FETCH_LABS', response)
			} else {
				state.error = j.data
			}
		})
	}

}

const mutations = {
	FETCH_EDUCATIONS(state, response){
		state.panel.educations = response
	},
	FETCH_ETHNICITIES(state, response){
		state.panel.ethnicities = response
	},
	FETCH_INCOMES(state, response){
		state.panel.incomes = response
	},
	FETCH_OCCUPATIONS(state, response){
	    state.panel.occupations = response
	},
	FETCH_LABS(state, response){
	    state.panel.labs = response
	}
}
export default {
  state,
  getters,
  actions,
  mutations
}
