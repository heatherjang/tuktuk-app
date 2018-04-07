<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="sass">
  @import "./assets/stylesheets/reset.sass"
  // Mixins MUST be above all other stylesheets
  @import "./assets/stylesheets/mixins.sass"
  @import "./assets/stylesheets/typography.sass"
  @import "./assets/stylesheets/app_base.sass"


</style>
