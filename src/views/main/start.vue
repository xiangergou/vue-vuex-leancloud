<template>
  <div class="containerstart">
  <div class="start-head" @click="turntoindex">
    <img src="../../assets/icon/goods1.jpg" alt="">
    <hr>
    <div class="start-explains">
      <span>葡萄美酒夜光杯，铁马冰河入梦来。
      <p>铁马是你，冰河也是你。</p></span>
      <p><img src="../../assets/icon/store.jpeg" alt=""></p>
    </div>
    <hr>
  </div>
  <div class="menu">
    <span @click="show('goods')">葡萄美酒</span>
    <span @click="show('inn')">庄园小屋</span>
    <span @click="showmanor">关于庄园</span>
    <i class="img"></i>
  </div>
  <div class="manor-menu" v-show="menushow">
    <ul>
      <router-link to="hotel/impression">
        <li>
            庄园简介
        </li>
      </router-link>
        <router-link to="hotel/inn">
        <li>
            庄园快照
        </li>
      </router-link>
      <router-link to="manor/orders">
        <li>
            我的订单
        </li>
      </router-link>
      <router-link to="manor/address">
        <li>
            地址管理
        </li>
      </router-link>
    </ul>
  </div>
  </div>
</template>

<script>
  export default {
    name: 'root',
    components: {},
    data () {
      return {
        menushow: false
      }
    },
    methods: {
      show (data) {
        data === 'goods' ? this.$router.push({name: 'grape'}) : this.$router.push({name: 'inn'})
      },
      showmanor () {
        this.menushow = !this.menushow
      },
      turntoindex () {
        this.$router.push({name: 'grape'})
      }
    },
    mounted () {
      console.debug('App 加载：rev.%s %s', this.rev, new Date().toLocaleTimeString())
    }
  }
</script>

<style lang="css">
  .containerstart{
    width: 100%;
    height: 100vh;
    font-size: 10px;
    background-color: #f4f4f4;
    float: left;
  }
  .menu{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 55px;
    line-height: 55px;
    display: flex;
    border-top: 1px solid #ccc;
    background-color: #fff !important;
  }
  .menu span{
    flex: 1;
    text-align: center;
    border-left: 1px solid #ccc;
    font-size: .85rem;
  }
  .menu span:first-child{
    border: none;
  }
  .manor-menu{
    width: 30%;
    float: right;
    position: fixed;
    bottom: 228px;
    left: 66.7%;
    text-align: center;
    height: 55px;
    line-height: 55px;
  }
  .manor-menu ul{
    list-style: none
  }
  .manor-menu li{
    border: 1px solid #ccc;
    border-bottom: none;
    font-size: .85rem;
    background-color: #fff;
  }
  .manor-menu li:last-child{
    border-bottom: 1px solid #ccc;
  }
  .start-head{
    width: 80%;
    padding: 10px;
    position: absolute;
    top: 10%;
    left: 10%;
    padding: 10px;
    box-sizing: border-box;
    background-color: #fff;
  } 
  .start-head img{
    width: 100%;
  }
  .start-head hr{
    margin-top: 10px;
  }
  .start-explains{
    display: flex;
    padding:  5px;
    box-sizing: border-box;
  }
  .start-explains span{
    display: inline-block;
    flex: 3;
    font-size: .85rem;
    padding: 2px 5px;
    box-sizing: border-box;
  }
  .start-explains p{
    flex: 1;
  }
  .start-explains p img{
    width: 100%;
  }
</style>
