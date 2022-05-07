<template>
  <div class="outer">
      <InsertRecord id="ins"/>
      <RecordList id="rec" @changelen='changefun($event)'/>
      <ListBottom id="lis" :listlength='listlength'/>
  </div>
</template>

<script>
import InsertRecord from './components/InsertRecord.vue'
import ListBottom from './components/ListBottom.vue'
import RecordList from './components/RecordList.vue'
export default {
    name:'App',
    data(){
        return {
            listlength:3
        }
    },
    components:{
        InsertRecord,
        RecordList,
        ListBottom
    },
    methods:{
        changefun(event){
            this.listlength = event;
        }
    }
}
</script>

<style>
    .outer{
        border: 2px solid grey;
        width: 300px;
        background-color: aqua;
    }

</style>