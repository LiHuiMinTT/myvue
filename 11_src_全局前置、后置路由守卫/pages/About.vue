<template>
  <div>
      <h1>我是About</h1>
      <article>
        <header>
            <router-link replace class="link" to='/about/news'>NEWS</router-link>
            <router-link  replace class="link" to='/about/message'>MESSAGES</router-link>
        </header>
        <keep-alive include="M">
            <router-view></router-view>
        </keep-alive>
    
      </article>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
header{
  display: grid;
  grid-template-columns: 100px 100px;
  grid-gap: 5px;
  justify-items: center;
}
.link{
  display: inline-block;
  height: 20px;
  background: blue;
  color: aliceblue;
  border: black  solid 2px;
  border-radius: 5px;
}
</style>