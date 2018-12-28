<template>
  <div id="app">
    <button @click='changes("+")'>+</button>
    <span>{{this.$store.state.app.num}}</span>
    <button @click='changes("-")'>-</button>
     <!--  <span>{{this.$store.state.num}}</span>
      <span>{{this.$store.dispatch.getNum}}</span>
      <button @click="changeNum('add')">+</button>
      <button @click="changeNum('del')">-</button>-->
  </div> 
  
</template>

<script>
export default {
  mounted(){
    console.log(this.$store)
  },
  methods:{
     changes(type){
       //提交 mutation。options 里可以有 root: true，它允许在命名空间模块里提交根的 mutation
       //触发mutation
       //this.$store.commit('app/changes',{payload:type})
       //触发action
       this.$store.dispatch('app/changessync',{payload:type}).then((res)=>{console.log('czuowanc')})
      //  this.$store.dispatch({
      //    type:'app/changessync',
      //    payload:type
      //  })
      //  this.$store.commit({
      //    type:'changes',
      //    payload:type
      //  })
     }
  }

}
// export default {
//   name: 'App',
//   created(){
//     console.log(this.$store)
//   },
//   methods:{
//     changeNum(type){
//       //commit 用来触发mutations里面的方法
//       this.$store.commit("changeNum",type)
//     }
//   }
// }
</script>

<style>

</style>
