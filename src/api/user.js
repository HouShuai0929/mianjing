import request from "@/utils/request";

export const register = (obj) => {
 return request.post("/user/register", {
    username: obj.username,
    password: obj.password,
  });
};
