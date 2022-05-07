<template>
    <div>
        query:
        消息编号:{{id}}
        消息内容:{{title}}
        parms:
        消息编号:{{pid}}
        消息内容:{{ptitle}}
    </div>
</template>

<script>
export default {
    mounted(){
        console.log(this.$route);
    },
    props:['id','title','pid','ptitle']
}
</script>

<style>

</style>