<template>
  <div class="login-content">
      <header>
        <img src="https://www.baidu.com/img/bd_logo1.png" alt="icon">
      </header>
      <div class="page-part">
        <mt-field placeholder="请输入邮箱 / 手机号" v-model="username" @keyup.enter.native="loginClick" @blur.native.capture="hideFotter"></mt-field>
        <mt-field placeholder="请输入密码" :type="isshowPassword? 'name' : 'password'" disableClear="false" v-model="password" @keyup.enter.native="loginClick" @blur.native.capture="hideFotter"></mt-field>
        <a class="show-password" @click="showPasswordClick">
          <img :src="isshowPassword? showPassword : hidePassword" alt="icon">
        </a>
      </div>
      <div class="page-button">
        <mt-button type="primary" :disabled="username && password? false : true" @click="loginClick">登录</mt-button>
        <p>
          <a href="javascript:void(0);" @click="setServer">手动设置服务器地址</a>
        </p>
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
      isshowPassword: false,
      showPassword: require('../assets/imgs/icon_login_showpassword.png'),
      hidePassword: require('../assets/imgs/icon_login_hidepassword.png'),
      username: '',
      password: '',
      docmHeight: document.documentElement.clientHeight,
    }
  },
  computed: {
  },
  methods: {
    showPasswordClick () {
      this.isshowPassword = !this.isshowPassword;
    },
    setServer() {
      this.$router.togo('/server')
    },
    loginClick (e) {
      // console.log(1111);
      Toast('提示信息');
      let data = {
        username: this.username,
        password: this.password
      };
      this.$store.dispatch('LoginByUsername', data).then(() => {
        console.log(2222);
        // this.loading = false
        // this.$router.push({ path: this.redirect || '/' })
      }).catch(() => {
        console.log(111111);
        // this.loading = false
      })
      // 验证字段合法性
      // if (!validator.notEmpty(this.username)) {
      //     Toast('提示信息');
      //     return false;
      // }
      // if (!validator.notEmpty(this.password)) {
      //     this.$message.error('管理员密码不能为空');
      //     return false;
      // }
      // if (!validator.notLessMin(this.password, 8)) {
      //     this.$message.error('管理员密码不能少于8个字符');
      //     return false;
      // }

      // let queryParam = {
      //     username: this.username,
      //     password: this.password
      // };
      // this.$store.dispatch('BaseLogin/loginSystem', queryParam).then((indexPath) => {
      //     this.$router.push({path: indexPath});
      // })
    },
    hideFotter() {
      console.log(46456456);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
@import "~styles/index.less";
@import "~styles/variable.less";
.login-content {
  background: #ffffff;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  position: absolute;
  width: 100%;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  header {    
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .page-part {
    margin: 0px 55px;
    position: relative;
    .mint-cell-wrapper {
      background-image: none !important;
    }
    .mint-cell:last-child {
      background-image: none !important;
    }

    .show-password {
      position: absolute;
      bottom: 16px;
      right: 8px;
    }
    input:focus{  
      border-bottom: 1px solid #4da9ff;
    }
  }
  .page-button {
    margin: 0px 55px;

    p {
      text-align: right;
      padding-top: 10px;
    }
  }
  footer {
    position: fixed;
    width: 100%;
    // bottom: 20px;
    text-align: center;
  }
  .mint-button--normal {
    margin-top: 20px;
    width: 100%;
    background-image:linear-gradient(90deg, #2e43ff 0%, #4da9ff 99%);
    border-radius:100px;
  }
}

</style>
