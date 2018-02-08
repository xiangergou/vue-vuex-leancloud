'use strict'

const main = resolve => { require(['../views/main'], resolve) }
const pay = resolve => { require(['../views/main/pay'], resolve) }
const storepackage = resolve => { require(['../views/main/storepackage'], resolve) }

const subSites = [{
  path: 'pay',
  name: 'pay',
  component: pay
}, {
  path: 'storepackage',
  name: 'storepackage',
  component: storepackage
}]

module.exports = {
  name: 'main',
  path: '/main',
  component: main,
  redirect: '/main/pay',
  children: subSites
}
