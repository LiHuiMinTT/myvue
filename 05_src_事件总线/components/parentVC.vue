<template>
  <div>
      <childVC/>
  </div>
</template>

<script>
import childVC from './childVC.vue'
export default {
    data(){
        return {
            parent:{
                name:'李辉民',
                age:'23',
                child:[]
            }
        }
    },
    mounted(){
        this.$bus.$on('updata',(data)=>{
            this.parent.child.push(data);
        })
    },
    components:{
        childVC
    }
}
</script>

<style>

</style>