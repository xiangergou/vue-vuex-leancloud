'use strict'

import lstore from 'store'
import * as storeKeys from './lstoreKeys'

export default {
  selectedstore: '',
  shopdetail: lstore.get(storeKeys.KEY_SHOPDETAIL) || {},
  selectedaddress: lstore.get(storeKeys.KEY_SELECTED_ADDRESS) || {},
  goodscollection: lstore.get(storeKeys.KEY_GOODS_COLLECTION) || [],
  goodsclear: lstore.get(storeKeys.KEY_GOODS_CLEAR) || [],
  user: lstore.get(storeKeys.KEY_CACHE_USER)
}
