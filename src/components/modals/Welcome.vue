<template>
	<div>
		<div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">

          <div class="modal-header">
            <h1 name="header">Welcome to the MediaScience Profile</h1>
        <p>This site was created as a way to engage our panelist with more opportunities to......something...something something something something .</p>
            <button class="modal-default-button" @click="$emit('close')">X
              </button>
          </div>

          <div class="modal-body">
            <div name="body">
              <div class="col-12 profileMain-details border">
                <div class="row">
                  <div class="col-6 border">
                    <p>
                    <span>What Now?</span> First thing you should do is fill out the rest of your profile form. You can access the form in the navigation bar above. 
                    </p>
                  </div>
                  <div class="col-6 border">
                    <p>
                    <span>But Why?</span>  In order for us to best place you in the right study, we need to know a little bit more about you. We wouldn't suggest you join a left handed study if you're right handed!
                    </p>
                  </div>
                  <div class="col-6 border">
                    <p>
                    <span>What's Next? </span> After submitting your profile form, you wait. We know, we know, more waiting. The truth is our NYC lab is still being constructed and finalized. Once that is complete, we will invite you to your first on-sight study. 
                    </p>
                  </div>
                  <div class="col-6 border">
                    <p>
                    <span>And Now? </span> We're just getting started. We will be updating this site to provide online opportunities to take surveys, gain points and receive rewards! 
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="modal-footer">
            <div name="footer">
              <button class="modal-default-button" @click="saveAndClose">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
	</div>
</template>
<script>
import { mapGetters, mapMutations, mapActions} from 'vuex'
import mime from 'mime-types'
export default {
	name:'edit-image',
	data () {
		return {
			
		}
	},
	computed: {
		...mapGetters([
			'currentMember',
			'participant'
		])
	},
	mounted(){

	},
	methods: {
	    saveAndClose(){
	    	this.$emit('close')
	    }
  }
}
</script>
<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, .2);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 50%;
  height:60%;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

.imgDiv{
	height: 200px;
	width: auto;
}
.imgDiv img{
	height:100%;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

</style>