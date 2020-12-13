<template>
  <nuxt-link
    :to="localePath('/')"
    title="Go back to homepage"
    class="logo">
    CP
  </nuxt-link>
</template>

<style scoped lang="scss">
  .logo {
    display: inline-block;
    background-color: $clr-white;
    color: $clr-dark;
    width: 32px;
    height: 32px;
    text-align: center;
    line-height: 32px;
    font-weight: $bold-weight;
    border-radius: 100%;
    position: relative;
    z-index: 9999;
  }
</style>