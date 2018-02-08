<template>
  <div class="container">
    <div class="logo">
      <img src="../../assets/icon/logo.jpg" alt="">
      <div class="title">
        荣华葡萄庄园
      </div>
    </div>
    <div class="label">
      <ul>
        <router-link to="impression" replace>
          <li>客栈印象</li>
        </router-link>
        <router-link to="inn" replace>
          <li>房型房价</li>
        </router-link>
        <li class="active">精选商品</li>
      </ul>
    </div>
    <div class="goodslist">
      <div class="lists">
        <img src="../../assets/icon/list.png" alt=""><span>精选商品</span>
      </div>
      <ul>
        <li>
          <img src="../../assets/icon/goods1.jpg" alt="">
          <div class="explain">
            <span>紫琼珠</span>
            <p>庄园自种葡萄</p>
          </div>
          <div class="price">
            <p>葡萄美酒夜光杯</p>
            <router-link to="../goods/grape">
              <span>购买</span>
            </router-link>
          </div>
        </li>
        <li>
          <img src="../../assets/icon/goods2.jpg" alt="">
          <div class="explain">
            <span>紫琼浆</span>
            <p>庄园自酿有机葡萄酒</p>
          </div>
          <div class="price">
            <p>欲饮琵琶马上催</p>
            <router-link to="../goods/wine">
              <span>购买</span>
            </router-link>
          </div>
        </li>
      </ul>
    </div>
    <div class="bottom">
      云掌柜・<span>微客栈</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'root',
    components: {},
    data () {
      return {
      }
    },
    mounted () {
      console.debug('App 加载：rev.%s %s', this.rev, new Date().toLocaleTimeString())
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
  .lists{
    margin-bottom: 10px;
  }
  .lists img{
    width: 15px;
    margin-left: -15px;
    margin-right: 1px;
  }
  .lists span{
    font-size: .85rem;
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
