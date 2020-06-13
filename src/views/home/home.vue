<template>
  <!-- 主页 -->
  <div class="bottom">
    <div class="topBar">
      <div class="topB">
        <img src="../../assets/img/owns/enters.png" alt class="topBa" />
        <!-- <router-link to="backTosignin"> -->
        <img src="../../assets/img/owns/entero.png" alt class="topBa one" @click="fnBack" />
        <!-- </router-link> -->
      </div>
      <div>
        <h1>未来世界</h1>
      </div>
      <div class="topB">
        <img src="../../assets/img/owns/enter.png" alt class="topBb two" />
        <!-- <router-link to="/hometwo"> -->
        <img src="../../assets/img/owns/entert.png" alt @click="fnfenX" />
        <!-- </router-link> -->
      </div>
    </div>
    <div class="optionO">
      <p class="optionOyuni">与你一起成长</p>
      <div class="withinTheoptions">
        <div class="optionLeft">
          <p>城市/北京</p>
        </div>
        <div class="optionRight">
          <p>发布内容</p>
        </div>
      </div>
    </div>
    <div class="subject">
      <div class="element1">
        <div class="child1">
          <img src="../../assets/img/home/diqiu.png" alt class="diqiuchild" />
        </div>
        <div class="beijingTwothousand">
          <p>北京</p>
          <p>同城2000万人</p>
        </div>
        <img src="../../assets/img/home/saoyisao.png" alt class="saoyisaoico" />
        <p class="saoyisaotetx">扫一扫</p>
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
      <h2>掌握行业动态 精彩瞬间一起分享</h2>
      <p v-text="tt"></p>
    </div>
    <router-link to="sixDay">
      <div class="blueirclet">
        <img src="../../assets/img/owns/blueircle.png" alt class="blueircle" />
      </div>
    </router-link>

    <commonFooter />
    <!-- 如果父组件要传递多个参数给子组件 直接+连接 -->
    <!-- <common_tanchuang :first="firstName+number"/> -->
    <router-view></router-view>
  </div>
</template>

<script>
// 局部引入需要的组件
import common_tanchuang from "../../components/common_tanchuang.vue";
export default {
  // components局部引入vue组件
  components: {
    common_tanchuang
  },
  props: {},
  data() {
    return {
      tt: "这是默认文本",
      firstName: "这props传参",
      number: 1233
    };
  },
  watch: {},
  computed: {},
  methods: {
    fnBack() {
      this.$router.go(-1);
    },
    fnfenX() {
      this.$router.push({ path: "/hometwo" });
    },
    fntext() {
      window.eventBus.$on("fnGetThreeChild", value => {
        console.log(value);
        this.tt = value;
      });
    }
  },
  created() {
    this.fntext();
  },
  mounted() {}
};
</script>
<style lang="stylus" scoped>
@import '../../assets/css/common.styl';

.bottom {
  width: 100%;
  margin: 0;
}

.topBar {
  width: 90%;
  margin: 0 auto;
  _common_flex();
  _common_center();
  justify-content: space-between;
  padding: 0.4rem 0 0 0;

  .topB {
    _common_flex();
    _common_center();
    justify-content: space-between;

    topBa {
      width: 0.586667rem;
    }

    .topBa.one {
      width: 0.35rem;
      padding: 0 0 0 0.56rem;
    }

    .topBb.two {
      width: 0.35rem;
      padding: 0 0.56rem 0 0;
    }
  }
}

.optionO {
  width: 90%;
  margin: 0 auto;
  padding: 0.266667rem 0 0 0;

  .optionOyuni {
    color: #9B9B9B;
    font-size: 0.373333rem;
  }

  .withinTheoptions {
    width: 100%;
    _common_flex();

    p {
      font-size: 18px;
    }

    .optionLeft {
      _common_flex();
      _common_center();
      background-color: #18FE44;
      padding: 0.453333rem;
      border-radius: 0.35rem 0 0 0.35rem;
      width: 50%;
      color: #000000;
    }

    .optionRight {
      _common_flex();
      _common_center();
      padding: 0.453333rem;
      border-radius: 0 0.35rem 0.35rem 0;
      width: 50%;
      // _common_border(5px solid #18FE44)
      border: thin solid #18FE44;
      overflow-x: hidden;
      overflow-y: hidden;
      color: #18FE44;
    }
  }
}

.subject {
  _common_flex();
  _common_center();
  width: 90%;
  margin: 0 auto;
  padding: 0.4rem 0 0 0;

  .element1 {
    width: 8.6rem;
    height: 8.6rem;
    background-color: #00FF00;
    border-radius: 50%;
    _common_flex();
    _common_center();

    .child1 {
      width: 5.5rem;
      height: 5.5rem;
      background-color: #99FEFE;
      border-radius: 50%;
      _common_flex();
      _common_center();

      .diqiuchild {
        width: 1.5rem;
      }
    }

    .saoyisaoico {
      position: absolute;
      width: 1rem;
      top: 8.8rem;
    }

    .saoyisaotetx {
      position: absolute;
      top: 9.15rem;
    }
  }

  .beijingTwothousand {
    _common_flex();
    _common_column();
    position: absolute;
    top: 6rem;
    left: 3.8rem;
  }

  img {
    width: 0.706667rem;
    position: absolute;
  }

  .first {
    top: 7.6rem;
    left: 0.9rem;
  }

  .second {
    top: 5.2rem;
    left: 1.833333rem;
  }

  .third {
    top: 4rem;
    left: 4.466667rem;
  }

  .fourth {
    top: 5.2rem;
    left: 7.28rem;
  }

  .fifth {
    top: 7.6rem;
    left: 8rem;
  }

  .sixth {
    top: 9.5rem;
    left: 7.28rem;
  }

  .seventh {
    top: 11rem;
    left: 4.466667rem;
  }

  .eighth {
    top: 9.8rem;
    left: 1.833333rem;
  }
}

.Slogan {
  _common_flex();
  _common_center();
  color: #99F9A8;
  padding: 0.36rem;
}

.blueirclet {
  _common_flex();
  _common_center();
  width: 90%;
  justify-content: flex-end;
  padding: 0.266667rem 0 0 0;

  img {
    width: 1.226667rem;
  }
}
</style>