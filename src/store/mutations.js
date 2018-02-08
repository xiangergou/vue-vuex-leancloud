'use strict'

import lstore from 'store'
import * as types from './mutation-types'
import * as storeKeys from './lstoreKeys'

export default {
  [types.SELECTED_STORES] (state, storelist) {
    state.selectedstore = storelist
  },

  [types.SHOP_DETAIL] (state, detail) {
    if (detail.method === 'plus') {
      detail.shopdetail.count += 1
    } else if (detail.method === 'minus') {
      if (detail.shopdetail.count > 1) {
        detail.shopdetail.count -= 1
      }
    }
    detail.shopdetail.totalprice = detail.shopdetail.count * detail.shopdetail.price
    state.shopdetail = detail.shopdetail
    lstore.set(storeKeys.KEY_SHOPDETAIL, detail.shopdetail)
  },

  [types.SELECTED_ADDRESS] (state, address) {
    state.selectedaddress = address
    lstore.set(storeKeys.KEY_SELECTED_ADDRESS, address)
  },

  [types.GOODS_COLLECTION] (state, collection) {
    let goods = state.goodscollection[collection.index]
    collection.totalprice = collection.price
    if (collection.index >= 0 && !collection.method) {
      state.goodscollection.splice(collection.index, 1)
    } else if (collection.method === 'minus') {
      if (goods.count >= 1) {
        goods.count -= 1
        goods.totalprice = goods.count * goods.price
        if (goods.count === 0) {
          state.goodscollection.splice(collection.index, 1)
        }
      }
    } else if (collection.method === 'plus') {
      goods.count += 1
      goods.totalprice = goods.count * goods.price
    } else {
      state.goodscollection.push(collection)
      let res = []
      let json = {}
      let arr = state.goodscollection
      arr.forEach((value, i) => {
        if (!json[arr[i].id]) {
          res.push(arr[i])
          json[arr[i].id] = 1
          res[i].count += 1
          res[i].totalprice = res[i].count * res[i].price
        } else {
        }
      })
      state.goodscollection = res
    }
    lstore.set(storeKeys.KEY_GOODS_COLLECTION, state.goodscollection)
  },

  [types.GOODS_CLEAR] (state, goodslist) {
    if (goodslist.method) {
      let goods = state.goodsclear[goodslist.index]
      if (goodslist.method === 'plus') {
        goods.count += 1
      } else if (goodslist.method === 'minus') {
        if (goods.count > 0) {
          goods.count -= 1
          if (goods.count === 0) {
            state.goodsclear.splice(goodslist.index, 1)
          }
        }
      }
      goods.totalprice = goods.count * goods.price
    }
    state.goodsclear = goodslist.goodsclear
    lstore.set(storeKeys.KEY_GOODS_CLEAR, goodslist.goodsclear)
  },

  [types.CACHE_USER] (state, user) {
    state.user = user
    lstore.set(storeKeys.KEY_CACHE_USER, user)
  },

  [types.REMOVE_CACHE] (state) {
    lstore.remove(storeKeys.KEY_GOODS_COLLECTION)
  }
}
