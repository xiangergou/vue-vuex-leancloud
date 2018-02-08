<template>
  <div class="container">
    <div class="label">
      <ul>
        <router-link to="orders">
          <li>商品订单</li>
        </router-link>
        <router-link to="">
          <li class="active">地址管理</li>
        </router-link>
        <router-link to="innBookRecord">
          <li>订房记录</li>
        </router-link>
      </ul>
    </div>
    <div class="noneaddress" v-show="noAddress">
      您没有地址
    </div>
    <div class="addresslists" v-for="value in addresses" >
      <div class="address-top" @click="chooseaddress(value)">
        <strong>{{value.name}} {{value.tel}}</strong>
        <span>{{value.address}}</span>
      </div>
      <hr>
      <div class="address-bottom">
        <p>默认</p>
        <span @click="deleteAddress(value)">删除</span>
      </div>
    </div>
    <router-link to="add-address">
      <div class="add-address">
        <span>+</span>新增地址
      </div>
    </router-link>
    <prompt-box ref="dialog"></prompt-box>
  </div>
</template>

<script>
  // import Vue from 'vue'
  import PromptBox from '../../../src/components/prompt-box'
  import dataAddress from '../../service/add'
  import * as mutTypes from '../../store/mutation-types'

  export default {
    name: 'root',
    components: {
      PromptBox
    },
    data () {
      return {
        addresses: []
      }
    },
    computed: {
      noAddress () {
        if (this.addresses.length === 0) {
          return true
        }
      }
    },
    methods: {
      deleteAddress (value) {
        this.$refs.dialog.confirm({
          title: '注意',
          message: '确定删除此地址？',
          mbCancel: true
        }).then(() => {
          dataAddress.destoryAddress(value.id).then(res => {
            if (res) {
              window.alert('删除成功！')
              this.$router.go(0)
            }
          })
        })
      },
      chooseaddress (value) {
        this.$store.commit(mutTypes.SELECTED_ADDRESS, value)
        let data = this.$route.query.type
        this.$router.replace('/main/pay?type=' + data)
      }
    },
    mounted () {
      dataAddress.queryAddress().then(res => {
        this.transDataFromLc(res).forEach(data => {
          this.addresses.push(data)
        })
      })
    }
  }
</script>

<style lang="css">
  .container {
    width: 100%;
    height: 100vh;
    font-size: 10px;
    background-color: #f4f4f4;
    float: left;
  }
  .logo{
    width: 100%;
    position: relative;
  }
  .logo img{
    width: 100%;
    height: 210px;
  }
  .title{
    width: 100%;
    height: 30px;
    line-height: 30px;
    text-indent: 15px;
    position: absolute;
    bottom: 2px;
    background-color: rgba(0,0,0,.4);
    color: #eaeaea;
  }
  .label{
    width: 100%;
  }
  .label ul{
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-align: center;
    list-style: none;
    border-bottom: 1px solid #ccc;
    font-size: .85rem;
  }
  .label ul li{
    width: 33%;
    float: left;
    font-size: 1rem;
  }
  .label .active{
    color: #00bff3;
    border-bottom: 1px solid #00bff3;
  }
  .goodslist{
    width: 94%;
    padding: 10px 10px;
    box-sizing: border-box;
    margin: 0 3%;

  }
  .goodslist ul{
    width: 100%;
    list-style: none
  }
  .goodslist ul li{
    width: 100%;
    padding: 0 0 30px;
    background-color: #fff
  }
  .goodslist ul li img{
    width: 100%;
  }
  .goodslist .explain{
    width: 100%;
    padding: 15px 8px;
    box-sizing: border-box;
    line-height: 25px;
    font-size: .9rem;
  }
  .goodslist .explain span{
    color: #222;
  }
  .goodslist .explain p{
    color: #999;
  }
  .goodslist .price{
    width: 100%;
    padding: 0 10px;
    box-sizing: border-box;
    font-size: .85rem;
    font-weight: lighter;
  }
  .goodslist .price p{
    float: left;
    color: #00bff3;
  }
  .goodslist .price span{
    float: right;
    padding: 3px 10px;
    background-color: #00bff3;
    color: #fff;
    border-radius: 5px;
    margin-top: -5px;
  }
  .noneaddress{
    width: 100%;
    height: 200px;
    box-sizing: border-box;
    text-align: center;
    line-height: 300px;
    font-size: 1rem;
    color: #999;
  }
  .add-address{
    width: 100%;
    margin-top: 30px;
    padding: 0 5px;
    box-sizing: border-box;
    height: 40px;
    line-height: 40px;
    background: pink;
    font-size: .85rem;
    background-color: #fff;
  }
  .add-address span{
    margin: 0 10px;
  }
  .addresslists{
    width: 100%;
    height: 80px;
    border-bottom: 1px solid #ccc;
  }
  .address-top{
    padding: 10px 0 5px 20px;
    box-sizing: border-box;
  }
  .address-top span{
    display: block;
    margin-top: 5px;
  }
  .addresslists hr{
    width: 80%;
    float: right;
    border-bottom: 1px solid #ccc;
  }
  .address-bottom{
    width: 100%;
    padding: 10px 10px 0 20px;
    box-sizing: border-box;
  }
  .address-bottom p{
    display: inline-block;
  }
  .address-bottom span{
    float: right;
  }
</style>
