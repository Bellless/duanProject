<template>
<!-- 互联世界 -->
    <div class="connectedW">
        <div class="content">
        <!-- 头像 -->
            <div class="avatar">
                <img src="../../../assets/img/avatar.png" alt class="avatarT" />
                <h3>si峰</h3>
            </div>
        <!-- 内容 -->
            <div class="mainCt">
                <div>
                <!-- 标题图片 -->
                <div class="mainC">
                    <p class="tetx_p1">6月19号我的最新单曲犯错要和大家见了</p>
                    <img src="../../../assets/img/yinghua.jpg" alt class="yinghua" />
                </div>
                <!-- 位置 -->
                <div class="position">
                    <img src="../../../assets/img/gai.png" alt class="locationP" />
                    <p>朝阳区高碑店芝麻互娱76号</p>
                </div>
                <!-- 日期 -->
                <div class="date">
                    <p>19.5.18.20.04</p>
                </div>
                </div>
            </div>
            <hr />
            <!-- 互动栏 -->
            <div class="interactiveB">
                <div class="interactiveBo">
                    <div>
                        <img src="../../../assets/img/entertaiMent/bottom-icon/guanzhu.png" alt="" class="interactiveBt">
                    </div>
                    <!-- 小圆点 -->
                    <div class="smallDots"></div>
                </div>
                <div class="interactiveBo">
                    <div>
                        <img src="../../../assets/img/entertaiMent/bottom-icon/shuaxing.png" alt="" class="interactiveBt">
                    </div>
                    <div class="smallDots"></div>
                </div>
                <div class="interactiveBo">
                    <div>
                        <img src="../../../assets/img/entertaiMent/bottom-icon/xiaoxi.png" alt="" class="interactiveBt">
                    </div>
                    <div class="smallDots"></div>
                </div>
                <div class="interactiveBo">
                    <div>
                        <img src="../../../assets/img/entertaiMent/bottom-icon/woguanzhu.png" alt="" class="interactiveBt">
                    </div>
                    <div class="smallDots"></div>
                </div>
            </div>
            <hr>
        </div>
        <div class="content">
        <!-- 头像 -->
            <div class="avatar">
                <img src="../../../assets/img/avatar.png" alt class="avatarT" />
                <h3>si峰</h3>
            </div>
        <!-- 内容 -->
            <div class="mainCt">
                <div>
                <!-- 标题图片 -->
                <div class="mainC">
                    <p class="tetx_p1">6月19号我的最新单曲犯错要和大家见了</p>
                    <img src="../../../assets/img/yinghua.jpg" alt class="yinghua" />
                </div>
                <!-- 位置 -->
                <div class="position">
                    <img src="../../../assets/img/gai.png" alt class="locationP" />
                    <p>朝阳区高碑店芝麻互娱76号</p>
                </div>
                <!-- 日期 -->
                <div class="date">
                    <p>19.5.18.20.04</p>
                </div>
                </div>
            </div>
            <hr />
            <!-- 互动栏 -->
            <div class="interactiveB">
                <div class="interactiveBo">
                    <div>
                        <img src="../../../assets/img/entertaiMent/bottom-icon/guanzhu.png" alt="" class="interactiveBt">
                    </div>
                    <!-- 小圆点 -->
                    <div class="smallDots"></div>
                </div>
                <div class="interactiveBo">
                    <div>
                        <img src="../../../assets/img/entertaiMent/bottom-icon/shuaxing.png" alt="" class="interactiveBt">
                    </div>
                    <div class="smallDots"></div>
                </div>
                <div class="interactiveBo">
                    <div>
                        <img src="../../../assets/img/entertaiMent/bottom-icon/xiaoxi.png" alt="" class="interactiveBt">
                    </div>
                    <div class="smallDots"></div>
                </div>
                <div class="interactiveBo">
                    <div>
                        <img src="../../../assets/img/entertaiMent/bottom-icon/woguanzhu.png" alt="" class="interactiveBt">
                    </div>
                    <div class="smallDots"></div>
                </div>
            </div>
            <hr>
        </div>
        <!-- 底栏 -->
        <div class="bottomBo">
           
            <div class="news">
                <div class="newsO">
                    <img src="../../../assets/img/entertaiMent/bottom-icon/xiaoxi.png" alt="" class="newsT">
                </div>
                <p>消息</p>
            </div>
            <div class="news">
                <div class="newsO">
                    <img src="../../../assets/img/entertaiMent/bottom-icon/guanzhu.png" alt="" class="newsT">
                </div>
                <p>关注我的</p>
            </div>
            <div class="news">
                <div class="newsO">
                    <img src="../../../assets/img/entertaiMent/bottom-icon/woguanzhu.png" alt="" class="newsT">
                </div>
                <p>我关注的</p>
            </div>
            <div class="news">
                <div class="newsO">
                    <img src="../../../assets/img/entertaiMent/bottom-icon/shuaxing.png" alt="" class="newsT">
                </div>
                <p>刷新</p>
            </div>
            <router-link to="myHome">
               <div class="news">
                    <div class="newsO">
                        <img src="../../../assets/img/entertaiMent/bottom-icon/zhuye.png" alt="" class="newsT">
                    </div>
                    <p>我的主页</p>
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
@import '../../../assets/css/common.styl';
.connectedW {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}

.avatar {
    display: flex;
    align-items: center;
}

.mainCt {
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    align-items: flex-end;
}

.avatarT {
    width: 1.12rem;
    height: 1.12rem;
    margin-right: .533333rem;
}

.tetx_p1 {
    font-size: .346667rem;
}

.yinghua {
    width: 7.466667rem;
}

.position {
    display: flex;
    justify-content: start;
    align-items: center;
    line-height: .066667rem;
}

.locationP {
    width: .72rem;
}

.date {
    display: flex;
    justify-content: flex-end;
    line-height: .066667rem;
}

.interactiveB {
    display: flex;
    justify-content: space-around;
}

.interactiveBo {
    display: flex;
}

.interactiveBt {
    width: 1rem;
}

.smallDots {
    width: .306667rem;
    height: .306667rem;
    background-color: #FF0000;
    border-radius: 50%;
}

.bottomBo {
    width: 100%;
    display: flex;
    justify-content: space-around;
    background-color: #E7ECE8;
    position: Sticky;
}

.news {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: .266667rem;
    line-height: 0;
}

.newsO {
    margin-top: .133333rem;
}

.newsT {
    width: 1.05rem;
}
</style>