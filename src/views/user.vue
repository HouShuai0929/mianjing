<template>
  <div class="user-page">
    <div class="user">
      <img :src="userInfo.avatar" alt="" />
      <h3>{{ userInfo.username }}</h3>
    </div>
    <van-grid clickable :column-num="3" :border="false">
      <van-grid-item icon="clock-o" text="历史记录" to="/" />
      <van-grid-item icon="bookmark-o" text="我的收藏" to="/collect" />
      <van-grid-item icon="thumb-circle-o" text="我的点赞" to="/like" />
    </van-grid>

    <van-cell-group class="mt20">
      <van-cell title="推荐分享" is-link />
      <van-cell title="意见反馈" is-link />
      <van-cell title="关于我们" is-link />
      <van-cell @click="logout" title="退出登录" is-link />
    </van-cell-group>
  </div>
</template>

<script>
import { getUserInfo } from "@/api/user";
import { removeToken } from "@/utils/storage";
export default {
  name: "user-page",
  data() {
    return {
      userInfo: {},
    };
  },
  async created() {
    const res = await getUserInfo();
    this.userInfo = res.data;
  },
  methods: {
    logout() {
      removeToken();
      this.$toast.success("退出成功");
      this.$router.push("/login");
    },
  },
};
</script>

<style lang="less" scoped>
.user-page {
  padding: 0 10px;
  background: #f5f5f5;
  height: 100vh;
  .mt20 {
    margin-top: 20px;
  }
  .user {
    display: flex;
    padding: 20px 0;
    align-items: center;
    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      overflow: hidden;
    }
    h3 {
      margin: 0;
      padding-left: 20px;
      font-size: 18px;
    }
  }
}
</style>
