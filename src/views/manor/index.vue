<template>
  <div class="fullheight">
  <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'manor',
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
  .fullheight {
    width: 100%;
    height: 100%;
    font-size: 10px;
    background-color: #f4f4f4;
  }
</style>
