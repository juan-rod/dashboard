<template>
	<div class="profile">
		<card :title="title" :body="body" :footer="footer">
			<profile-form-next></profile-form-next>
		</card>
	</div>
</template>

<script>
import ProfileFormNext from './ProfileFormNext.vue'
import Card from '../../components/cards/CardTemp.vue'

import { mapGetters, mapMutations, mapActions} from 'vuex'
export default {
	name:'profile',
	components:{ProfileFormNext, Card},
	data () {
		return {
			showModal:false,
			title:'Profile',
			body: '',
			footer: 'Incomplete'
		}
	},
	computed: {
		...mapGetters([
			'isWelcome'
		])
    },
	mounted(){
		// this.init()
	},
	methods: {
		...mapActions([
	      'setWelcomeModal'
	    ]),
       	init(){
	       	if(!this.isWelcome){
		       	setTimeout(()=> {
		       		this.showModal = true;
				}, 2000)
				this.setWelcomeModal(true)

	       	} else{
	       		console.log('this.isWelcome:',this.isWelcome)
	       	}

       }
    }
}
</script>