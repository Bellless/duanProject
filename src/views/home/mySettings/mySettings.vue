<template>
  <!-- 我的设置 -->
    <div class="wrap_Setup">
        <!-- 我的 -->
        <div class="header">
            <div class="avatar_Setup">
                <img src="../../../assets/img/home/avatarone.jpg" alt class="avatarone" />
                <h2>顾峰音乐工作室</h2>
            </div>
            <img src="../../../assets/img/Two-dimensional code.png" alt class="Two-dimensionalcode" />
        </div>
        <!-- 线 -->
        <div class="line"></div>
        <div class="lineTwo"></div>
        <!-- 上部内容 -->
        <div class="main_Setup">
            <!-- 钱包 -->
            <div class="main_one">
                <div class="ico__main">
                    <img src="../../../assets/img/owns/qianbao.png" alt class="qianbao_Setup" />
                    <p>我的钱包</p>
                </div>
                <img src="../../../assets/img/owns/enter.png" alt class="enter_Setup" />
            </div>
            <!-- 线 -->
            <div class="line_mainOne">
                <div class="line_M_one"></div>
            </div>
            <!-- 功能 -->
            <div class="main_one">
                <div class="ico__main">
                    <img src="../../../assets/img/owns/gongneng.png" alt class="qianbao_Setup" />
                    <p>功能</p>
                </div>
                <img src="../../../assets/img/owns/enter.png" alt class="enter_Setup" />
            </div>
            <!-- 线 -->
            <div class="line_mainOne">
                <div class="line_M_one"></div>
            </div>
            <!-- 设置 -->
            <div class="main_one">
                <div class="ico__main">
                    <img src="../../../assets/img/owns/setting.png" alt class="qianbao_Setup" />
                    <p>圈子设置</p>
                </div>
                <img src="../../../assets/img/owns/enter.png" alt class="enter_Setup" />
            </div>
            <div class="line"></div>
        </div>
        <!-- 设置 -->
        <div class="setup_tetx">
            <p>设置</p>
        </div>
        <div class="line"></div>
        <!-- 内容区 -->
        <div>
            <div class="main_one">
                <div class="ico__main">
                    <img src="../../../assets/img/owns/yundate.png" alt class="qianbao_Setup" />
                    <p>我的企业动态云数据</p>
                </div>
                <img src="../../../assets/img/owns/enter.png" alt class="enter_Setup" />
            </div>
            <!-- 线 -->
            <div class="line_mainOne">
                <div class="line_M_one"></div>
            </div>
            <div class="main_one">
                <div class="ico__main">
                    <img src="../../../assets/img/owns/time.png" alt class="qianbao_Setup" />
                    <p>时间管理提醒</p>
                </div>
                <img src="../../../assets/img/owns/enter.png" alt class="enter_Setup" />
            </div>
            <!-- 线 -->
            <div class="line_mainOne">
                <div class="line_M_one"></div>
            </div>
            <div class="main_one">
                <div class="ico__main">
                    <img src="../../../assets/img/owns/haoyou.png" alt class="qianbao_Setup" />
                    <p>好友设置</p>
                </div>
                <img src="../../../assets/img/owns/enter.png" alt class="enter_Setup" />
            </div>
            <!-- 线 -->
            <div class="line_mainOne">
                <div class="line_M_one"></div>
            </div>
            <div class="main_one">
                <div class="ico__main">
                    <img src="../../../assets/img/owns/xuanxiang.png" alt class="qianbao_Setup" />
                    <p>选项设置</p>
                </div>
                <img src="../../../assets/img/owns/enter.png" alt class="enter_Setup" />
            </div>
            <!-- 线 -->
            <div class="line_mainOne">
                <div class="line_M_one"></div>
            </div>
            <div class="main_one">
                <div class="ico__main">
                    <img src="../../../assets/img/owns/help@2x.png" alt class="qianbao_Setup" />
                    <p>帮助</p>
                </div>
                <img src="../../../assets/img/owns/enter.png" alt class="enter_Setup" />
            </div>
            <!-- 线 -->
            <div class="line"></div>
        </div>
        <!-- 底栏 -->
        <div class="footer_Setup">
            <router-link to="connectedWorld">
                <div class="footer_ico">
                    <img src="../../../assets/img/footer_img/InternetWorld.png" alt class="InternetWorld_setup"/>
                    <p>互联世界</p>
                </div>
            </router-link>
            <router-link to="myFriend">
                <div class="footer_ico">
                    <img src="../../../assets/img/footer_img/friend.png" alt class="InternetWorld_setup"/>
                    <p>我的好友</p>
                </div>
            </router-link>
            <div class="footer_ico">
                <img src="../../../assets/img/footer_img/setUp.png" alt class="InternetWorld_setup"/>
                <p>我的设置</p>
            </div>
           
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
<style lang="stylus" scoped>
@import "../../../assets/css/mySettings.css";
@import "../../../assets/css/common.styl";
</style>