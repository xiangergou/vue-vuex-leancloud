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
        <li class="active">
          客栈印象</li>
        <router-link to="inn">
          <li>房型房价</li>
        </router-link>
        <router-link to="featured">
        <li>精选商品</li>
        </router-link>
      </ul>
    </div>
    <div class="roomlist">
      <div class="list">
        <img src="../../assets/icon/list.png" alt=""><span>客栈信息</span>
      </div>
      <div class="inninfo">
        <span><img src="../../assets/icon/user.png" alt="">向二狗</span>
        <p><img src="../../assets/icon/tel.png" alt="">1478394738</p>
        <address><img src="../../assets/icon/address.png" alt="">陕西户县天桥胡家庄
        </address>
        <hr>
        <h2>您也可以通过微信与我等联系</h2>
        <h4>87900</h4>
      </div>
      <div class="list">
        <img src="../../assets/icon/list.png" alt=""><span>掌柜说</span>
      </div>
      <div class="storesaid">
        <div class="store">
        </div>
        <div class="said">
          <p>荣华葡萄庄园，一个适合放空的地方。</p>
          <span>木屋</span><span>葡萄庄园</span><span>景区</span> 
        </div>
      </div>
      <div class="list">
        <img src="../../assets/icon/list.png" alt=""><span>相册</span>
      </div>
      <div class="photo">
        <ul>
          <li v-for="value in innlist">
          <img :src="innpic(value)" alt=""></li>
        </ul>
      </div>
       <div class="list">
        <img src="../../assets/icon/list.png" alt=""><span>客栈简介</span>
      </div>
      <div class="introduce">
        <p>西安荣华农业科技发展有限公司#位于户县天桥乡胡家庄村，由西安荣华企业集团投资建设和管理[1]  。
          西安荣华企业集团积极响应省委、省政府《关于开展千企千村扶助行动的实施意见》的精神和要求，注资1000万元成立西安荣华农业科技发展有限公司。荣华集团在省政府“千企千村”惠民工程号召下，与户县天桥乡胡家庄村帮扶联姻，以葡萄为媒、产业带动，村企合作，群众参与，通过企业投资、群众投地的合作模式，使“农民”离土不离乡变成庄园工，建立具有荣华特色的葡萄庄园[2]  。户县荣华葡萄庄园建设项目是户县西洽会签约项目，已通过户县政府项目论证会，并被载入户县政府2011年工作报告。该项目的建设，对解决贫困村产业发展问题、拓宽农业生态社会功能、加速都市型现代农业建设都具有极大的促进作用。</p>
      </div>
      <div class="bottom">
        云掌柜・<span>微客栈</span>
      </div>
      <div class="Service">
        <ul>
          <li><a href="tel://222">客栈电话</a></li>
          <li>
            <router-link to="inn">
              我要预订
            </router-link>
          </li>
        </ul>
      </div>
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
    methods: {
      innpic (value) {
        return value.pic.thumbnailURL(700, 600)
      }
    },
    mounted () {
      datagoods.queryInn().then(res => {
        this.transDataFromLc(res).forEach(data => {
          this.innlist.push(data)
        })
      })
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
  .roomlist{
    width: 100%;
    padding: 10px 10px;
    box-sizing: border-box;
  }
  .list{
    margin-bottom: 10px;
    font-size: .85rem;
  }
  .list img{
    width: 15px;
    margin-left: -5px;
    margin-right: 1px;
  }
  .list span{
    font-size: .85rem;
  }
  .inninfo{
    width: 90%;
    margin: 10px 5%;
    padding: 10px 10px;
    box-sizing: border-box;
    line-height: 25px;
    background-color: #fff;
    font-size: .85rem
  }
  .inninfo address{
    font-style: normal;
  }
  .inninfo hr{
    margin: 10px 0;
    width: 107%;
    margin-left: -4%;
    border: .001rem solid pink;
  }
  .inninfo img{
    width: 6%;
    vertical-align: -3px;
    margin-right: 10px;
  }
  .inninfo p{
    color: #00bff2;
  }
  .inninfo address u{
    margin-left: 25px; 
    color: #00bff2;;
  }
  .inninfo h2{
    font-size: .85rem;
    font-weight: lighter;
  }
  .inninfo h4{
    width: 100%;
    text-align: center;
    background-color: #fffff4
  }
  .storesaid{
    width: 90%;
    background-color: #fff;
    padding: 10px;
    height: 70px;
    box-sizing: border-box;
    margin: 10px 5%;
  }
  .store{
    float: left;
    height: 50px;
    width: 50px;
    box-shadow: 2px 2px 2px #888888;
    border-radius: 50px;
    background: url(../../assets/icon/store.jpeg);
    background-position: center;
    background-size: 100% 100%; 
  }
  .store img{
    width: 100%;
  }
  .said{
    margin-left: 60px;
    width: 75%;
    margin-top: 5px;
    font-size: .7rem;
  }
  .said span{
    padding: 1px;
    background-color: #00bff3;
    display: inline-block;
    margin: 5px 10px 0 0;
    color:#fff;
    font-weight: lighter;
  }
  .photo{
    width: 90%;
    margin: 10px 5%;
    float: left;
  }
  .photo ul{
    width: 100%;
    list-style: none
  }
  .photo ul li{
    width: 45%;
    border: 5px solid #fff;
    float: left;
    margin: 2px 1px;
  }
  .photo img{
    width: 100%;
  }
  .photo ul li:nth-child(odd){
    float: left;
  }
  .photo ul li:nth-child(even){
    float: right;
  }
  .introduce{
    width: 90%;
    margin: 10px 5%;
    line-height: 25px;
    font-size: .85rem; 
    background-color: #fff;
    padding: 15px 10px;
    box-sizing: border-box;
    font-weight: lighter;
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
  .Service{
    width: 100%;
    height: 50px;
    line-height: 50px;
    position: fixed;
    bottom: 0;
    left: 0;
  }
  .Service ul{
    width: 100%;
    list-style: none;
    text-align: center;
  }
  .Service ul li{
    width: 50%;
    float: left;
    background: #fd6f31;
    opacity: 0.9;
    font-size: 1rem;
    color: #fff;
  }
  .Service ul li a{
    color:#fff;
  }
</style>
