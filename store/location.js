import api from '@/api'

export default {
  state() {
    return {
      location: {
        id: '0',
        slug: 'admin',
        name: 'Nông Nghiệp Số',
      },
    }
  },
  getters: {
    GetLocation: (state) => {
      return state.location
    },
  },
  mutations: {
    UpdateLocation(state, newLocation) {
      state.location = newLocation
    },
    GetLocation: (state) => {
      return state.location
    },
  },
  actions: {
    async GetLocation(_, slug) {
      try {
        const response = await this.$axios({
          method: 'GET',
          url: api.params('GetWard', {
            slug,
          }),
        })

        return response.data
      } catch {
        return {
          code: 400,
          message: 'Not Found!',
        }
      }
    },
  },
}
