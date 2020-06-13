<template>
  <!-- 我的设置 -->
  <div class="wrap_Setup">
    <!-- 我的 -->
    <div class="header" @click="fnerweima">
      <div class="header_two">
        <div class="avatar_Setup">
          <img src="../../../assets/img/home/avatarone.jpg" alt class="avatarone" />
          <h2>顾峰音乐工作室</h2>
        </div>
        <img src="../../../assets/img/Two-dimensional code.png" alt class="Two-dimensionalcode" />
      </div>
    </div>

    <!-- 上部内容 -->
    <div class="main_Setup">
      <!-- 留白 -->
      <div class="Leavewhite"></div>
      <!-- 钱包 -->
      <div class="main_one">
        <div class="ico__main">
          <img src="../../../assets/img/owns/qianbao.png" alt class="qianbao_Setup" />
          <p>我的钱包</p>
        </div>
        <img src="../../../assets/img/owns/enter.png" alt class="enter_Setup" />
      </div>

      <!-- 功能 -->
      <div class="main_one">
        <div class="ico__main">
          <img src="../../../assets/img/owns/gongneng.png" alt class="qianbao_Setup" />
          <p>功能</p>
        </div>
        <img src="../../../assets/img/owns/enter.png" alt class="enter_Setup" />
      </div>

      <!-- 设置 -->
      <div class="main_one">
        <div class="ico__main">
          <img src="../../../assets/img/owns/setting.png" alt class="qianbao_Setup" />
          <p>圈子设置</p>
        </div>
        <img src="../../../assets/img/owns/enter.png" alt class="enter_Setup" />
      </div>
    </div>

    <!-- 内容区 -->
    <div class="mainone_setup">
      <div class="setup_tetx">
        <p>设置</p>
      </div>

      <div class="main_one">
        <div class="ico__main">
          <img src="../../../assets/img/owns/yundate.png" alt class="qianbao_Setup" />
          <p>我的企业动态云数据</p>
        </div>
        <img src="../../../assets/img/owns/enter.png" alt class="enter_Setup" />
      </div>

      <div class="main_one">
        <div class="ico__main">
          <img src="../../../assets/img/owns/time.png" alt class="qianbao_Setup" />
          <p>时间管理提醒</p>
        </div>
        <img src="../../../assets/img/owns/enter.png" alt class="enter_Setup" />
      </div>

      <div class="main_one">
        <div class="ico__main">
          <img src="../../../assets/img/owns/haoyou.png" alt class="qianbao_Setup" />
          <p>好友设置</p>
        </div>
        <img src="../../../assets/img/owns/enter.png" alt class="enter_Setup" />
      </div>

      <div class="main_one">
        <div class="ico__main">
          <img src="../../../assets/img/owns/xuanxiang.png" alt class="qianbao_Setup" />
          <p>选项设置</p>
        </div>
        <img src="../../../assets/img/owns/enter.png" alt class="enter_Setup" />
      </div>

      <div class="main_one">
        <div class="ico__main">
          <img src="../../../assets/img/owns/help@2x.png" alt class="qianbao_Setup" />
          <p>帮助</p>
        </div>
        <img src="../../../assets/img/owns/enter.png" alt class="enter_Setup" />
      </div>
    </div>
    <!-- 底栏 -->
    <commonFooter />
    <router-view></router-view>
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
  methods: {
    fnerweima() {
      this.$router.push({ path: "/twoDcode" });
    }
  },
  created() {},
  mounted() {}
};
</script>
<style lang= "stylus" scoped>
@import '../../../assets/css/common.styl';

.wrap_Setup {
  width: 100%;
  height: 100%;
}

/* 顶部 */
.header {
  width: 100%;
  background-color: #F9F9F9;
  _common_border();

  img {
    width: 1.013333rem;
  }

  .header_two {
    _common_flex();
    _common_center();
    justify-content: space-between;
    width: 95%;
    margin: 0 auto;
    padding: 1.066667rem 0 0 0;

    .avatar_Setup {
      _common_flex();
      _common_center();
    }
  }

  .avatar_Setup {
    _common_flex();
    _common_center();
  }
}

/* 内容 */
.main_Setup {
  width: 100%;
  _common_border();
  background-color: #F5F5F5;

  .Leavewhite {
    height: 0.48rem;
    _common_border();
    background-color: #fff;
  }

  img {
    width: 0.866667rem;
  }

  .enter_Setup {
    width: 0.2rem;
  }

  .main_one {
    _common_flex();
    _common_center();
    _common_border();
    width: 90%;
    margin: 0 auto;
    justify-content: space-between;
    padding: 0.266667rem 0;

    .ico__main {
      _common_flex();
      _common_center();
    }
  }
}

.mainone_setup {
  width: 100%;
  _common_border();
  background-color: #F5F5F5;

  .setup_tetx {
    background-color: #fff;
    padding: 0.5rem 1.3rem 0.5rem;
    _common_border();
    font-size: 0.373333rem;
  }

  img {
    width: 0.866667rem;
  }

  .enter_Setup {
    width: 0.2rem;
  }

  .main_one {
    _common_flex();
    _common_center();
    _common_border();
    width: 90%;
    margin: 0 auto;
    justify-content: space-between;
    padding: 0.266667rem 0;

    .ico__main {
      _common_flex();
      _common_center();
    }
  }
}
</style>