<template>
  <div>
    <parent/>
  </div>
</template>

<script>
import parent from './components/parentVC.vue'
export default {
    name:'App',
    components:{
      parent
    }
}
</script>