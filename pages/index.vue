<template>
  <main id="main" class="main" :class="{ 'index': fullScreen }">

    <section class="main__hero">
      <div class="hero">
        <div class="hero__content animate">
          <Breadcrumb />
          <p v-if="page.caption" class="hero__caption"><strong>{{ page.caption }}</strong></p>
          <template v-if="page.logo">
            <h1 class="hero__title"><img :src="page.logo" class="hero__logo" /></h1>
          </template>
          <h1 v-else-if="page.title" class="hero__title">{{ page.title }}</h1>
          <p v-if="page.tagline" class="hero__tagline">{{ page.tagline }}</p>
        </div>
        <div v-if="page.action" class="hero__actions animate delay">
          <Button :action="page.action" />
        </div>
      </div>
    </section>

    <section class="main__content">
      <nuxt-child />
    </section>

  </main>
</template>

<script>
  import Breadcrumb from '@/components/Breadcrumb'
  import Button from '@/components/Button'
  import TheSocials from '@/components/TheSocials'

  export default {
    components: {
      Breadcrumb,
      Button,
      TheSocials,
    },
    async asyncData({ store }) {
      await store.dispatch('fetchPages')
    },
    computed: {
      page() {
        return this.$store.state.page
      },
      fullScreen() {
        return this.page.slug == 'index' || this.page.slug == 'contact'
      }
    },
    head() {
      return {
        title: `${this.page.correctPath != '/' ? this.page.title + ' : ' : ''}${this.$t('metaTitle')}`,
        meta: [{
          property: 'og:title',
          content: this.page.title
        },{
          property: 'og:description',
          content: this.page.tagline
        },{
          property: 'og:url',
          content: 'https://chrisprusakiewicz.co.uk'
        },{
          property: 'og:image',
          content: this.page.thumbnail ? `https://chrisprusakiewicz.co.uk${this.page.thumbnail.small}` : ''
        },{
          property: 'og:type',
          content: 'website'
        },{
          property: 'og:locale',
          content: 'en_GB'
        }]
      }
    }
  }
</script>

<style scoped lang="scss">

  // Page transition

  .page-enter-active,
  .page-leave-active {
    transition: all 300ms ease;
  }
  .page-enter,
  .page-leave-active {
    opacity: 0;
    transform-origin: 50% 50%;
  }

  // Component styling

  .main {
    @include flex-column;
    position: relative;
  }
  .main__hero {
    @include constellation-pattern;
    height: 50%;
    position: relative;
    height: 100%;
    transition: height 300ms ease;

    &::before {
      @include absolute-fill;
      background: radial-gradient(rgba($clr-dark, 0) 0%, rgba($clr-dark, 0.9) 100%);
      content: '';
    }
  }
  .main__content {
    height: 100%;
  }
  .main.index {
    height: 100vh;
    overflow: hidden;
  }
  .main.index .main__hero {
    @include align-center;
    @include absolute-fill;
    background-color: rgba($clr-dark, 0.6);
    height: 100%;
  }

  // Hero styling

  .hero {
    color: $clr-white;
    padding: 8rem 2rem 4rem 2rem;
    position: relative;
    z-index: 1;
  }
  .hero__logo {
    height: 80px;
    margin-bottom: 1.5rem;
    width: auto;
  }
  .hero__caption {
    font-size: 0.8em;
    text-transform: uppercase;
    letter-spacing: 1px;
    opacity: 1;
    margin-bottom: 1.5rem;
  }
  .hero__title {
    font-size: 3em;
    font-weight: $bold-weight;
    margin-bottom: 1.5rem;
    line-height: 1.1;
  }
  .hero__tagline {
    font-size: 1.38em;
    line-height: 1.5;
  }
  .hero__actions {
    margin-top: 2rem;
  }

  // Enter-Leave Animations

  @keyframes swap {
    0% {
      left: $main;
      right: 0;
      width: $aside;
    }
    10% {
      left: 0;
      right: 0;
      width: 100%;
    }
    90% {
      left: 0;
      right: 0;
      width: 100%;
    }
    100% {
      left: 0;
      right: $main;
      width: $aside;
    }
  }
  @keyframes swap-leave {
    from {
      left: 0;
      right: $main;
    }
    to {
      left: $main;
      right: 0;
    }
  }

  // Hero components animations
  
  @keyframes enter {
    from {
      opacity: 0;
      transform: translateY(1rem);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  @keyframes leave {
    from {
      opacity: 1;
      transform: translateY(0);
    }
    to {
      opacity: 0;
      transform: translateY(1rem);
    }
  }
  .hero__content.animate,
  .hero__actions.animate {
    animation: enter 400ms ease forwards;

    &.delay {
      opacity: 0;
      animation-delay: 100ms;
    }
  }
  .hero__content.animate-leave,
  .hero__actions.animate-leave {
    animation: leave 400ms ease forwards;

    &.delay {
      opacity: 1;
      animation-delay: 100ms;
    }
  }

  // Media queries

  @media screen and (max-width: 1280px) {
    .main.index .main__hero {
      background: none;
    }
  }

  @media screen and (max-width: 768px) {
    .hero__logo {
      height: 60px;
    }
  }

  @media screen and (min-width: 1280px) {
    .main {
      @include flex-row;
      flex-direction: row-reverse;
    }
    .main__content {
      margin-right: $aside;
      width: $main;
    }
    .main__hero {
      position: fixed;
      top: 0;
      right: 0;
      width: $aside;
    }
    .main.index .main__hero {
      @include align-center;
      @include absolute-fill;
      position: relative;
      background-color: rgba($clr-dark, 0.6);
      width: $aside;
      height: 100%;
    }
    .main.index .main__content {
      margin-right: 0;
    }

    .hero {
      padding: 12rem 4rem;
    }
  }
</style>
