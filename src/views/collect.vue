<template>
  <div class="collect-page">
    <van-nav-bar title="我的收藏" fixed />
    <van-list
      v-model="loading"
      :finished="finished"
      @load="onLoad"
      finished-text="没有更多了"
    >
      <article-item v-for="item in list" :key="item.id" :articleItem="item">
      </article-item>
    </van-list>
  </div>
</template>

<script>
import { getCollectList } from "@/api/article";
export default {
  name: "collect-page",
  data() {
    return { page: 1, list: [], loading: false, finished: false };
  },
  methods: {
    async onLoad() {
      const res = await getCollectList(this.page);
      this.page++;
      this.list.push(...res.data.rows);
      this.loading = false;
      if (this.page > res.data.pageTotal) {
        this.finished = true;
      }
    },
  },
};
</script>

<style lang="less" scoped>
.collect-page {
  margin-bottom: 50px;
  margin-top: 44px;
}
</style>
