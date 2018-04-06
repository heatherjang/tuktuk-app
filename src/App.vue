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
$thing: red
#app
  font-family: 'Avenir'
  color: $thing


</style>
