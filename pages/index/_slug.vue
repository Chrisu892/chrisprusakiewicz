<template>
  <div>
    <video class="hero__video" muted playsinline loop autoplay>
      <source src="/video/hero.mp4" type="video/mp4" />
    </video>
    <div class="hero__video__overlay">

    </div>
  </div>
</template>

<script>
  export default {
    async asyncData({ $content, store }) {
      const page = await $content('pages/index')
        .where({ status: 'live' })
        .fetch()

      store.dispatch('updatePage', page)
    }
  }
</script>

<style scoped lang="scss">
  .hero__video {
    position: absolute;
    left: 50%;
    top: 0;
    width: auto;
    height: 100%;
    transform: translateX(-50%);
  }
  .hero__video__overlay {
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