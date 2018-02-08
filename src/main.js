// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
// import router from './router'
import routes from './router'
import VueRouter from 'vue-router'
import AV from 'leancloud-storage'
import animate from 'animate.css'
// import util from 'util'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(animate)
const router = new VueRouter({
  routes, // short for routes: routes
  mode: 'history' // 去掉地址中的'#' 以便接受微信登录授权回调参数
})
var APP_ID = 'ju080UHGiKfuOh337TYcn1Sr-gzGzoHsz'
var APP_KEY = '5e7NIvLkjcbV9s8lj0O5zyr5'
AV.init({
  appId: APP_ID,
  appKey: APP_KEY
})
Vue.prototype.transDataFromLc = function (oldObject) {
  const newObject = []
  for (const key in oldObject) {
    if (key) {
      newObject[key] = oldObject[key]._serverData
      newObject[key].id = oldObject[key].id
      newObject[key].type = oldObject[key].type
      newObject[key].createdAt = oldObject[key].createdAt
      newObject[key].updatedAt = oldObject[key].updatedAt
    }
  }
  return newObject
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  animate,
  store,
  template: '<App/>',
  components: { App }
})
