<template>
	<div>
		<form class="login__form" >
			<div class="login__form--heading">
				<h2 class="">Register</h2>
				<p>Enter your email address and member ID. <br>
				We'll help you create a new password.</p>
			</div>
			<!-- email -->
			<div class="login__form--email login__input input-group">
				<input type="email" id="inputEmail" class="form-control input-lg" placeholder="Your Email" v-model.trim="email" required autofocus>
			</div>
			<!-- memberID -->
			<div class="login__input login__form--password">
				<input type="memberID" id="inputmemberID" class="form-control input-lg" placeholder="Your Member ID" v-model.trim="memberID" required>
			</div>
			<!-- login button	 -->
			<button class=" login__form--button btn btn-lg btn-primary btn-block" type="submit" @click.prevent="register" :class="{'loading': isLoading}">Submit</button>
			<!-- errors -->
			<div class="ui error message" v-if="hasErrors">
		      	<p v-for="error in errors">{{error}}</p>
		    </div>
			<div class="login__form--panel">
				<div class="panel-heading">
					Not Your First Time? <router-link to="/" style="color:#eee;">Login</router-link>
				</div>
			</div>
		</form>

	</div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
export default {
	name: 'register-form',
	data () {
		return {
			email: '',
			memberID: '',
			// errors: [],
			isLoading: false
		}
	},
	computed: {
		hasErrors(){
			return this.errors.length > 0;
		}
	},
	methods: {
		...mapActions([
	        'verifyParticipant',
	        'requestPassword'
	      ]),
		register () {
			console.log("register");
			this.errors = [];
			if(this.isFormValid()){
				this.isLoading = true
				if (this.memberID != null) {
					let user = {
						email: this.email,
						memberID: this.memberID
					}
					console.log("user:", user)
					this.requestPassword(user)
		          this.$store.dispatch('setUser', user)
		        }else {
		            console.log(" else memberID:", this.memberID);
		        }
				this.email = '';
				this.memberID = '';
				this.$router.push("/checkemail")
			}

		},
		isFormValid(){
			if(this.email.length > 0 && this.memberID.length > 0) {
				return true
			}
			return false
		}
	}
}
</script>
<style scoped>
/*	form{
		padding: 0 20%;
	}
	.form-signin p{
		text-align: center;
	}
	.form-register-heading{
		text-align: center;
		font-weight: 700;
	}
	.input-group{
		margin: 5% 0;
	}
	.input-group input{
		height: 50px;
		font-size: 1.5em;
		font-weight: 100;
		border-radius: 0px;
	}
	button{
		background-color:#003399;
		margin-bottom: 5%;
		height:50px;
		font-size: 1.5em;
		border-radius: 0px;
	}
	.panel-heading{
		text-align: right;
	}*/
</style>

