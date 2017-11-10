<template>
	<div>
		<loading class="login__loading" v-if="isLoading"></loading>
		<form class="login__form" v-else>
			<div class="login__form--heading">
				<h2 class="">Login</h2>
				<p>Enter your email address and password below</p>
			</div>
			<div class="login__form--email login__input input-group">
				<input type="email" id="inputEmail" class="form-control input-lg" placeholder="Your Email" v-model.trim="email" required autofocus>
			</div>
			<div class="login__input login__form--password input-group">
				<input type="password" id="inputpassword" class="form-control input-lg" placeholder="Your Password" v-model.trim="password" 
				@focus="showEx = true"
				 required>
				<span class="lock-icon">
		            <i class="fa fa-lock"></i>
		        </span>
			</div>
			<div class="login__form--reset">
				<router-link to="/resetPass" style="color:#4c4e4d;">Forgot Password?</router-link>
			</div>
			<button class="login__form--button btn btn-lg btn-primary btn-block" type="submit" @click.prevent="login">Enter</button>
			<div class="ui error message" v-if="hasErrors">
		      	<p v-for="error in errors">{{error}}</p>
		    </div>
		    <div class="login__form--panel">
				<div class="panel-heading">
					First Time Participant?  
					<span>
						<router-link to="/register" style="color:#eee;">Register Here</router-link>
					</span>
				</div>
			</div>
		</form>

	</div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
import Loading from '../../components/spinner/VueSpinner.vue'
export default {
	name: 'login-form',
	components: {Loading},
	data () {
		return {
			email: '',
			password: '',
			showEx:false
			
		}
	},
	computed: {
		hasErrors(){
			return this.errors.length > 0;
		},
		...mapGetters([
		    'participant',
		    'currentUser',
		    'isLoading'
		])
	},
	methods: {
		...mapActions([
	        'verifyParticipant',
	        'getLogin',
	        'setUser'
	    ]),
		login() {
				let user = {
					email: this.email,
					password:this.password
				}
				this.getLogin(user)
					.then(() => {
                		this.$store.dispatch('setUser', user)
						
              		})
		}
	}
}
</script>