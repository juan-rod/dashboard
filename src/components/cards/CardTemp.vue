<template>
	<div>
		<div class="cardTemp">
			<div class="cardTemp__header">
				<p>{{title}}</p>
			</div>
			<div class="cardTemp__body">
				<slot>
					<p>{{body}}</p>
				</slot>
			</div>
			<div class="cardTemp__footer">
				<p>{{footer}}</p>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: 'card-temp',
	props: ['title', 'body', 'footer'],
	data () {
		return {
			
		}
	},
	methods: {
		
	}
}
</script>