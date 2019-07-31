<template>
  <div class="server-content">
      <mt-header title="服务器配置">
        <router-link to="/" slot="left">
            <mt-button @click="back">返回</mt-button>
          </router-link>
      </mt-header>
      <div class="page-part">
        <p>请输入服务器地址，以http://或https://开头</p>
        <mt-field placeholder="请输入服务器地址" v-model="username" ></mt-field>
        <div class="page-button">
          <mt-button type="primary" @click="saveClick">确认</mt-button>
        </div>
      </div>
      <footer :style="{top:(docmHeight-40)+'px'}">
        <p>GTv1.4.1</p>
      </footer>
  </div>
</template>

<script>
// 引入自己的工具类
import validator from '@/utils/validator.js'
import { Toast } from 'mint-ui'

export default {
  data () {
    return {
      docmHeight: document.documentElement.clientHeight,
      username: 'http://'
    }
  },
  computed: {
  },
  methods: {
    back() {
      this.$router.goBack()
    },
    saveClick() {
      this.$router.goBack()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
@import "~styles/index.less";
@import "~styles/variable.less";

.server-content {
  background: #ffffff;
  .mint-header {
    background: #ffffff;
    color: #303030;
    font-size:15px;

    .mint-header-title {
      font-size:17px;
      color:#303030;
    }
  }
  .page-part {
    margin: 106px 58px;
    P {
      text-align: left;
    }

    .mint-cell-wrapper {
      background-image: none !important;
      padding: 0px;
    }
    .mint-cell:last-child {
      background-image: none !important;
    }

    .page-button {
      button {
        width: 100%;
        background-image:linear-gradient(90deg, #4da9ff 0%, #2e43ff 99%);
        border-radius:100px;
      }
    }
  }
  footer {
    position: fixed;
    width: 100%;
    text-align: center;
  }
}

</style>
