<template>
  <div class="detail-page">
    <van-nav-bar
      left-text="返回"
      fixed
      title="面经详细"
      @click-left="$router.go(-1)"
    />
    <header class="header">
      <h1>{{ detail.stem }}</h1>
      <p>
        {{ detail.createdAt }} | {{ detail.views }} 浏览量 |
        {{ detail.likeCount }} 点赞数
      </p>
      <p>
        <img :src="detail.avatar" alt="" />
        <span>{{ detail.creator }}</span>
      </p>
    </header>
    <main class="body" v-html="detail.content"></main>
    <div class="opt">
      <van-icon
        name="like-o"
        :class="{ active: detail.likeFlag }"
        @click="addLike"
      />
      <van-icon
        name="star-o"
        :class="{ active: detail.collectFlag }"
        @click="addCollect"
      />
    </div>
  </div>
</template>

<script>
import { getArticleDetail, addLike, addCollect } from "@/api/article";
export default {
  name: "detail-page",
  data() {
    return { detail: {} };
  },
  async created() {
    const res = await getArticleDetail(this.$route.params.id);

    this.detail = res.data;
  },
  methods: {
    async addLike() {
      await addLike(this.detail.id);
      this.detail.likeFlag = !this.detail.likeFlag;
      if (this.detail.likeFlag) {
        this.$toast.success("点赞成功");
        this.detail.likeCount++;
      } else {
        this.$toast.success("取消点赞");
        this.detail.likeCount--;
      }
    },
    async addCollect() {
      await addCollect(this.detail.id);
      this.detail.collectFlag = !this.detail.collectFlag;
      if (this.detail.collectFlag) {
        this.$toast.success("收藏成功");
      } else {
        this.$toast.success("取消收藏");
      }
    },
  },
};
</script>

<style lang="less" scoped>
.detail-page {
  margin-top: 44px;
  overflow: hidden;
  padding: 0 15px;
  .header {
    h1 {
      font-size: 24px;
    }
    p {
      color: #999;
      font-size: 12px;
      display: flex;
      align-items: center;
    }
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      overflow: hidden;
    }
  }
  .opt {
    position: fixed;
    bottom: 100px;
    right: 0;
    > .van-icon {
      margin-right: 20px;
      background: #fff;
      width: 40px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      border-radius: 50%;
      box-shadow: 2px 2px 10px #ccc;
      font-size: 18px;
      &.active {
        background: #fec635;
        color: #fff;
      }
    }
  }
}
</style>
