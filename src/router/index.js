'use strict'

const root = {
  path: '',
  redirect: '../start'
}

const login = {
  path: '/login',
  name: 'login',
  component: resolve => { require(['../views/login'], resolve) }
}

const start = {
  path: '/start',
  name: 'start',
  component: resolve => { require(['../views/main/start'], resolve) }
}

const routes = [
  root,
  login,
  start,
  require('./room'),
  require('./goods'),
  require('./manor'),
  require('./main'),
  {
    path: '*',
    redirect: ''
  }
]

module.exports = routes
