<template>
  <div class="container-login">
    <div class="login" v-show="loginForm">
      <div class="login-form">
        <ul>
          <li>
            <span>账号</span>
            <input type="text" v-model="loginAccount">
          </li>
           <li>
            <span>密码</span>
            <input type="password" v-model="loginPassword">
          </li>
        </ul>
      </div>
      <div class="button-login" @click="trytologin">
        登录
      </div>
      <div class="toreg" @click="toreg">
        免费注册
      </div>
    </div>
    <div class="reg" v-show="regForm">
      <ol>
        <li>
          <span>账号</span>
          <input type="text" placeholder="请输入账号(必填)" v-model="regAccount">
        </li>
        <li>
          <span>密码</span>
          <input type="password" placeholder="请输入密码(必填)" v-model="regPassword">
        </li>
        <li>
          <span>密码</span>
          <input type="password" placeholder="请输入确认密码" v-model="regRePassword">
        </li>
        <li>
          <span>姓名</span>
          <input type="text" placeholder="请输入姓名(选填)" v-model="regName">
        </li>
        <li>
          <span>手机号</span>
          <input type="number" placeholder="请输入手机(选填)" v-model="regTel">
        </li>
        <li @click="trytoreg">
          注册
        </li>
      </ol>
    </div>
    <prompt-box ref="dialog"></prompt-box>
  </div>
</template>

<script>
  import PromptBox from '../../src/components/prompt-box'
  import * as mutTypes from '../store/mutation-types'
  import add from '../service/add'

  export default {
    name: 'root',
    components: {
      PromptBox
    },
    data () {
      return {
        rev: '',
        regForm: false,
        loginForm: true,
        regAccount: '',
        regTel: '',
        regName: '',
        regPassword: '',
        regRePassword: '',
        loginAccount: '',
        loginPassword: '',
        userinfo: ''
      }
    },
    methods: {
      toreg () {
        this.regForm = true
        this.loginForm = false
      },
      trytologin () {
        let self = this
        if (!this.loginAccount) {
          window.alert('用户名不能为空')
          return
        } else if (!this.loginPassword) {
          window.alert('密码不能为空！')
        }
        add.queryUser(this.loginAccount).then(res => {
          console.log(res)
          if (res[0]._serverData.password !== self.loginPassword) {
            self.$refs.dialog.confirm({
              title: '失败',
              message: '密码不正确或账号不存在！'
            })
          } else {
            self.$store.commit(mutTypes.CACHE_USER, res)
            self.$refs.dialog.confirm({
              title: '登陆成功',
              message: '请稍后！'
            }).then(() => {
              setTimeout(function () {
                self.$router.replace('goods/shopdetail')
              }, 1000)
            })
          }
        })
        // let userinfo = this.$store.state.user
        // if (this.loginPassword !== userinfo.password) {
        //   this.$refs.dialog.confirm({
        //     title: '失败',
        //     message: '密码不正确或账号不村在！'
        //   })
        // } else {
        //   this.$refs.dialog.confirm({
        //     title: '登录成功！',
        //     message: '请稍后'
        //   }).then(() => {
        //     setTimeout(function () {
        //       self.$router.replace('goods/shopdetail')
        //     }, 1000)
        //   })
        // }
      },
      trytoreg () {
        if (!this.regAccount) {
          window.alert('用户名不能为空')
          return
        } else if (!this.regPassword) {
          window.alert('密码不能为空')
          return
        }
        if (this.regPassword !== this.regRePassword) {
          window.alert('两次密码不一致')
          return
        }
        let regForm = {
          username: this.regAccount,
          name: this.regName,
          password: this.regPassword,
          tel: this.regTel
        }
        add.addUser(regForm).then(res => {
          this.$refs.dialog.confirm({
            title: '成功',
            message: '注册成功！'
          }).then(() => {
            this.loginForm = true
            this.regForm = false
          })
        })
      }
    },
    mounted () {
      console.debug('App 加载：rev.%s %s', this.rev, new Date().toLocaleTimeString())
    }
  }
</script>

<style lang="css">
  .container-login {
    width: 100%;
    height: 100vh;
    font-size: 10px;
    background-color: #f4f4f4;
    float: left;
  }
  .login-form{
    width: 88%;
    margin: 10% 6%;
    background-color: #fff;
  }
  .login-form ul{
    list-style: none;
  }
  .login-form ul li{
    width: 100%;
    display: flex;
    height: 50px;
    line-height: 50px;
    border: 1px solid #ccc;
    text-align: center;
  }
  .login-form ul li:first-child{
    border-bottom: none;
  }
  .login-form ul li span{
    flex: 2;
  }
  .login-form ul li input{
    flex: 8;
    border: none;
  }
  .button-login{
    width: 88%;
    margin-left: 6%;
    height: 50px;
    background-color: #c00210;
    color:#fff;
    font-size: .9rem;
    line-height: 50px;
    text-align: center;
    border-radius: 5px;
    display: block;
  }
  .toreg{
    float: right;
    margin-top: 10px;
    margin-right: 6%;
    font-size: .8rem;
  }
  .reg{
    width: 88%;
    margin: 10% 6%;
    background-color: #fff;
  }
  .reg ol{
    list-style: none
  }
  .reg ol li{
    width: 100%;
    display: flex;
    height: 50px;
    line-height: 50px;
    border: 1px solid #ccc;
    border-bottom: none;
    text-align: center;
  }
  .reg ol li:nth-child(5){
    border-bottom: 1px solid #ccc;
  }
  .reg ol li:last-child{
    display: block !important;
    border-bottom: 1px solid #ccc;
    text-align: center !important;
    margin-top: 10px;
    background-color: #c00210;
    color: #fff;
    font-size: .85rem; 
    border-radius: 5px;
  }
  .reg ol li span{
    flex: 2;
    font-size: .85rem;
  }
  .reg ol li input{
    flex: 8;
    border: none;
  }
</style>
