<template>
  <div>
      <item v-for="todo in todos" :todo='todo' :key='todo' @dele='delefun'/>
  </div>
</template>

<script>
import item from './RecordItem.vue'
export default {
    name:'RecordList',
    components:{
        item
    },
    data(){
        return {
            todos:['打代码','睡觉','吃饭']
        }
    },
    methods:{
        delefun(data){
            for (const [index,value] of this.todos.entries()) {
                if(data == value){
                    this.todos.splice(index,1);
                }
            }
            this.$emit('changelen',this.todos.length)
        }
    }
}
</script>

<style>

</style>