<template>
  <a v-if="isExternal()" :href="action.link" :title="action.title" target="_blank" class="button">
    <span class="button__title">{{ action.title }}</span>
  </a>
  <nuxt-link v-else :to="localePath(action.link)" :title="action.title" class="button">
    <span class="button__title">{{ action.title }}</span>
  </nuxt-link>
</template>

<script>
  export default {
    props: {
      action: {
        type: Object,
        required: true
      }
    },
    methods: {
      isExternal() {
        return this.action.external ? true : false
      }
    }
  }
</script>

<style scoped lang="scss">
  .button {
    display: inline-block;
    border: solid 1px $clr-white;
    border-color: rgba($clr-white, 0.1);
    color: $clr-white;
    font-family: $font-header;
    font-size: 0.94em;
    font-weight: $bold-weight;
    text-transform: uppercase;
    letter-spacing: 2px;
    position: relative;
    transition: text-shadow 300ms ease;

    &:hover {
      text-shadow: 0 0 2px $clr-white;
    }

    &::before,
    &::after {
      content: '';
      position: absolute;
      top: 0;
      height: 100%;
      opacity: 0;
      transform: rotateX(90deg);
      transition:
        transform 500ms ease,
        opacity 500ms ease;
    }

    &::before {
      left: 0;
      border-left: solid 1px $clr-white;
      transform-origin: bottom;
    }

    &::after {
      right: 0;
      border-right: solid 1px $clr-white;
      transform-origin: top;
    }

    &:hover::before,
    &:hover::after {
      transform: rotate(0deg);
      opacity: 1;
    }

    &__title {
      display: block;
      padding: 1.05em 1.6em 1.1em 1.6em;
    }

    &__title::before,
    &__title::after {
      content: '';
      position: absolute;
      width: 100%;
      transform: rotateY(90deg);
      opacity: 0;
      transition:
        transform 350ms ease,
        opacity 350ms ease;
    }

    &__title::before {
      left: 0;
      top: 0;
      border-top: solid 1px $clr-white;
      transform-origin: left;
    }

    &__title::after {
      right: 0;
      bottom: 0;
      border-bottom: solid 1px $clr-white;
      transform-origin: right;
    }

    &:hover &__title::before,
    &:hover &__title::after {
      transform: rotateY(0deg);
      opacity: 1;
    }
  }
</style>