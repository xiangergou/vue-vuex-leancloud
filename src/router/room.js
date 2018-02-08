'use strict'

const hotel = resolve => { require(['../views/hotel'], resolve) }
const inn = resolve => { require(['../views/hotel/inn'], resolve) }
const impression = resolve => { require(['../views/hotel/impression'], resolve) }
const featured = resolve => { require(['../views/hotel/featured'], resolve) }
const inndetail = resolve => { require(['../views/hotel/inndetail'], resolve) }

const subSites = [{
  path: 'inn',
  name: 'inn',
  component: inn
}, {
  path: 'impression',
  name: 'impression',
  component: impression
}, {
  path: 'inndetail',
  name: 'inndetail',
  component: inndetail
}, {
  path: 'featured',
  name: 'featured',
  component: featured
}]

module.exports = {
  name: 'hotel',
  path: '/hotel',
  component: hotel,
  redirect: '/hotel/inn',
  children: subSites
}
