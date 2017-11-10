<template>
	<div>
	<ms-logo></ms-logo>
		<div class="container-fluid login">
		 	<div class="row login__row">
		 		<div class="col-sm-12 col-md-4 login__aside">
		 			<div class="login__aside--top">
		 				<h1>Profile</h1>
		 				<h1>Surveys</h1>
		 				<h1>Points</h1>
		 				<h1 class="rewards">Rewards</h1>
		 			</div>
		 			<div class="login__aside--bottom">
		 				<p>All members can now choose where to spend the points they've earned.</p>
		 			</div>
		 		</div>
		 		<div class="col-sm-12 col-md-8 login__body">
					<router-view></router-view>
		 		</div>
		 	</div>
	    </div>
	</div>
</template>

<script>
import MsLogo from '../../components/nav/MsLogoNav.vue'
export default {
	name: 'login',
	components: {MsLogo},
	data () {
	    return {
	     
	    }
  	}
}
</script>
