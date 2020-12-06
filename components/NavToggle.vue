<template>
  <button type="button" class="nav-toggle" :class="{ 'active': active }" @click="toggle()">
    <span />
    <span />
    <span />
  </button>
</template>

<script>
  export default {
    data() {
      return {
        active: false,
      }
    },
    methods: {
      toggle() {
        this.active = !this.active
        this.$emit('toggle')
      }
    }
  }
</script>

<style scoped lang="scss">
  .nav-toggle {
    @include flex-row;
    align-items: center;
    width: 2rem;
    height: 2rem;
    border: 0;
    background: none;
    padding: 0.05rem 0;
    cursor: pointer;
    outline: none;
    position: relative;
    z-index: 999;

    span {
      display: inline-block;
      width: 100%;
      border-bottom: solid 2px $clr-white;
      transition:
        transform 300ms ease-in-out,
        opacity 300ms ease-in-out;
    }

    &.active span:nth-child(2) {
      transform: scale(0);
      opacity: 0;
    }
    &.active span:nth-child(1) {
      transform: translateY(10px) rotate(45deg);
    }
    &.active span:nth-child(3) {
      transform: translateY(-10px) rotate(-45deg);
    }
  }
</style>