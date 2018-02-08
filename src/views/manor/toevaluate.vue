<template>
  <div class="container">
    <div class="regIndexContent">
      <div class="rateTop">
        <h3>请为本订单做出评价</h3>
        <ul>
          <li v-for="n in 5"><img :src="rateStar(n)" v-on:click="changeRate(n)"></li>
        </ul>
        <ol>
          <li v-for="n in 6" :class='{tagActive: checkedTags[n-1]}' v-on:click="changeActive(n-1)">{{tags[n-1]}}</li>
        </ol>
        <textarea v-model="content" rows="5" placeholder="其他想说的" maxlength="60"></textarea>
        <span>您已输入<i>{{contentcount}}/60</i>字</span>
      </div>
      <div class="rateFoot">
        <p v-on:click="postEvaluate()" v-if="!disable">提交</p>
        <p v-else><img src="../../assets/icon/loading.gif" alt=""></p>
      </div>
    </div>
    <prompt-box ref="dialog"></prompt-box>
  </div>
</template>

<script>
  import goldStar from '../../assets/icon/评价星实@3x.png'
  import grayStar from '../../assets/icon/评价星空@3x.png'
  import addEvaluate from '../../service/add'
  import PromptBox from '../../../src/components/prompt-box'

  export default {
    name: 'evaluate',
    components: {
      PromptBox
    },
    data () {
      return {
        tripInfo: {},
        tags: ['满意', '味道好', '物流快', '不满意', '口感佳', '发货快'],
        rate: 5,
        checkedTags: [],
        content: '',
        disable: false
      }
    },
    computed: {
      contentcount () {
        return this.content.length < 60 ? this.content.length : 60
      }
    },
    methods: {
      rateStar (rate) {
        return this.rate >= rate ? goldStar : grayStar
      },
      changeRate (rate) {
        this.rate = rate
      },
      changeActive (n) {
        this.$set(this.checkedTags, n, !this.checkedTags[n])
      },
      postEvaluate () {
        this.disable = true
        let tags = []
        this.tags.forEach((value, index) => {
          if (this.checkedTags[index]) {
            tags.push(value)
          }
        })
        let params = {
          rate: this.rate,
          explain: this.content || '默认好评',
          tags: tags
        }
        addEvaluate.addEvaluate(params).then(res => {
          this.$refs.dialog.confirm({
            title: '注意',
            message: '评价成功！点击查看'
          }).then(() => {
            this.$router.push({name: 'evaluate'})
          })
        })
      }
    },
    mounted () {
      // TODO: 临时解决手机端输入法弹出破坏布局问题。后续改进实现方式。
      var win = {
        body: document.getElementsByTagName('body')[0],
        h: document.documentElement.clientHeight,
        foot: document.getElementsByClassName('rateFoot')[0]
      }
      window.onresize = function () {
        if (document.documentElement.clientHeight < win.h) {
          win.foot.style.display = 'none'
        }
        if (document.documentElement.clientHeight >= win.h) {
          win.foot.style.display = 'block'
        }
      }
    }
  }
</script>

<style lang="css" scoped>
  .container {
    height: 100vh;
    font-size: 10px;
    background-color: #f4f4f4;
  }
  
  .rateTop {
    width: 100%;
    height: 50%;
    padding: 7% 10%;
    box-sizing: border-box;
    text-align: center;
    height: 100%;
  }
  
  .rateTop h3 {
    margin: 0 0 2% 0;
    font-weight: lighter;
    font-size: 1.1rem;
  }
  
  .rateTop ul {
    width: 100%;
    margin: 5% 0 10% 0;
  }
  
  .rateTop ul li {
    display: inline;
  }
  
  .rateTop ul li img {
    width: 13%
  }
  
  .rateTop ol {
    width: 100%;
    margin: 5% 0;
    list-style: none;
    float: left
  }
  
  .rateTop ol li {
    width: 45%;
    float: left;
    box-sizing: border-box;
    margin: 5% 0 0;
    padding: 3% 0;
    font-size: .9rem;
    border: 1px solid #ccc;
  }
  
  .rateTop ol li:nth-of-type(even) {
    float: right;
  }

  .rateTop span {
    float: right;
  }
  
  .rateTop span i {
    font-size: 1rem;
    margin: 0 5px
  }
  
  .tagActive {
    background-color: #ff9900 !important;
    color: #fff !important;
  }
  
  .rateTop textarea {
    width: 100%;
    margin: 10% 0 0;
    font-size: 1rem;
    resize: none;
  }
  
  .rateFoot {
    position: fixed;
    bottom: 1px;
    width: 100%;
    height: 60px;
    margin: 0;
    text-align: center;
    border-radius: 1px;
    line-height: 60px;
    background-color: #ff9900;
    color: #fff;
  }
  
  .rateFoot p {
    display: block;
    font-size: 1.2rem;
  }

  .rateFoot p img{
    width: 15%;
    vertical-align: auto;
    margin:1% auto;
  }
</style>
