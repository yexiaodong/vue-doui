<template>
  <div id="toast">
    <section>
      <h3>说明</h3>
      <p>大部分UI的Toast功能命名为Toast，如果使用多套UI会导致冲突，所以新建一个doToast名称的Toast！</p>
    </section>
    <div class="" @click="toast1">Toast-简单</div>
    <div class="" @click="toast2">Toast-设置时间</div>
  </div>
</template>


<script>
export default {
  methods:{
    toast1(){
      this.$doToast('请求失败，请联系管理员！');
    },
    toast2(){
      this.$doToast({
        content:'请求失败，请联系管理员！请求失败，请联系管理员！请求失败，请联系管理员！',
        duration:30000
      })
    }
  }
}
</script>

<style lang="scss">

</style>
