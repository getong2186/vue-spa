<template>
  <div class="page">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <div>
      <!--充当占位符的div块，无实质内容 -->
      <div style="height:54px;"></div>
      <div class="nav-footer">
        <footer>
          <router-link v-for='(item, index) in navList' :to='item.path' :key='index'
                      v-bind:class="{'active':activeRoute == item.path}">
            <div :class="'tab-'+index"></div>
            <p v-text="item.name"></p>
          </router-link>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      navList: [
        {
          'path': '/home',
          'name': 'GT'
        },
        {
          'path': '/swa',
          'name': '密码管家'
        },
        {
          'path': '/mine',
          'name': '我的'
        }
        // {
        //   'path': '/day',
        //   'name': '纪念日'
        // }
      ]
    }
  },
  computed: {
    activeRoute () {
      return this.$route.path
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import "~styles/index.less";
@import "~styles/variable.less";
.nav-footer {
    position: fixed;
    left: 0px;
    bottom: 0px;
    width: 100%;
    opacity: 1;
    .h(98);
    background: @tab-general-bg-color;
    display: block;
    footer {
      font-size: 0;
      border-top: 1px solid #E7E7E7;
      border-bottom: 1px solid #F8F8F8;
      .pt(10);
      line-height: 1.2;
      width: 100%;
      .h(98);
      display: flex;
      a {
        text-decoration: none;
        color: @base-font-color;
        -webkit-box-flex: 1;
        -moz-box-flex: 1;
        -webkit-flex: 1;
        -ms-flex: 1;
        flex: 1;
        text-align: center;
        box-sizing: border-box;
        display: block;
        .fs(22);
        .tab-0, .tab-1, .tab-2, .tab-3 {
          display: inline-block;
          .h(42);
          .w(42);
          background-size: cover;
        }
        .tab-0 {
          background-image: url("../assets/imgs/footer/index-noselect.png");
        }
        .tab-1 {
          background-image: url("../assets/imgs/footer/swa-noselect.png");
        }
        .tab-2 {
          background-image: url("../assets/imgs/footer/mine-noselect.png");
        }
        &:hover {
          text-decoration: none;
        }
        &.router-link-active.active {
          .tab-0 {
            background-image: url("../assets/imgs/footer/index-select.png");
          }
          .tab-1 {
            background-image: url("../assets/imgs/footer/swa-select.png");
          }
          .tab-2 {
            background-image: url("../assets/imgs/footer/mine-select.png");
          }
          p {
            color:#007aff;
          }
        }
      }
      p {
        margin: 0;
      }
    }
  }
</style>
