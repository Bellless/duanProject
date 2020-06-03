<template>
  <!-- 我的好友 -->
    <div class="wrap_Friends">
        <!-- 顶栏 -->
        <div class="header_Friends">
            <img src="../../../assets/img/owns/enters.png" alt class="enters_Friends" />
            <p>添加好友</p>
        </div>
        <!-- 内容区 -->
        <div class="main_Friends">
            <div class="content_Friends">
                <div class="content_Friendsone">
                    <p class="main_tetxone">重要好友</p>
                    <!-- 线 -->
                    <div class="line_main"></div>
                    <div class="list_Friends">
                        <img src="../../../assets/img/home/avatarone.jpg" alt class="avatarone_Feiends" />
                        <p>好友列表</p>
                    </div>
                    <!-- 线 -->
                    <div class="line_main"></div>
                    <div class="list_Friends">
                        <img src="../../../assets/img/home/avatarone.jpg" alt class="avatarone_Feiends" />
                        <p>好友列表</p>
                    </div>
                    <!-- 线 -->
                    <div class="line_main"></div>
                </div>
                <div class="content_Friendstwo">
                    <p class="main_tetxone">好友列表</p>
                    <!-- 线 -->
                    <div class="line_main"></div>
                    <div class="list_Friends">
                        <img src="../../../assets/img/home/avatarone.jpg" alt class="avatarone_Feiends" />
                        <p>好友列表</p>
                    </div>
                    <!-- 线 -->
                    <div class="line_main"></div>
                    <div class="list_Friends">
                        <img src="../../../assets/img/home/avatarone.jpg" alt class="avatarone_Feiends" />
                        <p>好友列表</p>
                    </div>
                    <!-- 线 -->
                    <div class="line_main"></div>
                    <div class="list_Friends">
                        <img src="../../../assets/img/home/avatarone.jpg" alt class="avatarone_Feiends" />
                        <p>好友列表</p>
                    </div>
                    <!-- 线 -->
                    <div class="line_main"></div>
                    <div class="list_Friends">
                        <img src="../../../assets/img/home/avatarone.jpg" alt class="avatarone_Feiends" />
                        <p>好友列表</p>
                    </div>
                    <!-- 线 -->
                    <div class="line_main"></div>
                    <div class="list_Friends">
                        <img src="../../../assets/img/home/avatarone.jpg" alt class="avatarone_Feiends" />
                        <p>好友列表</p>
                    </div>
                </div>
            </div>

            <!-- 侧边栏 -->
            <div class="main-right_Friends">
                <img src="../../../assets/img/owns/entertwo.png" alt class="entertwo_Friends" />
                <p>A</p>
                <p>B</p>
                <p>C</p>
                <p>D</p>
                <p>E</p>
                <p>F</p>
                <p>G</p>
                <p>H</p>
                <p>I</p>
                <p>J</p>
                <p>K</p>
                <p>L</p>
                <p>M</p>
                <p>N</p>
                <p>O</p>
                <p>P</p>
                <p>Q</p>
                <p>R</p>
                <p>S</p>
                <p>T</p>
                <p>U</p>
                <p>V</p>
                <p>W</p>
                <p>X</p>
                <p>Y</p>
                <p>Z</p>
            </div>
        </div>

        <!-- 输入框 -->
        <div class="searchbox_Friends">
            <div class="Release_Friends">
                <div class="Releaseone_Friends">
                    <img src="../../../assets/img/owns/setting.png" alt class="setting_Friends" />
                    <p>发布内容</p>
                </div>
            </div>
            <div class="searchbox_two_Friends">
                <input type="text" placeholder="请输入你想找的行业" class="input_Friends" />
            </div>
        </div>
        <!-- 底栏 -->
        <div class="footer_Friends">
            <router-link to="connectedWorld">
                <div class="footer_one_Friends">
                    <img src="../../../assets/img/footer_img/InternetWorld.png" alt class="InternetWorld_Friends" />
                    <p>互联世界</p>
                </div>
            </router-link>
      
            <div class="footer_one_Friends">
                <img src="../../../assets/img/footer_img/friend.png" alt class="InternetWorld_Friends" />
                <p>我的好友</p>
            </div>
      
            <router-link to="mySettings">
                <div class="footer_one_Friends">
                    <img src="../../../assets/img/footer_img/setUp.png" alt class="InternetWorld_Friends" />
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
<style lang= "stylus" scoped>
@import '../../../assets/css/myFriend.css';
@import '../../../assets/css/common.styl';
</style>