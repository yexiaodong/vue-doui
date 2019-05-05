<template>
  <div class="home">
     <router-link class="item" v-for="(item,index) in list" :key="index" :to="item.link">{{item.title}}</router-link>
  </div>
</template>

<script>


export default {
  name: 'home',
  data(){
    return {
      list:[
        {title:'Toast',link:'/toast'},
        {title:'Input',link:'/input'}
      ]
    }
  }
}
</script>

<style lang="scss">
.home{
  .item{
    display: block;
  }
}
</style>

