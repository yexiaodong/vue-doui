<template>
  <div class="home">
     <router-link v-for="(item,index) in list" :key="index" :to="item.link">{{item.title}}</router-link>
  </div>
</template>

<script>


export default {
  name: 'home',
  data(){
    return {
      list:[
        {title:'Toast',link:'/toast'}
      ]
    }
  }
}
</script>
