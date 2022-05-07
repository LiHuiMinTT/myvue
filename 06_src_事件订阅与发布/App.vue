<template>
  <div>
    <parent/>
  </div>
</template>

<script>
import parent from './components/pubsubparent.vue'
export default {
    name:'App',
    components:{
      parent
    }
}
</script>