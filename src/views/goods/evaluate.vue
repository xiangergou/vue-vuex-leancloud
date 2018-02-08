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
          <li>琼浆</li>
        </router-link>
        <router-link to="" replace>
          <li class="active">评价</li>
        </router-link>
      </ul>
    </div>
    <div class="evaluatelist">
      <div class="evaluatLabel">
        <ul>
          <li><span>全部({{totalCount}})</span></li>
          <li><span>满意({{satisfactionCount}})</span></li>
          <li><span>不满意({{unsatisfactoryCount}})</span></li>
          <li><span>味道好({{goodtasteCount}})</span></li>
          <li><span>物流快({{materialflowCount}})</span></li>
          <li><span>发货快({{shipmentsCount}})</span></li>
          <li><span>口感佳({{tasteCount}})</span></li>
        </ul>
      </div>
      <div class="evaluate">
        <ul>
          <li v-for="value in evaluatelist">
            <div class="favicon">
              <span></span>
            </div>
            <div class="name">
              <span>{{value.user ? value.user.username : '七月'}}</span>
              <strong><img src="../../assets/icon/评价星实@3x.png" alt="" v-for="rate in (value.rate)"></strong><br>
              <p v-for="tag in (value.tags)">{{tag}}</p>
              <i>{{value.explain}}</i>
            </div>
            <div class="date">
              <span>2017-8-9</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import queryEvaluete from '../../service/goodsdata'

  export default {
    name: 'root',
    components: {},
    data () {
      return {
        evaluatelist: [],
        goodtasteCount: 0,
        satisfactionCount: 0,
        materialflowCount: 0,
        tasteCount: 0,
        shipmentsCount: 0,
        unsatisfactoryCount: 0
      }
    },
    computed: {
      totalCount () {
        let count = 0
        this.evaluatelist.forEach(value => {
          count += value.tags.length
          value.tags.forEach(tag => {
            if (tag === '味道好') {
              this.goodtaste += 1
            } else if (tag === '满意') {
              this.satisfactionCount += 1
            } else if (tag === '物流快') {
              this.materialflowCount += 1
            } else if (tag === '发货快') {
              this.shipmentsCount += 1
            } else if (tag === '不满意') {
              this.unsatisfactoryCount += 1
            }
          })
        })
        return count
      }
    },
    methods: {
      // tags (value) {
      //   return value.tags
      // }
    },
    mounted () {
      queryEvaluete.queryEvaluete().then(res => {
        this.transDataFromLc(res).forEach(data => {
          this.evaluatelist.push(data)
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
    color: #c20104;
    border-bottom: 1px solid #c20104;
  }
  .evaluatelist{
    width: 100%;
    box-sizing: border-box;
  }
  .evaluatLabel{
    width: 100%;
    background-color: #fff;
    float: left;
    padding: 0 0 10px 0;
  }
  .evaluatLabel ul{
    width: 100%;
    list-style: none;
    padding: 10px;
    box-sizing: border-box;
  }
  .evaluatLabel ul li{
    margin: 10px;
    float: left;
  }
  .evaluatLabel ul li span{
    padding: 5px 8px;
    border-radius: 5px;
    background-color: #c20104;
    color: #fff;
  }
  .evaluatelist .explain{
    width: 100%;
    padding: 15px 8px;
    box-sizing: border-box;
    line-height: 25px;
    font-size: .9rem;
  }
  .evaluatelist .explain span{
    color: #222;
  }
  .evaluatelist .explain p{
    color: #999;
  }
  .evaluatelist .price{
    width: 100%;
    padding: 0 10px;
    box-sizing: border-box;
    font-size: .85rem;
    font-weight: lighter;
  }
  .evaluatelist .price p{
    float: left;
    color: #00bff3;
  }
  .evaluatelist .price span{
    float: right;
    padding: 3px 10px;
    background-color: #00bff3;
    color: #fff;
    border-radius: 5px;
    margin-top: -5px;
  }
  .lists{
    margin: 10px 0;
  }
  .lists img{
    width: 15px;
  }
  .lists span{
    font-size: .85rem;
  }
  .evaluate{
    width: 100%;
    background-color: #fff;
    float: left;
    margin-top: 10px;
  }
  .evaluate ul{
    width: 100%;
    list-style: none
  }
  .evaluate ul li{
    height: 100px;
    width: 98%;
    padding: 10px;
    box-sizing: border-box;
    display: flex;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    margin-left: 2%;
  }
  .favicon{
    flex: 1;
  }
  .favicon span{
    width: 50px;
    height: 50px;
    border-radius: 50px;
    display: block;
    background: url(../../assets/icon/store.jpeg) center center no-repeat;
    background-size: 100% 100%;
    margin-left: 5%;
  }
  .name{
    flex: 4;
    padding: 10px;
  }
  .name span{
  }
  .name strong{
  }
  .name strong img{
    width: 10px;
    width: 10px;
  }
  .name p{
    margin-top: 5px;
    padding: 3px;
    display: inline-block;
    background-color: #c20104;
    color: #fff;
    margin-left: 2px;
    border-radius: 4px;
  }
  .name i{
    display: block;
    margin-top: 10px;
    font-style: normal;
  }
  .date{
    padding: 15px 0;
  }
  </style>
