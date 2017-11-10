<template>
	<div>
		<div class="profile__dropdown">
			<div class="profile__dropdown--arrow"></div>
			<div class="cardTemp">
				<div class="cardTemp__header">
					<p>{{contact.firstname}} {{contact.lastname}}</p>
					<span>Member ID: {{participant.member_id}}</span></p>
				</div>
				<div class="cardTemp__body">
					<router-link to="/profile">
						<p>Profile</p>
					</router-link>
					<router-link to="/logout">
						<p>Logout</p>
					</router-link>
				</div>
				<div class="cardTemp__footer hidden-xs-up">
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import { mapGetters, mapMutations, mapActions} from 'vuex'
export default {
	name:'profile-dropdown',
	data () {
		return {
		}
	},
	computed: {
		...mapGetters([
			'contact',
			'participant'
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