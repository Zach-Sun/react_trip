// src/service/modules/allorder.js
import http from "../request/myaxios";

export function getAllOrders() {
  return http.get({
    url: '/order/list?type=all'
  });
}