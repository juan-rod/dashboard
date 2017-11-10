
<template>
	<div class="banner col-12">
		<div v-if="home" class="col-12 banner__profile">
			<div class="row">
				<div class="banner__profile--iconsDiv">
					<div class="banner__icons" @click="showPopover">{{profileInitials}}</div> 
					<!-- <div class="banner__icons">{{profileInitials}}</div>  -->
				</div>
			</div>
		</div>
		<div class="col-6 banner__title" v-else>
      		<p>{{title}}</p>
		</div>
		<profile-dropdown v-if="showPopup"></profile-dropdown>
	</div>
</template>

<script>
import { mapGetters, mapMutations, mapActions} from 'vuex'
import ProfileDropdown from '../../components/cards/ProfileDropdown.vue'
export default {
	name:'banner',
	props:['title','home'],
	components:{ ProfileDropdown },
	data () {
		return {
			showPopup: false,
			isInInfo: false,
			showModal:false,
            initials:'',
            showProfileImage: false,
            profileIcon: false
		}
	},
	computed: {
		...mapGetters([
			'currentMember',
			'participant',
			'labs',
			'contact'

		]),
		profileInitials(){
			let name = this.contact.firstname;
			let lastname = this.contact.lastname;
			this.initials = name.charAt(0)+""+lastname.charAt(0);
			return this.initials
		}
    },
    mounted () {
        this.init()
    },
    	methods: {
		...mapActions([
			'fetchLabs'
		]),
		init(){
			this.fetchLabs()
			this.profileImage()
		},
		profileImage(){
			if(this.participant.image != ''){
				this.showProfileImage = !this.showProfileImage
			}else{
				console.log("doesn't look like you have an image")
			}
		},
		hover(){
			let vm = this;
            this.timer = setTimeout(function() {
                vm.showPopover();
            }, 100);
		},
		hoverOut(){
			let vm = this;
            clearTimeout(vm.timer);
            this.timer = setTimeout(function() {
                if(!vm.isInInfo)
                {
                    vm.closePopover();
                }
            }, 100);
		},
		hoverInfo() {
            this.isInInfo = true;
        },
        hoverOutInfo() {
            this.isInInfo = false;
            this.hoverOut();
        },
        showPopover() {
            this.showPopup = !this.showPopup;
        },
        closePopover() {
            this.showPopup = false;
        },
        openModal(){
        	console.log("open modal")
        }

    }
}
</script>
