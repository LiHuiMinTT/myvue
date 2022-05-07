<template>
  <div @click="give">
    {{child.name + '--' + child.age}}
  </div>
</template>

<script>
export default {
    data(){
        return {
            child:{
                name:'高少飞',
                age:'22'
            }
        }
    },
    methods:{
        give(){
            this.$bus.$emit('updata',this.child)
    }
    }
    }

</script>

<style>

</style>