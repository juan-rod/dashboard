<template>
  <spinner size="huge"></spinner>
</template>

<script>
import Spinner from 'vue-simple-spinner'

export default {
  name: 'vue-spinner',
  components: { Spinner },
  data() {
    return {
      color: '#777',
    }
  }
}
</script>

<style scoped>
.custom-loader {
  text-align: center;
  margin-top: 50px;
}
</style>