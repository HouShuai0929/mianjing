import Vue from "vue";
import VueRouter from "vue-router";
//一级页面
import Detail from "@/views/detail.vue";
import Layout from "@/views/layout.vue";
import Login from "@/views/login.vue";
import Register from "@/views/register.vue";
//二级页面
import Article from "@/views/article.vue";
import Collect from "@/views/collect.vue";
import Like from "@/views/like.vue";
import User from "@/views/user.vue";
//获取token
import { getToken } from '@/utils/storage'

Vue.use(VueRouter);

const routes = [
  { path: "/detail", component: Detail },
  { path: "/register", component: Register },
  { path: "/login", component: Login },
  {
    path: "/",
    component: Layout,
    redirect: "/article",
    children: [
      { path: "article", component: Article },
      { path: "collect", component: Collect },
      { path: "like", component: Like },
      { path: "user", component: User },
    ],
  },
];

const router = new VueRouter({
  routes,
});
router.beforeEach((to, from, next) => {
  if (to.path === "/login" || to.path === "/register") {
    next();
  } else {
    const token = getToken()
    if (token) {
      next();
    } else {
      next("/login");
    }
  }
});
export default router;
