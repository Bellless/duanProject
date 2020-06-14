<template>
<div>
    <div>
        <button @click="fnFanhui" style="padding: 0.5rem;color:#00377B" >返回</button>
        <h1>交互（请求）与后台通信>>>详见regit login页面</h1>
        <br>
        <br>
        <h2>常见的数据类型: 字符串 整数 boolean 浮点型(小数) 数组</h2>
        <!-- <p>数组里面的东西循环出来:</p> -->
        <div v-for="(item,index) in personArr" :key='index'>
            <br>
            <p>{{item}}</p>
        </div>
        <br>
        <button @click="fnTest">测试</button>
    </div>
</div>
</template>

<script>
export default {
  components:{},
  props:{},
  data(){
    return {
     personArr: [
         {name:55},
         {},
         [
             {}
         ]
     ] 
    }
  },
  watch:{},
  computed:{},
  methods:{
    fnTest(){},
    fnFanhui(){
        this.$router.go(-1);
    }
},
  created(){},
  mounted(){}
}
</script>
<style scoped>

</style>