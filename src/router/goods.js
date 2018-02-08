'use strict'

const goods = resolve => { require(['../views/goods'], resolve) }
const wine = resolve => { require(['../views/goods/wine'], resolve) }
const grape = resolve => { require(['../views/goods/grape'], resolve) }
const evaluate = resolve => { require(['../views/goods/evaluate'], resolve) }
const shopdetail = resolve => { require(['../views/goods/shopdetail'], resolve) }

const subSites = [{
  path: 'wine',
  name: 'wine',
  component: wine
}, {
  path: 'grape',
  name: 'grape',
  component: grape
}, {
  path: 'evaluate',
  name: 'evaluate',
  component: evaluate
}, {
  path: 'shopdetail',
  name: 'shopdetail',
  component: shopdetail
}]

module.exports = {
  name: 'goods',
  path: '/goods',
  component: goods,
  redirect: '/goods/wine',
  children: subSites
}
