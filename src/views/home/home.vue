<template>
<!-- 主页 -->
    <div class="bottom">
        <div class="topBar">
            <div class="topB">
                <img src="../../assets/img/owns/enters.png" alt="">
                <router-link to="backTosignin">
                   <img src="../../assets/img/owns/entero.png" alt="" class="topBa">
                </router-link>
            </div>
            <div>
               <h1>未来世界</h1>  
            </div>
            <div class="topB">
               <img src="../../assets/img/owns/enter.png" alt="" class="topBb"> 
               <img src="../../assets/img/owns/entert.png" alt="">
            </div>
        </div>
        <div class="optionOuter">
            <div class="optionO">
                <p>与你一起成长</p>
                <div class="withinTheoptions">
                    <div class="optionLeft">
                        <p>城市/北京</p>
                    </div>
                    <div class="optionRight">
                        <p>发布内容</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="subject">
            <div class="element1">
                <div class="child1">
                    <img src="../../assets/img/home/diqiu.png" alt />
                </div>
                <div class="beijingTwothousand">
                    <p>北京</p>
                    <p>同城2000万人</p>
                </div>
            </div>
            <img src="../../assets/img/home/bofang_left.png" alt class="first" />
            <img src="../../assets/img/home/emial.png" alt class="second" />
            <img src="../../assets/img/home/xiangji.png" alt class="third" />
            <img src="../../assets/img/home/lianggerenwu.png" alt class="fourth" />
            <img src="../../assets/img/home/bofang_right.png" alt class="fifth" />
            <img src="../../assets/img/home/gerenzhongxin-xuanzhongxin.png" alt class="sixth" />
            <img src="../../assets/img/home/caidan.png" alt class="seventh" />
            <img src="../../assets/img/home/search.png" alt class="eighth" />
        </div>
        <div class="Slogan">
            <h2>
                掌握行业动态  精彩瞬间一起分享
            </h2>
        </div>
        <div class="blueirclet">
            
            <img src="../../assets/img/owns/blueircle.png" alt="" class="blueircle">
            
        </div>
        <div class="wrap">
            <div class="main clearfix">
  
            </div>
        </div>
       
        <div class="footer">
            <router-link to="connectedWorld">
                <div class="left">
                <img src="../../assets/img/footer_img/InternetWorld.png" alt class="bottomBarpicture"/>
                <p>互联世界</p>
            </div>
            </router-link>
             <router-link to="myFriend">
                <div class="left">
                    <img src="../../assets/img/footer_img/friend.png" alt class="bottomBarpicture"/>
                    <p>我的好友</p>
                </div>
            </router-link>
            <router-link to="mySettings">
                <div class="left">
                    <img src="../../assets/img/footer_img/setUp.png" alt class="bottomBarpicture"/>
                    <p>我的设置</p>
                </div>
            </router-link>
           
        </div>
    </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style lang="stylus" scoped>
@import '../../assets/css/home.css';
@import '../../assets/css/common.styl';
</style>