<template>
  <div>
      <select name="number" v-model.number="seledata">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
      </select>
      <button @click="add(seledata)">点我加</button>
      <button @click="addeven(seledata)">偶数加</button><br>
      sum：{{sum}}
      bigsum:{{bigsum}}
  </div>
</template>

<script>
import {mapActions, mapGetters, mapState,mapMutations} from 'vuex'
export default {
    data(){
        return {
            seledata:1,
        }
    },
    computed:{
        ...mapState({sum:'sum'}),
        ...mapGetters({bigsum:'bigsum'})
    },
    methods:{
        // add(){
        //     this.sum+=this.seledata;
        // },
        // add(){
        //     this.$store.commit('JIA',this.seledata);
        // },
        ...mapMutations({add:'JIA'}),
        // addeven(){
        //     this.$store.dispatch('evenadd',this.seledata);
        // }
        ...mapActions({addeven:'evenadd'})
    }
}
</script>

<style>

</style>