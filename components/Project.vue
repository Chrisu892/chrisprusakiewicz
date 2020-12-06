<template>
  <article class="project">
    <picture>
      <source media="(max-width: 768px)" :srcset="project.thumbnail.small" />
      <img :src="project.thumbnail.large" :alt="project.title" class="project__image" />
    </picture>
    <nuxt-link :to="project.slug" title="View GinnyD Project" class="project__overlay">
      <div class="project__text">
        <h3 class="project__title">{{ project.title }}</h3>
      </div>
    </nuxt-link>
  </article>
</template>

<script>
  export default {
    props: {
      project: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style scoped lang="scss">
  .project {
    padding-top: 50%;
    position: relative;
    width: 50%;
    overflow: hidden;
  }
  .project__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    transition: transform 300ms ease;
  }
  .project__overlay {
    @include absolute-fill;
    @include flex-row;
    align-items: center;
    justify-content: center;
    padding: 4rem;

    &::before {
      @include absolute-fill;
      content: '';
      background-color: $clr-dark;
      opacity: 0.8;
    }
  }
  .project__text {
    color: $clr-white;
    position: relative;
    z-index: 1;
  }
  .project__title {
    font-weight: $bold-weight;
    font-size: 1.5em;
  }
  .project__tagline {
    line-height: 1.6;
  }
  .project:hover .project__image {
    transform: scale(1.1);
  }
</style>