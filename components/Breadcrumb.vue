<template>
  <ul
    v-if="crumbs"
    class="reset--list breadcrumb"
    itemscope
    itemtype="https://schema.org/BreadcrumbList">
    <template v-for="(crumb, idx) in crumbs">
      <li
        :key="idx"
        class="breadcrumb__item"
        itemprop="itemListElement"
        itemscope
        itemtype="https://schema.org/ListItem">
        <nuxt-link
          :to="crumb.path"
          :title="crumb.title"
          itemprop="item"
          :content="crumb.path"
          class="breadcrumb__link">
          <span itemprop="name">{{ crumb.title }}</span>
        </nuxt-link>
        <meta itemprop="position" content="1" />
      </li>
    </template>
  </ul>
</template>

<style scoped lang="scss">
  .breadcrumb {
    @include flex-row;
    margin-bottom: 1.5rem;
  }
  .breadcrumb__item {
    margin: 0;
    padding: 0 2rem 0 0;
    position: relative;

    &:not(:last-child)::before {
      content: '';
      position: absolute;
      top: 50%;
      right: 1rem;
      width: 4px;
      height: 4px;
      background-color: $clr-white;
      transform: translateY(-50%);
    }
  }
  .breadcrumb__link {
    font-size: 0.8em;
    display: inline-block;
    letter-spacing: 1px;
    text-transform: uppercase;
  }
</style>

<script>
  const titleCase = require('ap-style-title-case')

  export default {
    computed: {
      crumbs() {
        const fullPath = this.$route.fullPath
        const params = fullPath.substring(1).split('/')
        const crumbs = [];

        let path = ''
        let pages = ['En', 'Pl']

        params.forEach((param, idx) => {
          path = `${path}/${param}`
          const match = this.$router.match(path)

          if (match.name !== null && this.$route.name !== match.name) {
            let pageTitle = titleCase(param.replace(/-/g, ' '))


            if (pageTitle == 'En' || pageTitle == 'Pl') {
              pageTitle = 'Home'
            }
            
            crumbs.push({
              title: pageTitle,
              ...match,
            })
          }
        })

        return crumbs
      }
    }
  }
</script>