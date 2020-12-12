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
    margin: 0 1rem 0 0;
    padding-right: 1rem;
    position: relative;

    &:not(:last-child)::before {
      content: '';
      position: absolute;
      top: 50%;
      right: 0;
      width: 4px;
      height: 4px;
      background-color: $clr-dark;
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
  export default {
    computed: {
      crumbs() {
        let currentPath = this.$route.path.split('/')
        currentPath.shift()
        currentPath.splice(-1, 1)

        console.log(currentPath)

        if (currentPath[1] == '') {
          currentPath = []
        }

        let breadcrumbs = currentPath.reduce((crumbs, path, idx) => {
          crumbs.push({
            path: path === '' ? '/' : '/' + path,
            title: path === '' ? 'home' : path,
            to: crumbs[idx - 1]
              ? '/' + crumbs[idx - 1].path + '/'
              : '/' + path
          })
          return crumbs
        }, [])

        return breadcrumbs
      }
    }
  }
</script>