import Vue from 'vue'
import { router } from '../../router/router'

const state = {
	rewards:{
      added: [],
      products: [
        {
          id: 'bcd755a6-9a19-94e1-0a5d-426c0303454a',
          name: 'Charity Donation',
          price: 5,
          category: 'Electronic Gift Card',
          img: '../../src/assets/CapitalAreaFoodBankLogoSizeDown.jpg',
          points: 1100,
          desc: 'Chambray tote bag mixtape, hella wolf VHS pinterest bitters gastropub. Dreamcatcher brooklyn banjo retro.',
          legal:'legal text. dont steal. stealing is bad. we dont own anything.',
          showLegal: true,
          delivery: 'Instant'
        },
        {
          id: 'bcd755a6-9a19-94e1-0a5d-426c0303454b',
          name: 'Cinemark Movie Ticket',
          price: 5,
          category: 'Electronic Gift Card',
          img: '../../src/assets/Cinemark_movie_ticket.jpg',
          points: 1800,
          desc: 'Chambray tote bag mixtape, hella wolf VHS pinterest bitters gastropub. Dreamcatcher brooklyn banjo retro. Fanny pack authentic artisan, offal iceland kitsch deep v 90s sustainable chillwave.',
          legal:'legal text. dont steal. stealing is bad. we dont own anything',
          showLegal: false,
          delivery: 'Instant'
        },
        {
          id: 'bcd755a6-9a19-94e1-0a5d-426c0303454c',
          name: 'HEB E-Gift Card',
          price: 5,
          category: 'Charity Donation',
          img: '../../src/assets/HEB_cards_2.jpg',
          points: 1200,
          desc: 'Chambray tote bag mixtape, hella wolf VHS pinterest bitters gastropub. Dreamcatcher brooklyn banjo retro.',
          legal:'legal text. dont steal. stealing is bad. we dont own anything',
          showLegal: false,
          delivery: 'Instant'
        },
        {
          id: 'bcd755a6-9a19-94e1-0a5d-426c0303454d',
          name: 'Ruths Chris Steak House',
          price: 10,
          category: 'Electronic Gift Card',
          img: '../../src/assets/Ruths_Chris_Gift_Card_Image_2.png',
          points: 5200,
          desc: 'Chambray tote bag mixtape, hella wolf VHS pinterest bitters gastropub. Dreamcatcher brooklyn banjo retro. Fanny pack authentic artisan, offal iceland kitsch deep v 90s sustainable chillwave.',
          legal:'legal text. dont steal. stealing is bad. we dont own anything',
          showLegal: false,
          delivery: 'Instant'
        },
        {
          id: 'bcd755a6-9a19-94e1-0a5d-426c0303454e',
          name: 'Simon Gift Card',
          price: 20,
          category: 'Electronic Gift Card',
          img: '../../src/assets/Simon_AMEX-1.jpg',
          points: 2600,
          desc: 'Chambray tote bag mixtape, hella wolf VHS pinterest bitters gastropub. Dreamcatcher brooklyn banjo retro.',
          legal:'legal text. dont steal. stealing is bad. we dont own anything',
          showLegal: false,
          delivery: 'Instant'
        },
        {
          id: 'bcd755a6-9a19-94e1-0a5d-426c0303454g',
          name: 'Simon Gift Card',
          price: 25,
          category: 'Charity Donation',
          img: '../../src/assets/Simon_AMEX.jpg',
          points: 3200,
          desc: 'Chambray tote bag mixtape, hella wolf VHS pinterest bitters gastropub. Dreamcatcher brooklyn banjo retro.',
          legal:'legal text. dont steal. stealing is bad. we dont own anything',
          showLegal: false,
          delivery: 'Instant'
        },
        {
          id: 'bcd755a6-9a19-94e1-0a5d-426c0303454h',
          name: 'Spa Certificate',
          price: 15,
          category: 'Merchandise',
          img: '../../src/assets/spafinder50.gif',
          points: 5200,
          desc: 'Chambray tote bag mixtape, hella wolf VHS pinterest bitters gastropub. Dreamcatcher brooklyn banjo retro.',
          legal:'legal text. dont steal. stealing is bad. we dont own anything',
          showLegal: false,
          delivery: 'By Mail'
        }
      ]
  },
}

const getters = {
	allProducts : state => state.rewards.products, // would need action/mutation if data fetched async
	getNumberOfProducts : state => (state.rewards.products) ? state.rewards.products.length : 0,
	cartProducts : state => {
	    return state.rewards.added.map(({ id, quantity }) => {
	      const product = state.rewards.products.find(p => p.id === id)

	      return {
	        name: product.name,
	        price: product.price,
	        quantity
	      }
	    })
	}

}

const actions = {
	setUser ({commit},user){
		commit("SET_USER", user);
	},
	addToCart ({ commit }, product){
    	commit('ADD_TO_CART', {id: product.id})
  	}

	// getLogin ({ commit, dispatch, rootState }, user){
	// 	Vue.http
	//       	.post(rootState.apiURL + 'participants/login?api_key='+ rootState.requestKey, { email: user.email, password: user.password })
	//       	.then((response) => {
	//         const j = response
	// 			if (j.statusText === 'OK') {
	// 				commit('GET_LOGIN', j.data)
	// 			} else {
	// 				state.error = j.data
	// 			}
	//      	})
	//      	.then(() =>{
	//      		let contactId = state.participant.id
	//      		dispatch('fetchParticipantByContactId', contactId );
	//      	})
	//      	.then(() =>{
	//      		let userUuid = state.participant.uuid
	//      		if(!userUuid){
	//      			console.log("empty:", userUuid)
	//      		}else{
	// 	     		state.currentUser.uuid = userUuid
	// 	     		state.currentUser.isAuth = true
	//      		}
	//      	})
	// }
	


}

const mutations = {
	SET_USER(state, user){
    	state.currentUser = user
  	},
  	ADD_TO_CART(state, { id }) {
      	const record = state.rewards.added.find(p => p.id === id)
		if (!record) {
			state.rewards.added.push({
				id,
				quantity: 1
			})
		} else {
			record.quantity++
		}
  	}
	
}
export default {
  state,
  getters,
  actions,
  mutations
}
