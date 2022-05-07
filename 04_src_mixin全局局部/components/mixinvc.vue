<template>
<div>
    <button @click="show">minxinvcbt</button>
</div>
</template>

<script>
import mixin from '../mixin'
export default{
    name:'mixinvc',
    data(){
        return {
            d:2,
        }
    },
    methods:{
        show1(){
            console.log('vcminxin');
        }
    },
    mounted(){
        console.log('!!');
    },
    mixins:[mixin]
}
</script>

<style>

</style>