<template>
  <div id="app">
    <router-view
      :id="`${ pageId }_page`"/>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    pageId(){
      return this.$store.state.route.name
    }
  }
}
</script>

<style lang="sass">
  @import "./assets/stylesheets/reset.sass"
  // Mixins MUST be above all other stylesheets
  @import "./assets/stylesheets/mixins.sass"
  @import "./assets/stylesheets/typography.sass"
  @import "./assets/stylesheets/app_base.sass"
  @import "./assets/stylesheets/sprites.sass"
</style>
