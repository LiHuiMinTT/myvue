<template>
    <div>
        <!-- query:
        消息编号:{{$route.query.id}}
        消息内容:{{$route.query.title}} -->
        parms:
        消息编号:{{$route.params.id}}
        消息内容:{{$route.params.title}}
    </div>
</template>

<script>
export default {
    mounted(){
        console.log(this.$route);
    }
}
</script>

<style>

</style>