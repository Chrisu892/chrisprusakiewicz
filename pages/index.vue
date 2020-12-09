<template>
  <main id="main" class="main">
    <section class="main__content" :class="{ 'swap': swap }">
      <nuxt-child />
    </section>
    <section class="main__aside" :class="{ 'swap': swap }">
      <div class="hero">
        <div class="hero__content animate">
          <p v-if="page.caption" class="hero__caption"><strong>{{ page.caption }}</strong></p>
          <h1 v-if="page.title" class="hero__title">{{ page.title }}</h1>
          <p v-if="page.tagline" class="hero__tagline">{{ page.tagline }}</p>
        </div>
        <div v-if="page.action" class="hero__actions animate delay">
          <Button :action="page.action" />
        </div>
      </div>
      <div class="hero__socials">
        <a href="https://www.linkedin.com/chris-prusakiewicz" class="hero__social" target="_blank" title="Visit my LinkedIn profile">LinkedIn</a>
        <a href="https://www.github.com/Chrisu892" class="hero__social" target="_blank" title="Visit my GitHub profile">GitHub</a>
        <a href="https://www.behance.com/chrisu892" class="hero__social" target="_blank" title="Visit my Behance profile">Behance</a>
      </div>
    </section>
  </main>
</template>

<script>
  import Button from '@/components/Button'

  export default {
    components: {
      Button,
    },
    computed: {
      page() {
        return this.$store.state.page
      },
      swap() {
        return this.page.slug != 'index'
      }
    }
  }
</script>

<style scoped lang="scss">
  .page-enter-active,
  .page-leave-active {
    transition: all 300ms ease;
  }
  .page-enter,
  .page-leave-active {
    opacity: 0;
    transform-origin: 50% 50%;
  }

  .main {
    @include flex-row;
    overflow: hidden;
    width: 100%;
  }
  .main__content {
    margin-right: auto;
    position: absolute;
    left: 0;
    right: $aside;
  }
  .main__aside {
    @include align-center;
    @include constellation-pattern;
    background-color: $clr-dark;
    bottom: 0;
    padding: 6rem 3.5rem;
    position: fixed;
    right: 0;
    top: 0;
    width: $aside;

    &::before {
      @include absolute-fill;
      content: '';
      background: radial-gradient(rgba($clr-dark, 0) 0%, $clr-dark 100%);
    }
  }

  .hero {
    color: $clr-white;
    position: relative;
    z-index: 1;
  }
  .hero__caption {
    font-size: 0.8em;
    text-transform: uppercase;
    letter-spacing: 1px;
    opacity: 1;
  }
  .hero__title {
    font-size: 2.8em;
    font-weight: $bold-weight;
    margin: 1.5rem 0;
    line-height: 1.1;
  }
  .hero__tagline {
    font-size: 1.38em;
    line-height: 1.5;
    margin-bottom: 2rem;
  }

  .hero__socials {
    @include flex-row;
    align-items: center;
    position: absolute;
    right: 0;
    bottom: 0;
    width: 100%;
    color: $clr-white;
    padding: 1.5rem 4rem;
  }
  .hero__social {
    display: inline-block;
    margin-right: 2rem;
    color: $clr-white;
    font-size: 0.9em;
    padding-bottom: 0.25rem;
    border-bottom: solid 1px $clr-white;
    border-color: rgba($clr-white, 0.1);
    position: relative;

    &:last-child {
      margin-right: 0;
    }

    &::before {
      content: '';
      position: absolute;
      bottom: -1px;
      left: 0;
      width: 100%;
      border-bottom: solid 1px $clr-white;
      opacity: 0;
      transform-origin: left;
      transform: rotateY(90deg);
      transition:
        transform 300ms ease,
        opacity 300ms ease;
    }

    &:hover::before {
      transform: rotateY(0deg);
      opacity: 1;
    }
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

  // .main__aside.swap {
  //   animation: swap 400ms ease forwards;
  // }
  // .main__aside.swap-leave {
  //   animation: swap-leave 400ms forwards;
  // }

  //
  
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
</style>
