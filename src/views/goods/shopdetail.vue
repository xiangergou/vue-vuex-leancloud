<template>
  <div class="container">
    <div class="logo">
      <img :src="shopPic()" alt="">
      <div class="title">
        荣华葡萄庄园
      </div>
    </div>
    <div class="introduces">
      <span>【新品推荐】{{shopdetail.title}}</span>
      <p>￥{{shopdetail.price}}</p>
      <strong>包邮</strong> 偏远地区除外>
    </div>
    <div class="guarantee">
        <span>担保交易</span>
        <span>7天退货(仅限酒类)</span>
        <span>店主实名认证 ></span>
    </div>
    <div class="detial">
      <h2>商品详情</h2>
      <h4>【{{shopdetail.title}}：一款庄园待客指定用品】</h4>
      <div class="shopdetail">
        <p>产地:中国</p>
        <p>{{shopdetail.explain}}</p>
      </div>
      <span>注:此为全国零售价格，批发代理请微信私聊!</span>
    </div>
    <div class="shoppic">
      <img src="../../assets/icon/goods2.jpg" alt="">
      <img src="../../assets/icon/goods1.jpg" alt="">
      <img src="../../assets/icon/goods3.jpg" alt="">
      <img src="../../assets/icon/goods4.jpg" alt="">
    </div> 
    <div class="othershop">
      <span>相关推荐</span>
      <ul>
        <li v-for="value in goods">
          <img :src="goodspic(value)" alt="" @click="showGoodsDetial(value)">
          <span>￥{{value.price}}</span>
        </li>
      </ul>
    </div> 
    <div class="addbuy">
      <div class="buyright">
        <router-link to="../main/storepackage">
          <span>进入购物车({{collectioncount}})</span>
        </router-link>
        <span @click="collect">加入购物车</span>
        <span @click="immediatelyBuy">立即购买</span>         
      </div> 
    </div> 
  <transition name="slide-fade">
    <p v-if="collectgoods">helloasddddddddddddd</p>
  </transition>
  <prompt-box ref="dialog"></prompt-box>
  </div>
</template>

<script>
  import PromptBox from '../../../src/components/prompt-box'
  import dataRequest from '../../service/goodsdata'
  import * as mutTypes from '../../store/mutation-types'

  export default {
    name: 'shopdatail',
    components: {
      PromptBox
    },
    data () {
      return {
        shopdetail: {},
        collectgoods: false,
        grapelist: [],
        winelist: []
      }
    },
    computed: {
      collectioncount () {
        return this.$store.state.goodscollection.length
      },
      goods () {
        return this.shopdetail.goodstype === 'grapes' ? this.grapelist : this.winelist
      }
    },
    methods: {
      showGoodsDetial (value) {
        this.shopdetail = value
      },
      goodspic (value) {
        if (value.pic) {
          return value.pic.key ? value.pic.thumbnailURL(700, 480) : value.pic.url
        }
      },
      shopPic () {
        if (this.shopdetail.pic) {
          return this.shopdetail.pic.key ? this.shopdetail.pic.thumbnailURL(700, 480) : this.shopdetail.pic.url
        }
      },
      immediatelyBuy () {
        let shopdetail = this.$store.state.shopdetail
        shopdetail.count = 1
        this.$store.commit(mutTypes.SHOP_DETAIL, {shopdetail})
        this.$router.replace('/main/pay?type=immediately')
      },
      collect () {
        let self = this
        this.collectgoods = true
        if (!this.$store.state.user) {
          this.$refs.dialog.confirm({
            title: '失败',
            message: '请先登录！',
            mbCancel: true
          }).then(() => {
            self.$router.push({name: 'login'})
          })
        } else {
          let shopdetail = this.$store.state.shopdetail
          shopdetail.count = 0
          this.$store.commit(mutTypes.GOODS_COLLECTION, shopdetail)
          window.alert('加入购物车成功！')
        }
      }
    },
    created () {
      this.shopdetail = this.$store.state.shopdetail
      if (this.shopdetail.goodstype === 'grapes') {
        dataRequest.queryGrape().then(res => {
          this.transDataFromLc(res).forEach(data => {
            this.grapelist.push(data)
          })
        })
      } else {
        dataRequest.queryWine().then(res => {
          this.transDataFromLc(res).forEach(data => {
            this.winelist.push(data)
          })
        })
      }
    }
  }
</script>

<style lang="css">
.box{width:100px;height:80px;background: blue;margin:5px;}
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
  .introduces{
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    background-color: #fff;
    color: #999;
    height: 120px;
  }
  .introduces span{
    font-size: .9rem;
    text-overflow: ellipsis;
    width: 100%;
    margin: 5px 0;
    color: #222;
    font-size: 1.1rem;
    line-height: 21px;
  }
  .introduces p{
    font-size: 1.2rem;
    color: red;
    margin: 10px 0;
    display: block;
  }
  .introduces strong{
    font-style: normal;
    padding: 3px 5px;
    background-color: #f13014;
    border-radius: 4px;
    color: #fff;
    margin: 10px 5px;
    display: inline-block;
  }
  .guarantee{
    width: 100%;
    background-color: none;
    height: 40px;
    display: flex;
    line-height: 40px;
    text-align: center;
  }
  .guarantee span{
    flex: 1;
  }
  .guarantee strong{
    display: block;
  }
  .zan{
    width: 100%;
    height: 50px;
    box-sizing: border-box;
    background-color: #fff;
    line-height: 50px;
    padding: 0 20px; 
  }
  .zan span{
    padding: 5px 20px;
    border-radius: 10px;
    border: 1px solid #8ba0cc;
    color: #8ba0cc;
  }
  .detial{
    width: 100%;
    padding: 20px 5%;
    box-sizing: border-box;
    text-align: center;
    background-color: #fff;
    font-size: .85rem;
  }
  .detial h2{
    margin-bottom: 30px;
  }
  .detial h4{
    font-size: .85rem;
  }
  .shopdetail{
    margin: 20px 0;
    text-align: left;
    line-height: 20px;
  }
  .detial span{
    float: left;
    display: block;
  }
  .shoppic{
    width: 100%;
    background: #fff;
    padding: 0 5%;
    box-sizing: border-box;
    float: left;
  }
  .shoppic img{
    width: 100%;
    float: left;
  }
  .othershop{
    width: 100%;
    text-align: center;
    font-size: .85rem;
    background-color: #fff;
    padding: 10px 0;
    float: left;
    margin-bottom: 70px;

  }
  .othershop span{
    display: block;
  }
  .othershop ul{
    width: 90%;
    list-style: none;
    margin: 10px 5%;
  }
  .othershop ul li{
    width: 29%;
    float: left;
    margin: 5px;
    text-align: center;
  }
  .othershop ul li img{
    width: 100%;
    margin: 10px 0;
    height: 70px;
  }
  .addbuy{
    position: fixed;
    bottom: 0;
    height: 50px;
    width: 100%;
    background-color: #f4f4f4;
    border-top: 1px solid #999;
    display: flex;
    line-height: 50px;
    text-align: center;
  }
  .buyleft{
    flex: 4;
    display: flex;
  }
  .buyright{
    flex: 1;
    font-size: .8rem;
    color: #fff;
    text-align: center;
  }
  .buyright span{
    width: 100%;
    padding: 2.5% 3%;
    background: #c00210;
    border-radius: 4px;
    margin: 0 10px;
    color: #fff;
  }
  .buyright span:last-child{
    background: #c20104;
    margin-top: 10px;
  }
</style>
