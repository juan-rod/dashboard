
<template>
	<div class="banner col-12">
		<div v-if="profile" class="col-12 banner__profile">
			<div class="row">
				<div class="col-2 banner__profile--img" v-on:mouseover="hover" v-on:mouseout="hoverOut">
					<div class="initials">{{profileInitials}}</div> 
					<div class="editPhoto--icon" v-if="showPopup" transition="fade" v-on:mouseover="hoverInfo" v-on:mouseout="hoverOutInfo" @click="showModal = true">
						<i class="fa fa-pencil-square" aria-hidden="true"></i>
					</div>
				</div>
				<div class="col-7 banner__profile--header">
					<div class="row">
						<div class="col-12 banner__profile--name">
							<p>{{contact.firstname}} {{contact.lastname}}</p>
						</div>
						<div class="col-12 banner__profile--details">
							<div class="row">
								<div class="col-5">
									<p>Member ID: <span>{{participant.member_id}}</span></p>
								</div>
								<div class="col-5">
									<p>Panel Location: <span>{{participant.lab.address.city}}</span></p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="col-6 banner__title" v-else>
      		<p>{{title}}</p>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapMutations, mapActions} from 'vuex'
export default {
	name:'banner',
	props:['title','profile'],
	data () {
		return {
			showPopup: false,
			isInInfo: false,
			showModal:false,
            initials:'',
            showProfileImage: false
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
            this.showPopup = true;
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
