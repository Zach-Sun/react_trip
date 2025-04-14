// src/service/modules/detail.js
import myaxios from "../request/myaxios";

export default function getDetail(houseId) {
  return myaxios.get({
    url: "/detail/infos",
    params: { houseId }  // 保持参数传递方式不变
  });
}