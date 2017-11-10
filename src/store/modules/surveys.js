import Vue from 'vue'
import { router } from '../../router/router'

const state = {
  surveys:[
    {
      id: '',
      name: 'Sports Survey',
      brief:'Chambray tote bag mixtape, hella wolf VHS pinterest bitters gastropub. Dreamcatcher brooklyn banjo retro.',
      link: '',
      points: 10,
      category:'Sports',
      time:'8 minutes'
    },
    {
      id: '',
      name: 'Programming Survey',
      brief:'Chambray tote bag mixtape, hella wolf VHS pinterest bitters gastropub. Dreamcatcher brooklyn banjo retro.',
      link: '',
      points: 10,
      category:'Programming',
      time:'10 minutes'
    },
    {
      id: '',
      name: 'Networks Survey',
      brief:'Chambray tote bag mixtape, hella wolf VHS pinterest bitters gastropub. Dreamcatcher brooklyn banjo retro.',
      link: '',
      points: 10,
      category:'Networks',
      time:'10 minutes'
    },
    {
      id: '',
      name: 'Devices Survey',
      brief:'Chambray tote bag mixtape, hella wolf VHS pinterest bitters gastropub. Dreamcatcher brooklyn banjo retro.',
      link: '',
      points: 10,
      category:'Devices',
      time:'10 minutes'
    },
    {
      id: '',
      name: 'Demographic Survey',
      brief:'Chambray tote bag mixtape, hella wolf VHS pinterest bitters gastropub. Dreamcatcher brooklyn banjo retro.',
      link: '',
      points: 10,
      category:'Profile',
      time:'10 minutes'
    },
    {
      id: '',
      name: 'Hulu Survey',
      brief:'Chambray tote bag mixtape, hella wolf VHS pinterest bitters gastropub. Dreamcatcher brooklyn banjo retro.',
      link: '',
      points: 10,
      category:'TV',
      time:'5 minutes'
    },
    {
      id: '',
      name: 'Mobile Survey',
      brief:'Chambray tote bag mixtape, hella wolf VHS pinterest bitters gastropub. Dreamcatcher brooklyn banjo retro.',
      link: '',
      points: 10,
      category:'Mobile',
      time:'12 minutes'
    }
  ],
  questions:{
    sports:[
      {
        id:'',
        title: "NCAA College Football"
      },
      {
        id:'',
        title: "National Football League (NFL)"
      },
      {
        id:'',
        title: "Major League Baseball (MLB)"
      },
      {
        id:'',
        title: "National Basketball Association (NBA)"
      },
      {
        id:'',
        title: "NCAA College Basketball"
      },
      {
        id:'',
        title: "National Hockey League (NHL)"
      },
      {
        id:'',
        title: "Action/Extreme Sports"
      },
      {
        id:'',
        title: "NASCAR"
      },
      {
        id:'',
        title: "Pro Golf"
      },
      {
        id:'',
        title: "Formula One"
      },
      {
        id:'',
        title: "Mixed Martial Arts"
      },
      {
        id:'',
        title: "Pro Tennis"
      },
      {
        id:'',
        title: "Pro Boxing"
      },
      {
        id:'',
        title: "Major League Soccer (MLS)"
      },
      {
        id:'',
        title: "Motocross"
      }

    ],
    programming:[
      {
        id:'',
        title: "Comedies"
      },
      {
        id:'',
        title: "Dramas"
      },
      {
        id:'',
        title: "Reality Shows"
      },
      {
        id:'',
        title: "Soap Operas"
      },
      {
        id:'',
        title: "Talk Shows"
      },
      {
        id:'',
        title: "Game Shows"
      },
      {
        id:'',
        title: "News Programs"
      },
      {
        id:'',
        title: "Kids Shows"
      }
    ],
    networks:[
      {
        id:'',
        title: "ABC"
      },
      {
        id:'',
        title: "CBS"
      },
      {
        id:'',
        title: "CW"
      },
      {
        id:'',
        title: "Fox"
      },
      {
        id:'',
        title: "NBC"
      },
      {
        id:'',
        title: "CNN"
      },
      {
        id:'',
        title: "MSNBC"
      },
      {
        id:'',
        title: "ESPN"
      },
      {
        id:'',
        title: "Fox Sports"
      },
      {
        id:'',
        title: "Disney Channel"
      },
      {
        id:'',
        title: "Nickelodeon"
      },
      {
        id:'',
        title: "Freeform"
      },
      {
        id:'',
        title: "Cartoon Network"
      }
    ],
    devices:[
      {
        id:'',
        title: "Smartphone (e.g. iPhone, Samsung Galaxy, HTC, Blackberry, etc.)"
      },
      {
        id:'',
        title: "Tablet Device (e.g. iPad, Nook Color, Kindle Fire, etc.)"
      },
      {
        id:'',
        title: "DVR (either standalone or one from your cable/satellite company)"
      },
      {
        id:'',
        title: "Laptop"
      },
      {
        id:'',
        title: "None of the above"
      }
    ]
  }
}

const getters = {
  surveys : state => state.surveys, // would need action/mutation if data fetched async
	questions : state => state.questions // would need action/mutation if data fetched async


}

const actions = {
	setUser ({commit},user){
		commit("SET_USER", user);
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
  	}

	
}
export default {
  state,
  getters,
  actions,
  mutations
}
