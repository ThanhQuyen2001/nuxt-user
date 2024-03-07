import api from '@/api'

export default {
	actions: {
		async ListNews(_, options) {
			const response = await this.$axios({
				method: 'GET',
				url: api.ListNews,
				params: options,
			})
			return response.data
		},
		async GetNews(_, newsId) {
			if (newsId === undefined) return
			const response = await this.$axios({
				method: 'GET',
				url: api.params('GetNews', { id: newsId }),
			})
			return response.data
		},
		async GetNewsSameCategory(_, categoryId) {
			const response = await this.$axios({
				method: 'GET',
				url: api.GetNewsSameCategory,
				params: { category: categoryId },
			})
			return response.data
		},
	},
}
