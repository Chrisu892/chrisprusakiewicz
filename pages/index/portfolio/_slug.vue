<template>
  <article class="project">
    <div class="project__wrap">
      <div v-if="page.image1" class="project__image bottom-shader">
        <picture>
          <source media="(max-width:768px)" :srcset="page.image1.small" />
          <img :src="page.image1.large" :alt="page.title1" />
        </picture>
        <div class="project__scroll">&#10095;</div>
      </div>
      <div v-if="page.title1 || page.content1" class="project__content">
        <h2 v-if="page.title1" class="project__title">{{ page.title1 }}</h2>
        <div v-if="page.content1" class="project__text" v-html="page.content1" />
      </div>
      <div v-if="page.image2" class="project__image shader">
        <picture>
          <source media="(max-width:768px)" :srcset="page.image2.small" />
          <img :src="page.image1.large" :alt="page.title2" />
        </picture>
      </div>
      <div v-if="page.title2 || page.content2" class="project__content">
        <h2 v-if="page.title2" class="project__title">{{ page.title2 }}</h2>
        <div v-if="page.content2" class="project__text" v-html="page.content2" />
      </div>
      <div v-if="page.image3" class="project__image shader">
        <picture>
          <source media="(max-width:768px)" :srcset="page.image3.small" />
          <img :src="page.image3.large" :alt="page.title3" />
        </picture>
      </div>
      <div v-if="page.title3 || page.content3" class="project__content">
        <h2 v-if="page.title3" class="project__title">{{ page.title3 }}</h2>
        <div v-if="page.content3" class="project__text" v-html="page.content3" />
      </div>
    </div>
  </article>
</template>

<script>
  export default {
    async asyncData({ $content, store, params }) {
      const page = await $content(`portfolio`)
        .where({ status: 'live', slug: params.slug })
        .fetch()

      store.dispatch('updatePage', page[0])
    },
    computed: {
      page() {
        return this.$store.state.page
      }
    }
  }
</script>

<style scoped lang="scss">
  .project {
    height: 100vh;
    overflow-y: scroll;
  }
  .project__image {
    position: relative;

    &.bottom-shader::before,
    &.shader::before,
    &.top-shader::before {
      @include absolute-fill;
      content: '';
      z-index: 1;
    }

    &.bottom-shader::before {
      background: linear-gradient(180deg, rgba($clr-dark, 0) 75%, $clr-dark 100%);
    }

    &.shader::before {
      background: linear-gradient(180deg, $clr-dark 0%, rgba($clr-dark, 0) 25%, rgba($clr-dark, 0) 75%, $clr-dark 100%);
    }

    &.top-shader::before {
      background: linear-gradient(180deg, $clr-dark 25%, rgba($clr-dark, 0) 100%);
    }
  }
  .project__scroll {
    position: absolute;
    left: 50%;
    bottom: 1.5rem;
    transform: translateX(-50%) rotate(90deg);
    color: $clr-white;
    z-index: 2;
  }
  .project__content {
    background-color: $clr-white;
    color: $clr-dark;
    padding: 4rem;
  }
  .project__title {
    font-size: 1.75em;
    font-weight: $bold-weight;
    margin-bottom: 1.5rem;
  }
  .project__text {
    line-height: 1.6;
    margin-bottom: 1.5rem;

    &:last-child {
      margin-bottom: 0;
    }
  }
</style>