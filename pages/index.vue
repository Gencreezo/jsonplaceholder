<template>
  <div>
    <PostCreate />
    <Posts />
  </div>
</template>

<script>
import PostCreate from '@/components/PostCreate.vue'
import Posts from '@/components/Posts.vue'
export default {
  components: {
    PostCreate,
    Posts,
  },
}
</script>

<style></style>
