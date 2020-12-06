<template>
  <nav id="nav" class="nav" :class="{ 'active': isActive }">
    <ul class="nav__list">
      <li class="nav__list__item work" @click="toggleNav()">
        <nuxt-link to="/portfolio/" class="nav__list__link">My Work</nuxt-link>
      </li>
      <li class="nav__list__item contact" @click="toggleNav()">
        <nuxt-link to="/contact/" class="nav__list__link">Contact</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
  export default {
    computed: {
      isActive() {
        return this.$store.state.showNav
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
    position: fixed;
    visibility: hidden;
    opacity: 0;
    transition:
      visibility 300ms ease-in-out,
      opacity 300ms ease-in-out;

    &.active {
      visibility: visible;
      opacity: 1;
    }
  }
  .nav__list {
    @include flex-column;
    height: 100%;
  }
  .nav__list__item {
    flex: 1;
    position: relative;

    &::before,
    &::after {
      @include absolute-fill;
      content: '';
    }

    &::before {
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
    }

    &::after {
      background-color: $clr-dark;
      opacity: 0.75;
    }

    &.work::before {
      background-image: url('/images/work.jpg');
    }

    &.contact::before {
      background-image: url('/images/contact.jpg');
    }
  }
  .nav__list__link {
    @include align-center;
    justify-content: center;
    width: 100%;
    height: 100%;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 1.4em;
    font-weight: $bold-weight;
    position: relative;
    z-index: 1;
  }
</style>