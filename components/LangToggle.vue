<template>
  <ul class="lang">
    <li
      v-for="lang in $i18n.locales"
      :key="lang.code">
      <nuxt-link :to="`/${lang.code}`">
        {{ lang.code }}
      </nuxt-link>
    </li>
  </ul>
</template>