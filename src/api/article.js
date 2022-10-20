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
