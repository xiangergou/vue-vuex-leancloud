<template>
  <div class="container">
  <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'room',
    components: {},
    data () {
      return {
        rev: ''
      }
    },
    mounted () {
      console.debug('App 加载：rev.%s %s', this.rev, new Date().toLocaleTimeString())
    }
  }
</script>

<style lang="css">
  .container {
    width: 100%;
    height: 100%;
    font-size: 10px;
  }
</style>
