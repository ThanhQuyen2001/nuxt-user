import api from '@/api'

export default {
	actions: {
		async ListRuralServices() {
			const response = await this.$axios({
				method: 'GET',
				url: api.ListRuralServices,
			})
			return response.data
		},
		async GetRuralServicesDetail(_, ServicesId) {
			const response = await this.$axios({
				method: 'GET',
				url: api.params('GetRuralServicesDetail', { id: ServicesId }),
			})
			return response.data
		},
	},
}
