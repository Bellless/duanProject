<template>
  <div class="Busjivi">
    <h1>eventBus机制的父组件</h1>
    <h1 @click="fnfanhu">返回</h1>
    <div class="Busjivio">
      <p>这是要传递的参数</p>
      <p v-text="buswww" style="color:red"></p>
      <h1 @click="fnBsone" style="color:#007ACC">跳转</h1>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      buswww: "未收到"
    };
  },
  watch: {},
  computed: {},
  methods: {
    fnfanhu() {
      this.$router.go(-1);
    },
    fnBsone() {
      this.$router.push({path: "/Son_one_eventBus"});
    },
    fnBUsjs() {
      window.eventBus.$on("aMag", msg => {
        console.log(msg);
          
        this.buswww = msg;
      });
    }
  },
  created() {
    this.fnBUsjs();
  },
  mounted() {}
};
</script>
<style lang="stylus" scoped>
@import '../../assets/css/common.styl';

.Busjivi {
  background-color: #E6E6E6;
  _common_flex();
  _common_column();

  .Busjivio {
    _common_flex();
    _common_column();
  }
}
</style>