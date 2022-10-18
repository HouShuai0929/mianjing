import request from "@/utils/request";

export const register = (data) => {
 return request.post("/user/register",data
  // {
  //   username: obj.username,
  //   password: obj.password,
  // }
  );
};
export const login = (data) => {
  return request.post('/user/login', data)
}
