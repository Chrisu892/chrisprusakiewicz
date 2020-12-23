<template>
  <div class="video" style="background:url('/images/work.jpg') center center/cover no-repeat;">
    <Carousel />
    <!-- <video class="video__container" muted playsinline loop autoplay>
      <source src="/video/hero.mp4" type="video/mp4" />
    </video> -->
    <div class="video__overlay" />
  </div>
</template>

<script>
  import Carousel from '@/components/Carousel'

  export default {
    scrollToTop: true,
    components: {
      Carousel,
    },
    async asyncData({ $content, store, app }) {
      const page = await $content(`pages/${app.i18n.locale}/index`)
        .where({ status: 'live' })
        .fetch()

      store.dispatch('updatePage', page)
      store.dispatch('fetchPages')
    }
  }
</script>

<style scoped lang="scss">
  .video {
    height: 100vh;
    overflow: hidden;
    position: relative;
    width: 100%;
  }
  .video__container {
    position: absolute;
    left: 50%;
    top: 50%;
    width: auto;
    height: 100%;
    transform: translate(-50%,-50%);
  }
  .video__overlay {
    @include texture-pattern;
    @include absolute-fill;

    &::before {
      @include absolute-fill;
      content: '';
      background-color: $clr-dark;
      opacity: 0.5;
    }
  }
</style>