<template>
  <div>
    <common-header :tittle="tittle" :showback="false"></common-header>
    <div class="page-content">
      <!-- <mt-button @click="todetail">home</mt-button> -->
      <header class="banner-pack">
      </header>

      <!-- person -->
      <div class="person">
          <img src="../../assets/imgs/swa/app-1.png" alt="">
          <div class="message">
            <h3>李文星</h3>
            <p>
              职位：
              <span>UI设计师</span>
            </p>
          </div>
      </div>
      <div class="card-pack">
        <div class="card">
          <div class="app">
            <img src="../../assets/imgs/swa/app-1.png" alt="">
            <span>项目管理</span>
          </div>
          <div class="setting">
            <div class="setting-done"></div>
          </div>
        </div>
        <div class="card">
          <div class="app">
            <img src="../../assets/imgs/swa/app-1.png" alt="">
            <span>项目管理</span>
          </div>
          <div class="setting">
            <div class="setting-done"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapMutations, mapGetters, mapState} from 'vuex'
import commonHeader from 'common/common-header'
export default {
  data () {
    return {
      tittle: '我的',
      num: 0
    }
  },
  created() {},
  methods: {
    ...mapMutations({
      setNum: 'SET_NUM'
    }),
    todetail() {
      this.$router.togo('/Home/Detail')
    }
  },
  components: {
    commonHeader
  },
  computed: {
    ...mapGetters([
      'number'
    ]),
    ...mapState({
      number: state => state.home.number
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import "~styles/index.less";
@import "~styles/variable.less";
.page-content {
  .banner-pack {
    background-image: url("../../assets/imgs/swa/bg.png");
    background-repeat:no-repeat;
    background-size:100% 100%;
    height: 143px;
  }

  .person {
    background:#ffffff;
    box-shadow:0 5px 12px 0 rgba(0,0,0,0.06);
    border-radius:10px;
    margin: -80px 15px 20px 15px;
    display: flex;
    .message {
      h3 {
        font-size:18px;
        color:#303030;
        text-align: left;
      }
      padding: 27px 0px;
    }
  }
  .card-pack {
    // margin-top: -60px;
    padding-bottom: 60px;

    .card {
      background:#ffffff;
      // box-shadow:0 5px 12px 0 rgba(0,0,0,0.06);
      // border-radius:10px;
      padding: 14px;
      display: flex;
      justify-content: space-between;

      .app {
        display: flex;
        align-items: center;
        img {
          border-radius:6px;
          width:29px;
          height:29px;
        }
        span {
          font-size:16px;
          color:#202020;
        }
      }

      .setting {
        position: relative;
        padding-right: 15px;
        > div:after {
          content: url(../../assets/imgs/swa/select.png);
          display: block;
          position: absolute;
          top: 8px;
          right: 0px;
        }
        font-size:14px;
        color:#8e8e93;
        display: flex;
        align-items: center;
      }
    }
  }
}
.hello{
  h1{
    color: red;
    .fs(38);
  }
}
</style>
