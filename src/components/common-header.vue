<template>
  <div>
    <div class="header-box" id="header" :style="{ background: (this.$route.path.indexOf('detail') > -1)? '#3e53ff' : 'none' }">
      <!-- 返回按钮 -->
      <div class="left-icon" v-if="showback">
        <span @click="back" class="icon-back"></span>
      </div>
      <!-- 标题 -->
      <div class="header-tittle" id="tittle">
        <span v-if="!showinput" :style="{ fontSize: (this.$route.path.indexOf('detail') > -1)? '18px' : '26px;',  marginLeft: (this.$route.path.indexOf('detail') > -1)? '-25px' : '0' }">{{tittle}}</span>
      </div>
      <!-- +号 -->
      <div class="right-icon">
        <span v-show="showAdd" class="add-icon"></span>
        <mt-button style="opacity: 0;" v-if="showAdd" @click.native="popupVisible1 = true" size="large" ref="button"><span class="add-icon"></span></mt-button>
      </div>
    </div>
    <mt-popup v-model="popupVisible1" popup-transition="popup-fade" class="mint-popup-1">
      <ul>
        <li @click="search">
          <img src="../assets/imgs/icon_homepage_pop_search.png" alt="icon"><span>搜索</span>
        </li>
        <li>
          <img src="../assets/imgs/icon_homepage_pop_scan.png" alt="icon"><span>扫一扫</span>
        </li>
        <li>
          <img src="../assets/imgs/icon_homepage_pop_apps.png" alt="icon"><span>应用管理</span>
        </li>
      </ul>
    </mt-popup>
    <!-- header 背景图 -->
    <div class="banner" id="banner"></div>
  </div> 
</template>

<script>
import cusInput from 'common/cus-input'
import { Popup } from 'mint-ui';
export default {
  data() {
    return {
      popupVisible1: false
    }
  },
  props: {
    showinput: {
      type: Boolean,
      default: false
    },
    tittle: {
      type: String,
      default: '标题'
    },
    showback: {
      type: Boolean,
      default: true
    },
    showAdd: {
      type: Boolean,
      default: false
    }
  },
  mounted () {
    //给window添加一个滚动滚动监听事件
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    back() {
      this.$router.goBack()
    },
    handleScroll () {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      var bannerElement = document.getElementById("banner");
      var tittleElement = document.getElementById("tittle");
      bannerElement.style.opacity = scrollTop/100;
      if (scrollTop > 100) {
        tittleElement.style.fontSize = '16px';
      } else {
        tittleElement.style.fontSize = '26px';
      }
    },
    search () {
      console.log(222222);
      this.$router.togo('/home/search')
    }
  },
  components: {
    cusInput,
    Popup
  }
}
</script>

<style lang="less" scoped>
@import "~styles/index.less";
@import "~styles/variable.less";
.header-box{
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;
  .h(100);
  .lh(100);
  // background: #4da9ff;
  color: @base-header-color;
  .fs(@base-header-size);
  display: flex;
  .left-icon{
    position: relative;
    flex: 1;
    .icon-back{
      position: absolute;
      display: inline-block;
      .w(50);
      .h(50);
      .left(25);
      .top(25);
      background-image: url("../assets/imgs/w-back.svg");
      background-size: cover;
    }
  }
  .header-tittle{
    flex: 3;
    text-align: left;
    padding-left: 15px;
    font-size: 26px;
  }
  .right-icon{
    position: relative;
    flex: 1;
    .icon{
      position: absolute;
      display: inline-block;
      .w(50);
      .h(50);
      .right(25);
      .top(25);
      background-image: url("../assets/imgs/more.svg");
      background-size: cover;
    }
    .add-icon {
      position: absolute;
      display: inline-block;
      .w(50);
      .h(50);
      .right(25);
      .top(25);
      background-image: url("../assets/imgs/index/index-add.png");
      background-size: cover;
    }
  }
}

.banner{
    background: url(../assets/imgs/banner.png) no-repeat;
    background-size: cover;
    // content: "";
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 55px;
    opacity: 0;
    z-index: 99;/*-1 可以当背景*/
}

.mint-popup-1 {
  // width: 200px;
  border-radius: 8px;
  // margin: 10px;
  transform: translate(-50%, 0);
  z-index: 2005;
  right: -65px;
  left: unset;
  width: 150px;
  height: 133px;
  top: 53px;
  ul {
    padding: 10px 0; 
    li {
      height: 37px;
      display: flex;
      align-items: center;
      font-size: 16px;
      padding-left: 10px;
      img {
        width: 20px;
      }
      span {
        padding-left: 10px;
      }
    }
  }
}

.mint-popup-1::before {
  triangle: 10px top #fff;
  content: '';
  position: absolute;
  top: -20px;
  right: 50px;
}
.mint-button--large {
  margin-left: 37px;
  margin-top: 6px;
}

</style>
