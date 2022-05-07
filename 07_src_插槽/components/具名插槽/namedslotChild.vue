<template>
   <div>
      <h1></h1>
      <slot name="slotmain">
          <!-- 放置默认内容 -->
          <h1>sorry,当前栏目尚未开放</h1>
      </slot>
      <slot name="slotfoot">
          <h1>sorry,查询不存在</h1>
      </slot>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>