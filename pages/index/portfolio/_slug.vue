<template>
  <article class="project">
    <div class="project__wrap">
      <div class="project__image bottom-shader">
        <img src="/images/portfolio/aristocrat-london/thumb@2x.jpg" />
        <div class="project__scroll">&#10095;</div>
      </div>
      <div class="project__content">
        <h2 class="project__title">Project Subtitle</h2>
        <p class="project__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus culpa voluptates ullam quibusdam debitis eveniet assumenda eaque consequuntur quos! Magnam atque soluta perspiciatis laborum iste odit voluptatem consectetur accusantium deserunt?</p>
        <p class="project__text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, facilis nemo laudantium et saepe iste, maiores cumque eum, officiis commodi porro similique expedita perferendis accusantium quidem assumenda nisi. Dignissimos, temporibus!</p>
      </div>
      <div class="project__image shader">
        <img src="/images/portfolio/aristocrat-london/thumb@2x.jpg" />
      </div>
      <div class="project__content">
        <h2 class="project__title">Project Subtitle</h2>
        <p class="project__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque omnis tempore quam nulla rem, temporibus similique soluta quas nihil officiis maxime sunt corrupti deleniti exercitationem cum architecto, nisi non! Impedit.</p>
        <p class="project__text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem architecto laudantium, optio similique sed dolorem soluta odio reiciendis perferendis nemo, eos mollitia recusandae animi fugiat aspernatur fuga! Perspiciatis, ad magni?</p>
      </div>
      <div class="project__image shader">
        <img src="/images/portfolio/aristocrat-london/thumb@2x.jpg" />
      </div>
      <div class="project__content">
        <h2 class="project__title">Project Subtitle</h2>
        <p class="project__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi eos aspernatur ad corrupti doloribus magni corporis. Sit id impedit molestias, tempore culpa fugiat, repellendus illo unde atque laboriosam perspiciatis voluptatibus.</p>
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