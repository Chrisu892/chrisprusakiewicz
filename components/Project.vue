<template>
  <article class="project">
    <picture>
      <source media="(max-width: 768px)" :srcset="project.thumbnail.small" />
      <img :src="project.thumbnail.large" :alt="project.title" class="project__image" />
    </picture>
    <nuxt-link :to="localePath(project.correctPath)" title="View GinnyD Project" class="project__overlay">
      <h3 class="project__title">{{ project.title }}</h3>
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
    padding: 2rem;

    &::before {
      @include absolute-fill;
      content: '';
      background-color: $clr-dark;
      opacity: 0.8;
    }
  }
  .project__title {
    font-weight: $bold-weight;
    font-size: 1.25em;
    position: relative;
    text-align: center;
    z-index: 1;
  }
  .project__tagline {
    line-height: 1.6;
  }
  .project:hover .project__image {
    transform: scale(1.1);
  }

  // Enter-leave animations

  @keyframes enter {
    from {
      opacity: 0;
      transform: scale(0.9);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
  @keyframes leave {
    from {
      opacity: 1;
      transform: scale(1);
    }
    to {
      opacity: 0;
      transform: scale(0.9);
    }
  }

  .project.animate {
    animation: enter 300ms ease forwards;
  }
  .project.animate-leave {
    animation: leave 300ms ease forwards;
  }

  @media screen and (min-width: 768px) {
    .project {
      padding-top: 33.333%;
      width: 33.333%;
    }
  }

  @media screen and (min-width: 1280px) {
    .project {
      padding-top: 50%;
      width: 50%;
    }
  }
</style>