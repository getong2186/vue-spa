<template>
  <div>
    <common-header :tittle="tittle" :showback="false" :showAdd="true"></common-header>
    <div class="page-content">
      <!-- <mt-button @click="todetail">home</mt-button> -->
      <header class="banner-pack">
        <mt-swipe :show-indicators="false">
          <mt-swipe-item class="slide1"></mt-swipe-item>
          <mt-swipe-item class="slide2"></mt-swipe-item>
          <mt-swipe-item class="slide3"></mt-swipe-item>
        </mt-swipe>
      </header>

      <div class="card-pack">
        <div class="card" v-for="group in grouplists" :key="group.id">
            <h3>{{group.name}}</h3>
            <div class="linkitems">
              <a class="linkitem" v-for="app in group.applicationList" :key="app.id" :href="`${app.address}`">
                <div class="linkitem-icon">
                  <img src="../../assets/imgs/index/app-1.png" alt="icon">
                  <p>{{app.name}}</p>
                </div>
              </a>
            </div>
        </div>
      </div>
    </div>
    <!-- <div>
      <mt-swipe :auto="4000">
        <mt-swipe-item>
        </mt-swipe-item>
        <mt-swipe-item>2</mt-swipe-item>
        <mt-swipe-item>3</mt-swipe-item>
      </mt-swipe>
    </div> -->
  </div>
</template>

<script>
import {mapMutations, mapGetters, mapState} from 'vuex'
import commonHeader from 'common/common-header'
// import * as homeApi from 'api/home-api'
// import { ERR_OK } from 'config/index'
export default {
  data () {
    return {
      tittle: '首页',
      num: 0,
      grouplists: [
          {
              "applicationList": [
                  {
                      "address": "http://www.yunshipei.com/index.html",
                      "id": "d28d1640-69c5-4",
                      "level": 1,
                      "logoUrl": "../../assets/imgs/index/app-1.png",
                      "name": "GT官网",
                      "type": 1,
                      "isMarketApplication": false,
                      "isVisible": true
                  }, {
                      "address": "http://www.yunshipei.com/index.html",
                      "id": "d28d1640-69c5-4",
                      "level": 1,
                      "logoUrl": "../../assets/imgs/index/app-1.png",
                      "name": "GT官网",
                      "type": 1,
                      "isMarketApplication": false,
                      "isVisible": true
                  }, {
                      "address": "http://www.yunshipei.com/index.html",
                      "id": "d28d1640-69c5-4",
                      "level": 1,
                      "logoUrl": "../../assets/imgs/index/app-1.png",
                      "name": "GT官网",
                      "type": 1,
                      "isMarketApplication": false,
                      "isVisible": true
                  }, {
                      "address": "http://www.yunshipei.com/index.html",
                      "id": "d28d1640-69c5-4",
                      "level": 1,
                      "logoUrl": "../../assets/imgs/index/app-1.png",
                      "name": "GT官网",
                      "type": 1,
                      "isMarketApplication": false,
                      "isVisible": true
                  }, {
                      "address": "http://www.yunshipei.com/index.html",
                      "id": "d28d1640-69c5-4",
                      "level": 1,
                      "logoUrl": "../../assets/imgs/index/app-1.png",
                      "name": "GT官网",
                      "type": 1,
                      "isMarketApplication": false,
                      "isVisible": true
                  }, {
                      "address": "http://www.yunshipei.com/index.html",
                      "id": "d28d1640-69c5-4",
                      "level": 1,
                      "logoUrl": "../../assets/imgs/index/app-1.png",
                      "name": "GT官网",
                      "type": 1,
                      "isMarketApplication": false,
                      "isVisible": true
                  }
              ],
              "id": "0d1f9d02-e788-11",
              "index": 1,
              "name": "默认应用组",
              "type": 1
          }, {
              "applicationList": [
                  {
                      "address": "http://www.yunshipei.com/index.html",
                      "id": "d28d1640-69c5-4",
                      "level": 1,
                      "logoUrl": "../../assets/imgs/index/app-1.png",
                      "name": "GT官网",
                      "type": 1,
                      "isMarketApplication": false,
                      "isVisible": true
                  }, {
                      "address": "http://www.yunshipei.com/index.html",
                      "id": "d28d1640-69c5-4",
                      "level": 1,
                      "logoUrl": "../../assets/imgs/index/app-1.png",
                      "name": "GT官网",
                      "type": 1,
                      "isMarketApplication": false,
                      "isVisible": true
                  }, {
                      "address": "http://www.yunshipei.com/index.html",
                      "id": "d28d1640-69c5-4",
                      "level": 1,
                      "logoUrl": "../../assets/imgs/index/app-1.png",
                      "name": "GT官网",
                      "type": 1,
                      "isMarketApplication": false,
                      "isVisible": true
                  }, {
                      "address": "http://www.yunshipei.com/index.html",
                      "id": "d28d1640-69c5-4",
                      "level": 1,
                      "logoUrl": "../../assets/imgs/index/app-1.png",
                      "name": "GT官网",
                      "type": 1,
                      "isMarketApplication": false,
                      "isVisible": true
                  }, {
                      "address": "http://www.yunshipei.com/index.html",
                      "id": "d28d1640-69c5-4",
                      "level": 1,
                      "logoUrl": "../../assets/imgs/index/app-1.png",
                      "name": "GT官网",
                      "type": 1,
                      "isMarketApplication": false,
                      "isVisible": true
                  }
              ],
              "id": "0d1f9d02-e788-11222",
              "index": 1,
              "name": "默认应用组",
              "type": 1
          },  {
              "applicationList": [
                  {
                      "address": "http://www.yunshipei.com/index.html",
                      "id": "d28d1640-69c5-4",
                      "level": 1,
                      "logoUrl": "../../assets/imgs/index/app-1.png",
                      "name": "GT官网",
                      "type": 1,
                      "isMarketApplication": false,
                      "isVisible": true
                  }, {
                      "address": "http://www.yunshipei.com/index.html",
                      "id": "d28d1640-69c5-4",
                      "level": 1,
                      "logoUrl": "../../assets/imgs/index/app-1.png",
                      "name": "GT官网",
                      "type": 1,
                      "isMarketApplication": false,
                      "isVisible": true
                  }, {
                      "address": "http://www.yunshipei.com/index.html",
                      "id": "d28d1640-69c5-4",
                      "level": 1,
                      "logoUrl": "../../assets/imgs/index/app-1.png",
                      "name": "GT官网",
                      "type": 1,
                      "isMarketApplication": false,
                      "isVisible": true
                  }, {
                      "address": "http://www.yunshipei.com/index.html",
                      "id": "d28d1640-69c5-4",
                      "level": 1,
                      "logoUrl": "../../assets/imgs/index/app-1.png",
                      "name": "GT官网",
                      "type": 1,
                      "isMarketApplication": false,
                      "isVisible": true
                  }, {
                      "address": "http://www.yunshipei.com/index.html",
                      "id": "d28d1640-69c5-4",
                      "level": 1,
                      "logoUrl": "../../assets/imgs/index/app-1.png",
                      "name": "GT官网",
                      "type": 1,
                      "isMarketApplication": false,
                      "isVisible": true
                  }
              ],
              "id": "0d1f9d02-e788-11222",
              "index": 1,
              "name": "默认应用组",
              "type": 1
          }, {
              "applicationList": [
                  {
                      "address": "http://www.yunshipei.com/index.html",
                      "id": "d28d1640-69c5-4",
                      "level": 1,
                      "logoUrl": "../../assets/imgs/index/app-1.png",
                      "name": "GT官网",
                      "type": 1,
                      "isMarketApplication": false,
                      "isVisible": true
                  }, {
                      "address": "http://www.yunshipei.com/index.html",
                      "id": "d28d1640-69c5-4",
                      "level": 1,
                      "logoUrl": "../../assets/imgs/index/app-1.png",
                      "name": "GT官网",
                      "type": 1,
                      "isMarketApplication": false,
                      "isVisible": true
                  }, {
                      "address": "http://www.yunshipei.com/index.html",
                      "id": "d28d1640-69c5-4",
                      "level": 1,
                      "logoUrl": "../../assets/imgs/index/app-1.png",
                      "name": "GT官网",
                      "type": 1,
                      "isMarketApplication": false,
                      "isVisible": true
                  }, {
                      "address": "http://www.yunshipei.com/index.html",
                      "id": "d28d1640-69c5-4",
                      "level": 1,
                      "logoUrl": "../../assets/imgs/index/app-1.png",
                      "name": "GT官网",
                      "type": 1,
                      "isMarketApplication": false,
                      "isVisible": true
                  }, {
                      "address": "http://www.yunshipei.com/index.html",
                      "id": "d28d1640-69c5-4",
                      "level": 1,
                      "logoUrl": "../../assets/imgs/index/app-1.png",
                      "name": "GT官网",
                      "type": 1,
                      "isMarketApplication": false,
                      "isVisible": true
                  }
              ],
              "id": "0d1f9d02-e788-11222",
              "index": 1,
              "name": "默认应用组",
              "type": 1
          }, {
              "applicationList": [
                  {
                      "address": "http://www.yunshipei.com/index.html",
                      "id": "d28d1640-69c5-4",
                      "level": 1,
                      "logoUrl": "../../assets/imgs/index/app-1.png",
                      "name": "GT官网",
                      "type": 1,
                      "isMarketApplication": false,
                      "isVisible": true
                  }, {
                      "address": "http://www.yunshipei.com/index.html",
                      "id": "d28d1640-69c5-4",
                      "level": 1,
                      "logoUrl": "../../assets/imgs/index/app-1.png",
                      "name": "GT官网",
                      "type": 1,
                      "isMarketApplication": false,
                      "isVisible": true
                  }, {
                      "address": "http://www.yunshipei.com/index.html",
                      "id": "d28d1640-69c5-4",
                      "level": 1,
                      "logoUrl": "../../assets/imgs/index/app-1.png",
                      "name": "GT官网",
                      "type": 1,
                      "isMarketApplication": false,
                      "isVisible": true
                  }, {
                      "address": "http://www.yunshipei.com/index.html",
                      "id": "d28d1640-69c5-4",
                      "level": 1,
                      "logoUrl": "../../assets/imgs/index/app-1.png",
                      "name": "GT官网",
                      "type": 1,
                      "isMarketApplication": false,
                      "isVisible": true
                  }, {
                      "address": "http://www.yunshipei.com/index.html",
                      "id": "d28d1640-69c5-4",
                      "level": 1,
                      "logoUrl": "../../assets/imgs/index/app-1.png",
                      "name": "GT官网",
                      "type": 1,
                      "isMarketApplication": false,
                      "isVisible": true
                  }
              ],
              "id": "0d1f9d02-e788-11222",
              "index": 1,
              "name": "默认应用组",
              "type": 1
          }, {
              "applicationList": [
                  {
                      "address": "http://www.yunshipei.com/index.html",
                      "id": "d28d1640-69c5-4",
                      "level": 1,
                      "logoUrl": "../../assets/imgs/index/app-1.png",
                      "name": "GT官网",
                      "type": 1,
                      "isMarketApplication": false,
                      "isVisible": true
                  }, {
                      "address": "http://www.yunshipei.com/index.html",
                      "id": "d28d1640-69c5-4",
                      "level": 1,
                      "logoUrl": "../../assets/imgs/index/app-1.png",
                      "name": "GT官网",
                      "type": 1,
                      "isMarketApplication": false,
                      "isVisible": true
                  }, {
                      "address": "http://www.yunshipei.com/index.html",
                      "id": "d28d1640-69c5-4",
                      "level": 1,
                      "logoUrl": "../../assets/imgs/index/app-1.png",
                      "name": "GT官网",
                      "type": 1,
                      "isMarketApplication": false,
                      "isVisible": true
                  }, {
                      "address": "http://www.yunshipei.com/index.html",
                      "id": "d28d1640-69c5-4",
                      "level": 1,
                      "logoUrl": "../../assets/imgs/index/app-1.png",
                      "name": "GT官网",
                      "type": 1,
                      "isMarketApplication": false,
                      "isVisible": true
                  }, {
                      "address": "http://www.yunshipei.com/index.html",
                      "id": "d28d1640-69c5-4",
                      "level": 1,
                      "logoUrl": "../../assets/imgs/index/app-1.png",
                      "name": "GT官网",
                      "type": 1,
                      "isMarketApplication": false,
                      "isVisible": true
                  }
              ],
              "id": "0d1f9d02-e788-11222",
              "index": 1,
              "name": "默认应用组",
              "type": 1
          }, {
              "applicationList": [
                  {
                      "address": "http://www.yunshipei.com/index.html",
                      "id": "d28d1640-69c5-4",
                      "level": 1,
                      "logoUrl": "../../assets/imgs/index/app-1.png",
                      "name": "GT官网",
                      "type": 1,
                      "isMarketApplication": false,
                      "isVisible": true
                  }, {
                      "address": "http://www.yunshipei.com/index.html",
                      "id": "d28d1640-69c5-4",
                      "level": 1,
                      "logoUrl": "../../assets/imgs/index/app-1.png",
                      "name": "GT官网",
                      "type": 1,
                      "isMarketApplication": false,
                      "isVisible": true
                  }, {
                      "address": "http://www.yunshipei.com/index.html",
                      "id": "d28d1640-69c5-4",
                      "level": 1,
                      "logoUrl": "../../assets/imgs/index/app-1.png",
                      "name": "GT官网",
                      "type": 1,
                      "isMarketApplication": false,
                      "isVisible": true
                  }, {
                      "address": "http://www.yunshipei.com/index.html",
                      "id": "d28d1640-69c5-4",
                      "level": 1,
                      "logoUrl": "../../assets/imgs/index/app-1.png",
                      "name": "GT官网",
                      "type": 1,
                      "isMarketApplication": false,
                      "isVisible": true
                  }, {
                      "address": "http://www.yunshipei.com/index.html",
                      "id": "d28d1640-69c5-4",
                      "level": 1,
                      "logoUrl": "../../assets/imgs/index/app-1.png",
                      "name": "GT官网",
                      "type": 1,
                      "isMarketApplication": false,
                      "isVisible": true
                  }
              ],
              "id": "0d1f9d02-e788-11222",
              "index": 1,
              "name": "默认应用组",
              "type": 1
          }, {
              "applicationList": [
                  {
                      "address": "http://www.yunshipei.com/index.html",
                      "id": "d28d1640-69c5-4",
                      "level": 1,
                      "logoUrl": "../../assets/imgs/index/app-1.png",
                      "name": "GT官网",
                      "type": 1,
                      "isMarketApplication": false,
                      "isVisible": true
                  }, {
                      "address": "http://www.yunshipei.com/index.html",
                      "id": "d28d1640-69c5-4",
                      "level": 1,
                      "logoUrl": "../../assets/imgs/index/app-1.png",
                      "name": "GT官网",
                      "type": 1,
                      "isMarketApplication": false,
                      "isVisible": true
                  }, {
                      "address": "http://www.yunshipei.com/index.html",
                      "id": "d28d1640-69c5-4",
                      "level": 1,
                      "logoUrl": "../../assets/imgs/index/app-1.png",
                      "name": "GT官网",
                      "type": 1,
                      "isMarketApplication": false,
                      "isVisible": true
                  }, {
                      "address": "http://www.yunshipei.com/index.html",
                      "id": "d28d1640-69c5-4",
                      "level": 1,
                      "logoUrl": "../../assets/imgs/index/app-1.png",
                      "name": "GT官网",
                      "type": 1,
                      "isMarketApplication": false,
                      "isVisible": true
                  }, {
                      "address": "http://www.yunshipei.com/index.html",
                      "id": "d28d1640-69c5-4",
                      "level": 1,
                      "logoUrl": "../../assets/imgs/index/app-1.png",
                      "name": "GT官网",
                      "type": 1,
                      "isMarketApplication": false,
                      "isVisible": true
                  }
              ],
              "id": "0d1f9d02-e788-11222",
              "index": 1,
              "name": "默认应用组",
              "type": 1
          }, {
              "applicationList": [
                  {
                      "address": "http://www.yunshipei.com/index.html",
                      "id": "d28d1640-69c5-4",
                      "level": 1,
                      "logoUrl": "../../assets/imgs/index/app-1.png",
                      "name": "GT官网",
                      "type": 1,
                      "isMarketApplication": false,
                      "isVisible": true
                  }, {
                      "address": "http://www.yunshipei.com/index.html",
                      "id": "d28d1640-69c5-4",
                      "level": 1,
                      "logoUrl": "../../assets/imgs/index/app-1.png",
                      "name": "GT官网",
                      "type": 1,
                      "isMarketApplication": false,
                      "isVisible": true
                  }, {
                      "address": "http://www.yunshipei.com/index.html",
                      "id": "d28d1640-69c5-4",
                      "level": 1,
                      "logoUrl": "../../assets/imgs/index/app-1.png",
                      "name": "GT官网",
                      "type": 1,
                      "isMarketApplication": false,
                      "isVisible": true
                  }, {
                      "address": "http://www.yunshipei.com/index.html",
                      "id": "d28d1640-69c5-4",
                      "level": 1,
                      "logoUrl": "../../assets/imgs/index/app-1.png",
                      "name": "GT官网",
                      "type": 1,
                      "isMarketApplication": false,
                      "isVisible": true
                  }, {
                      "address": "http://www.yunshipei.com/index.html",
                      "id": "d28d1640-69c5-4",
                      "level": 1,
                      "logoUrl": "../../assets/imgs/index/app-1.png",
                      "name": "GT官网",
                      "type": 1,
                      "isMarketApplication": false,
                      "isVisible": true
                  }
              ],
              "id": "0d1f9d02-e788-11222",
              "index": 1,
              "name": "默认应用组",
              "type": 1
          }, {
              "applicationList": [
                  {
                      "address": "http://www.yunshipei.com/index.html",
                      "id": "d28d1640-69c5-4",
                      "level": 1,
                      "logoUrl": "../../assets/imgs/index/app-1.png",
                      "name": "GT官网",
                      "type": 1,
                      "isMarketApplication": false,
                      "isVisible": true
                  }, {
                      "address": "http://www.yunshipei.com/index.html",
                      "id": "d28d1640-69c5-4",
                      "level": 1,
                      "logoUrl": "../../assets/imgs/index/app-1.png",
                      "name": "GT官网",
                      "type": 1,
                      "isMarketApplication": false,
                      "isVisible": true
                  }, {
                      "address": "http://www.yunshipei.com/index.html",
                      "id": "d28d1640-69c5-4",
                      "level": 1,
                      "logoUrl": "../../assets/imgs/index/app-1.png",
                      "name": "GT官网",
                      "type": 1,
                      "isMarketApplication": false,
                      "isVisible": true
                  }, {
                      "address": "http://www.yunshipei.com/index.html",
                      "id": "d28d1640-69c5-4",
                      "level": 1,
                      "logoUrl": "../../assets/imgs/index/app-1.png",
                      "name": "GT官网",
                      "type": 1,
                      "isMarketApplication": false,
                      "isVisible": true
                  }, {
                      "address": "http://www.yunshipei.com/index.html",
                      "id": "d28d1640-69c5-4",
                      "level": 1,
                      "logoUrl": "../../assets/imgs/index/app-1.png",
                      "name": "GT官网",
                      "type": 1,
                      "isMarketApplication": false,
                      "isVisible": true
                  }
              ],
              "id": "0d1f9d02-e788-11222",
              "index": 1,
              "name": "默认应用组",
              "type": 1
          }
      ]
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
  background: #EDEFF2;
  .banner-pack {
    // background-image: url("../../assets/imgs/index/bg.png");
    // background-repeat:no-repeat;
    // background-size:100% 100%;
    height: 300px;

    .mint-swipe-item {
      background-repeat:no-repeat;
      background-size:100% 100%;
      height: 300px;
    }
    .slide1 {
      background-image: url("../../assets/imgs/index/bg.png");
    }
    .slide2 {
      background-image: url("../../assets/imgs/index/bg.png");
    }
    .slide3 {
      background-image: url("../../assets/imgs/index/bg.png");
    }

  }
  .card-pack {
    position: relative;
    margin-top: -111px;
    padding-bottom: 10px;
    .card {
      background:#ffffff;
      box-shadow:0 5px 12px 0 rgba(0,0,0,0.06);
      border-radius:10px;
      margin: 7px 12px 0 12px;
      padding: 14px;

      h3 {
        text-align: left;
        padding-left: 7px;
        position: relative;
        font-size:17px;
        color:#303030;
        // border-left: 6px #2e43ff solid;
      }
      h3:before {
        content: "";
        display: block;
        position: absolute;
        left: -3px;
        top: 3px;
        background-image:linear-gradient(-225deg, #4da9ff 0%, #2e43ff 100%);
        border-radius:23px;
        width:6px;
        height:17px;
      }
      .linkitems {
        flex: 1;
        display: flex;
        flex-wrap: wrap;

        .linkitem-icon {
          img {
            width: 100%;
          }
        }
        a {
          width: 90px;
        }
      }
    }
  }
}
// .mint-swipe {
//     height: 200px;
//     color: #fff;
//     font-size: 30px;
//     text-align: center;
//     margin-bottom: 20px;
// }

</style>
