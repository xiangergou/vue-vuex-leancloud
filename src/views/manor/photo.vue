<!-- <template>
  <div class="container">
    <div class="logo">
      <img src="../../assets/icon/goods2.jpg" alt="">
      <div class="title">
        荣华葡萄庄园
      </div>
    </div>
    <div class="label">
      <ul>
        <router-link to="" replace>
          <li class="active">琼珠</li>
        </router-link>
        <router-link to="" replace>
          <li>琼浆</li>
        </router-link>
        <router-link to="" replace>
          <li>评价</li>
        </router-link>
      </ul>
    </div>
    <div class="goodslist">
      <div class="lists">
        <img src="../../assets/icon/list.png" alt=""><span>紫琼珠</span>
      </div>
      <ul>
        <li>
          <img src="../../assets/icon/goods1.jpg" alt="">
          <div class="explain">
            <span>自酿有机葡萄酒</span>
            <p>庄园自酿有机葡萄酒</p>
          </div>
          <div class="price">
            <p>￥88</p>
            <span>购买</span>
          </div>
        </li>
        <li>
          <img src="../../assets/icon/goods2.jpg" alt="">
          <div class="explain">
            <span>自酿有机葡萄酒</span>
            <p>庄园自酿有机葡萄酒</p>
          </div>
          <div class="price">
            <p>￥88</p>
            <span>购买</span>
          </div>
        </li>
      </ul>
    </div>
    <div class="balance">
      <div class="balancetop">
        <span>i</span>
      </div>
      <div class="balanceleft">
        <img src="" alt="">
      </div>
      <div class="balancemiddle">
        <span>￥2</span>
        <p>满100减3</p>
      </div>
      <div class="balanceright">
        <span>去结算</span>
      </div>
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
  .goodslist .price p{photo.vue
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
  .balance{
    width: 100%;
    position: fixed;
    bottom: 0;
    height: 50px;
    display: flex;
    color: #fff;
    background: rgba(0,0,0,.7);
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
    padding: 10px 0;
  }
  .balance .balancemiddle span{
    font-size: 1rem;
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
</style>
 -->