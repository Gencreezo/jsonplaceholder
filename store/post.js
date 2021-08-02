export const state = () => ({
  posts: [],
  post: {},
})

export const getters = {
  getPostById: (state) => (id) => {
    return state.posts.find((post) => post.id === id)
  },
}

export const mutations = {
  SET_POSTS(state, posts) {
    state.posts = posts
  },
  ADD_POST(state, post) {
    state.posts.unshift(post)
  },
}

export const actions = {
  async fetchPosts({ commit }) {
    const posts = await this.$axios.$get(
      'https://jsonplaceholder.typicode.com/posts'
    )
    commit('SET_POSTS', posts)
  },
  async createPost({ commit }, post) {
    await this.$axios.$post('https://jsonplaceholder.typicode.com/posts', post)
    commit('ADD_POST', post)
  },
}
