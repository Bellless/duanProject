<template>
<div class="aab">
    <h1>父传子的子组件</h1>
    <h1 @click="fnfa">返回</h1>
    <div>
        <p>这是要收到的参数</p>
    </div>
</div>
</template>

<script>
export default {
  components:{},
  props:{},
  data(){
    return {
    }
  },
  watch:{},
  computed:{},
  methods:{
    fnfa(){
        this.$router.go(-1);
    }
},
  created(){},
  mounted(){}
}
</script>
<style lang="stylus" scoped>
@import '../../assets/css/common.styl';
.aab{
    width 100%
    height 100%
    position fixed
    top 0
    background-color #C6C6C6
    _common_flex()
    _common_column();
    justify-content flex-start
}
</style>