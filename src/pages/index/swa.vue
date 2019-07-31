<template>
  <div>
    <common-header :tittle="tittle" :showback="false"></common-header>
      <div class="page-content">
      <!-- <mt-button @click="todetail">story</mt-button> -->
      <header class="banner-pack">
      </header>
      <div class="card-pack">
        <!-- <div v-for="app in grouplists" :key="app.id">{{app.name}}</div> -->
        <div class="card" v-for="app in applist" :key="app.id" @click="todetail(app.id)">
          <div class="app">
            <img :src="`${app.logoUrl}`" alt="">
            <span>{{app.name}}</span>
          </div>
          <div class="setting">
             <!-- <div class="setting-unify">统一认证</div> -->
            <div v-show="!app.type" class="setting-not">未配置</div>
            <div v-show="app.type" class="setting-done">已配置</div>
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
      tittle: '密码管家',
      num: 0,
      applist: [
        {
            "id": "d28d1640-69c5-4",
            "logoUrl": "https://www.baidu.com/img/bd_logo1.png",
            "name": "oa",
            'type': false
        }, {
            "id": "d28d1640-69c5-4",
            "logoUrl": "https://www.baidu.com/img/bd_logo1.png",
            "name": "oa",
            'type': false
        }, {
            "id": "d28d1640-69c5-4",
            "logoUrl": "https://www.baidu.com/img/bd_logo1.png",
            "name": "oa",
            'type': false
        }, {
            "id": "d28d1640-69c5-4",
            "logoUrl": "https://www.baidu.com/img/bd_logo1.png",
            "name": "oa",
            'type': true
        }, {
            "id": "d28d1640-69c5-4",
            "logoUrl": "https://www.baidu.com/img/bd_logo1.png",
            "name": "oa",
            'type': false
        }, {
            "id": "d28d1640-69c5-4",
            "logoUrl": "https://www.baidu.com/img/bd_logo1.png",
            "name": "oa",
            'type': true
        }, {
            "id": "d28d1640-69c5-4",
            "logoUrl": "https://www.baidu.com/img/bd_logo1.png",
            "name": "oa",
            'type': false
        }, {
            "id": "d28d1640-69c5-4",
            "logoUrl": "https://www.baidu.com/img/bd_logo1.png",
            "name": "oa",
            'type': false
        }, {
            "id": "d28d1640-69c5-4",
            "logoUrl": "https://www.baidu.com/img/bd_logo1.png",
            "name": "oa",
            'type': true
        }, {
            "id": "d28d1640-69c5-4",
            "logoUrl": "https://www.baidu.com/img/bd_logo1.png",
            "name": "oa",
            'type': false
        }, {
            "id": "d28d1640-69c5-4",
            "logoUrl": "https://www.baidu.com/img/bd_logo1.png",
            "name": "oa",
            'type': false
        }, {
            "id": "d28d1640-69c5-4",
            "logoUrl": "https://www.baidu.com/img/bd_logo1.png",
            "name": "oa",
            'type': false
        }
      ]
    }
  },
  created() {},
  methods: {
    ...mapMutations({
      setNum: 'SET_NUM'
    }),
    todetail(id) {
      this.$router.togo('/swa/detail?id=' + id)
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
  background: #EDEFF2;
  .banner-pack {
    background-image: url("../../assets/imgs/swa/bg.png");
    background-repeat:no-repeat; 
    background-size:100% 100%;
    height: 143px;
  }
  .card-pack {
    margin-top: -60px;
    padding-bottom: 60px;

    .card {
      background:#ffffff;
      box-shadow:0 5px 12px 0 rgba(0,0,0,0.06);
      border-radius:10px;
      margin: 10px 12px 0 12px;
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
          padding-left: 15px;
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

        .setting-not {
          color:#007aff;
        }
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
