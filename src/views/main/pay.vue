<template>
  <div class="containerpay">
    <div class="address" @click="changeaddress" v-show="addressvisable">
      <p><span>{{selectedaddress.tel}}</span>{{selectedaddress.address}}</p>
      <i>></i>
      <p>{{selectedaddress.name}}</p>
    </div>
    <div class="paymiddle">
      <ul>
        <li>
          <span>支付方式</span>
          <p>在线支付</p>
        </li>
        <li>
          <span>抵用券</span>
          <p>暂无可用</p>
        </li>
        <li>
          <span>代金券</span>
          <p>暂无可用</p>
        </li>
      </ul>
    </div>
    <div class="paymiddle">
      <ul>
      <li>
          <span>荣华葡萄庄园</span>
        </li>
        <li class="goodslists" v-if="payForCollection" v-for="(value, index) in goodsclear">
          <div class="storeAccount">
            <div class="pic">
              <img :src="goodspic(value)" alt="">
            </div>
            <div class="stores">{{value.title}}</div>
            <div class="count">
              <i @click="revise('minus', value, index)">-</i>
              <i>{{value.count}}</i>
              <i @click="revise('plus', value, index)">+</i>
            </div>
            <div class="price">￥{{value.totalprice}}</div>
          </div>
        </li>
        <li class="goodslists" v-if="payForImmediately">
          <div class="storeAccount">
            <div class="pic">
              <img :src="goodsPic()" alt="">
            </div>
            <div class="stores">{{selectedstore.title}}</div>
            <div class="count">
              <i @click="revise('minus')">-</i>
              <i>{{selectedstore.count}}</i>
              <i @click="revise('plus')">+</i>
            </div>
            <div class="price">￥{{selectedstore.totalprice}}</div>
          </div>
        </li>
        <li class="goodslists" v-if="payForInn">
          <div class="storeAccount">
            <div class="pic">
              <img :src="innpic()" alt="">
            </div>
            <div class="store">{{inndetail.title}}</div>
          <!--   <div class="count">
              <i>{{inndetail.count}}</i>
            </div> -->
            <div class="price">￥{{inndetail.price}}</div>
          </div>
        </li>
        <li>
          <span>总计{{totalvalue}}元</span>
          <p>待支付{{totalvalue}}元</p>
        </li>
      </ul>
    </div>
    <div class="totalpay">
      <span>待支付￥ {{totalvalue}}元</span>
      <p @click="trytopay">微信免密支付</p>
    </div>
    <div class="payshade" v-show="payshade">
      <div class="loading">
        <img src="../../assets/icon/loading.gif" alt="">
        <p v-show="loading">正在支付，请稍后...</p>
      </div>
      <div class="paysuccess" v-show="paysuccess">
        <p>支付成功，正在跳转，请稍后...</p>
      </div>
    </div>
  </div>
</template>

<script>
  import addOrders from '../../service/add'
  import dataInn from '../../service/goodsdata'
  import * as mutTypes from '../../store/mutation-types'
  const PAY_TYPE_COLLECTION = 'collection'
  const PAY_TYPE_IMMEDIATELY = 'immediately'
  // const PAY_TYPE_INN = 'innbook'

  export default {
    name: 'pay',
    components: {},
    data () {
      return {
        payshade: false,
        loading: false,
        paysuccess: false,
        goodsclear: [],
        addressvisable: true
      }
    },
    computed: {
      totalvalue () {
        if (this.payForImmediately) {
          return this.selectedstore.totalprice
        } else if (this.payForInn) {
          return this.inndetail.price
        } else {
          let total = 0
          this.goodsclear.forEach(value => {
            total += value.totalprice
          })
          return total
        }
      },
      payfor () {
        return this.$route.query.type
      },
      payForCollection () {
        return this.payfor === PAY_TYPE_COLLECTION
      },
      payForImmediately () {
        return this.payfor === PAY_TYPE_IMMEDIATELY
      },
      payForInn () {
        if (this.$route.params.pic) {
          this.addressvisable = false
          return true
        }
      },
      selectedaddress () {
        return this.$store.state.selectedaddress
      },
      selectedstore () {
        return this.$store.state.shopdetail || 0
      },
      totalprice () {
        return this.selectedstore.price || 0
      },
      inndetail () {
        return this.$route.params
      }
    },
    methods: {
      innpic () {
        if (this.inndetail.pic) {
          let value = this.inndetail
          return value.pic.key ? value.pic.thumbnailURL(700, 480) : value.pic.url
        }
      },
      goodspic (value) {
        if (value.pic) {
          return value.pic.key ? value.pic.thumbnailURL(70, 70) : value.pic.url
        }
      },
      goodsPic () {
        let shopdetail = this.$store.state.shopdetail
        if (shopdetail.pic) {
          return shopdetail.pic.key ? shopdetail.pic.thumbnailURL(70, 70) : shopdetail.pic.url
        }
      },
      changeaddress () {
        let data = this.$route.query.type
        this.$router.replace('/manor/address?type=' + data)
      },
      revise (method, value, index) {
        if (this.payForImmediately) {
          let shopdetail = this.$store.state.shopdetail
          this.$store.commit(mutTypes.SHOP_DETAIL, {shopdetail, method})
        } else if (this.payForCollection) {
          let goodsclear = this.goodsclear
          this.$store.commit(mutTypes.GOODS_CLEAR, {goodsclear, index, method})
        }
      },
      trytopay () {
        this.payshade = true
        this.loading = true
        let self = this
        if (this.payForImmediately) {
          let order = []
          order.name = this.selectedstore.title
          order.pic = this.selectedstore.pic ? this.selectedstore.pic : null
          order.price = this.selectedstore.totalprice
          order.count = this.selectedstore.count
          order.explain = this.selectedstore.explain
          order.orderAddress = this.selectedaddress
          order.orderType = this.selectedstore.goodstype
          addOrders.addOrder(order).then(res => {
          })
        } else if (this.payForCollection) {
          let address = this.selectedaddress
          addOrders.addOrder(this.goodsclear, address)
        } else {
          console.log(this.inndetail)
          addOrders.addInnBook(this.inndetail)
          dataInn.setInn(this.inndetail.id)
        }
        this.$store.commit(mutTypes.REMOVE_CACHE)
        setTimeout(function () {
          self.loading = false
          self.paysuccess = true
          setTimeout(function () {
            self.$router.replace('../manor/orders')
          }, 1500)
        }, 1500)
      }
    },
    mounted () {
      console.debug('App 加载,支付页', new Date().toLocaleTimeString())
      this.goodsclear = this.$store.state.goodsclear
    }
  }
</script>

<style lang="css">
  .containerpay{
    width: 100%;
    height: 100vh;
    background-color: #f4f4f4;
    font-size: 10px;
    float: left;
  }
  .address{
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    border-bottom: 1px solid #ccc;
    background: #fff;
    font-size: .85rem;
  }
  .address p{
    margin-top: 10px;
    font-size: .85rem;
  }
  .address p span{
    margin-right: 10px;
  }
  .address i{
    float: right;
    vertical-align: 20px;
  }
  .paymiddle{
    margin: 10px 0;
    background: #fff;
    border-bottom: 1px solid #ccc;
    font-size: .85rem;
  }
  .paymiddle ul{
    width: 100%;
    list-style: none;
  }
  .paymiddle ul li{
    border-top: 1px solid #ccc;
    padding: 15px;
    box-sizing: border-box;
  }
  .paymiddle ul li span{
    display: inline-block;
  }
  .paymiddle ul li p{
    float: right;
  }
  .storeAccount{
    display: flex;
    line-height: 80px;
  }
  .store{
    flex: 13
  }
  .stores{
    flex: 6;
  }
  .pic {
    flex: 1;
    margin-right: 10px;
  }
  .pic img{
    width: 70px;
    height: 45px;
    margin-top: 20px;
  }
  .count{
    flex: 8;
    text-align: left;
  }
  .count img{
    width: 25px;
    height: 25px;
  }
  .count i{
    font-style: normal;
    display: inline-block;
    margin-left: 8px;
    font-size: .85rem;
  }
  .price{
    flex: 1;
  }
  .totalpay{
    width: 100%;
    height: 50px;
    position: fixed;
    bottom: 0;
    line-height: 50px;
    box-sizing: border-box;
    font-size: .85rem;
    display: flex;
    border-top: 1px solid #ccc;
    font-size: .85rem;
  }
  .totalpay p{
    display: inline-block;
    flex: 5;
    background-color: #fffeea;
    text-align: center;
    color: #fff;
    font-size: .85rem;
    color: #000;
    border-left: 1px solid #ccc
  }
  .totalpay span{
    flex: 7;
    background-color: #fff;
    text-indent: 10px;
    font-size: .85rem;
  }
  .payshade{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    background: rgba(0,0,0,0.3);
  }
  .loading{
    position: absolute;
    top: 35%;
    left: 30%;
    text-align: center;
  }
  .loading img{
    width: 40%;
  }
  .loading p{
    color: #fff;
    margin-top: 10px;
    font-size: .85rem;
  }
  .paysuccess{
    width: 100%;
    text-align: center;
    position: absolute;
    top:47%;
    font-size: .85rem;
    color: #fff;
  }
  .goodslists{
    padding: 0 15px!important;
    height: 80px;
  }
</style>
