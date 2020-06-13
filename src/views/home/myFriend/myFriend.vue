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
        <commonFooter/>
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
@import '../../../assets/css/common.styl';
.wrap_Friends {
    width: 100%;
}

.header_Friends {
    _common_flex()
    _common_center()
    justify-content: flex-end;
    margin-top: 1.066667rem;
}

.enters_Friends {
    width: .533333rem;
    margin-right: .266667rem;
}

.main_Friends {
    width: 100%;
    _common_flex()
    justify-content: space-between;
}

.content_Friends {
    width: 85%;
}

.main_tetxone {
    margin-left: .933333rem;
}


/* 线 */

.line_main {
    width: 100%;
    height: .02rem;
    background-color: #D7D7D7;
}

.list_Friends {
    _common_flex()
    _common_center()
    justify-content: end;
}

.avatarone_Feiends {
    width: 1.066667rem;
    border-radius: 50%;
    margin: .266667rem;
}

.main-right_Friends {
    _common_flex()
    _common_column()
    line-height: .466667rem;
    
}

.entertwo_Friends {
    width: .4rem;
}

.searchbox_Friends {
    width: 100%;
}

.Release_Friends {
    display: flex;
    justify-content: flex-end;
}

.Releaseone_Friends {
    _common_flex()
    _common_column()
    line-height: 0;
}

.setting_Friends {
    width: 1.066667rem;
}

.searchbox_two_Friends {
    width: 100%;
    _common_flex()
    _common_center()
}

.input_Friends {
    width: 75%;
    height: .8rem;
    border-radius: .666667rem;
    /* 边框颜色 */
    border-color: #B0B0B0;
}

.footer_Friends {
    width: 100%;
    _common_flex()
    justify-content: space-around;
    _common_center()
    background-color: #F4F4F4;
    margin-top: .266667rem;
}

.footer_one_Friends {
    _common_flex()
    _common_column()
    margin-top: .266667rem;
    line-height: 0;
}

.InternetWorld_Friends {
    width: 1.066667rem;
}
</style>