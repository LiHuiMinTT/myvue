<template>
    <div>
        <input type='radio'><span>已完成:{{3-listlength}}/总数3</span>
    </div>
</template>

<script>
export default {
    name:'ListBottom',
    props:{
        listlength:{
            type:Number
        }
    }
}
</script>

<style>

</style>