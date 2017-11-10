<template>
	<div>
		<Slideout menu="#menu" panel="#panel" :toggleSelectors="['.toggle-button']" @on-open="open">
		  	<side-bar id="menu"></side-bar>
		  	<div id="panel" class="home">
				<hamburger-btn></hamburger-btn>
				<div class="row">
					<banner-next :title="pageName()" :home='home'></banner-next>
					<router-view class="home__routerview"></router-view>
				</div>
			</div>
	  	</Slideout>
	</div>
</template>

<script>
	import SideBar from "../../components/sidebar/Sidebar.vue"
	// import Banner from "../components/banner/Banner.vue"
	import BannerNext from "../../components/banner/BannerNext.vue"
	import HamburgerBtn from "../../components/buttons/HamburgerBtn.vue"
	import Slideout from 'vue-slideout'

export default {
	name: 'Home',
	components: {SideBar, Slideout, HamburgerBtn, BannerNext},
	data () {
		return {
			isActive:false,
			title:'',
			home: false
		}
	},
	methods: {
		pageName(){
	    	let path = this.$route.path
	    		path = path.replace(/\//g, '')
	    		console.log("path:",path)
	    		this.homePage(path)
	    	return path
	    },
	    homePage(path){
	    	if(path === ''){
	    		this.home = true
	    	}
	    	return
	    },
		open(){
			// console.log("slideoutOpen")
		}
	}
}
</script>
