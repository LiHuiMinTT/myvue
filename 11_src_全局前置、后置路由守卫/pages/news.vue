<template>
  <div>
      <li>news1</li>
      <li>news2</li>
      <li>news3</li>
  </div>
</template>

<script>
export default {
  beforeDestroy(){
    console.log('news desory');
  }
}
</script>

<style>

</style>