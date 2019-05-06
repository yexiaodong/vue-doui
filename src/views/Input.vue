<template>
  <div id="toast">
    <section>
      <!-- placeholder="请输入用户名" -->
      <do-input id="username" required v-model="input1" label="用户名" ></do-input>
      <do-input id="phone" required v-model="input2" label="手机号码"></do-input>
      <do-input id="mail" required v-model="input3" label="邮箱"></do-input>
      <do-input id="test" required v-model="input4" label="正则"></do-input>
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
    }
  },
  methods:{
    submit(){
      console.log('结果',this.input1)
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
