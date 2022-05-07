<template>
  <div>
      <input type="checkbox" name="nodo"><span>{{todo}}</span><input type="button"  @click="deletefun()" value="删除">
  </div>
</template>

<script>
export default {
    name:'RecordItem',
    methods:{
        deletefun(){
            this.$emit('dele',this.todo);
        }
    },
    props:['todo']
}
</script>

<style scoped>
    div{
        display: grid;
        grid-template-columns:1fr 10fr 3fr;
    }
    input[type='radio']{
        justify-self:center; 
    }
    span{
        background:pink;
        padding: 0 10px;
    }
    input[type='button']{
        justify-self: center;
    }
</style>