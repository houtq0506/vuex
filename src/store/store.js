import Vue from "vue";
import Vuex from "vuex";
import app from './modules/modules'
//vuex的日志，可以记录每一步的mutation
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex);
//暴露文件
//生成store实例
export default new Vuex.Store({
    modules:{
        app
    },
    state:{
        a:10,
        b:50
    },
    plugins: [createLogger()]
})
// export default new Vuex.Store({
//     state: {
//         num: 0
//     },
//     mutations: {
//         changeNum(state, type) {
//             type === "add" ? state.num++ : state.num--;
//         }
//     },
//     getters:{
//         getNum(state){
//             return state.num * 5
//         }
//     }
// })