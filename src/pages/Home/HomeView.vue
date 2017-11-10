<template>
	<div>
		<card :title="title" :body="body" :footer="footer"></card>
	</div>
</template>

<script>
import Card from '../../components/cards/CardTemp.vue'
export default {
	name: 'home-view',
	components:{ Card},
	data () {
		return {
			title:'Welcome!',
			body:"This site was created as a way to engage our panelist with more opportunities to......something...something something something something .",
			footer:"Nov 10th, 2017"
		}
	},
	methods: {
		
	}
}
</script>
