<template>
  <div>
      <button @click="sendfun">send</button>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
    data(){
        return{
            name:'lihuimin',
        }
    },
    methods:{
        sendfun(){
            pubsub.publish('hello',this.name)
        }
    }

}
</script>

<style>

</style>