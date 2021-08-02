<template>
  <v-app dark>
    <v-app-bar fixed app>
      <h1>{{ title }}</h1>
      <v-btn
        class="ml-4"
        text
        v-for="(item, i) in items"
        :key="i"
        :to="item.to"
        v-text="item.title"
        router
        exact
      ></v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      title: 'JSONPlaceholder',
      items: [
        {
          title: 'Home',
          to: '/',
        },
      ],
    }
  },
}
</script>
