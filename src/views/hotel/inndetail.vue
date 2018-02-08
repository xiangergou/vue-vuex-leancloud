<template>
  <div class="containers">
    <div class="inntitle">
      <span>{{inndetail.title}}</span>
      <p>应付￥{{totalprice}}</p>
    </div>
    <div class="details">
      <ul>
        <li>
          <span>手机号</span>
          <input type="number" placeholder="用于接收短信通知" v-model="tel" required="请填写手机号">
        </li>
        <li>
          <span>入住人</span>
          <input type="text" placeholder="姓名，只需填写一人" v-model="name">
        </li>
        <li>
          <span>入住日</span>
          <input type="date" v-model="dateenter">
        </li>
        <li>
          <span>离住日</span>
          <input type="date" v-model="datelevae">
        </li>
      </ul>
      <p>
        退订政策：提前45天退订，收取订单总额的50%的违约金。提前30天退订，收取订单总额的70%的违约金。
        提前15天退订，收取订单总额的100%的违约金。
      </p>
      <strong  class="over-flow"></strong>
      <i @click="tyrtoBook">立即支付</i>
    </div>
 <!--    <div class="inn-foot">
      云掌柜.微客栈
    </div> -->
  </div>
</template>

<script>
  export default {
    name: 'inndetail',
    data () {
      return {
        count: null,
        tel: null,
        name: null,
        dateenter: null,
        datelevae: null
      }
    },
    computed: {
      inndetail () {
        return this.$route.params
      },
      totalprice () {
        let dateenter = new Date(this.dateenter).toLocaleDateString().split('/')
        let datelevae = new Date(this.datelevae).toLocaleDateString().split('/')
        let year = datelevae[0] - dateenter[0] > 0 ? (datelevae[0] - dateenter[0] * 365) : 0
        let month = datelevae[1] - dateenter[1] > 0 ? (datelevae[1] - dateenter[1] * 30) : 0
        let day = datelevae[2] - dateenter[2] > 0 ? (datelevae[2] - dateenter[2]) : 0
        return this.inndetail.price * (year + month + day) || this.inndetail.price
      }
    },
    methods: {
      tyrtoBook () {
        let inninfo = {
          tel: this.tel,
          name: this.name,
          dateenter: this.dateenter,
          datelevae: this.dateenter,
          title: this.inndetail.title,
          explain: this.inndetail.explain,
          price: this.totalprice,
          id: this.inndetail.id,
          pic: this.inndetail.pic
        }
        this.$router.push({name: 'pay', params: inninfo})
      }
    },
    mounted () {
    }
  }
</script>

<style lang="css">
  .containers {
    width: 100%;
    height: 100vh;
    font-size: 10px;
    background-color: #f4f4f4;
    float: left;
    padding: 10px;
    box-sizing: border-box;
  }
  .inntitle{
    width: 100%;
    height: 30px;
    padding: 5px 0;
    box-sizing: border-box;
    border-bottom: 1px solid #ccc;
  }
  .inntitle span{
    display: inline-block;
    font-size: .75rem;
  }
  .inntitle p{
    display: inline-block;
    float: right;
    font-size: .75rem;
    color: #00bff3;
  }
  .details{
    margin-top: 15px;
  }
  .details span{
    margin: 10px 0;
    display: inline-block;
    font-size: .8rem;
  }
  .details ul{
    list-style: none;
    width: 100%;
    margin: 10px 0;
    padding: 0 10px;
    box-sizing: border-box;
  }
  .details ul li input{
    width: 75%;
    margin-left: 10px;
    height: 30px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  .details ul li{
    margin-top: 15px;
  }
  .details p{
    width: 70%;
    margin-top: 20px;
    background-color: #fffeea;
    line-height: 30px;
    font-size: .9rem;
    border-left: 2px solid #b5ae1e;
    padding: 5px;
    box-sizing: border-box;
    margin-left: 15%;
  }
  .over-flow{
    overflow: auto;
    zoom: 1;
  }
  .details strong{
    clear:both;
    content:'.';
    display:block;
    width: 0;
    height: 0;
    visibility:hidden;
}
  .details i{
    position: fixed;
    bottom: 0;
    left: 0;
    font-style: normal;
    width: 100%;
    background-color: #fffeea;
    height: 50px;
    display: inline-block;
    line-height: 50px;
    text-align: center;
    font-size: .85rem;
  }
</style>
