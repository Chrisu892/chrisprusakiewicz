<template>
  <div>
    <header id="header" class="header">
      <div class="inner header__container">
        <div class="header__main">
          <nuxt-link to="/" title="Go back to homepage" class="header__logo">CP</nuxt-link>
        </div>
        <div class="header__nav">
          <div class="header__language">
            <nuxt-link to="/" class="header__language__toggle active">EN</nuxt-link>
            <span class="header__language__divider">|</span>
            <nuxt-link to="/pl/" class="header__language__toggle">PL</nuxt-link>
          </div>
          <NavToggle @toggle="toggleNav()" />
          <TheNav :class="{ 'active': navActive }" />
        </div>
      </div>
    </header>
    <Nuxt />
  </div>
</template>

<script>
  import NavToggle from '@/components/NavToggle'

  export default {
    components: {
      NavToggle,
    },
    data() {
      return {
        navActive: false,
      }
    },
    methods: {
      toggleNav() {
        this.navActive = !this.navActive
      }
    }
  }
</script>

<style scoped lang="scss">
  .header {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 10;
    padding: 1.5rem 0;
    color: $clr-white;
  }
  .header__container {
    @include flex-row;
    align-items: center;
  }
  .header__logo {
    @include align-center;
    justify-content: center;
    background-color: $clr-white;
    color: $clr-dark;
    width: 2rem;
    height: 2rem;
    border-radius: 100%;
    font-size: 0.9em;
    font-weight: $bold-weight;
    position: relative;
    z-index: 999;

    &:hover {
      transform: scale(1.05);
    }
  }
  .header__main {
    padding-right: 4rem;
    width: $main;
  }
  .header__nav {
    @include flex-row;
    justify-content: space-between;
    width: $aside;
    padding-left: 4rem;
  }
  .header__language {
    @include flex-row;
    align-items: center;
  }
  .header__language__toggle {
    display: inline-block;
    opacity: 0.7;
    font-size: 0.84em;

    &.active {
      opacity: 1;
    }
  }
  .header__language__divider {
    display: inline-block;
    margin: 0 0.5rem;
    transform: translateY(-1px);
  }
</style>