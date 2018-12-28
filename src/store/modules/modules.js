//模块中的数据
const state={
    num:1000
}
//派生的数据,会被缓存
const getters={
    data(state){
        let time=new Date()
        let year=time.getFullYear()
        let month=(time.getMonth()+1).toString().padStart(2,'0')
        let days=time.getDate().toString().padStart(2,'0')
        return `${year}-${month}-${days}`
    }
}
//模块中同步的改变
const mutations={
    changes(state,{payload}){
        console.log(payload)
            payload=='+'?state.num++:state.num--
    }
}
//模块中异步的改变
//action可以返回promise,当异步操作完成后通知组件
const actions={
    changessync({commit},action){
        // console.log(context,payload,'sjf')
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                commit('changes',action)
             },1000)
             resolve()
        })
        
        
    }
}
export default {
    //命名空间
    namespaced:true,
    state,
    mutations,
    getters,
    actions
}