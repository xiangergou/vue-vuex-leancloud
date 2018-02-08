<template>
  <div class="container">
    <div class="label">
      <ul>
        <router-link to="orders">
          <li>商品订单</li>
        </router-link>
        <router-link to="address">
          <li>地址管理</li>
        </router-link>
        <router-link to="innBookRecord">
          <li class="active">订房记录</li>
        </router-link>
      </ul>
    </div>
    <div class="order" v-for="value in orderlist">
      <div class="order-title">
        <span>{{value.innPerson}}</span>
        <!-- <p class="itemactive">{{value.innTitle}}</p> -->
      </div>
      <div class="order-time">
        <span>{{value.innStart}} - </span>
        <span> {{value.innEnd}}</span>
      </div>
      <div class="order-list">
        <div class="order-detail">
          <div class="order-pic">
            <img :src="orderPic(value)" alt="">
          </div>
          <div class="order-name">{{value.innTitle}}
          <p>{{value.innExplain}}</p></div>
          <div class="order-price">
            ￥{{value.innTotalprice}}
          </div>
        </div>
        <div class="order-summary">
        <span>合计：￥{{value.innTotalprice}}</span>
        </div>
        <div class="order-operating">
          <span @click="deleteOrder(value)">删除订单</span>
          <span class="itemactive">
            <router-link to="toevaluate">
              评价
            </router-link>
          </span>
        </div>
      </div>
    </div>
    <prompt-box ref="dialog"></prompt-box>
  </div>
</template>

<script>
  // import Vue from 'vue'
  import dataOrder from '../../service/goodsdata'
  import deleteOrder from '../../service/add'
  import PromptBox from '../../../src/components/prompt-box'

  export default {
    name: 'orders',
    components: {
      PromptBox
    },
    data () {
      return {
        orderlist: []
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
      orderTime (value) {
        return new Date(value.updatedAt).toLocaleDateString()
      },
      deleteOrder (value) {
        this.$refs.dialog.confirm({
          title: '注意',
          message: '确定删除此订单？',
          mbCancel: true
        }).then(() => {
          deleteOrder.destoryOrder(value.id).then(res => {
            if (res) {
              window.alert('删除成功！')
              this.$router.go(0)
            }
          })
        })
      },
      orderPic (value) {
        if (value.innPic) {
          return value.innPic.thumbnailURL(700, 600)
        }
      }
    },
    mounted () {
      dataOrder.queryInnBook().then(res => {
        this.transDataFromLc(res).forEach(data => {
          this.orderlist.push(data)
        })
      })
    }
  }
</script>

<style lang="css">
  .container {
    width: 100%;
    height: 100%;
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
  .order-title{
    width: 100%;
    padding: 0 10px;
    box-sizing: border-box;
    height: 25px;
    line-height: 25px;
    font-size: .85rem;
    background: #fff;
  }
  .order-title span{
    float: left;
    display: block;
    padding-top: 5px;
  }
  .order-title p{
    float: right;
  }
  .order-time{
    width: 100%;
    height: 20px;
    line-height: 20px;
    text-align: left;
    background-color: #fff;
    display: block;
    float: left;
    padding: 0 10px;
    box-sizing: border-box; 
  }
  .order-list{
    height: 170px;
    background: #fff;
    margin-bottom: 15px;
  }
  .order-detail{
    height: 70px;
    display: flex;
    width: 100%;
    background-color: #f4f4f4;
    padding: 0 10px;
    box-sizing: border-box;
  }
  .order-pic{
    flex: 2.5;
  }
  .order-pic img{
    height: 70px;
    width: 100%;
  }
  .order-name{
    flex: 5;
    padding:  5px 10px;
    box-sizing: border-box;
  }
  .order-name p{
    margin-top: 10px;
  }
  .order-price{
    flex: 1.5;
    padding:  5px 10px;
    box-sizing: border-box;
    text-align: right;
  }
  .order-price span{
    display: block;
    margin-top: 10px;
  }
  .order-summary{
    width: 100%;
    text-align: right;
    border-bottom: 1px solid #ccc;
    height: 30px;
    line-height: 30px;
    padding:  0 10px;
    box-sizing: border-box;
  }
  .order-operating{
    width: 100%;
    text-align: right;
    height: 40px;
    line-height: 40px;
    padding: 0 10px;
    box-sizing: border-box;
  }
  .order-operating span{
    margin-left: 10px;
    padding: 7px 5px; 
    border:1px solid #ccc;
    border-radius: 20px;
  }
  .itemactive{
    color: red;
    border-color: red !important;
    padding: 5px 10px !important; 
  }
  .itemactive a{
    color: red;
  }
</style>
