<template>
  <div
    class="contact animate persist"
    style="background-image:url('/images/my-photo.jpg');"
  />
</template>

<script>
  export default {
    async asyncData({ $content, store, app }) {
      const page = await $content(`pages/${app.i18n.locale}/contact`)
        .where({ status: 'live' })
        .fetch()

      store.dispatch('updatePage', page)
    },
    computed: {
      page() {
        return this.$store.state.page
      }
    },
    scrollToTop: true,
  }
</script>

<style scoped lang="scss">
  .contact {
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 100vh;
    overflow: hidden;
    width: 100%;
  }
</style>