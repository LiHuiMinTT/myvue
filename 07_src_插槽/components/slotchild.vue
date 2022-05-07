<template>
<!-- 默认插槽 -->
  <div>
      <h1>{{kind}}</h1>
      <slot>
          <!-- 放置默认内容 -->
            <h1>sorry,当前栏目尚未开放</h1>
      </slot>
  </div>
 
</template>

<script>
export default {
    props:{
        kind:{
            type:String,
            required:true,
        }
    }
}
</script>

<style>

</style>