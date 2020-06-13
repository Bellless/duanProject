<template>
<div class="zifutwo">
    <h1>$emit的子组件</h1>
    <h1 @click="fnfanhone" style="color:red">返回父组件并传递参数</h1>
     <div>
        <p>这是要接收的参数</p>
        <!-- template里面些html结构  如果要使用data数据源里面的东西 可以直接数据名拿来用就行 -->
        <!-- 其他地方如果要使用data里面的数据源 要用this+.指向 -->
    </div>
</div>
</template>

<script>
import { log } from 'util';
export default {
  components:{},
  props:{},
  data(){
    return {
        parms:"这是子组件的参数"
    }
  },
  watch:{},
  computed:{},
  methods:{
    fnfanhone(){
        this.$router.go(-1);
        // 子组件中的$emit写法
        // this.$emit('ChildParms',this.parms)
    }
},
  created(){},
  mounted(){}
}
</script>
<style lang="stylus" scoped>
@import '../../assets/css/common.styl';
.zifutwo{
    width 100%
    height 100%
    position fixed
    top 0
    background-color rgba(201,194,154,0.4)
    _common_flex()
    _common_column();
}
</style>