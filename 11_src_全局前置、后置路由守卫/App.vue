<template>
  <div>
      <routerdemo/>
      <!-- qufenxia引用问题 -->
      <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import routerdemo from './components/routerdemo.vue'
export default {
    name:'App',
    components:{
      routerdemo
    }
}
</script>