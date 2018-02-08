'use strict'

import AV from 'leancloud-storage'
import store from '../store'

let user = store.state.user ? store.state.user[0] : null
console.log(user, 'caocao')

function addAddress (data) {
  const Address = AV.Object.extend('Address')
  const address = new Address()
  return address.save({
    name: data.name,
    tel: data.tel,
    address: data.address
  }).then(function (object) {
  })
}

function addOrder (data, address) {
  console.log(data)
  const Order = AV.Object.extend('orders')
  const order = new Order()
  if (data.price) {
    return order.save({
      orderName: data.name,
      orderPic: data.pic,
      orderPrice: data.price,
      orderCount: data.count,
      orderExplain: data.explain,
      orderAddress: data.orderAddress,
      orderType: data.orderType,
      orderUser: user
    }).then(function (object) {
    })
  } else {
    let arr = []
    data.forEach(item => {
      const order = new Order()
      order.set('orderName', item.title)
      order.set('orderPic', item.pic ? item.pic : null)
      order.set('orderPrice', item.price)
      order.set('orderCount', item.count)
      order.set('orderExplain', item.explain)
      order.set('orderAddress', address)
      order.set('orderType', item.goodstype)
      order.set('orderUser', user)
      arr.push(order)
    })
    return AV.Object.saveAll(arr)
  }
}

function destoryOrder (id) {
  const order = AV.Object.createWithoutData('orders', id)
  return order.destroy()
  .then(function () {
    return 'ok'
  })
}

function queryAddress (data) {
  const address = new AV.Query('Address')
  address.descending('createdAt')
  return address.find()
}

function destoryAddress (id) {
  const address = AV.Object.createWithoutData('Address', id)
  return address.destroy()
  .then(function () {
    return 'ok'
    // this.address.splice(this.address.indexOf(todo), 1)
  })
  // .catch(alert)
}

function addEvaluate (data) {
  const Evaluate = AV.Object.extend('evaluate')
  const evaluate = new Evaluate()
  return evaluate.save({
    rate: data.rate,
    tags: data.tags,
    explain: data.explain,
    user: user
  }).then(function (object) {
  })
}

function addInnBook (data) {
  const Innbook = AV.Object.extend('innbook')
  const innbook = new Innbook()
  return innbook.save({
    innTitle: data.title,
    innExplain: data.explain,
    innStart: data.dateenter,
    innEnd: data.datelevae,
    innTotalprice: data.price,
    innPic: data.pic,
    innPerson: data.name,
    innTel: data.tel,
    innUser: user
  }).then(function (object) {
  })
}

function addUser (data) {
  console.log(data)
  const User = AV.Object.extend('user')
  const user = new User()
  return user.save({
    name: data.name,
    password: data.password,
    tel: Number(data.tel),
    username: data.username
  }).then(function (object) {
  })
}

function queryUser (id) {
  const queryuser = new AV.Query('user')
  queryuser.equalTo('username', id)
  return queryuser.find()
}

export default {
  addAddress,
  queryAddress,
  destoryAddress,
  addOrder,
  destoryOrder,
  addEvaluate,
  addInnBook,
  addUser,
  queryUser
}

