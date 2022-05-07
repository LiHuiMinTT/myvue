<template>
  <div>
    <slotparent/>
    <hr>
    <slotnamed/>
    <hr>
    
  </div>

</template>

<script>
import slotparent from './components/slotparent.vue'//默认插槽
import slotnamed from './components/具名插槽/slotparent.vue'
export default {
    name:'App',
    components:{
      slotparent,
      slotnamed
    }
}
</script>