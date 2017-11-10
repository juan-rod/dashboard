<template>
	<div id="form" class="profile__form user-form col-6 border">
		<div class="row">
			<div class="col-12 profile__form--header border2">
				<h1>Profile Settings</h1>
			</div>
			<div class="col-12 user-form1 border2">
				<div class="first-group d-flex justify-content-between border3">
					<div class="group fn-group">      
				      <input id="inputField" type="text" 
				      		v-model.trim="contact.firstname" 
							v-bind:value="contact.firstname" 
							v-bind:name="contact.firstname" required>
				      <span class="highlight"></span>
				      <span class="bar"></span>
				      <label>First Name</label>
				    </div>
				      
				    <div class="group">      
				      <input id="inputField" type="text" 
				      		v-model.trim="contact.lastname" 
							v-bind:value="contact.lastname" 
							v-bind:name="contact.lastname" required>
							<!-- <span class="input-hightlight-sm"></span> -->
				      <span class="highlight"></span>
				      <span class="bar"></span>
				      <label>Last Name</label>
				    </div>
				</div>
				<div class="group border3">      
			      <input id="inputField" class="emailInput"
			      		type="text" 
			      		v-model.trim="contact.email" 
						v-bind:value="contact.email" 
						v-bind:name="contact.email" required>
			      <span class="highlight"></span>
			      <span class="bar"></span>
			      <label>Email</label>
				</div>
				<div class="second-group d-flex justify-content-between border3">
					<div class="group">      
							<input id="inputField" type="text" 
				      		ref="phoneInput"
				      		v-mask="'(###) ###-####'"
				      		v-model.trim="contact.phone" 
							v-bind:value="contact.phone" 
							v-bind:name="contact.phone"
							@focus="showPh = true" 
							@blur="unMaskPhone"
							required>
				      <span class="highlight"></span>
				      <span class="bar"></span>
				      <label>Phone</label>
				      <small v-if="showPh">ex: (555) 555-5555</small>
					</div>
					<div class="group">  
				      <input id="inputField" ref="dobInput" type="text" 
				      		v-model.trim="editDOB" 
				      		v-mask="'##/##/####'"
				      		@focus="showEx = true"
				      		@blur="unMaskDOB" 
							required>
				      <span class="highlight"></span>
				      <span class="bar"></span>
				      <label>Date of Birth</label>
				      <small v-if="showEx">ex: MM/DD/YYYY</small>

					</div>
				</div>
			</div>
			<div class="col-12 user-form2 border2">
				<div class="third-group d-flex justify-content-between border3">
					<div class="group">      
				      <input id="inputField" 
				      		type="text"
				      		ref="edInput"
				      		v-model.trim="editEd"
				      		@focus="showCaret = false" 
							@click.stop="dropEd"
							@keyup.tab="dropEd" required>
							<div class="dropDown" v-if="showEd" v-click-outside="closeEvent">
								<ul>
									<li v-for="education in educations" :key="education.id" :value="education.id" @click="itemClickEd">{{ education.name }}</li>
								</ul>
							</div>
				      <span id="highlight" class="highlight"></span>
				      <span class="bar"></span>
				      <label>Education</label>
				      <span class="down-icon" v-if="showCaret">
				      	<i class="fa fa-lg fa-caret-down" aria-hidden="true"></i>
				      </span>
					</div>
					<div class="group">      
						<input id="inputField" type="text"
								ref="ethInput" 
								v-model.trim="editEth"
								@focus="showCaret = false"  
								@click.stop="dropEth"
								@keyup.tab="dropEth" required>
							<div class="dropDown" v-if="showEth" v-click-outside="closeEvent">
								<ul>
									<li v-for="ethnicity in ethnicities" :key="ethnicity.id" :value="ethnicity.id" @click="itemClickEth">{{ ethnicity.name }}</li>
								</ul>
							</div>
						<span class="highlight"></span>
						<span class="bar"></span>
						<label>Ethnicity</label>
						 <span class="down-icon" v-if="showCaret">
					      	<i class="fa fa-lg fa-caret-down" aria-hidden="true"></i>
					     </span>
					</div>
				</div>
				<div class="fourth-group d-flex justify-content-between border3">
					<div class="group">      
				      <input id="inputField" type="text" 
				      		ref="inInput"
				      		v-model.trim="editIn" 
				      		@focus="showCaret = false"
							@click.stop="dropIn"
							@keyup.tab="dropIn" required>
							<div class="dropDown" v-if="showIn" v-click-outside="closeEvent">
								<ul>
									<li v-for="income in incomes" :key="income.id" :value="income.id" @click="itemClickIn">{{ income.name }}</li>
								</ul>
							</div>
				      <span class="highlight"></span>
				      <span class="bar"></span>
				      <label>Income</label>
				       <span class="down-icon" v-if="showCaret">
				      	<i class="fa fa-lg fa-caret-down" aria-hidden="true"></i>
				      </span>
					</div>
					<div class="group">      
				      <input id="inputField" type="text" 
				      		ref="ocInput"
				      		v-model.trim="editOc" 
				      		@focus="showCaret = false"
							@click.stop="dropOc"
							@keyup.tab="dropOc" required>
							<div class="dropDown" v-if="showOc" v-click-outside="closeEvent">
								<ul>
									<li v-for="occupation in occupations" :key="occupation.id" :value="occupation.id" @click="itemClickOc">{{ occupation.name }}</li>
								</ul>
							</div>
				      <span class="highlight"></span>
				      <span class="bar"></span>
				      <label>Occupation</label>
				      <span class="down-icon" v-if="showCaret">
				      	<i class="fa fa-lg fa-caret-down" aria-hidden="true"></i>
				      </span>
					</div>
				</div>
				<div class="fifth-group d-flex justify-content-between border3">
					<div class="group">      
				      <input id="inputField" type="text" 
				      		ref="haInput" 
				      		v-model.trim="editHand" 
							v-bind:value="participant.handedness" 
							v-bind:name="participant.handedness"
							@focus="showCaret = false"
							@click.stop="dropHand"
							@keyup.tab="dropHand" required>
							<div class="dropDown" v-if="showHand" v-click-outside="closeEvent">
									<ul style="width:200px">
										<li value="0" @click="itemClickHand">Left</li>
										<li value="1" @click="itemClickHand">Right</li>
										<li value="2" @click="itemClickHand">Ambidextrous</li>
									</ul>
								</div>
				      <span class="highlightHand"></span>
				      <span class="bar"></span>
				      <label>Handedness</label>
				      <span class="down-icon" v-if="showCaret">
				      	<i class="fa fa-lg fa-caret-down" aria-hidden="true"></i>
				      </span>
					</div>
					<div class="group">      
				      <input id="inputField" type="text" 
				      		ref="whereInput" 
				      		v-model.trim="editWhere" 
							v-bind:value="participant.notes" 
							v-bind:name="participant.notes"
							@focus="showCaret = false"
							@click.stop="dropWhere"
							@keyup.tab="dropWhere" required>
							<div class="dropDown" v-if="showWhere" v-click-outside="closeEvent">
									<ul>
										<li @click="itemClickWhere" value="SearchEngine">Search Engine (Google, Bing, etc.)</li>
										<li @click="itemClickWhere" value="Ad">Advertisement</li>
										<li @click="itemClickWhere" value="Article">Article / Blog</li>
										<li @click="itemClickWhere" value="Facebook">Facebook</li>
										<li @click="itemClickWhere" value="Twitter">Twitter</li>
										<li @click="itemClickWhere" value="OtherSM">Other Social Media</li>
										<li @click="itemClickWhere" value="WordOfMouth">Word of Mouth</li>
										<li @click="itemClickWhere" value="DoNYC">doNYC</li>
										<li @click="itemClickWhere" value="Craigslist">Craigslist</li>
										<li @click="itemClickWhere" value="DirectMail">Direct Mail</li>
										<li @click="itemClickWhere" value="Radio">Radio</li>
										<li @click="itemClickWhere" value="University">University</li>
										<li @click="itemClickWhere" value="Friend">Friend</li>
										<li @click="itemClickWhere" value="Other">Other</li>
									</ul>
								</div>
				      <span class="highlight"></span>
				      <span class="bar"></span>
				      <label class="whereSize">How did you hear about us?</label>
				      <span class="down-icon" v-if="showCaret">
				      	<i class="fa fa-lg fa-caret-down" aria-hidden="true"></i>
				      </span>
					</div>

				</div>
					<div class="group">
						<button class="btn btn-lg btn-primary btn-block" @click="submitParticipant">
							Update Your Profile
						</button>
					</div>
			</div>
		<!-- 	<pre>
				name:{{contact.firstname}}
				last:{{contact.lastname}}
				email:{{contact.email}}
				phone:{{contact.phone}}
				dob:{{contact.dob}}
				handedness:{{participant.handedness}}
				ethnicity:{{participant.ethnicity_id}}
				education:{{participant.education_id}}
				income:{{participant.income_id}}
				occupation:{{participant.occupation_id}}
				where:{{this.participant.metadata['How you heard about us?']}}
			</pre> -->
		</div>
	</div>
</template>

<script>
// import PhoneInput from './inputs/PhoneInput.vue'
import { mapGetters, mapMutations, mapActions} from 'vuex'
export default {
	name:'user-form',
	// components:{PhoneInput},
	data () {
		return {
			showEd:false,
			showEth:false,
			showIn:false,
			showOc:false,
			showHand:false,
			showWhere:false,
			editEd:[],
			editEth:[],
			editIn:[],
			editOc:[],
			editHand:[],
			editWhere:[],
			editPhone:[],
			editDOB:[],
			showEx: false,
			showPh:false,
			showCaret:true
		}
	},
	computed: {
		...mapGetters([
			'currentMember',
			'participant',
			'educations',
	        'ethnicities',
	        'incomes',
	        'occupations',
	        'contact'
		])
    },
    watch:{
    	participant(){
    		this.addListeners()
    	},
    	'participant.education_id': function(val, oldVal){
	      	if (val != '') {
	        	this.$refs.edInput.style.background = 'none'
	        }
      	},
      	'participant.ethnicity_id': function(val, oldVal){
	      	if (val != '') {
	        	this.$refs.ethInput.style.background = 'none'
	        }
      	},
      	'participant.income_id': function(val, oldVal){
	      	if (val != '') {
	        	this.$refs.inInput.style.background = 'none'
	        }
      	},
      	'participant.occupation_id': function(val, oldVal){
	      	if (val != '') {
	        	this.$refs.ocInput.style.background = 'none'
	        }
      	},
      	'participant.handedness': function(val, oldVal){
	      	if (val != '') {
	        	this.$refs.haInput.style.background = 'none'
	        }
      	},
      	'contact.dob': function(val, oldVal){
	      	if (val != '') {
	        	this.$refs.dobInput.style.background = 'none'
	        }
      	},
      	'contact.phone': function(val, oldVal){
	      	if (val != '') {
	        	this.$refs.phoneInput.style.background = 'none'
	        }
      	},
      	'participant.notes': function(val, oldVal){
	      	if (val != '') {
	        	this.$refs.whereInput.style.background = 'none'
	        }
      	}
    },
    directives: {
    	'click-outside': {
    		priority: 700,
		    bind: function(el, binding, vNode) {
		        // Provided expression must evaluate to a function.
		        // if (typeof binding.value !== 'function') {
		        // 	const compName = vNode.context.name
		        //   let warn = `[Vue-click-outside:] provided expression '${binding.expression}' is not a function, but has to be`
		        //   if (compName) { warn += `Found in component '${compName}'` }
		          
		        //   console.warn(warn)
		        // }
		        // Define Handler and cache it on the element
		        const bubble = binding.modifiers.bubble
		        const handler = (e) => {
		          if (bubble || (!el.contains(e.target) && el !== e.target)) {
		          	binding.value(e)
		          }
		        }
		        el.__vueClickOutside__ = handler

		        // add Event Listeners
		        document.addEventListener('click', handler)
			},
			unbind: function(el, binding) {
		        // Remove Event Listeners
		        document.removeEventListener('click', el.__vueClickOutside__)
		        el.__vueClickOutside__ = null
	      }
		  }
    },
    mounted () {
        this.addListeners()
        this.init()
    },
	methods: {
		...mapActions([
			'fetchEducations',
	        'fetchEthnicities',
	        'fetchIncomes',
	        'fetchOccupations',
	        'updateParticipant'
		]),
		init(){
			this.fetchEducations()
	        this.fetchEthnicities()
	        this.fetchIncomes()
	        this.fetchOccupations()
		},
		addListeners(){
			let vm = this
			function checkInputs() {
				var l = []
				var x = document.getElementsByTagName("input");
				for (var i = 0; i < x.length; i++) {
					var xValue = x[i]
					if(xValue.value === ''){
						xValue.style.background = 'rgba(62, 206, 255, 0.43)'
					}else{
						xValue.style.background = 'none'
					}
				}
			}
			function formatDOB(){
				let dob = vm.contact.dob,
					arr = dob.split("-"),
					year = arr[0],
					month = arr[1],
					dayTime = arr[2],
					date = dayTime.slice(0, 2)
				vm.editDOB = month+date+year
				vm.$refs.dobInput.style.background = 'none'
			}
			checkInputs()
			formatDOB()
		},
		unMaskPhone(e){
			this.showPh = false
			this.editPhone = e.target.value
			this.contact.phone = this.editPhone.replace(/[^+\d]+/g, "");
			if (this.contact.phone != '') {
	        	this.$refs.phoneInput.style.background = 'none'
	        }
		},
		unMaskDOB(e){
			this.showEx = false
			this.editDOB = e.target.value;
			var arr = this.editDOB.split("/");
			this.contact.dob = arr[2]+'-'+arr[0] +'-'+arr[1] +'T12:00:00.000Z'
		},
		dropEd(){this.showEd = !this.showEd},
		dropEth(){this.showEth = !this.showEth},
		dropIn(){this.showIn = !this.showIn},
		dropOc(){this.showOc = !this.showOc},
		dropHand(){this.showHand = !this.showHand},
		dropWhere(){this.showWhere = !this.showWhere},
		itemClickEd(e){
			this.participant.education_id = e.target.value
			this.editEd = e.target.innerText
			this.showEd = !this.showEd
		},
		itemClickEth(e){
			this.participant.ethnicity_id = e.target.value
			this.editEth = e.target.innerText
			this.showEth = !this.showEth
		},
		itemClickIn(e){
			this.participant.income_id = e.target.value
			this.editIn = e.target.innerText
			this.showIn = !this.showIn
		},
		itemClickOc(e){
			this.participant.occupation_id = e.target.value
			this.editOc = e.target.innerText
			this.showOc = !this.showOc
		},
		itemClickHand(e){
			this.participant.handedness = e.target.value
			this.editHand = e.target.innerText
			this.showHand = !this.showHand
		},
		itemClickWhere(e){
			this.participant.metadata = {}
			this.participant.metadata['How you heard about us?']= e.target.innerText
			this.editWhere = e.target.innerText
			this.showWhere = !this.showWhere
		},
		closeEvent(){
				if(this.showEd != false){
		  		this.showEd = !this.showEd
				}
				if(this.showEth != false){
		  		this.showEth = !this.showEth
				}
				if(this.showIn != false){
		  		this.showIn = !this.showIn
				}
				if(this.showOc != false){
		  		this.showOc = !this.showOc
				}
				if(this.showHand != false){
		  		this.showHand = !this.showHand
				}
				if(this.showWhere != false){
		  		this.showWhere = !this.showWhere
				}
		},
		submitParticipant(){
			if (this.validParticipant()) {
				console.log("this.participant:",this.participant)
				console.log("this.contact:",this.contact)
			  this.updateParticipant({ participant: this.participant, contact: this.contact })
			}

		},
       	validParticipant () {
       		this.contact.phone = this.contact.phone.replace(/[^+\d]+/g, "");
       		return true
      	}
    }
}
</script>

<style scoped>
.input-hightlight-sm{
	width: 150px;
    height: 25px;
    display: block;
    position: absolute;
    border-radius: 2%;
    bottom: 26%;
    background: rgba(62, 206, 255, 0.43);
}
.dropDown ul{
	background: #fff;
	box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);
	display: block;
	list-style: none;
	margin-top: 2px;
	overflow: hidden;
	padding: 0 1px;
	position: absolute;
	height: auto;
	width: 100%;
	z-index: 2;
}
.dropDown ul li {
	position: relative;
	min-height: 32px;
  	padding: 8px 4px;
  	overflow: hidden;
}
.dropDown ul li:hover {
	background-color: #eee;
}
.user-form{
	/*max-width: 600px;*/
}
.user-form1 {
	padding: 0 10%;
}
.user-form2{
	padding: 0 10%;
}
.emailInput{
	width:100%;
}
.whereSize{
	font-size: 14px;
}
button{
	background-color:#003399;
	margin-bottom: 5%;
	height:50px;
	font-size: 1.5em;
	border-radius: 0px;
}

.down-icon{
	position: absolute;
    z-index: 2;
    top: 14px;
    right: 15px;
}
.down-icon i{
	font-size: 1.5em;
    color: rgba(76, 78, 77, 0.55);
}
/* remove input type=date stylings ------------------------------------------ */
input::-webkit-datetime-edit{ color: transparent; }
input:focus::-webkit-datetime-edit{ color: #000; }

* { box-sizing:border-box; }

/* bae-sic stylings ------------------------------------------ */
h2 		 { 
  text-align:center; 
  margin-bottom:50px; 
}
h2 small { 
  font-weight:normal; 
  color:#888; 
  display:block; 
}
/* form starting stylings ------------------------------- */
.group 			  { 
  position:relative; 
  margin-bottom:45px; 
}
input 				{
  font-size:18px;
  padding:10px 10px 10px 5px;
  display:block;
  width:200px;
  border:none;
  border-bottom:1px solid #757575;
}
input:focus 		{ outline:none; }

/* LABEL ======================================= */
label 				 {
  color:#999; 
  font-size:18px;
  font-weight:normal;
  position:absolute;
  pointer-events:none;
  left:5px;
  top:10px;
  transition:0.2s ease all; 
  -moz-transition:0.2s ease all; 
  -webkit-transition:0.2s ease all;
}

/* active state */
input:focus ~ label, input:valid ~ label 		{
  top:-20px;
  font-size:14px;
  color:#5264AE;
}

/* BOTTOM BARS ================================= */
.bar{ 
	position:relative; 
	display:block; 
	width:200px; 
}
.bar:before, .bar:after{
  content:'';
  height:2px; 
  width:0;
  bottom:1px; 
  position:absolute;
  background:#5264AE; 
  transition:0.2s ease all; 
  -moz-transition:0.2s ease all; 
  -webkit-transition:0.2s ease all;
}
.bar:before {
  left:50%;
}
.bar:after {
  right:50%; 
}

/* active state */
input:focus ~ .bar:before, input:focus ~ .bar:after {
  width:50%;
}

/* HIGHLIGHTER ================================== */
.highlight {
  position:absolute;
  height:60%; 
  width:100%; 
  top:25%; 
  left:0;
  pointer-events:none;
  opacity:0.5;
}

.highlightHand {
  position:absolute;a
  height:60%; 
  width:200px; 
  top:25%; 
  left:0;
  pointer-events:none;
  opacity:0.5;
}
/* active state */
input:focus ~ .highlight {
  -webkit-animation:inputHighlighter 0.3s ease;
  -moz-animation:inputHighlighter 0.3s ease;
  animation:inputHighlighter 0.3s ease;
}
input:focus ~ .highlightHand {
  -webkit-animation:inputHighlighter 0.3s ease;
  -moz-animation:inputHighlighter 0.3s ease;
  animation:inputHighlighter 0.3s ease;
}
.dropDown-enter-active, .dropDown-leave-active {
  transition: all 0.5s ease;
}
.dropDown-enter, .dropDown-leave-to {
  height: 0;
 /*opacity: 0;*/
 
}
/* ANIMATIONS ================ */
@-webkit-keyframes inputHighlighter {
	from { background:#5264AE; }
  to 	{ width:0; background:transparent; }
}
@-moz-keyframes inputHighlighter {
	from { background:#5264AE; }
  to 	{ width:0; background:transparent; }
}
@keyframes inputHighlighter {
	from { background:#5264AE; }
  to 	{ width:0; background:transparent; }
}







/*
	h2{
		text-align: right;
	}
	input {
		border-radius: 0px;
	    border: none;
	    border-bottom: 1px solid pink;
	}
	.input-group{
		border-radius: 0px;
	}
	.form-control {
		border-bottom-left-radius: 0px;
		border-bottom-right-radius: 0px;
	}*/
</style>