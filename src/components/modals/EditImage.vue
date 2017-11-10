<template>
	<div>
		<div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">

          <div class="modal-header">
            <h3 name="header">
              upload an image
            </h3>
            <button class="modal-default-button" @click="$emit('close')">X
              </button>
          </div>

          <div class="modal-body">
            <div name="body">
		<div v-if="!image">
		    <h2>Select an image</h2>
		    <input type="file" @change="onFileChange" accept="image/*">
		</div>
		<div class="imgDiv" v-else>
		    <img :src="image" />
		    <button @click="removeImage">Remove image</button>
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
			image: null,
            authorized: ['image/jpeg', 'image/png'],
            error:[],
            index: []
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
	    onFileChange(e) {
	      let files = e.target.files || e.dataTransfer.files;

	      if (!files.length) return;

		    if(this.isValid(files[0].name)){
		    	this.createImage(files[0]);
		  	}else{
		  		this.error.push({message: "There seems to be an error. Please be sure you're uploading a jpeg or png image."})
		  	}
	    },
	    createImage(file) {
	      var image = new Image();
	      var reader = new FileReader();
	      var vm = this;

	      reader.onload = (e) => {
	        vm.image = e.target.result;
	      };
	      reader.readAsDataURL(file);
	    },
	    removeImage(e) {
	      this.image = '';
	    },
	    saveAndClose(){
	    	this.participant.image = this.image
	    	this.$emit('close')
	    },
	    isValid(filename){
            let index = this.authorized.indexOf(mime.lookup(filename))
            return index !== -1
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