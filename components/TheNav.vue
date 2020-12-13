<template>
  <nav
    id="nav"
    class="nav"
    :class="{ 'active': isActive }">
    <div
      class="nav__images"
      :style="`background:url('/images/work.jpg') center center/cover no-repeat;`">

    </div>
    <ul
      class="nav__list">
      <li
        v-for="(page, idx) in pages"
        :key="idx"
        class="nav__list__item"
        @click="toggleNav()">
        <nuxt-link
          :to="localePath(page.correctPath)"
          class="nav__list__link">
          {{ page.navTitle }}
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
    @include flex-row;
    background-color: $clr-dark;
    position: fixed;
    visibility: hidden;
    opacity: 0;
    transition:
      visibility 300ms ease-in-out,
      opacity 300ms ease-in-out;
    z-index: 1;

    &.active {
      visibility: visible;
      opacity: 1;
    }
  }
  .nav__images {
    position: relative;
    width: 100%;
    height: 100%;

    &::before {
      @include absolute-fill;
      background-color: $clr-dark;
      content: '';
      opacity: 0.84;
      z-index: 1;
    }
  }
  .nav__list {
    @include absolute-fill;
    font-size: 1.75em;
    font-weight: $bold-weight;
    letter-spacing: 1px;
    text-transform: uppercase;
    padding: 7rem 0 4rem 0;
  }
  .nav__list__item {
    margin: 0;
    padding: 0;
  }
  .nav__list__link {
    display: block;
    padding: 1rem 2rem;
    position: relative;
    width: 100%;
    z-index: 3;
  }
</style>