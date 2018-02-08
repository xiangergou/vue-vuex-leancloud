'use strict'

const manor = resolve => { require(['../views/manor'], resolve) }
const profile = resolve => { require(['../views/manor/profile'], resolve) }
const address = resolve => { require(['../views/manor/address'], resolve) }
const addAddress = resolve => { require(['../views/manor/add-address'], resolve) }
const orders = resolve => { require(['../views/manor/orders'], resolve) }
const toevaluate = resolve => { require(['../views/manor/toevaluate'], resolve) }
const innBookRecord = resolve => { require(['../views/manor/innBookRecord'], resolve) }

const subSites = [{
  path: 'profile',
  name: 'profile',
  component: profile
}, {
  path: 'address',
  name: 'address',
  component: address
}, {
  path: 'add-address',
  name: 'add-address',
  component: addAddress
}, {
  path: 'toevaluate',
  name: 'toevaluate',
  component: toevaluate
}, {
  path: 'orders',
  name: 'orders',
  component: orders
}, {
  path: 'innBookRecord',
  name: 'innBookRecord',
  component: innBookRecord
}]

module.exports = {
  name: 'manor',
  path: '/manor',
  component: manor,
  redirect: '/manor/profile',
  children: subSites
}
