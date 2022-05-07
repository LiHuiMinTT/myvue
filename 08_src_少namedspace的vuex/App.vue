<template>
  <div>
    <storeVC/>
  </div>
</template>

<script>
import storeVC from './components/storeVC.vue'
export default{
    name:'App',
    components:{
        storeVC
    },
    mounted(){
      console.log(this);
    }
}
</script>