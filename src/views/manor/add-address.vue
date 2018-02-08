<template>
  <div class="container">
  <form>
    <input type="text" placeholder="收货人姓名" v-model="name" required="请填写收货人姓名">
    <input type="number" placeholder="电话号码" v-model="tel" required="请填写收货人姓名">
    <input type="text" placeholder="详细地址" v-model="address" required="请填写收货人姓名">
    <div class="setdefault">
      设为默认地址
    </div>
    <div class="address-add" @click="addAddress">
      保存地址
    </div>
  </form>
  </div>
</template>

<script>
  import add from '../../service/add'
  // import * as mutTypes from '../../store/mutation-types'

  export default {
    name: 'add-address',
    components: {},
    data () {
      return {
        address: null,
        tel: null,
        name: null
      }
    },
    methods: {
      addAddress () {
        if (this.name) {
          let data = []
          data.name = this.name
          data.tel = this.tel
          data.address = this.address
          add.addAddress(data).then(res => {
            this.$router.push({name: 'address'})
          })
        }
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
  form{
    width: 100%;
    padding: 10px 0;
    display: block;
  }
  input{
    width: 100%;
    border: none;
    height: 45px;
    margin-bottom: 1px;
    border-bottom:1px solid #ccc;
    padding: 0 10px;
    box-sizing: border-box;
    font-size: .7rem;
  }
  .address-add{
    position: fixed;
    bottom: 5%;
    left: 5%;
    width: 90%;
    height: 40px;
    background: #189be5;
    text-align: center;
    line-height: 40px;
    border-radius: 5px;
    color: #fff;
  }
  .setdefault{
    width: 100%;
    height: 45px;
    background: #fff;
    line-height: 45px;
    text-indent: 10px;
  }
</style>
