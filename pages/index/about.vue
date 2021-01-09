<template>
  <div class="about">
    <section class="about__header">
      <picture v-if="page.headerImage">
        <source media="(max-width: 768px)" :srcset="page.headerImage.small" />
        <img :src="page.headerImage.large" alt="" />
      </picture>
    </section>
    <section class="about__quote">
      <h2 class="about__quote__text">"I take a picture, but it’s not about who is in the picture or the background of it. It’s about the memories and meanings it holds."</h2>
      <p class="about__quote__author">Mia Hansson</p>
    </section>
    <section v-if="gallery" class="gallery">
      <article v-for="(post, idx) in gallery" :key="idx" class="gallery__image">
        <picture>
          <img :src="post.image.large" :alt="post.title" class="gallery__image__source" />
        </picture>
        <div v-if="post.description" class="gallery__image__overlay">
          <p class="gallery__image__text">{{ post.description }}</p>
        </div>
      </article>
    </section>
    <div class="about__return">
      <Button :action="{ link: '/', title: $t('backHome') }" />
    </div>
  </div>
</template>

<script>
  export default {
    async asyncData({ $content, store, app }) {
      const page = await $content(`pages/${app.i18n.locale}/about`)
        .where({ status: 'live' })
        .fetch()

      const gallery = await $content('gallery')
        .where({ status: 'live' })
        .fetch()

      store.dispatch('updatePage', page)

      return {
        gallery: gallery
      }
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
  .about__quote {
    background-color: $clr-white;
    border-bottom: solid 1px $clr-shade;
    padding: 4rem 2rem;
    text-align: center;
  }
  .about__quote__text {
    font-size: 3em;
  }
  .about__quote__author {
    margin-top: 1rem;
  }

  .gallery {
    @include flex-row;
  }
  .gallery__image {
    padding-top: 33.333%;
    position: relative;
    width: 33.333%;
  }
  .gallery__image__source {
    position: absolute;
    top: 0;
    left: 0;
  }
  .gallery__image__overlay {
    @include absolute-fill;
    @include flex-row;
    align-items: center;
    justify-content: center;
    background-color: rgba($clr-dark, 0.8);
    text-align: center;
    padding: 10%;
    color: $clr-white;
    opacity: 0;
    transition: opacity 300ms linear;
  }
  .gallery__image:hover .gallery__image__overlay {
    opacity: 1;
  }

  .about__return {
    padding: 6rem 2rem;
    text-align: center;
  }

  @media screen and (max-width: 1280px) {
    .about__quote__text {
      font-size: 2.25em;
    }
  }

  @media screen and (max-width: 525px) {
    .about__quote {
      text-align: left;
    }
    .about__quote__text {
      font-size: 1.75em;
    }

    .gallery__image {
      width: 50%;
      padding-top: 50%;
    }
    .gallery__image__text {
      font-size: 0.9em;
    }
  }

  @media screen and (max-width: 320px) {
    .about__quote__text {
      font-size: 1.5em;
    }

    .gallery__image {
      width: 100%;
      padding-top: 100%;
    }
  }
</style>