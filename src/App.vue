<template>
  <div class="full-height">
    <router-view></router-view>
    <div class="info-box">
      dbgRev.{{ rev }}
    </div>
  </div>
</template>

<script>
  import {
    build
  } from './version'

  export default {
    name: 'root',
    data () {
      return {
        rev: build
      }
    },
    mounted () {
      console.debug('App 加载：rev.%s %s', this.rev, new Date().toLocaleTimeString())
    }
  }
</script>

<style lang="css">
  .full-height{
    width: 100%;
    height: 100%;
    font-size: 10px;
  }
  .info-box {
    height: 1rem;
    width: 66px;
    position: fixed;
    top: 0;
    left: 0;
    font-weight: lighter;
    font-size: 1rem;
    line-height: 1rem;
    z-index: 100;
    border: dashed 1px gray;
    color: green;
    text-align: center;
  }
  a{
    color: #222;
    text-decoration: none
  }

</style>
