<template>
  <article class="project">

    <div v-if="page.title1 || page.content1" class="project__section">
      <div v-if="page.headerImage" class="project__image bottom-shader animate persist">
        <div v-if="page.headerCutout" class="project__image__overlay" :style="background" />
        <picture>
          <source media="(max-width:768px)" :srcset="page.headerImage.small" />
          <img :src="page.headerImage.large" :alt="page.title1" class="project__image__poster" />
        </picture>
        <picture v-if="page.headerCutout">
          <source media="(max-width:768px)" :srcset="page.headerCutout.small" />
          <img :src="page.headerCutout.large" :alt="page.title1" class="project__image__cutout" />
        </picture>
      </div>
      <div v-if="page.title1 || page.content1" class="project__content">
        <h2 v-if="page.title1" class="project__title">
          {{ page.title1 }}
          <span class="project__title__underline" :style="borderColor" />
        </h2>
        <div v-if="page.content1" class="project__text" v-html="page.content1" />
      </div>
    </div>

    <div v-if="page.title2 || page.content2" class="project__section reverse">
      <div v-if="page.introImage" class="project__image bottom-shader animate persist">
        <div v-if="page.introCutout" class="project__image__overlay" />
        <picture>
          <source media="(max-width:768px)" :srcset="page.introImage.small" />
          <img :src="page.introImage.large" :alt="page.title2" class="project__image__poster" />
        </picture>
        <picture v-if="page.introCutout">
          <source media="(max-width:768px)" :srcset="page.introCutout.small" />
          <img :src="page.introCutout.large" :alt="page.title2" class="project__image__cutout" :class="adjust" />
        </picture>
      </div>
      <div v-if="page.title2 || page.content2" class="project__content">
        <h2 v-if="page.title2" class="project__title">
          {{ page.title2 }}
          <span class="project__title__underline" :style="borderColor" />
        </h2>
        <div v-if="page.content2" class="project__text" v-html="page.content2" />
      </div>
    </div>

    <div v-if="page.title3 || page.content3" class="project__section">
      <div v-if="page.sketchImage" class="project__image sketch bottom-shader animate persist">
        <picture>
          <source media="(max-width:768px)" :srcset="page.sketchImage.small" />
          <img :src="page.sketchImage.large" :alt="page.title3" class="project__image__sketch" />
        </picture>
      </div>
      <div v-if="page.title3 || page.content3" class="project__content">
        <h2 v-if="page.title3" class="project__title">
          {{ page.title3 }}
          <span class="project__title__underline" :style="borderColor" />
        </h2>
        <div v-if="page.content3" class="project__text" v-html="page.content3" />
      </div>
    </div>

    <div class="project__return">
      <Button :action="{ link: '/portfolio/', title: 'View all Projects' }" />
    </div>

  </article>
</template>

<script>
  import Button from '@/components/Button'

  export default {
    components: {
      Button
    },
    async asyncData({ $content, store, params, app }) {
      console.log(app.i18n.locale)
      const page = await $content(`portfolio/${app.i18n.locale}`)
        .where({ status: 'live', slug: params.slug })
        .fetch()

      store.dispatch('updatePage', page[0])
    },
    computed: {
      page() {
        return this.$store.state.page
      },
      borderColor() {
        return this.page.color ? `border-color:${this.page.color}` : null
      },
      background() {
        return this.page.color ? `background-color:${this.page.color}` : null
      },
      adjust() {
        if (this.page.introCutout.adjust == 'small') {
          return 'smaller'
        }
      }
    },
    scrollToTop: true,
  }
</script>

<style scoped lang="scss">
  .project__image {
    background-color: $clr-white;
    overflow: hidden;
    padding-top: 80%;
    position: relative;
  }
  .project__image.sketch {
    @include graph-paper-pattern;
  }
  .project__image__overlay {
    @include absolute-fill;
    background-color: $clr-dark;
    opacity: 0.6;
    z-index: 2;
  }
  .project__image__poster {
    width: auto;
    height: 100%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;

    @supports (object-fit: cover) {
      width: 100%;
      left: 0;
      top: 0;
      transform: initial;
      object-fit: cover;
    }
  }
  .project__image__sketch {
    height: auto;
    width: 80%;
    margin: 0 10%;
    left: 0;
    transform: translateY(-50%);
    position: absolute;
    top: 50%;
    z-index: 3;
  }
  .project__image__cutout {
    height: auto;
    width: 100%;
    left: 0;
    transform: translateY(-50%);
    padding: 0 2rem;
    position: absolute;
    top: 50%;
    z-index: 3;

    &.smaller {
      margin: 0 20%;
      transform: translateY(-30%);
      width: 60%;
    }
  }
  .project__content {
    background-color: $clr-white;
    padding: 4rem 2rem;
  }
  .project__title {
    color: $clr-dark;
    font-size: 1.75em;
    font-weight: $bold-weight;
    margin-bottom: 1.5rem;
    padding-bottom: 1.5rem;
    position: relative;
  }
  .project__title__underline {
    border: solid 2px $clr-dark;
    bottom: 0;
    content: '';
    left: 0;
    position: absolute;
    width: 3rem;
  }
  .project__return {
    padding: 6rem 2rem;
    text-align: center;
  }

  @media screen and (min-width: 425px) {
    .project__image__cutout {
      margin: 0 10%;
      padding: 0;
      width: 80%;

      &.smaller {
        margin: 0 35%;
        transform: translateY(-50%);
        width: 30%;
      }
    }
  }

  @media screen and (min-width: 1024px) {
    .project__section {
      @include flex-row;

      &.reverse {
        flex-direction: row-reverse;
      }
    }
    .project__image {
      padding-top: 40%;
      width: 50%;
    }
    .project__content {
      width: 50%;
    }
  }

  @media screen and (min-width: 1280px) {
    .project__section {
      display: block;
    }
    .project__image {
      padding-top: 80%;
      width: 100%;
    }
    .project__content {
      width: 100%;
    }
  }

  // Enter-leave animations

  @keyframes enter {
    from {
      transform: scale(1.1);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }

  @keyframes leave {
    from {
      transform: scale(1);
      opacity: 1;
    }
    to {
      transform: scale(1.1);
      opacity: 0;
    }
  }

  .project.animate {
    animation: enter 600ms ease forwards;
  }

  .project.animate-leave {
    animation: leave 600ms ease forwards;
  }
</style>