<template>
  <div>
      <slotchild>
          <ol slot="slotmain">
              <li v-for="film in films">{{film}}</li>
          </ol>
          <div slot="slotfoot">
                <h1 > 查询电影</h1>
          </div>

      </slotchild>
      <slotchild>
          <!-- 只有使用template才可以使用下面的简写 -->
          <template v-slot:slotfoot> 
                <h1> 查询音乐</h1>
          </template>

          <ol slot="slotmain">
              <li v-for="music in musics">{{music}}</li>
          </ol>
         
      </slotchild>
  </div>
</template>

<script>
import slotchild from './namedslotChild.vue'
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