<template>
  <main id="main" class="main index">
    <section class="hero" :class="{ 'swap': swap }">
      
        <div class="hero__column video">
          <nuxt-child />
        </div>
        <div class="hero__column text">
          <div class="hero__content">
            <div class="hero__text animate">
              <p v-if="page.caption" class="hero__caption"><strong>{{ page.caption }}</strong></p>
              <h1 v-if="page.title" class="hero__title">{{ page.title }}</h1>
              <p v-if="page.tagline" class="hero__tagline">{{ page.tagline }}</p>
            </div>
            <div v-if="page.action" class="hero__actions animate delay">
              <a v-if="isExternal()" :href="page.action.link" :title="page.action.title" target="_blank" class="button">
                <span class="button__title">{{ page.action.title }}</span>
              </a>
              <nuxt-link v-else :to="page.action.link" :title="page.action.title" class="button">
                <span class="button__title">{{ page.action.title }}</span>
              </nuxt-link>
            </div>
          </div>
          <div class="hero__socials">
            <a href="https://www.linkedin.com/chris-prusakiewicz" class="hero__social" target="_blank" title="Visit my LinkedIn profile">
              LinkedIn
            </a>
            <a href="https://www.github.com/Chrisu892" class="hero__social" target="_blank" title="Visit my GitHub profile">
              GitHub
            </a>
            <a href="https://www.behance.com/chrisu892" class="hero__social" target="_blank" title="Visit my Behance profile">
              Behance
            </a>
          </div>
        </div>

    </section>
  </main>
</template>

<script>
  export default {
    computed: {
      page() {
        return this.$store.state.page
      },
      swap() {
        return this.page.slug != 'index'
      }
    },
    methods: {
      isExternal() {
        return this.page.action.external ? true : false
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

  .hero {
    @include flex-row;
    height: 100vh;
    width: 100%;
    overflow: hidden;
  }
  .hero__column {
    &.video {
      position: relative;
      width: $main;
      overflow: hidden;
    }
    &.text {
      @include align-center;
      @include constellation-pattern;
      position: relative;
      width: $aside;

      &::before {
        @include absolute-fill;
        content: '';
        background: radial-gradient(rgba($clr-dark, 0) 0%, $clr-dark 100%);
      }
    }
  }

  .hero__content {
    color: $clr-white;
    padding: 4rem;
    position: relative;
    z-index: 1;
  }
  .hero__text {
    max-width: 425px;

    @supports (background-clip: text) {
      background: radial-gradient($clr-white 0%, darken($clr-white, 20%) 100%);
      background-clip: text;
      color: transparent;
    }
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

  .button {
    display: inline-block;
    border: solid 1px $clr-white;
    border-color: rgba($clr-white, 0.1);
    font-size: 0.9em;
    text-transform: uppercase;
    letter-spacing: 1px;
    position: relative;
    transition: text-shadow 300ms ease;

    &:hover {
      text-shadow: 0 0 2px $clr-white;
    }

    &::before,
    &::after {
      content: '';
      position: absolute;
      top: 0;
      height: 100%;
      opacity: 0;
      transform: rotateX(90deg);
      transition:
        transform 500ms ease,
        opacity 500ms ease;
    }

    &::before {
      left: 0;
      border-left: solid 1px $clr-white;
      transform-origin: bottom;
    }

    &::after {
      right: 0;
      border-right: solid 1px $clr-white;
      transform-origin: top;
    }

    &:hover::before,
    &:hover::after {
      transform: rotate(0deg);
      opacity: 1;
    }

    &__title {
      display: block;
      padding: 1em 1.6em 1.1em 1.6em;
    }

    &__title::before,
    &__title::after {
      content: '';
      position: absolute;
      width: 100%;
      transform: rotateY(90deg);
      opacity: 0;
      transition:
        transform 350ms ease,
        opacity 350ms ease;
    }

    &__title::before {
      left: 0;
      top: 0;
      border-top: solid 1px $clr-white;
      transform-origin: left;
    }

    &__title::after {
      right: 0;
      bottom: 0;
      border-bottom: solid 1px $clr-white;
      transform-origin: right;
    }

    &:hover &__title::before,
    &:hover &__title::after {
      transform: rotateY(0deg);
      opacity: 1;
    }
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
  .animate {
    animation: enter 400ms ease forwards;

    &.delay {
      opacity: 0;
      animation-delay: 100ms;
    }
  }
  .animate-leave {
    animation: leave 400ms ease forwards;

    &.delay {
      opacity: 1;
      animation-delay: 100ms;
    }
  }
</style>
