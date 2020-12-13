<template>
  <header id="header" class="header">
    <div class="inner header__container">
      <div class="header__logo">
        <TheLogo />
      </div>
      <div class="header__nav">
        <TheNav />
        <NavToggle />
      </div>
    </div>
  </header>
</template>

<script>
  import TheLogo from '@/components/TheLogo'
  import TheNav from '@/components/TheNav'
  import NavToggle from '@/components/NavToggle'

  export default {
    components: {
      TheLogo,
      TheNav,
      NavToggle,
    }
  }
</script>

<style scoped lang="scss">
  .header {
    position: fixed;
    top: 2rem;
    left: 0;
    width: 100%;
    z-index: 99999;
  }
  .header__container {
    @include flex-row;
    align-items: center;
  }
  .header__logo {
    flex: 1;
  }
</style>