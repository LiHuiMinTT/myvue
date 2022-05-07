<template>
  <div>
      <mixinvc/>
      <quanjumixin/>
  </div>
</template>

<script>
import mixinvc from './components/mixinvc.vue'
import quanjumixin from './components/quanjumixin.vue'
export default {
    name:'App',
    components:{
        mixinvc,
        quanjumixin
    }
}
</script>