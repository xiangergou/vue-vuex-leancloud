<template>
  <div class="container">
  <div class="logo">
    <img src="../../assets/icon/goods4.jpg" alt="">
    <div class="title">
      荣华葡萄庄园
    </div>
  </div>
  <div class="label">
    <ul>
      <router-link to="impression" replace>
        <li>客栈印象</li>
      </router-link>
      <li class="active">房型房价</li>
      <router-link to="featured" replace>
        <li>精选商品</li>
      </router-link>
    </ul>
  </div>
  <div class="roomlists">
    <div class="list">
      <img src="../../assets/icon/list.png" alt=""><span>房型信息</span>
    </div>
    <div class="room" v-for="value in innlist"   @click="tuntoBook(value)">
      <img :src="innpic(value)" alt="">
      <span>{{value.title}}</span>
      <p>{{value.explain}}</p>
      <strong>{{rented(value)}}</strong>
      <i>预订</i>
    </div>
  </div>
  <div class="bottom">
    云掌柜・<span>微客栈</span>
  </div>
  </div>
</template>

<script>
  import datagoods from '../../service/goodsdata'

  export default {
    name: 'root',
    components: {},
    data () {
      return {
        innlist: []
      }
    },
    computed: {
    },
    methods: {
      rented (value) {
        return value.rented ? '满房' : '可预订'
      },
      innpic (value) {
        return value.pic.thumbnailURL(700, 600)
      },
      tuntoBook (value) {
        this.$router.push({name: 'inndetail', params: value})
      }
    },
    mounted () {
      datagoods.queryInn().then(res => {
        this.transDataFromLc(res).forEach(data => {
          this.innlist.push(data)
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
  .roomlists{
    width: 100%;
    padding: 10px 10px;
    box-sizing: border-box;
  }
  .list{
    margin-bottom: 10px;
  }
  .list img{
    width: 15px;
    margin-left: -5px;
    margin-right: 1px;
  }
  .list span{
    font-size: .85rem;
  }
  .data{
    width: 100%;
    height: 50px;
    background-color: #fff;
  }
  .data ul{
    width: 90%;
    margin: 10px 5%;
    padding: 8px 0;
    box-sizing: border-box;
    list-style: none;
    text-align: center;
  }
  .data ul li{
    width: 49%;
    float: left;
    border-left: 1px solid #ccc;
    position: relative;
  }
  .data ul li:first-child{
    border:none;
  }
  .dataLeft span{
    font-size: .85rem;
  }
  .dataLeft p{
    margin-top: 8px;
    color: #666;
  }
  .dataRight span{
    position: absolute;
    top:25%;
    left: 79%;
  }
  .dataRight span img{
    width: 60%;
  }
  .room{
    margin-top: 20px;
    width: 100%;
    font-size: .85rem;
    background-color: #fff;
    padding-bottom: 5px;
    box-sizing: border-box;
    border: 1px solid #ccc;
  }
  .room img{
    width: 100%;
  }
  .room span{
    margin: 10px 0;
    display: block;
    margin-left: 5px;
  }
  .room p{
    line-height: 20px;
    color:#aaa;
    font-weight: lighter;
    margin-left: 5px;
  }
  .room strong{
    margin: 10px 0; 
    font-weight: lighter;
    display: inline-block;
    color: #dc5252;
    margin-left: 5px;
  }
  .room i{
    margin: 3px 10px; 
    font-style: normal;
    float: right;
    background-color: #00bff3;
    padding: 5px 10px;
    border-radius: 5px;
    color: #fff;
  }
  .bottom{
    margin:20px 0 50px; 
    width: 100%;
    text-align: center;
    font-size: .85rem;
    color: #666;
  }
  .bottom span{
    color: #aaa;
  }
</style>
