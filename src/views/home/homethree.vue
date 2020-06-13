<template>
  <div class="traw">
    <div class="teawone">
      <img src="../../assets/img/owns/enterx.png" alt class="enterx" @click="fnenterxx" />
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
      name: "这是三级路由的参数"
    };
  },
  watch: {},
  computed: {},
  methods: {
    fnenterxx() {
      this.$router.go(-1);
      eventBus.$emit("fnGetThreeChild", this.name);
    }
  },
  created() {},
  mounted() {}
};
</script>
<style lang="stylus" scoped>
@import '../../assets/css/common.styl';

.traw {
  width: 50%;
  height: 60%;
  position: fixed;
  top: 4rem;
  left: 3rem;

  .teawone {
    width: 100%;
    height: 100%;
    background-color: rgb(193, 193, 193);
    border-radius: 0.35rem 0.35rem 0.35rem 0.35rem;
    _common_flex();
    justify-content: flex-end;

    img {
      width: 0.666667rem;
      height: 0.666667rem;
      padding: 0.266667rem;
    }
  }
}
</style>