<template>
	<div>
		<div v-if="entry">
			<div>
				<div>
					<div class="text-[#44b97c] font-bold text-[22px] mb-2">
						{{ entry.name }}
					</div>
					<div v-html="entry.description"></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'ChiTietDV',
	data() {
		return {
			entry: {},
		}
	},
	async fetch() {
		await this.getRuralService()
	},
	methods: {
		async getRuralService() {
			const response = await this.$store.dispatch(
				'ruralServices/GetRuralService',
				this.$route.params.id
			)
			if (response.code === 200) {
				this.entry = response.data.entry
			}
		},
	},
}
</script>
