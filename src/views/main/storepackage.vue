<template>
  <div class="container">
    <div class="storelist" v-for="(value, index) in goodslist">
      <div class="checkbox" :class='{tagActive: checkedTags[index]}' v-on:click="changeActive(index)">
      </div>
      <div class="storepic">
        <img :src="goodspic(value)" alt="">
      </div>
      <div class="storeexplain" >
        <div class="explaintop">
          <span>{{value.title}}</span>
          <p @click="deletegoods(value, index)">X</p>
        </div>
        <div class="explainfoot">
          <span>{{value.totalprice}}</span>
          <p>
            <ul>
              <li @click="revise(value, index, 'minus')">-</li>
              <li>{{value.count}}</li>
              <li @click="revise(value, index, 'plus')">+</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
    <div class="toselectgoods" v-if="noCollection">
      <p @click="toselectgoods">购物车什么都没有，去选择商品吧</p>
    </div> 
    <div class="clearing">
      <div class="check" @click="selectAll">
        <img src="../../assets/icon/unchoose.jpeg" alt="" v-if="selectall">
        <img src="../../assets/icon/choose.jpeg" alt="" v-else>
        全选</div>
      <div class="total">合计: ￥{{totalprice}}</div>
      <div class="clear" @click="clear">结算</div>
    </div>
  </div>
</template>

<script>
  import * as mutTypes from '../../store/mutation-types'

  export default {
    name: 'pay',
    components: {},
    data () {
      return {
        storeaccount: 1,
        goodslist: [],
        selectActive: false,
        checkedTags: [],
        selectall: true
      }
    },
    computed: {
      totalprice () {
        let tags = []
        let total = 0
        this.goodslist.forEach((value, index) => {
          if (this.checkedTags[index]) {
            tags.push(value)
          }
        })
        tags.forEach(value => {
          total += value.totalprice
        })
        return total
      },
      noCollection () {
        return (this.goodslist.length < 1)
      }
    },
    methods: {
      toselectgoods () {
        this.$router.replace('../goods/grape')
      },
      goodspic (value) {
        if (value.pic) {
          return value.pic.key ? value.pic.thumbnailURL(70, 48) : value.pic.url
        }
      },
      revise (value, index, method) {
        this.$store.commit(mutTypes.GOODS_COLLECTION, {index, value, method})
      },
      selectgoods (value, index) {
        this.selectActive = !this.selectActive
      },
      changeActive (n) {
        this.$set(this.checkedTags, n, !this.checkedTags[n])
      },
      deletegoods (value, index) {
        this.$store.commit(mutTypes.GOODS_COLLECTION, {index, value})
      },
      selectAll () {
        if (this.checkedTags.length !== this.goodslist.length) {
          this.goodslist.forEach((value, index) => {
            this.checkedTags.push(index + 1)
          })
        } else {
          this.checkedTags.splice(0, this.checkedTags.length)
        }
        this.selectall = !this.selectall
      },
      clear () {
        let goodsclear = []
        this.goodslist.forEach((value, index) => {
          if (this.checkedTags[index]) {
            goodsclear.push(value)
          }
        })
        this.$store.commit(mutTypes.GOODS_CLEAR, {goodsclear})
        if (goodsclear.length >= 1) {
          this.$router.replace('/main/pay?type=collection')
        } else {
          window.alert('你他妈倒是先选啊')
        }
      }
    },
    mounted () {
      this.goodslist = this.$store.state.goodscollection || null
    }
  }
</script>

<style lang="css">
  .container{
    width: 100%;
    background-color: #f4f4f4;
    /*overflow: hidden;*/
    height: 100vh;
    font-size: 10px;
  }
  .storelist{
    width: 100%;
    height: 100px;
    background-color: #fff;
    display: flex;
    text-align: left;
    border-bottom: 1px solid #ccc;
  }
  .checkbox{
    flex: 1;
     background: url(../../assets/icon/unchoose.jpeg) no-repeat;
    background-size: 25px 25px;
    background-position: center center; 
  }
  .storepic{
    flex: 3;
    padding: 20px 0;
  }
  .storepic img{
    width: 70px;
    height: 48px;
  }
  .storeexplain{
    flex: 15;
    padding: 20px;
    box-sizing: border-box;
  }
  .storeexplain ul{
    list-style: none;
  }
  .explaintop p{
    float: right;
    font-size: .85rem;
  }
  .explaintop span{
    font-size: .85rem;
  }
  .explainfoot span{
    color: red;
    font-size: .9rem;
    display: inline-block;
  }
  .explainfoot{
    margin-top: 30px;
  }
  .explainfoot p{
    float: right;
    font-size: .9rem;
  }
  .explainfoot ul{
    float: right;
  }
  .explainfoot ul li{
    float: left;
    background-color: #ccc;
    padding: 5px 10px;
    margin-left: 1px;
  }
  .clearing{
    width: 100%;
    height: 40px;
    position: fixed;
    bottom: 0;
    line-height: 40px;
    display: flex;
    background-color: #fff;
    font-size: .8rem;
  }
  .checkbox{
    flex: 2;
    padding: 20px;
    box-sizing: border-box;
  }
  .checkbox img{
    width: 25px;
    height: 25px;
    vertical-align: -30px;
  }
  .check{
    flex: 2;
    padding: 0 20px;
    box-sizing: border-box;
  }
  .check img{
    width: 25px;
    height: 25px;
    vertical-align: -8px;
    margin-right: 10px;
  }
  .total{
    flex: 2;
  }
  .tagActive {
    /*border: 1px solid $firstLiBorderC!important;*/
    background: url(../../assets/icon/choose.jpeg) no-repeat;
    background-size: 25px 25px;
    background-position: center center; 
  }
  .clear{
    flex: 2;
    background-color: #c20909;
    color: #fff;
    text-align: center;
  }
  .toselectgoods{
    position: absolute;
    top: 40%;
    left: 10%;
    font-size: 1rem;
    color: #c10204;
  }
  </style>
