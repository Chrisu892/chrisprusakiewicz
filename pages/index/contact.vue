<template>
  <div class="contact" style="background-image:url('/images/my-photo.jpg');" />
</template>

<script>
  export default {
    async asyncData({ $content, store }) {
      const page = await $content('pages/contact')
        .where({ status: 'live' })
        .fetch()

      store.dispatch('updatePage', page)
    },
    computed: {
      page() {
        return this.$store.state.page
      }
    }
  }
</script>

<style scoped lang="scss">
  .contact {
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 100%;
    width: 100%;
  }
</style>