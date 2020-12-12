<template>
  <div class="video">
    <video class="video__container" muted playsinline loop autoplay>
      <source src="/video/hero.mp4" type="video/mp4" />
    </video>
    <div class="video__overlay" />
  </div>
</template>

<script>
  export default {
    async asyncData({ $content, store, app }) {
      const page = await $content(`pages/${app.i18n.locale}/index`)
        .where({ status: 'live' })
        .fetch()

      store.dispatch('updatePage', page)
    },
    scrollToTop: true,
  }
</script>

<style scoped lang="scss">
  .video {
    height: 100vh;
    overflow: hidden;
    width: 100%;
  }
  .video__container {
    position: absolute;
    left: 50%;
    top: 0;
    width: auto;
    height: 100%;
    transform: translateX(-50%);
  }
  .video__overlay {
    @include texture-pattern;
    @include absolute-fill;

    &::before {
      @include absolute-fill;
      content: '';
      background-color: $clr-dark;
      opacity: 0.3;
    }
  }
</style>