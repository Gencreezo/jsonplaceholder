export const state = () => ({
  users: [],
  user: {
    id: 11,
    name: '',
    username: 'Anonymous',
    email: '',
    address: {
      street: '',
      suite: '',
      city: '',
      zipcode: '',
      geo: {
        lat: '',
        lng: '',
      },
    },
    phone: '',
    website: '',
    company: {
      name: '',
      catchPhrase: '',
      bs: '',
    },
  },
})

export const getters = {
  getUserByID(state, id) {
    return state.users.filter((user) => {
      return user.id === id
    })
  },
  getAnonymousUser(state) {
    return state.user
  },
}

export const mutations = {
  SET_USERS(state, users) {
    state.users = users
    console.log('before add', state.users)
  },
  ADD_ANONYMOUS_USER(state) {
    const user = state.user
    console.log(user)
    state.users.unshift(user)
    console.log('after add', state.users)
  },
}

export const actions = {
  async fetchUsers({ commit }) {
    const users = await this.$axios.$get(
      'https://jsonplaceholder.typicode.com/users'
    )
    commit('SET_USERS', users)
    commit('ADD_ANONYMOUS_USER')
  },
}
