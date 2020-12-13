<template>
  <article class="project">

    <div v-if="page.title1 || page.content1" class="project__section">
      <div v-if="page.image1" class="project__image bottom-shader animate persist">
        <picture>
          <source media="(max-width:768px)" :srcset="page.image1.small" />
          <img :src="page.image1.large" :alt="page.title1" class="project__image__source" />
        </picture>
      </div>
      <div v-if="page.title1 || page.content1" class="project__content">
        <h2 v-if="page.title1" class="project__title">{{ page.title1 }}</h2>
        <div v-if="page.content1" class="project__text" v-html="page.content1" />
      </div>
    </div>

    <div v-if="page.title2 || page.content2" class="project__section reverse">
      <div v-if="page.image2" class="project__image bottom-shader animate persist">
        <picture>
          <source media="(max-width:768px)" :srcset="page.image1.small" />
          <img :src="page.image1.large" :alt="page.title1" class="project__image__source" />
        </picture>
      </div>
      <div v-if="page.title2 || page.content2" class="project__content">
        <h2 v-if="page.title2" class="project__title">{{ page.title2 }}</h2>
        <div v-if="page.content2" class="project__text" v-html="page.content2" />
      </div>
    </div>

    <div v-if="page.title3 || page.content3" class="project__section">
      <div v-if="page.image3" class="project__image bottom-shader animate persist">
        <picture>
          <source media="(max-width:768px)" :srcset="page.image1.small" />
          <img :src="page.image1.large" :alt="page.title1" class="project__image__source" />
        </picture>
      </div>
      <div v-if="page.title3 || page.content3" class="project__content">
        <h2 v-if="page.title3" class="project__title">{{ page.title3 }}</h2>
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
      }
    },
    scrollToTop: true,
  }
</script>

<style scoped lang="scss">
  .project__image {
    overflow: hidden;
    padding-top: 80%;
    position: relative;
  }
  .project__image__source {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }
  .project__content {
    background-color: $clr-white;
    padding: 4rem 2rem;
  }
  .project__title {
    font-size: 1.75em;
    font-weight: $bold-weight;
    margin-bottom: 1.5rem;
  }
  .project__return {
    padding: 6rem 2rem;
    text-align: center;
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