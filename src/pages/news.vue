<template>
  <div>
      <li>news1</li>
      <li>news2</li>
      <li>news3</li>
  </div>
</template>

<script>
export default {
  //组件内路由守卫
//在通过路由规则进入该组件之前调用
  beforeRouteEnter (to, from, next) {
    console.log('组件内路由规则进入');
    next();
  },
  //在通过路由规则离开该组件之前调用
  beforeRouteLeave (to, from, next) {
    console.log('组件内路由规则离开');
    next();
  },
  beforeDestroy(){
    console.log('news desory');
  }
}
</script>

<style>

</style>