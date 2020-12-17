<template>
  <header id="header" class="header">
    <div class="header__container">
      <div class="header__logo">
        <TheLogo />
      </div>
      <div class="header__nav">
        <LangToggle />
        <TheNav />
        <NavToggle />
      </div>
    </div>
  </header>
</template>

<script>
  import TheLogo from '@/components/TheLogo'
  import LangToggle from '@/components/LangToggle'
  import TheNav from '@/components/TheNav'
  import NavToggle from '@/components/NavToggle'

  export default {
    components: {
      TheLogo,
      LangToggle,
      TheNav,
      NavToggle,
    }
  }
</script>

<style scoped lang="scss">
  .header {
    position: fixed;
    top: 0;
    left: 0;
    padding: 2rem 0;
    width: 100%;
    z-index: 99999;

    &::before {
      @include absolute-fill;
      background: linear-gradient(180deg, $clr-dark 0%, rgba($clr-dark, 0) 100%);
      content: '';
      z-index: 1;
    }
  }
  .header__container {
    @include flex-row;
    align-items: center;
    position: relative;
    z-index: 1;
  }
  .header__logo {
    padding: 0 2rem;
    width: $main;
  }
  .header__nav {
    @include flex-row;
    justify-content: space-between;
    padding: 0 2rem;
    width: $aside;
  }

  // Media queries

  @media screen and (max-width: 768px) {
    .header__logo {
      width: auto;
    }
    .header__nav {
      flex: 1;
      padding-left: 0;
    }
  }
</style>