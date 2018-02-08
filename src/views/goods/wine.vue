<template>
  <div class="container">
    <div class="logo">
      <img src="../../assets/icon/goods2.jpg" alt="">
      <div class="title">
        荣华葡萄庄园
      </div>
    </div>
    <div class="label">
      <ul>
        <router-link to="grape" replace>
          <li>琼珠</li>
        </router-link>
        <router-link to="wine" replace>
          <li class="active">琼浆</li>
        </router-link>
        <router-link to="evaluate" replace>
          <li>评价</li>
        </router-link>
      </ul>
    </div>
    <div class="garpelist">
      <div class="lists">
        <p></p><span>紫琼浆</span>
      </div>
      <ul>
        <li v-for="value in grapes" @click="trytobuy(value)">
        <img :src="garpe(value)" alt="">  
          <div class="explain">
            <span>{{value.title}}</span>
            <p>{{value.explain}}</p>
          </div>
          <div class="price">
            <p>{{value.price}}.00 元/箱</p>
            <span >购买</span>
          </div>
        </li>
      </ul>
      <div class="storefoot">
        云掌柜・<span>紫琼珠</span>
      </div>
    </div>
  </div>
</template>

<script>
  import dataWine from '../../service/goodsdata'
  import * as mutTypes from '../../store/mutation-types'

  export default {
    name: 'root',
    components: {},
    data () {
      return {
        grapes: [],
        price: 0,
        grapeAccount: 0,
        choosedlistVisable: false,
        selectedstores: [],
        totalselectedstores: [],
        account: 0
      }
    },
    computed: {
      totalPrice () {
        return this.price || 0
      }
    },
    methods: {
      garpe (value) {
        return value.pic.thumbnailURL(700, 600)
      },
      trytobuy (value) {
        let shopdetail = value
        this.$store.commit(mutTypes.SHOP_DETAIL, {shopdetail})
        this.$router.push({name: 'shopdetail'})
      },
      showStorelist () {
        this.choosedlistVisable = !this.choosedlistVisable
      }
    },
    mounted () {
      console.debug('App 加载：葡萄页', new Date().toLocaleTimeString())
      dataWine.queryWine().then(res => {
        this.transDataFromLc(res).forEach(data => {
          this.grapes.push(data)
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
    color: #c20104;
    border-bottom: 1px solid #c20104;
  }
  .garpelist{
    width: 94%;
    padding: 10px 10px;
    box-sizing: border-box;
    margin: 0 3% 30px;
  }
  .garpelist ul{
    width: 100%;
    list-style: none
  }
  .garpelist ul li{
    width: 100%;
    padding: 0 0 30px;
    background-color: #fff;
    margin-bottom: 2px;
    margin-top: 20px;
    border:1px solid #eaeaea;
  }
  .garpelist ul li img{
    width: 100%;
  }
  .garpelist .explain{
    width: 100%;
    padding: 15px 8px;
    box-sizing: border-box;
    line-height: 25px;
    font-size: .9rem;
  }
  .garpelist .explain span{
    color: #222;
  }
  .garpelist .explain p{
    color: #999;
  }
  .garpelist .price{
    width: 100%;
    padding: 0 10px;
    box-sizing: border-box;
    font-size: .85rem;
    font-weight: lighter;
    margin-top: -10px;
  }
  .garpelist .price p{
    float: left;
    color: #c20104;
  }
  .garpelist .price span{
    float: right;
    padding: 3px 10px;
    background-color: #c20104;
    color: #fff;
    border-radius: 5px;
    margin-top: -5px;
  }
  .lists{
    margin-bottom: 10px;
  }
  .lists p{
    width: 5px;
    height: 5px;
    border-radius: 20px;
    display: inline-block;
    margin-right: 5px;
    background-color:  #c20104;
  }
  .lists img{
    width: 15px;
    margin-left: -15px;
    margin-right: 1px;
  }
  .lists span{
    font-size: .85rem;
  }
  .balance{
    width: 100%;
    position: fixed;
    bottom: 0;
    height: 50px;
    display: flex;
    color: #fff;
    background: rgba(0,0,0,.7);
    z-index: 20;
  }
  .balancetop{
    position: fixed;
    bottom: 50px;
    left: 40px;
    padding: 2px 6px;
    background: red;
    border-radius: 2px;
  }
  .balance .balanceleft{
    flex: 2;
    text-align: center;
    opacity: 0.9;
    background: url(../../assets/icon/store.jpeg) center center no-repeat;
    background-size: 60% 80%;
  }
  .balance .balancemiddle{
    flex: 5;
    text-align: left;
    padding: 15px 0;
  }
  .balance .balancemiddle span{
    font-size: .7rem;
  }
  .balance .balancemiddle p{
    font-size: .7rem;
    margin-top: 3px;
  }
  .balance .balanceright{
    flex: 3;
    text-align: center;
    background-color: #88d999;
    text-align: center;
    line-height: 50px;
  }
  .balance .balanceright span{
    font-weight: bold;
    font-size: .9rem;
  }
  .storefoot{
    margin-top: 20px;
    width: 100%;
    text-align: center;
    font-size: .85rem;
    color: #666;
  }
  .storefoot span{
    color: #aaa;
  }
</style>
