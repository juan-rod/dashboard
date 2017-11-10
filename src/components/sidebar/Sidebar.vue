<template>
	<div class="sidebar-container">
	<!-- <div class="sidebar-shadow-container"> -->
		<!-- <nav-bar></nav-bar> -->
		<user></user>
		<!-- <div class="sidebar_links">
			<router-link to="/profile">
				<h3>Home</h3> 
			</router-link>
		</div> -->
		<div class="sidebar_links">
			<router-link to="/points">
				<h3>Points</h3>
			</router-link>
		</div>
		<div class="sidebar_links last_link">
			<router-link to="/rewards">
				<h3>Rewards</h3>
			</router-link>
		</div>
		<div class="sidebar_links last_link">
			<router-link to="/surveys">
				<h3>Surveys</h3>
			</router-link>
		</div>
		<!-- </div> -->
	</div>
</template>

<script>
// import NavBar from '../Nav.vue'
import User from './User.vue'

export default {
	name: 'sidebar',
	components: {User},
	data(){
		return {
			
		}
	}
	
}
</script>

<style scoped>
	a{
		text-decoration: none;
	}
	h3{
		line-height: 1.4;
		color: #4c4e4d;
	}
	h3:hover{
		color: #333333;
	}
	.sidebar-container{
		background-color: #e0e0e0;
		/*background-color: #ffffff;
		background-image: -webkit-linear-gradient(180deg, #ffffff 0%, #33ccff 50%, #003399 100%);
		background-image: -moz-linear-gradient(180deg, #ffffff 0%, #33ccff 50%, #003399 100%);
		background-image: -o-linear-gradient(180deg, #ffffff 0%, #33ccff 50%, #003399 100%);
		background-image: linear-gradient(180deg, #ffffff 0%, #33ccff 50%, #003399 100%);*/
		/*background-image: -webkit-linear-gradient(135deg, #ffffff 0%, #33ccff 50%, #003399 100%);
		background-image: -moz-linear-gradient(135deg, #ffffff 0%, #33ccff 50%, #003399 100%);
		background-image: -o-linear-gradient(135deg, #ffffff 0%, #33ccff 50%, #003399 100%);
		background-image: linear-gradient(135deg, #ffffff 0%, #33ccff 50%, #003399 100%);*/
	}
	/*.sidebar-shadow-container{
		height:100%;
		background-color: rgba(255, 255, 255, 0.84);;

	}*/
	.sidebar_links{
		height: 50px;
		text-align: left;
		padding: 4px 15px;
		border-bottom: 1px solid #eee;

	}
	.last_link{
		/*border-bottom: 1px solid #e2e1e1;*/
	}
	.sidebar_links:hover {
		background-color:rgba(249, 249, 249, 0.51);;
		/*border-top: 1px solid #f9f9f9;*/
	}
</style>