<template>
  <div>
    <common-header :tittle="tittle" :showmore="true"></common-header>
    <div class="page-content">
      <div class="page-part">
        <mt-field placeholder="用户名" type="email"></mt-field>
        <mt-field placeholder="密码" type="password"></mt-field>
      </div>
      <mt-button type="primary" @click="tohome">确认</mt-button>
    </div>
  </div>
</template>

<script>
import commonHeader from 'common/common-header'
export default {
  data () {
    return {
      tittle: '密码管家'
    }
  },
  components: {
    commonHeader
  },
  methods: {
    tohome () {
      this.$router.goBack()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import "~styles/index.less";
@import "~styles/variable.less";
.page-content {
  padding-top: 55px;
}
.page-part {
  margin-top: 30px;
}
.mint-button--normal {
  margin-top: 10px;
  width: 80%;
}
</style>
