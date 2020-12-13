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
          <span>&#10230;</span>
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
    width: 50%;

    &::before {
      @include absolute-fill;
      background-color: $clr-dark;
      content: '';
      opacity: 0.84;
    }
  }
  .nav__list {
    font-size: 2.125em;
    font-weight: $bold-weight;
    letter-spacing: 1px;
    padding: 10% 5%;
    text-transform: uppercase;
    width: 50%;
  }
  .nav__list__item {
    margin: 0;
    padding: 10%;
  }
  .nav__list__link {
    display: inline-block;
    position: relative;

    span {
      display: inline-block;
      opacity: 0;
      position: absolute;
      right: -1rem;
      top: 50%;
      transform: translate(0, -50%);
      transition:
        opacity 300ms ease,
        transform 300ms ease,
        visibility 300ms ease;
      visibility: hidden;
    }

    &:hover span {
      opacity: 1;
      transform: translate(100%, -50%);
      visibility: visible;
    }
  }
</style>