//创建state
//创建actions
//创建mutations
import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex);
const state = {
    sum:0,
};
const actions = {
    add(context,value){
        context.commit('JIA',value);
    },
    evenadd(context,value){
        if(context.state.sum%2==0){
            context.commit('AddEven',value)
        }
    }
};
const mutations = {
    JIA(state,value){
        state.sum += value;
    },
    AddEven(state,value){
        state.sum += value;
    }
}
const getters = {
    bigsum(state){
        return state.sum*10;
    }
}
export default new Vuex.Store({
    state,
    actions,
    mutations,
    getters
})