<template>
  <div class="zifu">
    <h1>@emit父组件</h1>
    <!-- <h1 @click="fnfanh">返回</h1> -->
    <div class="zifuo">
        <router-link to="Son_$meit">
             <h1 @click="fnmit" style="color:#007ACC">打开子组件</h1>
        </router-link>
    </div>
    <!-- <meit @ChildParms='acept'/> -->
    <router-view></router-view>
  </div>
</template>

<script>
import meit from "./Son_$meit.vue";
export default {
    // 声明注册引入的组件 局部引入必须声明 不然不能用
  components: {
       meit
  },
  props: {},
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {
    fnfanh() {
      this.$router.go(-1);
    },
    fnmit() {
      // this.$router.push({path:"/Son_$meit"});
    },
    acept(val){
        console.log(val);
    }
  },
  created() {},
  mounted() {}
};
</script>
<style lang="stylus" scoped>
@import '../../assets/css/common.styl';

.zifu {
  background-color: #E6E6E6;
  _common_flex();
  _common_column();

  .zifuo {
    _common_flex();
    _common_column();
  }
}
</style>