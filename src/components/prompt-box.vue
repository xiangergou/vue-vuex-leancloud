<template>
 <div class="container" v-show="show">
    <div class="prompt">
      <p>{{title}}</p>
      <p class="message">{{message}}</p>
      <button v-show="mbOk" v-on:click="submit">确定</button>
      <button v-show="mbCancel" v-on:click="close">取消</button>
    </div>
    <div class="shade"></div>
  </div>
</template>

<script>
  const DEFAULT_TITLE = 'Message Box'
  const DEFAULT_MESSAGE = ''

  export default {
    name: 'prompt',
    data () {
      return {
        show: false,
        resolve: null,
        reject: null,
        title: DEFAULT_TITLE,
        message: DEFAULT_MESSAGE,
        mbOk: true,
        mbCancel: false
      }
    },
    methods: {
      close () {
        this.show = false
        this.reject('close')
      },
      submit () {
        this.show = false
        this.resolve('submit')
      },
      confirm (params) {
        if (params) {
          this.title = params.title || DEFAULT_TITLE
          this.message = params.message || DEFAULT_MESSAGE
          this.mbOk = params.mbOk || true
          this.mbCancel = params.mbCancel
        }
        this.promise = new Promise((resolve, reject) => {
          this.resolve = resolve
          this.reject = reject
        })
        this.show = true
        return this.promise
      },
      alert (title, message) {
        this.confirm({
          title: title,
          message: message,
          mbOk: true,
          mbCancel: false
        })
      }
    }
  }
</script>
<style lang="css" scoped>

  .container {
    width: 100%;
  }

  div, p {
    font-weight: lighter;
    font-size: .7rem;
  }

  .message {
    font-weight: lighter;
    font-size: .9rem;
  }
  
  .prompt {
    position: absolute;
    top: 30%;
    left: 15%;
    width: 70%;
    height: auto;
    background-color: #f4f4f4;
    padding: 20px;
    box-sizing: border-box;
    border-radius: 15px;
    z-index: 1000;
    text-align: center;
  }
  
  .prompt p {
    line-height: 1.5rem;
    text-align: center;
    color: #777;
  }
  
  .prompt button {
    background-color: #00bff3;
    width: 40%;
    margin: 15px 5px;
    padding: 5px 0;
    border: none;
    color: #fff;
  }
  
  .shade {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
    z-index: 999;
    filter: alpha(Opacity=80);
    -moz-opacity: 0.5;
    opacity: 0.5;
  }
</style>
