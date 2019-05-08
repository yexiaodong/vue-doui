<template>
  <div id="toast">
    <section>
      <!-- placeholder="请输入用户名" -->
      <do-input id="username" v-model="input1" label="用户名" ></do-input>
      <do-input id="phone" required type="tel" v-model="input2" label="手机号码"></do-input>
      <do-input id="mail" required type="email" v-model="input3" label="邮箱"></do-input>
      <do-input id="test" v-model="input4" label="正则" regex="^(86){0,1}1[3-9]{1}\d{9}$" regexErrorMsg="请输入正确的手机号码！！！！"></do-input>
      <do-input id="max" v-model="input5" label="最大长度" max="3"></do-input>
      <do-input id="min" v-model="input6" label="最小长度" min="2"></do-input>
      <do-input id="min" v-model="input6" label="焦点事件"></do-input>

    </section>

      <span class="btn" @click="submit">提交</span>

  </div>
</template>


<script>
export default {
  data(){
    return{
      input1:'',
      input2:'',
      input3:'',
      input4:'',
      input5:'',
      input6:'',
    }
  },
  methods:{
    submit(){
      console.log('用户名',this.input1)
      console.log('手机号码',this.input2)
    }
  }
}
</script>

<style lang="scss">
.btn{
  display: block;
  margin:10px auto;
  width: 80%;
  height: 40px;
  line-height: 40px;
  background: #9c27b0;
  color:#fff;
  border-radius: 5px;
  text-align: center;
}
</style>
