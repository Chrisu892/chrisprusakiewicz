<template>
  <button type="button" class="nav-toggle" :class="{ 'active': isActive }" @click="toggle()">
    <span />
    <span />
    <span />
  </button>
</template>

<script>
  export default {
    computed: {
      isActive() {
        return this.$store.state.showNav
      }
    },
    methods: {
      toggle() {
        this.$store.dispatch('toggleNav')
      }
    }
  }
</script>

<style scoped lang="scss">
  .nav-toggle {
    width: 2rem;
    height: 2rem;
    border: 0;
    background: none;
    padding: 0.05rem 0;
    cursor: pointer;
    outline: none;
    position: relative;
    z-index: 999;

    &::before {
      @include absolute-fill;
      background-color: $clr-dark;
      border-radius: 100%;
      content: '';
      transform: scale(1.4);
    }

    span {
      border-bottom: solid 2px $clr-white;
      display: inline-block;
      position: absolute;
      left: 0;
      transition:
        transform 300ms ease-in-out,
        opacity 300ms ease-in-out;
      width: 100%;
      z-index: 1;

      &:nth-child(1) {
        top: 6px;
      }
      &:nth-child(2) {
        top: 15px;
      }
      &:nth-child(3) {
        bottom: 6px;
      }
    }

    &.active span:nth-child(2) {
      transform: scale(0);
      opacity: 0;
    }
    &.active span:nth-child(1) {
      transform: translateY(9px) rotate(45deg);
    }
    &.active span:nth-child(3) {
      transform: translateY(-9px) rotate(-45deg);
    }
  }
</style>