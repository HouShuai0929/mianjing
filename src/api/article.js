// 引入 axios 实例
import request from "@/utils/request";
import { getToken } from "@/utils/storage";

// 封装获取面经列表数据接口
export const getArticleList = (obj) => {
  return request.get("/interview/query", {
    params: {
      current: obj.current, // 想要获取第几页数据
      pageSize: 10, // 每页获取多少条数据
      sorter: obj.sorter,
    },
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });
};
//文章详情页数据
export const getArticleDetail = (id) => {
  return request.get("interview/show", {
    params: {
      id,
    },
  });
};
//喜欢和收藏接口
export const addLike = (id) => {
  return request.post("interview/opt", {
    id,
    optType: 1, // 喜欢
  });
};

// 添加收藏文章接口
export const addCollect = (id) => {
  return request.post("interview/opt", {
    id,
    optType: 2, // 收藏
  });
};
//获取我的收藏接口
export const getCollectList = (page) => {
  return request.get("/interview/opt/list", {
    params: {
      page: page, // 当前页
      pageSize: 10, // 可选
      optType: 2, // 表示收藏
    },
  });
};
//获取我的喜欢
export const getLikeList = (page) => {
  return request.get("/interview/opt/list", {
    params: {
      page: page, // 当前页
      pageSize: 10, // 可选
      optType: 1, // 表示喜欢
    },
  });
};
