<template>
  <div>
    <v-btn @click="newPost = true" class="primary mb-4">New Post</v-btn>
    <v-card v-if="newPost" class="mx-auto my-5" outlined>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field
          v-model="post.title"
          label="Title*"
          class="mx-4 mt-4"
          :rules="[
            (v) => !!v || 'Title is required',
            (v) => v == null || v.length <= 255 || 'Max 255 characters',
          ]"
          counter="255"
          required
          outlined
        ></v-text-field>
        <v-textarea
          v-model="post.body"
          label="Text*"
          class="mx-4 mb-4"
          :rules="[
            (v) => v == null || v.length <= 1500 || 'Max 1500 characters',
          ]"
          counter="1500"
          maxlength="1500"
          outlined
          auto-grow
          required
        ></v-textarea>
        <div class="d-flex justify-end">
          <v-btn color="error" class="mr-4 mb-4" @click="newPost = false"
            >Cancel</v-btn
          >
          <v-btn
            :disabled="!valid"
            color="success"
            class="mr-4 mb-4"
            @click="submit()"
            >Post</v-btn
          >
        </div>
      </v-form>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    name: 'PostCreate',
    newPost: false,
    post: {
      userId: 11,
      title: '',
      body: '',
    },
    valid: true,
  }),
  computed: {},
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        console.log(this.post)
        this.$store.dispatch('post/createPost', this.post)
      }
    },
    reset() {
      this.$refs.form.reset()
    },
  },
}
</script>

<style></style>
