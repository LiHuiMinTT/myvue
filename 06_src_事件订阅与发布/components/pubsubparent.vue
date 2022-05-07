<template>
  <div>
      <child/>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
import child from './pubsubchild.vue'
export default {
    components:{
        child
    },
    mounted(){
        //受到两个数据 第一个参数为监听到的事件名称，第二个是收到的参数
        pubsub.subscribe('hello',(name,value)=>{
            console.log('收到数据' + value);
        })
    }
}
</script>

<style>

</style>