<template>
  <div>
      <slotchild  kind='电影推荐'>
          <ol>
              <li v-for="film in films">{{film}}</li>
          </ol>
      </slotchild>
        <slotchild  kind='音乐推荐'>
          <ul>
              <li v-for="music in musics">{{music}}</li>
          </ul>
      </slotchild>
        <slotchild  kind='食物推荐'>
          <h1 v-for="food in foods" kind='食物推荐'>{{food}}</h1>
      </slotchild>
      <slotchild/>
  </div>
</template>

<script>
import slotchild from './slotchild.vue'
export default {
    data(){
        return {
            films:['大话西游','夏洛特烦恼','金刚','复仇者联盟'],
            musics:['两只蝴蝶','青花瓷','世上只有妈妈好','孤勇者'],
            foods:['tomato','banana','noodle','hulatang']
        }
    },
    components:{
        slotchild
    }
}
</script>

<style>

</style>