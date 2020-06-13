<template>
<!-- 分享页面 -->
<div class="Share">
    <div class="Shutdown">
        <router-link to="/Share">
            <img src="../../assets/img/owns/enters.png" alt="" class="enters" @click="fnenters">
        </router-link>
        <img src="../../assets/img/owns/enterx.png" alt="" class="enterx" @click="fnenterx">
    </div>
    <router-view></router-view>
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
    fnenterx(){
        this.$router.go(-1)
    },
    fnenters(){
        
    },
    fnenterxx() {
      this.$router.go(-1);
      this.eventBus.$emit("fnGetThreeChild", this.name);
    }
},
  created(){
    // this.$router.push({path:"../../home/hometheer.vue"})
},
  mounted(){}
}
</script>
<style lang="stylus" scoped>
@import '../../assets/css/common.styl';
.Share{
    width 100%
    position fixed;
    bottom 0;
    background-color #D6DCDF
    height 30%
    border-radius: .35rem .35rem 0 0;
    .Shutdown{
        _common_flex()
        justify-content flex-end
        img {
            padding 0 .166667rem
        }
    }
}
</style>