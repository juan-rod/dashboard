<template>
	<div class="user-container col " @click.prevent="profile">
	<router-link to="/">
		<div class="row">
			<div class="col-12 d-flex justify-content-center user-background">
				<!-- <img src="http://placecorgi.com/60/60" alt="..." class="rounded-circle"> -->
			</div>
			<!-- <div class="col-12 d-flex user-content"> -->
			<div class="col-12 d-flex justify-content-center user-content">
				<div class="row">
					<div class="col-12 user-img d-flex justify-content-center">
						<img :src="participant.contact.image" alt="..." class="rounded-circle" v-if="showProfileImage">
						<div class="profile-initials rounded-circle" v-else>{{profileInitials}}</div>
					</div>
					<div class="col-12 user-detail">
						<h5 class="">{{contact.firstname}} {{contact.lastname}}</h5>
						<small class="text-muted ml-auto">MEMBER ID : {{participant.member_id}}</small>
					</div>
			</div>
			</div>
		</div>
	</router-link>
	</div>
</template>

<script>
import { mapGetters, mapMutations, mapActions} from 'vuex'
export default {
	name: 'user-link',
	data(){
		return {
			showProfileImage:false
		}
	},
	computed: {
		...mapGetters([
			'currentMember',
			'participant',
			'contact'
		]),
		profileInitials(){
			let name = this.contact.firstname;
			let lastname = this.contact.lastname;
			this.initials = name.charAt(0)+""+lastname.charAt(0);
			return this.initials
		}
    },
	methods: {
		profile (){

		}
	}
}
</script>

<style scoped>
.user-container{
	flex:5;
	height:210px;
	border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
}
.row{
	height:100%;
}
h5{
	text-align: center;
}
small{
	text-align: center;
}
a{
	text-decoration: none;
	color:#4c4e4d;
}
.user-container:hover {
	background-color:rgba(249, 249, 249, 0.51);
}
.user-background{
	height:45%;
}
.user-content{
	height: 55%;
}
.user-content:hover{
}
.user-detail {
	text-align: center;
	position: relative;
    bottom: 40px;
}
img {
	position: relative;
    bottom: 52px;
    height: 80px;
    width: 80px;
	border: 4px solid white;
    box-shadow: 2px 3px 11px -2px rgba(0,0,0,0.22);
    -webkit-box-shadow: 2px 3px 11px -2px rgba(0,0,0,0.22);
	    -moz-box-shadow: 2px 3px 11px -2px rgba(0,0,0,0.22);
}
.profile-initials{
	position: relative;
    bottom: 52px;
    height: 80px;
    width: 80px;
	border: 4px solid white;
    box-shadow: 2px 3px 11px -2px rgba(0,0,0,0.22);
    -webkit-box-shadow: 2px 3px 11px -2px rgba(0,0,0,0.22);
	    -moz-box-shadow: 2px 3px 11px -2px rgba(0,0,0,0.22);
	margin: 0 auto;
    font-size: 2em;
    padding:6% 8%;
    background-color: rgba(0, 181, 173, 0.34);
}
</style>