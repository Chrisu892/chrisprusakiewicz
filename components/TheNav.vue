<template>
  <nav
    id="nav"
    class="nav"
    :class="{ 'active': isActive }">
    <ul
      class="nav__list">
      <li
        v-for="(page, idx) in pages"
        :key="idx"
        class="nav__list__item"
        @click="toggleNav()">
        <picture>
          <source media="(max-width:768px)" :srcset="page.image.small" />
          <img :src="page.image.large" :alt="page.title" class="nav__list__image" />
        </picture>
        <nuxt-link
          :to="localePath(page.correctPath)"
          class="nav__list__link">
          <span>{{ page.navTitle }}</span>
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
  export default {
    computed: {
      isActive() {
        return this.$store.state.showNav
      },
      pages() {
        return this.$store.state.pages
      }
    },
    methods: {
      toggleNav() {
        this.$store.dispatch('toggleNav')
      }
    }
  }
</script>

<style scoped lang="scss">
  .nav {
    @include absolute-fill;
    background-color: $clr-dark;
    position: fixed;
    visibility: hidden;
    opacity: 0;
    z-index: 1;
    transition:
      visibility 300ms ease-in-out,
      opacity 300ms ease-in-out;

    &.active {
      visibility: visible;
      opacity: 1;
    }
  }
  .nav__list {
    @include flex-row;
    height: 100%;
    width: 100%;
  }
  .nav__list__item {
    color: $clr-white;
    margin: 0;
    padding: 0;
    width: 25%;
    overflow: hidden;
    position: relative;
  }
  .nav__list__image {
    @include absolute-fill;
    transition: transform 300ms ease;

    @supports (object-fit: cover) {
      object-fit: cover;
    }
  }
  .nav__list__link {
    @include absolute-fill;
    display: block;
    height: 100%;
    width: 100%;
    position: absolute;
    
    &::before {
      @include absolute-fill;
      background-color: $clr-dark;
      content: '';
      opacity: 0.8;
    }

    span {
      color: $clr-white;
      font-size: 2.4em;
      font-weight: $bold-weight;
      position: absolute;
      z-index: 1;
      left: 50%;
      bottom: 10%;
      transform: translateX(-50%);
      text-align: center;
      line-height: 1.2;
    }
  }

  // Hover states

  .nav__list__item:hover .nav__list__image {
    transform: scale(1.1);
  }

  // Media queries

  @media screen and (max-width: 768px) {
    .nav__list {
      @include flex-column;
    }
    .nav__list__item {
      height: 25%;
      width: 100%;
    }
    .nav__list__link span {
      font-size: 2em;
    }
  }
</style>