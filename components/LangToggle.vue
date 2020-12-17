<template>
  <div class="lang">
    <div
      v-for="lang in $i18n.locales"
      :key="lang.code"
      class="lang__toggle">
      <nuxt-link
        :to="`/${lang.code}`"
        class="lang__link">
        {{ lang.code }}
      </nuxt-link>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .lang {
    @include flex-row;
    align-items: center;
    font-size: 0.88em;
    text-transform: uppercase;
  }
  .lang__toggle:not(:last-child) {
    border-right: solid 1px $clr-white;
    margin-right: 0.7rem;
    padding-right: 0.7rem;
  }
  .lang__link {
    letter-spacing: 1px;
  }
  .lang__link.nuxt-link-active {
    font-weight: $bold-weight;
  }
</style>