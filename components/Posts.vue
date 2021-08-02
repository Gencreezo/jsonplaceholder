<template>
  <div>
    <v-card
      v-for="post in post.posts"
      :key="post.id"
      :post="post"
      class="mx-auto mb-5"
      outlined
    >
      <v-list-item three-line>
        <v-list-item-content>
          <div class="text-overline mb-4">@{{ getUser(post.userId) }}</div>
          <v-list-item-title class="text-h5 mb-1">
            {{ post.title }}
          </v-list-item-title>
          <v-list-item-subtitle>{{ post.body }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-card-actions>
        <v-btn icon>
          <v-icon color="green">mdi-arrow-up-bold</v-icon>
        </v-btn>
        <v-btn icon color="red">
          <v-icon>mdi-arrow-down-bold</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data: () => ({
    name: 'Posts',
  }),
  beforeCreate() {
    this.$store.dispatch('user/fetchUsers')
    this.$store.dispatch('post/fetchPosts')
  },
  computed: {
    ...mapState(['post', 'user']),
  },
  methods: {
    getUser(id) {
      let user = this.user.users.filter((user) => {
        return user.id === id
      })
      if (user) {
        return user[0].username
      } else {
        return 'Anonymous'
      }
    },
  },
}
</script>

<style>
.m-0 {
  margin: 0 !important;
}
</style>
