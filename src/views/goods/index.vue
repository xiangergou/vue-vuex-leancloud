<template>
  <div class="container">
  <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'wine',
    components: {},
    data () {
      return {
        rev: ''
      }
    },
    mounted () {
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
