<template>
	<div>
		<form class="login__form">
			
			<h2>{{formTitle}}</h2>
			<p>{{formSubTitle}}</p>

			<div class="login__form--email input-group">
				<input type="email" id="inputEmail" class="form-control input-lg" placeholder="Your Email" v-model.trim="email" required autofocus>
			</div>
			<div class="login__form--password input-group">
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
			<button class="login__form--button btn btn-lg btn-primary btn-block" type="submit" @click.prevent="login" :class="{'loading': isLoading}">Enter</button>
			<div class="ui error message" v-if="hasErrors">
		      	<p v-for="error in errors">{{error}}</p>
		    </div>
		    <div class="login__form--panel panel panel-default">
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

</script>