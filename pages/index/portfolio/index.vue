<template>
  <div class="projects">
    <div class="projects__container">
      <Project v-for="(project, idx) in portfolio" :key="idx" :project="project" />
    </div>
  </div>
</template>

<script>
  import Project from '@/components/Project'

  export default {
    components: {
      Project,
    },
    async asyncData({ $content, store }) {
      const page = await $content('pages/portfolio')
        .where({ status: 'live' })
        .fetch()

      const portfolio = await $content('portfolio')
        .where({ status: 'live' })
        .fetch()

      store.dispatch('updatePage', page)
      store.dispatch('updatePortfolio', portfolio)
    },
    computed: {
      portfolio() {
        return this.$store.state.portfolio
      }
    }
  }
</script>

<style scoped lang="scss">
  .projects {
    height: 100vh;
    overflow-y: scroll;
  }
  .projects__container {
    @include flex-row;
  }
</style>