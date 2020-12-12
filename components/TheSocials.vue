<template>
  <div v-if="socials" class="socials">
    <a v-for="(social, idx) in socials" :key="idx" :href="social.link" :title="`Visit my ${social.title} profile`" class="socials__link" target="_blank">
      {{ social.title }}
    </a>
  </div>
</template>

<script>
  export default {
    computed: {
      socials() {
        return this.$store.state.socials
      }
    }
  }
</script>

<style scoped lang="scss">
  .socials {
    @include flex-row;
    align-items: center;
    position: absolute;
    right: 0;
    bottom: 0;
    width: 100%;
    color: $clr-white;
    padding: 1.5rem 4rem;
  }
  .socials__link {
    display: inline-block;
    margin-right: 2rem;
    color: $clr-white;
    font-size: 0.9em;
    padding-bottom: 0.25rem;
    border-bottom: solid 1px $clr-white;
    border-color: rgba($clr-white, 0.1);
    position: relative;

    &:last-child {
      margin-right: 0;
    }

    &::before {
      content: '';
      position: absolute;
      bottom: -1px;
      left: 0;
      width: 100%;
      border-bottom: solid 1px $clr-white;
      opacity: 0;
      transform-origin: left;
      transform: rotateY(90deg);
      transition:
        transform 300ms ease,
        opacity 300ms ease;
    }

    &:hover::before {
      transform: rotateY(0deg);
      opacity: 1;
    }
  }
</style>