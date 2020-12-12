<template>
  <div class="projects">
    <Project v-for="(project, idx) in portfolio" :key="idx" :project="project" />
  </div>
</template>

<script>
  import Project from '@/components/Project'

  export default {
    components: {
      Project,
    },
    async asyncData({ $content, store, app }) {
      const page = await $content(`pages/${app.i18n.locale}/portfolio`)
        .where({ status: 'live' })
        .fetch()

      const portfolio = await $content(`portfolio/${app.i18n.locale}`)
        .where({ status: 'live' })
        .fetch()

      store.dispatch('updatePage', page)
      store.dispatch('updatePortfolio', portfolio)
    },
    computed: {
      portfolio() {
        return this.$store.state.portfolio
      }
    },
    scrollToTop: true,
  }
</script>

<style scoped lang="scss">
  .projects {
    @include flex-row;
  }
  .page-enter-active .project,
  .page-leave-active .project {
    transition: all 300ms ease;
  }
  .page-enter .project,
  .page-leave-active .project {
    transform: scale(0.9);
    transform-origin: 50% 50%;
  }
</style>