'use strict'

function install (Vue) {

  function AVInit(){
    const X_CC_Id = 'ju080UHGiKfuOh337TYcn1Sr-gzGzoHsz'
    const X_CC_Key = '5e7NIvLkjcbV9s8lj0O5zyr5'
    AV.init({ appId:X_CC_Id, appKey:X_CC_Key })
  }

  function transDataFromLc(oldObject){
    const newObject = []
    for (const key in oldObject) {
      if (key) {
        newObject[key] = oldObject[key]._serverData
        newObject[key].id = oldObject[key].id
        newObject[key].createdAt = oldObject[key].createdAt
        newObject[key].updatedAt = oldObject[key].updatedAt
        newObject[key].total = oldObject[key].total
      }
    }
    return newObject
  }
  // Object.defineProperties(Vue.prototype, {
  //   $AVInit: {
  //     get () {
  //       return AVInit
  //     },

  //   $transDataFromLc:{
  //     get () {
  //       return transDataFromLc
  //     }
  //   }
  // })
// }

// export default {
//   install
// }